import { useRef, useEffect, useCallback } from 'react';

import { useRouter } from 'next/router';

/**
 * Throwing an actual error class trips the Next.JS 500 Page, this string literal does not.
 */
const throwFakeErrorToFoolNextRouter = (): never => {
  throw 'Abort route change. Please ignore this error.';
};

const useWarnIfUnsavedChanges = (shouldWarn: boolean): void => {
  const router = useRouter();

  const message = 'Are you sure that you want to leave?';

  const lastHistoryState = useRef<{ idx: number }>(global.history?.state);

  useEffect(() => {
    const storeLastHistoryState = (): void => {
      lastHistoryState.current = history.state;
    };
    router.events.on('routeChangeComplete', storeLastHistoryState);

    return () => {
      router.events.off('routeChangeComplete', storeLastHistoryState);
    };
  }, [router]);

  /**
   * @experimental HACK - idx is not documented
   * Determines which direction to travel in history.
   */
  const revertTheChangeRouterJustMade = useCallback(() => {
    const state = lastHistoryState.current;
    if (
      state !== null &&
      history.state !== null &&
      state.idx !== history.state.idx
    ) {
      history.go(lastHistoryState.current.idx < history.state.idx ? -1 : 1);
    }
  }, []);

  const killRouterEvent = useCallback(() => {
    router.events.emit('routeChangeError');

    revertTheChangeRouterJustMade();

    throwFakeErrorToFoolNextRouter();
  }, [revertTheChangeRouterJustMade, router]);

  useEffect(() => {
    let isWarned = false;

    const routeChangeStart = (url: string): void => {
      if (router.asPath !== url && shouldWarn && !isWarned) {
        isWarned = true;

        if (window.confirm(message)) {
          router.push(url);
          return;
        }

        isWarned = false;
        killRouterEvent();
      }
    };

    const beforeUnload = (e: BeforeUnloadEvent): string | null => {
      if (shouldWarn && !isWarned) {
        const event = e ?? window.event;
        event.returnValue = message;
        return message;
      }
      return null;
    };

    router.events.on('routeChangeStart', routeChangeStart);
    window.addEventListener('beforeunload', beforeUnload);

    return () => {
      router.events.off('routeChangeStart', routeChangeStart);
      window.removeEventListener('beforeunload', beforeUnload);
    };
  }, [message, shouldWarn, killRouterEvent, router]);
};

export default useWarnIfUnsavedChanges;

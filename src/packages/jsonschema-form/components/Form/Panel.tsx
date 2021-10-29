import {
  Fragment,
  useState,
  FunctionComponent,
  ReactNode,
  useEffect,
  useRef,
} from 'react';
import { Switch } from '@headlessui/react';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/outline';

type Props = {
  id: string;
  title?: string;
  description?: string;
  toggle?: boolean;
  autoOpen?: boolean;
  enabled?: boolean;
  children?: ReactNode;
};

const Panel: FunctionComponent<Props> = ({
  id,
  title,
  description,
  toggle,
  enabled,
  autoOpen,
  children,
}) => {
  const [open, setOpen] = useState(autoOpen);
  const loadedRef = useRef(false);

  useEffect(() => {
    loadedRef.current && setOpen(enabled);
  }, [enabled]);

  useEffect(() => {
    loadedRef.current = true;
  }, []);

  return (
    <div className="mb-4 shadow sm:rounded-md sm:overflow-hidden">
      <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
        <div className="relative md:grid md:grid-cols-3 md:gap-6 ">
          <div className="md:col-span-1">
            <div className="flex items-center">
              <span className="h-3 w-3 mr-2" onClick={() => setOpen(!open)}>
                {open ? <ChevronDownIcon /> : <ChevronRightIcon />}
              </span>
              {title && (
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  {title}
                </h3>
              )}
            </div>
            {description && (
              <p className="mt-1 text-sm text-gray-400">{description}</p>
            )}
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className={open ? '' : 'h-0 overflow-hidden'}>
              <div
                className={[
                  `${toggle && !enabled ? 'opacity-50' : ''}`,
                  'grid gap-y-6 pt-6',
                ].join(' ')}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;

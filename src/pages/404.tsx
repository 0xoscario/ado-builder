import type { NextPage } from 'next';
import Link from 'next/link';

import { ChevronRightIcon } from '@heroicons/react/solid';
import {
  BriefcaseIcon,
  FolderIcon,
  DocumentTextIcon,
  UsersIcon,
} from '@heroicons/react/outline';

const links = [
  {
    title: 'Marketplace',
    description: '...',
    icon: UsersIcon,
    href: '/marketplace',
  },
  {
    title: 'My missions',
    description: '...',
    icon: BriefcaseIcon,
    href: '#',
  },
  {
    title: 'My assets',
    description: '...',
    icon: FolderIcon,
    href: '#',
  },
];

const Custom404: NextPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 pt-16">
          <img
            className="mx-auto h-6 w-auto"
            src="/images/AND_Logo-Full.svg"
            alt="Andromeda"
            width="190"
            height="32"
          />
        </div>
        <div className="max-w-xl mx-auto py-2 sm:py-4">
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              404 error
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              This page does not exist.
            </h1>
            <p className="mt-2 text-lg text-gray-300">
              The page you are looking for could not be found.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="text-sm font-semibold text-gray-500 tracking-wide uppercase">
              Popular pages
            </h2>
            <ul
              role="list"
              className="mt-4 border-t border-b border-gray-600 divide-y divide-gray-600"
            >
              {links.map((link, linkIdx) => (
                <li
                  key={linkIdx}
                  className="relative py-6 flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center h-12 w-12 rounded-lg bg-gray-200">
                      <link.icon
                        className="h-6 w-6 text-gray-700"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-medium text-gray-200">
                      <span className="rounded-sm">
                        <Link href={link.href}>
                          <a className="focus:outline-none">
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            />
                            {link.title}
                          </a>
                        </Link>
                      </span>
                    </h3>
                    <p className="text-base text-gray-500">
                      {link.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 self-center">
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/">
                <a className="text-base font-medium text-gray-400 hover:text-gray-300">
                  Or go back home<span aria-hidden="true"> &rarr;</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Custom404;

import { Fragment, useState, FunctionComponent, ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import {
  FolderIcon,
  BeakerIcon,
  PresentationChartBarIcon,
  DocumentTextIcon,
  MenuAlt2Icon,
  UsersIcon,
  BriefcaseIcon,
  XIcon,
} from '@heroicons/react/outline';
// import { SearchIcon } from '@heroicons/react/solid';

import { classnames } from '@/utils/styles';
import ConnectedButton from '@/components/ConnectedButton';

const navigation = [
  { name: 'Dashboard', href: '/', icon: PresentationChartBarIcon },
  { name: 'Marketplace', href: '/marketplace', icon: UsersIcon },
  { name: 'My missions', href: '#', icon: BriefcaseIcon },
  { name: 'My assets', href: '#', icon: FolderIcon },
  { name: 'Contracts', href: '#', icon: DocumentTextIcon },
];

type Props = {
  title?: string;
  currentNavIndex?: string;
  children?: ReactNode;
};

const DefaultLayout: FunctionComponent<Props> = ({
  title = 'Andromeda',
  currentNavIndex = 0,
  children,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="h-screen flex overflow-hidden bg-gray-100">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className=" flex-shrink-0 flex items-center px-4">
                  <div className="relative">
                    <img
                      src="/images/AND_Logo-Full.svg"
                      alt="Andromeda"
                      width="190"
                      height="32"
                    />
                  </div>
                </div>
                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                  <nav className="px-2 space-y-1">
                    {navigation.map((item, index) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          className={classnames(
                            currentNavIndex == index
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                          )}
                        >
                          <item.icon
                            className={classnames(
                              currentNavIndex == index
                                ? 'text-gray-300'
                                : 'text-gray-400 group-hover:text-gray-300',
                              'mr-4 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className="pt-3 pl-6 flex items-center text-center text-xs text-gray-500 bg-gray-800 space-y-1 border-t-2 border-opacity-5">
                  <BeakerIcon
                    className="text-gray-500 group-hover:text-gray-300 mr-4 flex-shrink-0 h-4 w-4"
                    aria-hidden="true"
                  />
                  <div className="pb-1">
                    <span>version&nbsp;</span>
                    <strong>{process.env.appVersion}</strong>
                  </div>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex-1 flex flex-col min-h-0">
              <div className="flex relative items-center jus h-16 flex-shrink-0 px-4 bg-gray-900">
                <div className="relative w-auto flex">
                  <img
                    src="/images/AND_Logo-Full.svg"
                    alt="Andromeda"
                    width="150"
                    height="32"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col overflow-y-auto">
                <nav className="flex-1 px-2 py-4 bg-gray-800 space-y-1">
                  {navigation.map((item, index) => (
                    <Link key={item.name} href={item.href}>
                      <a
                        className={classnames(
                          currentNavIndex == index
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                        )}
                      >
                        <item.icon
                          className={classnames(
                            currentNavIndex == index
                              ? 'text-gray-300'
                              : 'text-gray-400 group-hover:text-gray-300',
                            'mr-3 flex-shrink-0 h-6 w-6'
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="p-4 pl-6 flex items-center text-center text-xs text-gray-500 bg-gray-800 space-y-1 border-t-2 border-opacity-5">
                <BeakerIcon
                  className="text-gray-500 group-hover:text-gray-300 mr-4 flex-shrink-0 h-4 w-4"
                  aria-hidden="true"
                />
                <div className="pb-1">
                  <span>version&nbsp;</span>
                  <strong>{process.env.appVersion}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
            <button
              type="button"
              className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex-1 px-4 flex justify-between">
              <div className="flex-1 flex">
                <form className="w-full flex md:ml-0" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    {/**
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                      <SearchIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <input
                      id="search-field"
                      className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                      placeholder="Search"
                      type="search"
                      name="search"
                    />*/}
                  </div>
                </form>
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                <ConnectedButton />
              </div>
            </div>
          </div>

          <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;

import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { LibraryIcon, ClockIcon } from '@heroicons/react/outline';
import { CashIcon, ChevronRightIcon } from '@heroicons/react/solid';

import Layout from '@/layouts/DefaultLayout';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const transactions = [
  {
    id: 1,
    name: 'Confirmed legal document signed',
    href: '#',
    currency: 'USD',
    status: 'success',
    date: 'July 11, 2020',
    datetime: '2020-07-11',
  },
  // More transactions...
];
const statusStyles = {
  success: 'bg-green-100 text-green-800',
  processing: 'bg-yellow-100 text-yellow-800',
  failed: 'bg-gray-100 text-gray-800',
};

const Home: NextPage = () => {
  return (
    <Layout title="Andromeda">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="max-w-xl text-sm text-gray-500">
              <div className="flex items-center">
                <span className="rounded-lg inline-flex p-3 ring-4 ring-white text-gray-600 bg-gray-50">
                  <LibraryIcon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="md:inline-block md:px-4">
                  Create an NFT Collectible, DeFI Instrument or other smart
                  contract
                </p>
              </div>
            </div>
            <div className="sm:flex-shrink-0 sm:flex sm:items-center">
              <Link href="/contract-builder">
                <a className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 sm:text-sm">
                  Launch builder
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <h2 className="max-w-6xl mx-auto mt-8 text-lg leading-6 font-medium text-gray-900 flex items-center">
        <ClockIcon className="inline h-5 w-5 text-gray-400 mr-2" /> Recent
        activity
      </h2>
      {/* Activity list (smallest breakpoint only) */}
      <div className="shadow sm:hidden">
        <ul
          role="list"
          className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden"
        >
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              <a
                href={transaction.href}
                className="block px-4 py-4 bg-white hover:bg-gray-50"
              >
                <span className="flex items-center space-x-4">
                  <span className="flex-1 flex space-x-2 truncate">
                    <CashIcon
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="flex flex-col text-gray-500 text-sm truncate">
                      <span className="truncate">{transaction.name}</span>
                      <time dateTime={transaction.datetime}>
                        {transaction.date}
                      </time>
                    </span>
                  </span>
                  <ChevronRightIcon
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Activity table (small breakpoint and up) */}
      <div className="hidden sm:block">
        <div className=" mx-auto">
          <div className="flex flex-col mt-2">
            <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Transaction
                    </th>
                    <th className="hidden px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:block">
                      Status
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="bg-white">
                      <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div className="flex">
                          <a
                            href={transaction.href}
                            className="group inline-flex space-x-2 truncate text-sm"
                          >
                            <CashIcon
                              className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            <p className="text-gray-500 truncate group-hover:text-gray-900">
                              {transaction.name}
                            </p>
                          </a>
                        </div>
                      </td>
                      <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                        <span
                          className={classNames(
                            statusStyles[transaction.status],
                            'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize'
                          )}
                        >
                          {transaction.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                        <time dateTime={transaction.datetime}>
                          {transaction.date}
                        </time>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <a href="#" className="text-xs text-grey-700 hover:underline">
          View All Activity
        </a>
      </div>
    </Layout>
  );
};

export default Home;

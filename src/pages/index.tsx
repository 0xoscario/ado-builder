import type { NextPage } from 'next';
import Link from 'next/link';

import { ClockIcon } from '@heroicons/react/outline';
import { CashIcon, ChevronRightIcon } from '@heroicons/react/solid';

import Layout from '@/components/DefaultLayout';
import { classnames } from '@/utils/styles';

interface BuilderItemProps {
  svg: object;
  title: string;
  desc: string;
  checkLists: [string, string, string, string];
  url: string;
}

const BuilderItem: React.FC<BuilderItemProps> = (prop: BuilderItemProps) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="flex rounded-lg h-full bg-white shadow sm:rounded-lg p-8 flex-col">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 mr-4 inline-flex items-center justify-center rounded-full bg-red-700 text-white flex-shrink-0">
            {prop.svg}
          </div>
          <h2 className="text-gray-900 text-lg title-font font-medium">
            {prop.title}
          </h2>
        </div>
        <p className="mb-4">{prop.desc}</p>
        <div className="flex flex-col justify-end flex-grow">
          <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
            {prop.checkLists.map((x) => (
              <a>
                <span className="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                {x}
              </a>
            ))}
          </nav>
          <Link href={prop.url}>
            <a className="content-end text-center flex  items-center mt-8 px-4 py-3 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 sm:text-sm">
              Get Started
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const itemData: BuilderItemProps[] = [
  {
    svg: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
    title: 'NFT Collectible',
    desc: 'Create the most advanced and feature rich NFT Collectible in the world.',
    checkLists: [
      'Add royalities',
      'Black/White list',
      'Taxes',
      'Robust metadata',
    ],
    url: '/smart-contract-builder/nft',
  },
  {
    svg: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
    title: 'DeFi Instruments',
    desc: 'Setup components for financial automation',
    checkLists: ['Splitter', 'Timelock', 'MIR & ANC', '(more in dev)'],
    url: '#',
  },
  {
    svg: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <circle cx="6" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
      </svg>
    ),
    title: 'Generic ADO',
    desc: 'Define simple data values to be utilized in other ADOs',
    checkLists: [
      'Address lists',
      'Specific values',
      'Primitive functions',
      '(more in dev)',
    ],
    url: '#',
  },
];

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

/** 
const statusStyles = {
  success: 'bg-green-100 text-green-800',
  processing: 'bg-yellow-100 text-yellow-800',
  failed: 'bg-gray-100 text-gray-800',
};
*/
const Home: NextPage = () => {
  return (
    <Layout title="Andromeda" currentNavIndex="0">
      <div className="text-gray-600 container mx-auto">
        <div className="flex flex-col text-center w-full mt-4 mb-8">
          <h1 className="sm:text-2xl text-xl font-medium title-font text-gray-900">
            ADO & NFT Builder
          </h1>
          <p>Create NFT collectibles, DeFi instruments and generic ADOs</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {itemData.map((x) => (
            <BuilderItem
              svg={x.svg}
              title={x.title}
              desc={x.desc}
              checkLists={x.checkLists}
              url={x.url}
            />
          ))}
        </div>
      </div>
      <h2 className="max-w-6xl mx-auto mt-8 text-lg leading-6 font-medium text-gray-900 flex items-center">
        <ClockIcon className="inline h-5 w-5 text-gray-400 mr-2" />
        Recent Activity
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
                          className={classnames(
                            /** statusStyles[transaction.status], **/
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

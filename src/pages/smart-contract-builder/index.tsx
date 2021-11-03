import type { NextPage } from 'next';
import Link from 'next/link';
import Layout from '@/components/DefaultLayout';

interface BuilderItemProps {
  svg: object;
  title: string;
  checkLists: [string, string, string, string];
  url: string;
}

const BuilderItem: React.FC<BuilderItemProps> = (prop: BuilderItemProps) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="flex rounded-lg h-full bg-white shadow sm:rounded-lg p-8 flex-col">
        <div className="flex items-center mb-8">
          <div className="w-8 h-8 mr-4 inline-flex items-center justify-center rounded-full bg-red-700 text-white flex-shrink-0">
            {prop.svg}
          </div>
          <h2 className="text-gray-900 text-lg title-font font-medium">
            {prop.title}
          </h2>
        </div>
        <div className="flex-grow">
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
    checkLists: [
      'Add royalities',
      'black/white list',
      'taxes',
      'robust metadata',
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
    checkLists: [
      'splitter',
      'timelock',
      'MIR & ANC',
      '(more in dev)',
    ],
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
    checkLists: [
      'Address lists',
      'Specific values',
      'Primitive functions',
      '(more in dev)',
    ],
    url: '#',
  },
];

const SmartContractBuilder: NextPage = () => {
  return (
    <Layout title="Andromeda">
      <div className="text-gray-600 max-w-4xl container mx-auto">
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
              checkLists={x.checkLists}
              url={x.url}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SmartContractBuilder;

import type { NextPage } from 'next';
import Layout from '@/components/DefaultLayout';
import { ArrowRightIcon, SearchIcon } from '@heroicons/react/outline';

interface ItemProps {
  title: string;
  uuid: string;
  icon: boolean;
}

const Item: React.FC<ItemProps> = (prop: ItemProps) => {
  return (
    <div className="w-48 h-36 p-2.5 bg-white relative shadow-lg border-gray-300">
      <h3 className="text-blue-900 text-xl font-medium">{prop.title}</h3>
      <p className="text-blue-900 text-xs">{prop.uuid}</p>
      {prop.icon && (
        <ArrowRightIcon className="w-8 text-gray-500 absolute top-1/2 -right-5 transform -translate-y-1/2" />
      )}
    </div>
  );
};

const itemData = [
  {
    title: 'Accept Funds',
    uuid: 'UUID 009930',
    icon: true,
  },
  {
    title: 'Purchase Asset',
    uuid: 'UUID 017830',
    icon: true,
  },
  {
    title: 'Timelock',
    uuid: 'UUID 083130',
    icon: true,
  },
  {
    title: 'Splitter',
    uuid: 'UUID 049130',
    icon: false,
  },
];

const Missions: NextPage = () => {
  return (
    <Layout title="My missions" currentNavIndex="2">
      <div className="flex justify-between mb-3 pb-3 border-b border-grey-500">
        <div className="flex items-end">
          <h1 className="text-2xl font-medium text-gray-900">My Missions</h1>
        </div>
        <div className="flex">
          <div className="items-center w-1/2 mr-3 mt-1 block w-full px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm flex">
            <SearchIcon className="w-5 h-5 text-gray-500" />
            <input
              className="w-5/6 font-light border-transparent focus:border-transparent focus:ring-0 focus:placeholder-gray-400 focus:outline-none"
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Search My assets"
              autoComplete="off"
              onChange={() => {}}
            />
          </div>

          <select
            id="country"
            name="country"
            autoComplete="country-name"
            className="w-1/2  mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={() => {}}
          >
            <option>All types</option>
            <option>Image</option>
            <option>Audio</option>
            <option>Domain</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className="text-center mt-12">
        <h1 className="text-2xl font-medium text-gray-500">(In Development)</h1>
        <p>
          Missions is currently under development, but below, you'll find an
          example of what they are and how they might be utilized.
        </p>
        <div className="max-w-3xl mx-auto mt-6 mb-6">
          <h2 className="text-red-500 font-medium">EXAMPLE MISSION</h2>
          <p className="text-gray-500">
            An entity wants to accept funds and once a funding level is met,
            purchase an asset, hold the funds for 60 days, then split the funds
            among the depositers.
          </p>
          <p className="mt-2 text-gray-500">
            Missions will allow chained ADOs to execute complex sets of events.
          </p>
        </div>
        <div className="flex justify-between items-center max-w-4xl mx-auto my-10">
          {itemData.map((x) => (
            <Item title={x.title} uuid={x.uuid} icon={x.icon} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Missions;

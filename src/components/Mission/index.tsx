import React from 'react';
import Item from './item';

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

const MissionLayout = () => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-gray-900">My Missions</h1>
      <h1 className="text-2xl font-bold text-gray-500">(In Development)</h1>
      <p>
        Missions is currently under development, but below, you'll find an
        example of what they are and how they might be utilized.
      </p>
      <div className="max-w-3xl mx-auto mt-3 mb-6">
        <h2 className="text-red-500 font-bold">EXAMPLE MISSION</h2>
        <p>
          An entity wants to accept funds and once a funding level is met,
          purchase an asset, hold the funds for 60 days, then split the funds
          among the depositers.
        </p>
        <p className="mt-2">
          Missions will allow chained ADOs to execute complex sets of events.
        </p>
      </div>
      <div className="flex justify-between items-center max-w-4xl mx-auto my-8">
        {itemData.map((x) => (
          <Item title={x.title} uuid={x.uuid} icon={x.icon} />
        ))}
      </div>
    </div>
  );
};
export default MissionLayout;

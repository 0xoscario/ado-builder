import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/outline';

interface ItemProps {
  title: string;
  uuid: string;
  icon: boolean;
}

const Item: React.FC<ItemProps> = (prop: ItemProps) => {
  return (
    <div className="w-48 h-36 p-2.5 bg-white relative shadow-lg border-gray-300">
      <h3 className="text-blue-900 text-xl font-bold">{prop.title}</h3>
      <p className="text-blue-900 text-xs">{prop.uuid}</p>
      {prop.icon && (
        <ArrowRightIcon className="w-8 text-gray-500 absolute top-1/2 -right-5 transform -translate-y-1/2" />
      )}
    </div>
  );
};
export default Item;

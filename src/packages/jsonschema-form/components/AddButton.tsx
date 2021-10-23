import { AddButtonProps } from '@rjsf/core';

import { PlusCircleIcon } from '@heroicons/react/outline';

const AddButton = (props: AddButtonProps) => (
  <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 sm:text-sm">
    <PlusCircleIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
    Add Item
  </button>
);

export default AddButton;

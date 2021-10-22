import { Fragment, useState, FunctionComponent, ReactNode } from 'react';

type Props = {
  title?: string;
  description?: string;
  children?: ReactNode;
};

const Panel: FunctionComponent<Props> = ({ title, description, children }) => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="my-4 shadow sm:rounded-md sm:overflow-hidden">
      <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6 ">
          <div className="md:col-span-1">
            {title && (
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                {title}
              </h3>
            )}
            {description && (
              <p className="mt-1 text-sm text-gray-400">{description}</p>
            )}
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="relative grid gap-y-6">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;

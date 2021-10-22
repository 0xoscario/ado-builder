import { FieldProps } from '@rjsf/core';

export interface TitleFieldProps extends Partial<FieldProps> {
  title: string;
}

const TitleField = ({ title }: Partial<FieldProps>) => (
  <>
    <div className="flex flex-col text-center w-full">
      <h1 className="pb-0 sm:text-2xl text-xl font-medium title-font text-gray-900">
        {title}
      </h1>
    </div>
  </>
);

export default TitleField;

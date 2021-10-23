import { FieldProps } from '@rjsf/core';

export interface TitleFieldProps extends Partial<FieldProps> {
  title: string;
}

const TitleField = ({ title }: Partial<FieldProps>) => (
  <p className="block text-sm font-medium text-gray-700">{title}</p>
);

export default TitleField;

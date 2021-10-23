import { FieldProps } from '@rjsf/core';

export default function TitleField({ description }: FieldProps) {
  if (!description) {
    return null;
  }

  return (
    <div className="flex flex-col text-center w-full">
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}

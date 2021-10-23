import { FieldProps } from '@rjsf/core';

export default function TitleField({ description }: FieldProps) {
  if (!description) {
    return null;
  }

  return <p className="text-xs mt-2 text-gray-400">{description}</p>;
}

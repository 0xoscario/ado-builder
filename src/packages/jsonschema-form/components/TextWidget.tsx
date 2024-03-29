import React from 'react';

import { WidgetProps } from '@rjsf/core';
import TextInput from './Form/TextInput';

export interface TextWidgetProps extends WidgetProps {
  type?: string;
}

const TextWidget = ({
  id,
  placeholder,
  required,
  readonly,
  disabled,
  type,
  label,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  options,
  schema,
  rawErrors = [],
  uiSchema,
}: TextWidgetProps) => {
  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    onChange(value === '' ? options.emptyValue : value);

  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);

  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  const inputType =
    (type || schema.type) === 'string' ? 'text' : `${type || schema.type}`;

  const fieldDescription = uiSchema['ui:description'] || schema.description;
  const fieldUIHelp = schema['ui:help'];

  // const classNames = [rawErrors.length > 0 ? "is-invalid" : "", type === 'file' ? 'custom-file-label': ""]
  return (
    <div>
      {fieldDescription ? (
        <p className="mb-4 text-sm text-gray-400">{fieldDescription}</p>
      ) : null}
      <label
        className={
          rawErrors.length > 0
            ? 'block text-sm font-medium text-red-600'
            : 'block text-sm font-medium text-gray-700'
        }
      >
        {label || schema.title}
        {(label || schema.title) && required ? (
          <span className="text-red-600">*</span>
        ) : null}
      </label>

      <TextInput
        id={id}
        placeholder={placeholder}
        autoFocus={autofocus}
        required={required}
        disabled={disabled}
        readOnly={readonly}
        className={rawErrors.length > 0 ? 'is-invalid' : ''}
        list={schema.examples ? `examples_${id}` : undefined}
        type={inputType}
        value={value || value === 0 ? value : ''}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
      />
      {fieldUIHelp ? (
        <p
          className={
            'text-xs mt-2 text-gray-400 ' +
            (rawErrors.length > 0 ? 'text-red-400' : 'text-gray-400')
          }
        >
          {fieldUIHelp}
        </p>
      ) : null}
      {schema.examples ? (
        <datalist id={`examples_${id}`}>
          {(schema.examples as string[])
            .concat(schema.default ? ([schema.default] as string[]) : [])
            .map((example: any) => {
              return <option key={example} value={example} />;
            })}
        </datalist>
      ) : null}
    </div>
  );
};

export default TextWidget;

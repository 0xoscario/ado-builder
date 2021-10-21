import React from 'react';

import { WidgetProps } from '@rjsf/core';

import TextArea from '@/components/Form/TextArea';

type CustomWidgetProps = WidgetProps & {
  options: any;
};

const TextareaWidget = ({
  id,
  placeholder,
  value,
  required,
  disabled,
  autofocus,
  label,
  readonly,
  onBlur,
  onFocus,
  onChange,
  options,
  schema,
  rawErrors = [],
  uiSchema,
}: CustomWidgetProps) => {
  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLTextAreaElement>) =>
    onChange(value === '' ? options.emptyValue : value);
  const _onBlur = ({
    target: { value },
  }: React.FocusEvent<HTMLTextAreaElement>) => onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLTextAreaElement>) => onFocus(id, value);

  const fieldDescription = uiSchema['ui:description'] || schema.description;

  return (
    <>
      <label
        htmlFor={id}
        className={
          rawErrors.length > 0
            ? 'block text-sm font-medium text-red-600'
            : 'block text-sm font-medium text-gray-700'
        }
      >
        {label || schema.title}
        {required && (
          <span
            aria-hidden
            className={rawErrors.length > 0 ? 'text-danger ml-1' : 'ms-1'}
          >
            &thinsp;{'*'}
          </span>
        )}
      </label>
      <TextArea
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readonly}
        value={value}
        required={required}
        autoFocus={autofocus}
        rows={options.rows || 5}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
      />
      {fieldDescription ? (
        <p
          className={
            'text-xs mt-2 text-gray-400 ' +
            (rawErrors.length > 0 ? 'text-red-400' : 'text-gray-400')
          }
        >
          {fieldDescription}
        </p>
      ) : null}
    </>
  );
};

export default TextareaWidget;

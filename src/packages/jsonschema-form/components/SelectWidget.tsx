import React from 'react';

import { WidgetProps } from '@rjsf/core';
import { utils } from '@rjsf/core';

const { asNumber, guessType } = utils;

const nums = new Set(['number', 'integer']);

/**
 * This is a silly limitation in the DOM where option change event values are
 * always retrieved as strings.
 */
const processValue = (schema: any, value: any) => {
  // "enum" is a reserved word, so only "type" and "items" can be destructured
  const { type, items } = schema;
  if (value === '') {
    return undefined;
  } else if (type === 'array' && items && nums.has(items.type)) {
    return value.map(asNumber);
  } else if (type === 'boolean') {
    return value === 'true';
  } else if (type === 'number') {
    return asNumber(value);
  }

  // If type is undefined, but an enum is present, try and infer the type from
  // the enum values
  if (schema.enum) {
    if (schema.enum.every((x: any) => guessType(x) === 'number')) {
      return asNumber(value);
    } else if (schema.enum.every((x: any) => guessType(x) === 'boolean')) {
      return value === 'true';
    }
  }

  return value;
};

export default function SelectWidget({
  schema,
  id,
  options,
  label,
  required,
  disabled,
  readonly,
  value,
  multiple,
  autofocus,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  rawErrors = [],
  uiSchema,
}: WidgetProps) {
  const { enumOptions, enumDisabled } = options;

  const emptyValue = multiple ? [] : '';

  function getValue(
    event: React.FocusEvent | React.ChangeEvent | any,
    multiple: boolean
  ) {
    if (multiple) {
      return [].slice
        .call(event.target.options as any)
        .filter((o: any) => o.selected)
        .map((o: any) => o.value);
    } else {
      return event.target.value;
    }
  }
  return (
    <div className="mt-8">
      <label
        className={
          rawErrors.length > 0
            ? 'block text-sm font-medium text-red-600'
            : 'block text-sm font-medium text-gray-700'
        }
      >
        {label || schema.title}
        {(label || schema.title) && required ? (
          <span className="text-red-400">*</span>
        ) : null}
      </label>
      <select
        id={id}
        value={typeof value === 'undefined' ? emptyValue : value}
        required={required}
        multiple={multiple}
        disabled={disabled}
        // readOnly={readonly}
        autoFocus={autofocus}
        className={
          'mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md ' +
          (rawErrors.length > 0 ? ' border border-red-400' : '')
        }
        onBlur={
          onBlur &&
          ((event: React.FocusEvent) => {
            const newValue = getValue(event, multiple);
            onBlur(id, processValue(schema, newValue));
          })
        }
        onFocus={
          onFocus &&
          ((event: React.FocusEvent) => {
            const newValue = getValue(event, multiple);
            onFocus(id, processValue(schema, newValue));
          })
        }
        onChange={(event: React.ChangeEvent) => {
          const newValue = getValue(event, multiple);
          onChange(processValue(schema, newValue));
        }}
      >
        {!multiple && schema.default === undefined && (
          <option value="">{placeholder}</option>
        )}
        {(enumOptions as any).map(({ value, label }: any, i: number) => {
          const disabled: any =
            Array.isArray(enumDisabled) &&
            (enumDisabled as any).indexOf(value) != -1;
          return (
            <option key={i} id={label} value={value} disabled={disabled}>
              {label}
            </option>
          );
        })}
      </select>
      {schema.description ? (
        <p
          className={
            'text-xs mt-2 text-gray-400 ' +
            (rawErrors.length > 0 ? 'text-red-400' : 'text-gray-400')
          }
        >
          {schema.description}
        </p>
      ) : null}
    </div>
  );
}

import { WidgetProps } from '@rjsf/core';
import { Switch } from '@headlessui/react';

export default function CheckboxWidget({
  id,
  value,
  required,
  disabled,
  readonly,
  label,
  schema,
  autofocus,
  onChange,
  onBlur,
  onFocus,
  rawErrors = [],
}: WidgetProps) {
  const _onChange = ({
    target: { checked },
  }: React.FocusEvent<HTMLInputElement>) => onChange(checked);
  const _onBlur = ({
    target: { checked },
  }: React.FocusEvent<HTMLInputElement>) => onBlur(id, checked);
  const _onFocus = ({
    target: { checked },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, checked);

  const checked = typeof value === 'undefined' ? false : value;

  console.log('schema', schema);

  if (schema['ui:toggle']) {
    return (
      <div className="absolute right-0">
        <Switch
          checked={checked}
          required={required}
          disabled={disabled || readonly}
          autoFocus={autofocus}
          onChange={onChange}
          onBlur={_onBlur}
          onFocus={_onFocus}
          className={`${
            checked ? 'bg-blue-600' : 'bg-gray-200'
          } relative inline-flex items-center h-6 rounded-full w-11`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              checked ? 'translate-x-6' : 'translate-x-1'
            } inline-block w-4 h-4 transform bg-white rounded-full`}
          />
        </Switch>
      </div>
    );
  }

  return (
    <div className={`checkbox ${disabled || readonly ? 'disabled' : ''}`}>
      <label className={rawErrors.length > 0 ? 'text-red-400' : ''}>
        {label || schema.title}
        {(label || schema.title) && required ? (
          <span className="text-red-400">*</span>
        ) : null}
      </label>
      {schema.description ? (
        <p
          className={
            'text-sm mb-4 ' +
            (rawErrors.length > 0 ? 'text-red-400' : 'text-gray-400')
          }
        >
          {schema.description}
        </p>
      ) : null}
      <label className="flex my-2 items-center">
        <div
          className={
            'focus-within:ring-2 \
                                 flex justify-between bg-gray-700 border \
                                 border-gray-600 w-12 h-6 items-center \
                                 rounded-full p-1 duration-300 ease-in-out' +
            (checked ? ' bg-green-400' : ' bg-red-400')
          }
        >
          <input
            id={id}
            checked={checked}
            className="appearance-none bg-white w-4 h-4 rounded-full
                       shadow-sm transform duration-300 ease-in-out
                       checked:translate-x-5"
            required={required}
            disabled={disabled || readonly}
            autoFocus={autofocus}
            onChange={_onChange}
            type="checkbox"
            onBlur={_onBlur}
            onFocus={_onFocus}
          />
        </div>
      </label>
    </div>
  );
}

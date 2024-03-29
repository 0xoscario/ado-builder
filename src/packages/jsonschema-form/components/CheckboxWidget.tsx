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

  console.log('value', value, schema);
  if (schema['ui:toggle']) {
    return (
      <div className="absolute right-8 top-0">
        <div className="relative">
          <Switch
            checked={checked}
            onChange={onChange}
            className="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="sr-only">Enable</span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bg-white w-full h-full rounded-md"
            />
            <span
              aria-hidden="true"
              className={[
                `${checked ? 'bg-green-500' : 'bg-gray-300'}`,
                'pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200',
              ].join(' ')}
            />
            <span
              aria-hidden="true"
              className={[
                `${checked ? 'translate-x-5' : 'translate-x-0'}`,
                'pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200',
              ].join(' ')}
            />
          </Switch>
        </div>
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

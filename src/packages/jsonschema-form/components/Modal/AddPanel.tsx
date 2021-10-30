import {
  Fragment,
  useState,
  FunctionComponent,
  ReactNode,
  useEffect,
  useRef,
} from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { RadioGroup } from '@headlessui/react';
import { v4 as uuidv4 } from 'uuid';

import {
  getTitleSchemaPanel,
  getDescriptionSchemaPanel,
} from '@/packages/jsonschema-form/ado-panels/form-builder';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

type Props = {
  open?: boolean;
  panelsId?: string[];
  onClose(value: boolean): void;
  onSelect(value: SchemaPanel): void;
  children?: ReactNode;
};

const AddPanel: FunctionComponent<Props> = ({
  open,
  panelsId,
  onClose,
  onSelect,
  children,
}) => {
  const [selected, setSelected] = useState(panelsId[0]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={onClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full sm:p-6">
              <RadioGroup value={selected} onChange={setSelected}>
                <RadioGroup.Label className="sr-only">
                  Server size
                </RadioGroup.Label>
                <div className="space-y-4 mt-2">
                  {panelsId.map((panelId) => (
                    <RadioGroup.Option
                      key={panelId}
                      value={panelId}
                      className={({ active }) =>
                        classNames(
                          active ? 'ring-1 ring-offset-2 ring-gray-500' : '',
                          'relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none'
                        )
                      }
                    >
                      {({ checked }) => (
                        <>
                          <div className="flex items-center">
                            <div className="text-sm">
                              <RadioGroup.Label
                                as="p"
                                className="text-lg font-medium leading-6 text-gray-900"
                              >
                                {getTitleSchemaPanel(panelId)}
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as="div"
                                className="text-gray-500"
                              >
                                <p className="sm:inline">
                                  {getDescriptionSchemaPanel(panelId)}
                                </p>
                              </RadioGroup.Description>
                            </div>
                          </div>
                          <div
                            className={classNames(
                              checked
                                ? 'border-gray-500'
                                : 'border-transparent',
                              'absolute -inset-px rounded-lg border-2 pointer-events-none'
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
              <div className="mt-5 sm:mt-6 text-center">
                <button
                  type="button"
                  className="my-4 inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 sm:text-sm"
                  onClick={() => {
                    onSelect({
                      type: selected,
                      id: uuidv4(),
                      enabled: true,
                      removable: true,
                      open: true,
                    });
                  }}
                >
                  Add module
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AddPanel;

import { ObjectFieldTemplateProps } from '@rjsf/core';

const ObjectFieldTemplate = ({
  DescriptionField,
  description,
  TitleField,
  title,
  properties,
  required,
  uiSchema,
  idSchema,
}: ObjectFieldTemplateProps) => {
  if (uiSchema['ui:widget'] === 'panel') {
    return (
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              {title && (
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  {title}
                </h3>
              )}
              {description && (
                <p className="mt-1 text-sm text-gray-400">{description}</p>
              )}
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="grid gap-y-6 ">
                {properties.map((element: any) => element.content)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {(uiSchema['ui:title'] || title) && (
        <TitleField
          id={`${idSchema.$id}-title`}
          title={title}
          required={required}
        />
      )}

      {description && (
        <DescriptionField
          id={`${idSchema.$id}-description`}
          description={description}
        />
      )}

      <div>{properties.map((element: any) => element.content)}</div>
    </>
  );
};

export default ObjectFieldTemplate;

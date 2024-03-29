import { ObjectFieldTemplateProps } from '@rjsf/core';
import Panel from './Form/Panel';

const ObjectFieldTemplate = ({
  DescriptionField,
  description,
  TitleField,
  title,
  properties,
  required,
  uiSchema,
  idSchema,
  formData,
  schema,
}: ObjectFieldTemplateProps) => {
  if (schema['ui:panel']) {
    return (
      <Panel
        id={idSchema['$id']}
        title={title}
        description={description}
        toggle={schema['ui:toggle']}
        removable={formData['$removable']}
        enabled={formData['$enabled']}
        autoOpen={formData['$open']}
      >
        {properties.map((element: any) => element.content)}
      </Panel>
    );
  }

  if (schema['ui:group']) {
    return (
      <div className="bg-gray-50 p-8 grid gap-y-6">
        {properties.map((element: any) => element.content)}
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

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
}: ObjectFieldTemplateProps) => {
  if (uiSchema['ui:group']) {
    if (uiSchema['ui:toggle']) {
      const id = idSchema['$id'].substring(
        idSchema['$id'].lastIndexOf('_') + 1
      );
      properties = formData[`${id}_enabled`]
        ? properties
        : properties.filter((prop) => prop.name === `${id}_enabled`);
    }
    return (
      <Panel title={title} description={description}>
        {properties.map((element: any) => element.content)}
      </Panel>
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


interface Field {
  name: string;
  is_required: boolean;
  attrs: {
    has_max: boolean;
    max: number;
    has_min: boolean;
    min: number;
    numeric: boolean;
  };
}
interface FieldRequirements extends Array<Field> { }

const useFieldRequirements = (fieldRequirements: FieldRequirements) => {
  const findFieldRequirement = (fieldName: string): Field => {
    return fieldRequirements.find((field) => field.name === fieldName) || {
      name: '',
      is_required: false,
      attrs: {
        has_max: false,
        max: 0,
        has_min: false,
        min: 0,
        numeric: false,
      },
    };
  };


  const getFieldProperties = (fieldName: string) => {
    const field = findFieldRequirement(fieldName);

    return {
      isRequired: field.is_required,
      hasMax: field.attrs && field.attrs.has_max,
      max: field.attrs && field.attrs.has_max ? field.attrs.max : undefined,
      hasMin: field.attrs && field.attrs.has_min,
      min: field.attrs && field.attrs.has_min ? field.attrs.min : undefined,
      isNumeric: field.attrs && field.attrs.numeric,
    };
  };


  return {
    findFieldRequirement,
    getFieldProperties,
  };
};

export default useFieldRequirements;

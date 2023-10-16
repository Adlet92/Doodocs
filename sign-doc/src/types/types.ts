export interface SidebarProps {
  lastName: string;
  firstName: string;
  iin: string;
  setLastName: (value: string) => void;
  setFirstName: (value: string) => void;
  setIIN: (value: string) => void;
  // isNumericIIN: boolean;
  // isRequiredLastName: boolean;
  // maxLastName?: number;
  // minLastName?: number;
  // isRequiredFirstName: boolean;
  // maxFirstName?: number;
  // minFirstName?: number;
  // isRequiredIIN: boolean;
  // maxIIN?: number;
  // minIIN?: number;
  iinProperties: {
    isRequired: boolean;
    hasMax: boolean;
    max: number | undefined;
    hasMin: boolean;
    min: number | undefined;
    isNumeric: boolean;
  };
  lastNameProperties: {
    isRequired: boolean;
    hasMax: boolean;
    max: number | undefined;
    hasMin: boolean;
    min: number | undefined;
    isNumeric: boolean;
  };
  firstNameProperties: {
    isRequired: boolean;
    hasMax: boolean;
    max: number | undefined;
    hasMin: boolean;
    min: number | undefined;
    isNumeric: boolean;
  };
}

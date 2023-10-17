export interface SidebarProps {
  lastName: string;
  firstName: string;
  iin: string;
  setLastName: (value: string) => void;
  setFirstName: (value: string) => void;
  setIIN: (value: string) => void;
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

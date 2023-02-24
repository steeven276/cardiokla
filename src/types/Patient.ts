export type Patient = {
  id: string;
  name: string;
  email: string;
  birthdate: string;
  generalPractitioner: string;
};

export type PatientWithWarnings = Patient & {
  warnings: string[];
};

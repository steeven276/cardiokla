export type CardiacFrequencyData = { datetime: string; value: number };

export type PatientMedicalData = CardiacFrequencyData[];

export type PatientsMedicalData = {
  [patientID: string]: PatientMedicalData;
};

import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import "./Patient.css";

export const Patient: FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();

  return <h1>Patient with id {id}</h1>;
};

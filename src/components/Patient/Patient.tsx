import React, { FunctionComponent } from 'react';
import './Patient.css';
import { useParams } from 'react-router-dom';

export const Patient: FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <h1>Patient with id {id}</h1>
  );
};

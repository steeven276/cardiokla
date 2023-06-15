import { Input, Table } from "antd";
import "antd/dist/reset.css";
import { FunctionComponent, useState } from "react";
import { usePatients } from "../../hooks/usePatients";
import "./Home.css";

export const Home: FunctionComponent = () => {
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Birthdate", dataIndex: "birthdate", key: "birthdate" },
  ];

  const [searchTerm, setSearchTerm] = useState<string>("");
  const allPatients = usePatients();
  console.log(allPatients);
  const dataSource = allPatients.filter((patient) => patient.name.toLowerCase().includes(searchTerm.toLowerCase()));
  console.log(dataSource);

  return (
    <>
      <Input
        data-testid="search-bar"
        onChange={(event) => setSearchTerm(event.currentTarget.value)}
        placeholder="Basic usage"
      />
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};

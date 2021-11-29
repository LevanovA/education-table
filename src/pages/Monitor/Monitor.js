import React from "react";

import Table from "../../components/Table";
import Header from "../../components/Header";

import "antd/dist/antd.css";
import "./style.scss";

const Monitor = () => {
  return (
    <React.StrictMode>
      <div className="grid">
        <Header />
        <Table />
      </div>
    </React.StrictMode>
  );
};

export default Monitor;

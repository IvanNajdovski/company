import React from "react";
import { Form } from "../Form/Form";

export const Content = (props) => {
  return (
    <div className="App-content">
      <div className="App-content-wrapper">
        <div className={"App-content-logo"}>
          <img src={require("../../assets/images/logo-company.png")} alt={"company logo"} />
        </div>
        <h1 className="content-heading">Feedback for Aglieglie Brazof</h1>
        <p className="content-text">
          Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem
          Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem
          Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem
          Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem
          Lorem Ipsum dolorem Lorem Ipsum dolorem.
          <br /> Thank you for your contribution to this very important process.
        </p>
        <Form />
      </div>
    </div>
  );
};

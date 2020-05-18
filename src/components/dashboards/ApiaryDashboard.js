import React from "react";
import { ApiaryProvider } from "../apiaries/ApiaryProvider";
import { ApiaryList } from "../apiaries/ApiaryList";
import { UserProvider } from "../users/UserProvider";
import "../App.css";
import { Button } from "reactstrap";

export const ApiaryDashboard = ({ setActiveList }) => {
  return (
    <div className="apiaryContainer">
      <div className="mainpage_header">
        <img className="logo" src="https://cdn.pixabay.com/photo/2014/04/02/11/04/bee-305419_1280.png" alt=""/>
        <h1>HiveLogger</h1>
        <Button
          onClick={() => {
            localStorage.removeItem("hiveLogger_user");
            window.location.reload();
          }}
        >
          Buzz Off
        </Button>
      </div>

      <small>An app worth buzzing about.</small>
      <UserProvider>
        <ApiaryProvider>
          <ApiaryList setActiveList={setActiveList} />
        </ApiaryProvider>
      </UserProvider>
    </div>
  );
};

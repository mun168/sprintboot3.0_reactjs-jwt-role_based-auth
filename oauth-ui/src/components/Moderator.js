import React, { useState, useEffect } from "react";

import DataService from "../services/data";
import EventBus from "../common/EventBus";


const Moderator = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    DataService.getModerator().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default Moderator;

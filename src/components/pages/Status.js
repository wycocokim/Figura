import React, { useState } from "react";
import Axios from "axios";
import "./Status.css";

const Status = () => {
  // const [listOfUsers, setListOfUsers] = useState([]);
  const [term, setTerm] = useState("");
  const [termData, setTermData] = useState([]);

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/getDates").then((response) => {
  //     setListOfUsers(response.data);
  //   });
  // }, []);
  const termUrl = `https://figura-website.herokuapp.com/status/${term}`;

  console.log(termUrl);
  console.log(termData);

  const searchTerm = () => {
    Axios.get(termUrl)
      .then((response) => {
        setTermData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(term);

  return (
    <div className="status-container">
      <h1>Check Status</h1>

      <div className="status-appointment-block">
        <input
          type="text"
          name="term"
          placeholder="enter reference number"
          onChange={(event) => {
            setTerm(event.target.value);
          }}
        />
        <button className="status-btn" onClick={searchTerm}>
          search
        </button>
      </div>
      <div>
        <h2 className="status-h2">
          {termData ? termData.status : "User not found"}
        </h2>
      </div>
    </div>
  );
};

export default Status;

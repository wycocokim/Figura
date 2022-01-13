import React, { useState, useEffect } from "react";
import "./Admin.css";
import Axios from "axios";

const Admin = () => {
  const [term, setTerm] = useState("");
  const [select, setSelect] = useState("");
  const [termData, setTermData] = useState([]);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [hide, setHide] = useState(false);

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/getDates").then((response) => {
  //     setListOfUsers(response.data);
  //   });
  // }, []);
  const termUrl = `https://figura-website.herokuapp.com/status/${term}`;

  // console.log(termUrl);
  // console.log(termData);
  // console.log(select);
  // console.log(password);
  // console.log(login);
  useEffect(() => {
    const myState = localStorage.getItem("my-state");
    if (myState) {
      setHide(JSON.parse(myState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("my-state", JSON.stringify(hide));
  });

  const searchTerm = () => {
    Axios.get(termUrl)
      .then((response) => {
        setTermData(response.data);
      })
      .catch((error) => {
        // setTermData([]);
        console.log(error);
      });
  };

  const deleteTerm = () => {
    Axios.delete(termUrl).then((response) => {
      alert("Appointment Canceled");
    });
  };

  const updateTerm = () => {
    Axios.patch(termUrl, {
      status: select,
    }).then((response) => {
      alert("Status Updated");
    });
  };

  // console.log(term);

  const logIn = () => {
    if (login === "admin" && password === "adminadmin") {
      setHide(true);
    }
  };

  const logOut = () => {
    setHide(false);
  };

  return (
    <section>
      <div className="delete-container">
        <div>
          <a href="/list">Show List</a>
          <button className="log-out-btn" onClick={logOut}>
            logout
          </button>
        </div>

        <div className="admin-input-wrapper">
          <input
            className="admin-input"
            type="text"
            name="term"
            placeholder="enter reference number"
            onChange={(event) => {
              setTerm(event.target.value);
            }}
          />
          <button onClick={searchTerm}>Search</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>ID Number</th>
              <th>Booking Date</th>
              <th>Status</th>
              <th>update</th>
              <th>Cancel Booking</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h3>
                  {termData
                    ? `${termData.first_name} ${termData.last_name}`
                    : "Check your reference number"}
                </h3>
              </td>

              <td>
                <h3>{termData ? `${termData._id}` : "User not found"}</h3>
              </td>

              <td>
                <h3>
                  {termData ? `${termData.booking_date}` : "User not found"}
                </h3>
              </td>

              <td>
                <select
                  name="cars"
                  id="cars"
                  onChange={(event) => {
                    setSelect(event.target.value);
                  }}
                >
                  <option value="Pending">Pending</option>
                  <option value="Appointment has been set">
                    Appointment has been set
                  </option>
                  <option value="Tailoring">Tailoring</option>
                  <option value="Ready for fitting">Ready for fitting</option>
                  <option value="Ready for pick up">Ready for pick up</option>
                  <option value="Done">Done</option>
                </select>
              </td>
              <td>
                <button onClick={updateTerm}>Update</button>
              </td>

              <td>
                <button onClick={deleteTerm}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={`overlay ${hide ? "hidden" : ""}`}>
        <div>
          <h2 className="admin-login">Admin Login</h2>
          <input
            type="text"
            name="login"
            placeholder="username"
            onChange={(event) => {
              setLogin(event.target.value);
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />

          <button onClick={logIn}>login</button>
        </div>
      </div>
    </section>
  );
};

export default Admin;

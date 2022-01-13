import React, { useState } from "react";
import "./Appointment.css";
import DatePicker from "react-datepicker";
import Axios from "axios";

import "react-datepicker/dist/react-datepicker.css";

const Appointment = () => {
  const [startDate, setStartDate] = useState(new Date());
  // const [listOfUsers, setListOfUsers] = useState([]);
  // let users = [];
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState(0);
  // const [status, setStatus] = useState("Pending");
  const status = "Pending";

  // console.log(startDate);

  // useEffect(() => {
  //   Axios.get("https://figura-website.herokuapp.com/getDates")
  //     .then((response) => {
  //       users.push(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const createUser = () => {
    Axios.post("https://figura-website.herokuapp.com/createUser/", {
      first_name: firstName,
      last_name: lastName,
      phone: phone,
      booking_date: startDate,
      status: status,
    })
      .then((response) => {
        alert("USER Created");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section>
      <div className="appointment-container">
        <div className="appointment-hero">
          <h1 className="appointment-h1">Book an Appointment</h1>
          <div className="form">
            <div>
              <label className="input-container">First Name</label>
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
              />
            </div>

            <div className="input-container">
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
              />
            </div>

            <div className="input-container">
              <label>Phone</label>
              <input
                type="phone"
                name="phone"
                placeholder="Phone Number"
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
              />
            </div>

            <div className="input-container">
              <label>Pick Date</label>
              <div className="date-container">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  minDate={new Date()}
                />
              </div>
            </div>

            <button onClick={createUser}>Submit</button>
          </div>
          {/* <div>
            {listOfUsers.map((user) => {
              return (
                <div>
                  <h1>{user.status}</h1>
                  <h1>{user.booking_date}</h1>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Appointment;

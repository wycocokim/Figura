import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./List.css";

const List = () => {
  const [listOfUsers, setListOfUsers] = useState();

  console.log(listOfUsers);

  useEffect(() => {
    Axios.get("https://figura-website.herokuapp.com/getUsers")
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="list-container">
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>ID Number</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Booking Date</th>
          </tr>
        </thead>
        <tbody>
          {!listOfUsers ? (
            <tr>
              <td>"nodata"</td>
            </tr>
          ) : (
            listOfUsers.map((user, key) => {
              return (
                <tr key={key}>
                  <td>{`${user.first_name}  ${user.last_name}`}</td>
                  <td>{user._id}</td>
                  <td>{user.phone}</td>
                  <td>{user.status}</td>
                  <td>{user.booking_date}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      <a className="list-a" href="/admin">
        admin panel
      </a>
    </div>
  );
};

export default List;

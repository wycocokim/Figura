import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./List.css";
// import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const List = () => {
  const [listOfUsers, setListOfUsers] = useState();
  const [modalIndex, setModalIndex] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [searchFilter, setSearchFilter] = useState("");
  const [allData, setAllData] = useState(listOfUsers);
  const [select, setSelect] = useState("");
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();

  const toggleModal = (index) => {
    setModalIndex(index);
  };

  // const dateFormat = `(${
  //   1 + startDate.getMonth(+1)
  // })/${startDate.getDate()}/${startDate.getFullYear()}`;

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;

  const handleFilterSearch = (search) => {
    if (!search) {
      setAllData(listOfUsers);
    } else {
      const filteredData = listOfUsers.filter((item) => {
        const fullname = item.full_name;

        if (fullname.toLowerCase().includes(search.toLowerCase())) {
          return item;
        }
      });

      setAllData(filteredData);
    }

    // const searchHandler = (event) => {
    //   const { value } = event.target;
    //   setSearchFilter(value);
    // };
  };

  const closeModal = () => {
    setModalIndex(null);
    setStartDate(null);
  };

  const updateTerm = (id) => {
    Axios.patch(`https://figura-website.herokuapp.com/status/${id}`, {
      status: select,
    }).then((response) => {
      alert("Status Updated");
    });
    setModalIndex(null);
    setStartDate(null);
  };

  const updateTermDate = (id) => {
    Axios.patch(`https://figura-website.herokuapp.com/status/${id}`, {
      booking_date: startDate,
    }).then((response) => {
      alert("Status Updated");
    });
    setModalIndex(null);
    setStartDate(null);
  };

  // console.log(listOfUsers);

  useEffect(() => {
    Axios.get("https://figura-website.herokuapp.com/getUsers")
      .then((response) => {
        setListOfUsers(response.data);
        setAllData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const dropDOwn = [new Set(listOfUsers.map((item) => item.status))];

  const handleFilterStatus = (status) => {
    const filterStatus = listOfUsers.filter((item) => {
      if (item.status.toLowerCase().includes(status.toLowerCase())) return item;
      console.log(item);
    });
    setAllData(filterStatus);
    console.log(filterStatus);
  };

  const dateFilter = () => {
    if (!dateTo || !dateFrom) {
      setAllData(listOfUsers);
    } else {
      const filterDataName = listOfUsers.filter((item) => {
        if (dateFrom <= item.booking_date && dateTo >= item.booking_date) {
          return item;
        }
      });
      setAllData(filterDataName);
    }
  };

  return (
    <div className="list-container">
      <input
        value={dateFrom}
        type="date"
        id="endDate"
        onChange={(e) => setDateFrom(e.target.value)}
      />

      <input
        type="date"
        value={dateTo}
        onChange={(e) => setDateTo(e.target.value)}
      />

      <button onClick={dateFilter}>Filter date</button>
      <input
        type="text"
        name="last_name"
        placeholder="search"
        onChange={(event) => {
          setSearchFilter(event.target.value);
          handleFilterSearch(event.target.value);
        }}
      />
      <select
        onChange={(event) => {
          handleFilterStatus(event.target.value);
        }}
      >
        <option value="Tailoring">Tailoring</option>
        <option value="Ready for fitting">Ready for fitting</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>ID Number</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Booking Date</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {!allData ? (
            <tr>
              <td>"nodata"</td>
            </tr>
          ) : (
            allData.map((user, key) => {
              return (
                <tr key={key}>
                  <td>{user.full_name}</td>
                  <td>{user._id}</td>
                  <td>{user.phone}</td>
                  <td>{user.status}</td>
                  <td>{user.booking_date}</td>
                  <td>
                    <div
                      className="div-onclick"
                      onClick={() => toggleModal(key)}
                    >
                      Update
                    </div>
                    <div
                      className={
                        modalIndex === key
                          ? "modal-update active"
                          : "modal-update"
                      }
                    >
                      <table>
                        <i
                          className="fas fa-times x-icon"
                          onClick={closeModal}
                        ></i>
                        <thead>
                          <tr>
                            <th>Full Name</th>
                            <th>ID Number</th>
                            <th>Booking Date</th>
                            <th></th>
                            <th>Status</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <h3>{`${user.full_name}`}</h3>
                            </td>

                            <td>
                              <h3>{user._id}</h3>
                            </td>

                            <td>
                              <h3>
                                <div className="date-container">
                                  {/* <DatePicker
                                    selected={startDate}
                                    placeholderText="Update Date"
                                    onChange={(date) => setStartDate(date.target.value)}
                                    minDate={new Date()}
                                  /> */}

                                  <input
                                    value={user.booking_date}
                                    type="date"
                                    min={today}
                                    onChange={(date) => {
                                      setStartDate(date.target.value);
                                    }}
                                  />
                                </div>
                              </h3>
                            </td>

                            <td>
                              <button
                                onClick={() => {
                                  updateTermDate(user._id);
                                }}
                              >
                                Update
                              </button>
                            </td>

                            <td>
                              <select
                                name="status"
                                id="status"
                                onChange={(e) => {
                                  setSelect(e.target.value);
                                }}
                              >
                                <option value="Pending">Pending</option>
                                <option value="Appointment has been set">
                                  Appointment has been set
                                </option>
                                <option value="Tailoring">Tailoring</option>
                                <option value="Ready for fitting">
                                  Ready for fitting
                                </option>
                                <option value="Ready for pick up">
                                  Ready for pick up
                                </option>
                                <option value="Done">Done</option>
                              </select>
                            </td>
                            <td>
                              <button
                                onClick={() => {
                                  updateTerm(user._id);
                                }}
                              >
                                Update
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
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

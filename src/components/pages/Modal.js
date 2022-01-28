import Axios from "axios";
import { useState } from "react";
import "./Modal.css";

const ModalUpdate = ({ user, index }) => {
  const [modalIndex, setModalIndex] = useState(null);
  const toggleModal = (key) => {
    setModalIndex(key);
  };

  const [startDate, setStartDate] = useState(null);
  const [select, setSelect] = useState("");

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

  const updateTerm = (id) => {
    Axios.patch("https://figura-website.herokuapp.com/status/" + id, {
      status: select,
    }).then((response) => {
      alert("Status Updated");
    });
    setModalIndex(null);
    setStartDate(null);
  };

  const updateTermDate = (id) => {
    console.log(id, startDate);
    Axios.patch("https://figura-website.herokuapp.com/status/" + id, {
      booking_date: startDate,
    }).then((response) => {
      alert("Status Updated");
    });
    setModalIndex(null);
    setStartDate(null);
  };

  return (
    <div>
      {" "}
      <button
        onClick={() => {
          console.log("click toggle");
          toggleModal(index);
        }}
      >
        {" "}
        update
      </button>
      <div
        className={
          modalIndex === index ? "modal-update active" : "modal-update"
        }
      >
        <div
          className="fas fa-times x-icon"
          onClick={() => setModalIndex(null)}
        ></div>
        <div className="container">
          <table>
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
                    <option value="Ready for fitting">Ready for fitting</option>
                    <option value="Ready for pickup">Ready for pickup</option>
                    <option value="Done">Done</option>
                    <option value="Canceled">Cancel</option>
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
      </div>
    </div>
  );
};

export default ModalUpdate;

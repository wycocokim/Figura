import { Button, Table } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import ModalUpdate from "./components/pages/Modal";
import "./Table.css";
const TableList = () => {
  const [dataFilter, setDatafilter] = useState();
  const [listOfUsers, setListOfUsers] = useState();

  const [handleFilter, setHandleFilter] = useState({
    filteredInfo: null,
    sortedInfo: null,
  });

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [hide, setHide] = useState(false);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const logIn = () => {
    if (login === "admin" && password === "adminadmin") {
      setHide(true);
    }
  };

  // const logOut = () => {
  //   setHide(false);
  // };

  const clearFilters = () => {
    setHandleFilter({ filteredInfo: null });
    setDatafilter(listOfUsers);
  };

  let { sortedInfo, filteredInfo } = handleFilter;
  sortedInfo = sortedInfo || {};
  filteredInfo = filteredInfo || {};

  console.log(listOfUsers);

  useEffect(() => {
    const myState = localStorage.getItem("my-state");
    if (myState) {
      setHide(JSON.parse(myState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("my-state", JSON.stringify(hide));
  });

  useEffect(() => {
    axios
      .get("https://figura-website.herokuapp.com/getUsers")
      .then((response) => {
        setListOfUsers(response.data);
        setDatafilter(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  const columns = [
    {
      title: "Full Name",
      dataIndex: "full_name",
      key: "full_name",
      sortDirections: ["descend", "ascend"],
      sorter: (a, b) => a.full_name.localeCompare(b.full_name),
      sortOrder: sortedInfo.columnKey === "full_name" && sortedInfo.order,
    },
    {
      title: "ID Number",
      dataIndex: "_id",
      key: "_id",
      sortOrder: sortedInfo.columnKey === "_id" && sortedInfo.order,
      sortDirections: ["descend", "ascend"],
      sorter: (a, b) => a._id.localeCompare(b._id),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      sortOrder: sortedInfo.columnKey === "phone" && sortedInfo.order,
      sorter: {
        compare: (a, b) => a.phone - b.phone,
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      filters: [
        {
          text: "Done",
          value: "Done",
        },
        {
          text: "Canceled",
          value: "Canceled",
        },
        {
          text: "Appointment has been set",
          value: "Appointment has been set",
        },
        {
          text: "Pending",
          value: "Pending",
        },
        {
          text: "Tailoring",
          value: "Tailoring",
        },
        {
          text: "Ready for pickup",
          value: "Ready for pickup",
        },
        {
          text: "Ready for fitting",
          value: "Ready for fitting",
        },
      ],
      filteredValue: filteredInfo.status || null,
      onFilter: (value, record) => record.status.includes(value),
    },
    {
      title: "Booking Date",
      dataIndex: "booking_date",
      key: "booking_date",
      sortOrder: sortedInfo.columnKey === "booking_date" && sortedInfo.order,
      sorter: (a, b) => a.booking_date > b.booking_date,
    },
    {
      title: "Update",
      key: "key",
      dataIndex: "key",
      render: (text, record, index) => (
        <ModalUpdate user={record} index={index} />
      ),
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
    setHandleFilter({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }

  const [name, setName] = useState("");

  console.log(name);

  const handleNameChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setName(value);
    handleFilterName(value);
  };

  const handleFilterName = (name) => {
    if (!name) {
      setDatafilter(listOfUsers);
    } else {
      const filterDataName = listOfUsers.filter((item) => {
        const fullName = item.full_name;
        if (fullName.toLowerCase().includes(name.toLowerCase())) {
          return item;
        }
      });
      setDatafilter(filterDataName);
    }
  };
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();

  const dateFilter = () => {
    if (!dateTo || !dateFrom) {
      setDatafilter(listOfUsers);
    } else {
      const filterDataName = listOfUsers.filter((item) => {
        if (dateFrom <= item.booking_date && dateTo >= item.booking_date) {
          return item;
        }
      });
      setDatafilter(filterDataName);
    }
  };

  return (
    <section>
      <div className="table-container">
        <div
          className="table-container table-wrapper"
          style={{ marginTop: "200px" }}
        >
          <div className="table-bar-header">
            <button onClick={handlePrint} className="print__button">
              {" "}
              Print{" "}
            </button>

            <div className="filter-container">
              <input
                className="search-filter"
                placeholder="search"
                onChange={(e) => handleNameChange(e)}
              />
              <div className="filter-date-wrapper">
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

                <button onClick={dateFilter}> filter date </button>
              </div>
            </div>
            <Button onClick={clearFilters} className="clear-filters">
              Clear filters
            </Button>
          </div>
          <Table
            ref={componentRef}
            columns={columns}
            dataSource={dataFilter}
            onChange={onChange}
          />
        </div>
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

export default TableList;

import React, { useEffect, useState } from "react";
import { Header, Stats, Feedback } from "../../components";
import { Dropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./style.css";

export const HomePage = () => {
  const [isOpen, setOpen] = useState(false);
  let selected = 0;
  let aligned = 0;
  let rejected = 0;
  const [data, setData] = useState([]);
  const [isRefetch, setRefetch] = useState(false);
  const total = data?.length;

  useEffect(() => {
    if (data) {
      getTableData();
      setRefetch(false);
    }
  }, [isRefetch]);

  const getTableData = async () => {
    let tableData = await fetch("http://localhost:3006/api/candidate", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3006",
      },
    });
    tableData = await tableData.json();
    setData(tableData);
  };

  const handleDelete = async(id) => {
    console.log("e--------",id)
    let dataToDelete = await fetch(`http://localhost:3006/api/candidate/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3006",
      },
    });
    dataToDelete = await dataToDelete.json()
    console.log("dataToDelete:::::::::::::", dataToDelete)
  }

  const tableRows = data?.map((data, index) => {
    if (data.status === "Selected") {
      selected = selected + 1;
    } else if (data.status === "Aligned") {
      aligned = aligned + 1;
    } else {
      rejected = rejected + 1;
    }
    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.experience} years</td>
        <td>{data.status}</td>
        <td>{data.department}</td>
        <td>
          <Dropdown trigger="hover">
            <Dropdown.Toggle
              variant="none"
              className="dropdown-toggle"
            >
              &#8226; &#8226; &#8226;
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Feedback</Dropdown.Item>
              <Dropdown.Item href="#action-2"><Button onClick={() => handleDelete(data._id)}>Delete</Button></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  });

  const statsData = [
    {
      count: selected,
      title: "Selected",
    },
    {
      count: rejected,
      title: "Rejected",
    },
    {
      count: aligned,
      title: "Aligned",
    },
    {
      count: total,
      title: "Interviews",
    },
  ];

  return (
    <>
      <Header />
      <br />
      <section class="divs">
        {statsData.map((data) => (
          <Stats count={data.count} title={data.title} />
        ))}
      </section>
      <div class="table-size">
        <Button
          variant="secondary"
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          Add candidate
        </Button>
        {isOpen && (
          <Feedback
            data={data}
            isOpen={isOpen}
            setOpen={setOpen}
            setRefetch={setRefetch}
          />
        )}
        <br />
        <br />
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">S No.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Experience</th>
              <th scope="col">Status</th>
              <th scope="col">Department</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    </>
  );
};

export default HomePage;

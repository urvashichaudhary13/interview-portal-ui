import React, { useEffect, useState } from "react";
import { Header, Stats, AddCandidate } from "../../components";
import { Dropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./style.css";
import { FeedbackForm } from "../../components/feedbackform/FeedbackForm";

export const HomePage = () => {
  const [isOpen, setOpen] = useState(false);
  const [feedbackFormOpen, setFeedbackFormOpen] = useState(false);
  let selected = 0;
  let aligned = 0;
  let rejected = 0;
  const [data, setData] = useState([]);
  const [isRefetch, setRefetch] = useState(false);
  const [state, setState] = useState({
    name: "",
    email: "",
    department: "",
    experience: 0,
    status: "Aligned",
    jobProfile: "",
  });
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

  const handleDelete = async (id) => {
    console.log("e--------", id);
    await fetch(
      `http://localhost:3006/api/candidate/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3006",
        },
      }
    );
  };

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
        <td>{data.jobProfile}</td>
        <td>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              <i class="bi bi-three-dots"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  setFeedbackFormOpen(true);
                }}
              >
                Feedback
              </Dropdown.Item>
              {feedbackFormOpen && (
                <FeedbackForm
                  data={data}
                  setState={setState}
                  isOpen={feedbackFormOpen}
                  setOpen={setFeedbackFormOpen}
                  setRefetch={setRefetch}
                />
              )}
              <Dropdown.Item
                onClick={() => {
                  handleDelete(data._id);
                  setRefetch(true);
                }}
              >
                Delete
              </Dropdown.Item>
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
          className="add-candidate"
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          Add candidate
        </Button>
        {isOpen && (
          <AddCandidate
            data={data}
            isOpen={isOpen}
            setOpen={setOpen}
            setRefetch={setRefetch}
            state={state}
            setState={setState}
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
              <th scope="col">Job Profile</th>
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

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Feedback = (props) => {
  const { isOpen, setOpen, setRefetch } = props;
  const [state, setState] = useState({
    name: "",
    email: "",
    department: "",
    experience: 0,
    status: "Aligned",
  });

  const handleChange = (selected, action) => {
    if (action === "name") {
      setState({ ...state, name: selected });
    } else if (action === "email") {
      setState({ ...state, email: selected });
    } else if (action === "experience") {
      setState({ ...state, experience: selected });
    } else if (action === "department") {
      setState({ ...state, department: selected });
    } else {
      setState({ ...state, status: selected });
    }
  };

  const handleSubmit = async (e) => {
    let dataApi = await fetch("http://localhost:3006/api/candidate", {
      method: "POST",
      body: JSON.stringify(e),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3006",
      },
    });
    dataApi = await dataApi.json();
    console.log("data:::::::::::;;", dataApi);
    setRefetch(true);
  };

  return (
    <Modal show={isOpen} onHide={() => setOpen(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add new candidate</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              onChange={(e) => handleChange(e.target.value, "name")}
            />
          </Form.Group>
          <Form.Group className="mb-3"> 
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => handleChange(e.target.value, "email")}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Experience</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Experience"
              onChange={(e) => handleChange(e.target.value, "experience")}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Department</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter department"
              onChange={(e) => handleChange(e.target.value, "department")}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit({ ...state });
            setOpen(false);
          }}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Feedback;

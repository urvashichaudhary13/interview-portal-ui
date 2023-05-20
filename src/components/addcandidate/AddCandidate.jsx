import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./style.css";

const AddCandidate = (props) => {
  const { isOpen, setOpen, setRefetch, state, setState } = props;

  const handleChange = (selected, action) => {
    if (action === "name") {
      setState({ ...state, name: selected });
    } else if (action === "email") {
      setState({ ...state, email: selected });
    } else if (action === "experience") {
      setState({ ...state, experience: selected });
    } else if (action === "jobProfile") {
      setState({ ...state, jobProfile: selected })
    }
    else {
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
    await dataApi.json();
    setRefetch(true);
  };

  return (
    <Modal show={isOpen} onHide={() => setOpen(false)}>
      <Modal.Header closeButton>
        <Modal.Title className="add-candidate-heading">Add new candidate</Modal.Title>
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
            <Form.Label>Job Profile</Form.Label>
            <Form.Select
              type="text"
              required
              onChange={(e) => handleChange(e.target.value, "jobProfile")}
            >
              <option value=""> Please Select</option>
              <option value="React Developer">React Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="PHP Developer">PHP Developer</option>
              <option value="Android Developer">Android Developer</option>
              <option value="IOS Developer">IOS Developer</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Experience</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Experience"
              onChange={(e) => handleChange(e.target.value, "experience")}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button
        className="submit"
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

export default AddCandidate;

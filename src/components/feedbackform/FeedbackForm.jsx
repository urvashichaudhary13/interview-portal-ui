import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./style.css";

const FeedbackForm = (props) => {
  const [selectedValue, setSelectedValue] = useState("Aligned");
  const [feedback, setFeedback] = useState("");
  const { isOpen, setOpen, data, setState, setRefetch } = props;
  const handleDropDownChange = (e) => {
    setSelectedValue(e || "Selected");
  };

  const handleSubmitFeedback = async (_input) => {
    let result;
    result = await fetch("http://localhost:3006/api/candidate", {
      method: "PUT",
      body: JSON.stringify(_input),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3006",
      },
    });
    result = await result.json();
    return result;
  };
  return (
    <Modal show={isOpen} onHide={() => setOpen(false)}>
      <Modal.Header closeButton>
        <Modal.Title className="add-candidate-heading">
          Interview Feedback Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="container">
          <Form.Group className="mb-3 b-color">
            <Form.Label>
              <b>Name</b>
            </Form.Label>
            <Form.Control className="my-input" value={data.name} disabled />
          </Form.Group>
          <Form.Group className="b-color mb-3">
            <Form.Label>
              <b>Email</b>
            </Form.Label>
            <Form.Control
              type="email"
              className="my-input"
              value={data.email}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3 b-color">
            <Form.Label>
              <b>Department</b>
            </Form.Label>
            <Form.Control
              type="text"
              className="my-input"
              value={data.department}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3 b-color">
            <Form.Label>
              <b>Job Profile</b>
            </Form.Label>
            <Form.Control
              type="text"
              className="my-input"
              disabled
              value={data.jobProfile}
            />
          </Form.Group>
          <Form.Group className="mb-3 b-color">
            <Form.Label>
              <b>Experience</b>
            </Form.Label>
            <Form.Control
              type="text"
              className="my-input"
              value={data.experience}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3 b-color">
            <Form.Label>
              <b>Status</b>
            </Form.Label>
            <Form.Select
              type="text"
              required
              className="my-input"
              value={selectedValue}
              onChange={(e) => handleDropDownChange(e.target.value)}
            >
              <option value="Aligned"> Please Select</option>
              <option value="Selected">Selected</option>
              <option value="Rejected">Rejected</option>
              <option value="Aligned">Aligned</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="seven">
              <b>Feedback</b>
            </Form.Label>
            <Form.Control
              as="textarea"
              className="seven"
              style={{
                height: "100px",
                width: "415px",
                resize: "none",
                overflow: "auto",
              }}
              type="text"
              onChange={(e) => setFeedback(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Button
          type="submit"
          className="feedbackbutton"
          onClick={(e) => {
            e.preventDefault();
            handleSubmitFeedback({
              ...data,
              status: selectedValue,
              feedbacks: feedback,
            });
            setState({
              ...data,
              status: selectedValue,
            });
            setOpen(false);
            setRefetch(true);
          }}
        >
          Share Feedback
        </Button>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export { FeedbackForm };
//

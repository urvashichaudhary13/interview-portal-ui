import React, { useState } from "react";
import "./feedbackstyle.css";

const Feedback = (props) => {
  const { data, setData } = props;
  const [state, setState] = useState({
    name:"",
    email:"",
    department:"",
    experience:0,
    status:"",
  })

  const handleChange = (selected, action) => {
    if (action === "name") {
      setState({ ...state, name:selected});
    } else if (action === "email") {
      setState({...state, email:selected});
    } else {
      setState({...state, department:selected});
    }
  };

  const handleSubmit = (e) => {
    data.push({
      name: e.name,
      email: e.email,
      department: e.department,
      experience: e.experience,
      status: e.status,
    });
    const updatedData = [...data]
    // updatedData.push(data)
    setData(updatedData);
  };

  return (
    <>
      <div class="modal" id="myModal">
        <div class="modal-dialog modal-fullscreen-xl-down">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title  modal-htitle">Candidate Registeration</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div class="modal-body">
              <form class="aligned-elements" action="handleSubmit()">
                <label>Name</label>
                <input
                  onChange={(e) => handleChange(e.target.value, "name")}
                  required
                />
                <br />
                <label class="input-gap">Email</label>
                <input
                  onChange={(e) => handleChange(e.target.value, "email")}
                  required
                />
                <br />
                <label class="input-gap">Department</label>
                <input
                  onChange={(e) => handleChange(e.target.value, "department")}
                />
                <br />
                <label class="input-gap">Position</label>
                <input required />
                <br />
                <label class="input-gap">Experience</label>
                <input required />
                <br />
              </form>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn submit-button"
                data-bs-dismiss="modal"
                onClick={() => handleSubmit({ ...state })}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;

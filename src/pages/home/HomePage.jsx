import { useState } from "react";
import { Header, Stats, Feedback } from "../../components";
import { tableData } from "../../mocks";
import "./style.css";

export const HomePage = () => {

  let selected = 0;
  let aligned = 0;
  let rejected = 0;
  const [data,setData] = useState(tableData)
  const total = data.length;

  const tableRows = data.map((data, index) => {
    if(data.status === 'Selected'){
      selected= selected+1;
    } else if(data.status === 'Aligned'){
      aligned=aligned+1
    } else {
      rejected=rejected+1;
    }
    return (
      <tr>
        <th scope="row">{index+1}</th>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.experience} years</td>
        <td>{data.status}</td>
        <td>{data.department}</td>
        <td><b><i class="bi bi-three-dots"></i></b></td>
      </tr>
    );
  });

  const statsData = [
    {
      count: selected,
      title: "Selected"
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
      count:total,
      title: "Interviews",
    }
  ]



  return (
    <>
      <Header />
      <br />
      <section class="divs">
        {statsData.map((data) => (
            <Stats 
            count={data.count}
            title={data.title}
             />
        ))}
      </section>
      <div class="table-size">
      <button type="button" class="btn add-candidate" data-bs-toggle="modal" data-bs-target="#myModal">Add candidate</button>
      <Feedback data={data} setData={setData}/>
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

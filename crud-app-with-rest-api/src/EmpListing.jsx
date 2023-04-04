import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const EmpListing = () => {
  const [empdata, setEmpData] = useState(null);
  console.log(empdata, " data from api");
  const navigate = useNavigate();


  function LoadEdit(id) {
    navigate("/employee/edit/"+id);
  }
  function RemoveFunc(id) {
    if(window.confirm('Do you want to remove?')){
      fetch("http://localhost:3000/employee/"+id, {
      method: "DELETE",
    })
      .then((res) => {
        alert("Remove Successfully");
        window.location.reload()
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
    }
  
  function LoadDetails(id) {
    navigate("/employee/detail/" + id);
  }

  // console.log(empdata, "empdata");
  const API = "http://localhost:3000/employee";
  const fetchData = () => {
    fetch(API)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setEmpData(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2 style={{ textAlign: "center" }}>Employee Listing</h2>
        </div>

        <div className="card-body">
          <div>
            <Link className="btn btn-success" to="/employee/create">
              {" "}
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empdata &&
                empdata.map((data) => {
                  return (
                    <tr>
                      <td> {data.id} </td>
                      <td> {data.name} </td>
                      <td> {data.email} </td>
                      <td> {data.phone} </td>
                      <td style={{ display: "flex", gap: "20px" }}>
                        <a
                          // to={`/employee/edit/${data.id}`}
                          onClick={() => LoadEdit(data.id)}
                          className="btn btn-success"
                        >
                          Edit
                        </a>
                        <a
                          onClick={() => RemoveFunc(data.id)}
                          className="btn btn-danger"
                        >
                          Remove
                        </a>
                        <a
                          // to='/employee/detail/:{data.id}'
                          // to={`/employee/detail/:${data.id}`}
                          onClick={() => {
                            LoadDetails(data.id);
                          }}
                          className="btn btn-primary"
                        >
                          Details
                        </a>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmpListing;

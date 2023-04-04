import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetails = () => {
  const { empid } = useParams();
  const [details, setDetails] = useState({});
  console.log(details, "details comp");

  useEffect(() => {
    fetch("http://localhost:3000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        console.log(resp, " resp");
        setDetails(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '50px'
    }}>
      {details && (
        <div style={{
          padding: '40px',
          border: '1px solid gray'
        }}> 
          <h1>
            My name is {details.name} and  ID is {details.id}
          </h1>
          <h2>Contact Details</h2>
          <h5>Email is : {details.email} </h5>
          <h5>Phone No is : {details.phone} </h5>
          <Link to='/' className="btn btn-danger" style={{
            display:'flex',
            marginTop: '30px',
            justifyContent: 'center'
          }}>Back to Listing</Link>
        </div>
      )}
    </div>
  );
};

export default EmpDetails;

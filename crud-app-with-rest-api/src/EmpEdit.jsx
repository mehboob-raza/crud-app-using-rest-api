import React, {useEffect, useState} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';

const EmpEdit = () => {

  const [id, setID] = useState("");
  // console.log(id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [active, setActive] = useState(true);
  const [validation, setValidation] = useState(false);
  const [details, setDetails] = useState({});

  const navigate = useNavigate();
  const { empid } = useParams();
  console.log(details, "details comp");

  useEffect(() => {
    fetch("http://localhost:3000/employee/"+empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        console.log(resp, " resp");
        alert('save Successfully')
        // setDetails(resp);
        setID(resp.id)
        setName(resp.name)
        setEmail(resp.email)
        setPhone(resp.phone)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const empdata = {id, name, email, phone, active };

    fetch("http://localhost:3000/employee/"+empid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Save Successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }


  
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-title">
                <h2>Edit Emloyee</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input value={id} disabled className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                        required
                      />
                      
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        required
                      />
                       
                    </div>
                    <div className="form-group">
                      <label>Phone#</label>
                      <input
                        type="number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-control"
                        required
                      />
                      
                    </div>

                    <div className="form-check">
                      <input
                        checked={active}
                        onChange={(e) => setActive(e.target.checked)}
                        type="checkbox"
                        className="form-check-input"
                      />
                      <label>Is Active</label>
                    </div>
                    <div
                      className="form-group"
                      style={{
                        display: "flex",
                        gap: "20px",
                        justifyContent: "center",
                      }}
                    >
                      <button className="btn btn-success" type="submit"
                      
                      >
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EmpEdit
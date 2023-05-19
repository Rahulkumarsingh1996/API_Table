import React, { useState } from "react";
import "./Api.css";

const Api = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });

  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("input",inputs)
    if (editClick) {
      const tempTableData = tableData;
      Object.assign(tempTableData[editIndex], inputs);
      setTableData([...tempTableData]);
      setEditClick(false);
      setInputs({
        name: "",
        email: "",
      });
    } else {
      setTableData([...tableData, inputs]);
      setInputs({
        name: "",
        email: "",
      });
    }
  };

  const handleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData);
  };
  const handleEdit = (index) => {
    const tempData = tableData[index];
    setInputs({ name: tempData.name, email: tempData.email });
    setEditClick(true);
    setEditIndex(index);
  };
  return (
    <>
      <div className="con">
        <h1 className="crud_h1">Crud Operation</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input_name"
                value={inputs.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="input_email"
                value={inputs.email}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="main_btn">
              {editClick ? "update" : "Add"}
            </button>
          </form>
        </div>

        {/* <div className="form_div">
          <table className="">
            <thead>
              <tr>
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      {" "}
                      <th>Name</th>{" "}
                    </div>
                    <div className="col-md-4">
                      {" "}
                      <th>Email</th>
                    </div>
                    <div className="col-md-4">
                      {" "}
                      <th>Actions</th>
                    </div>
                  </div>
                </div>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, i) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <button onClick={() => handleEdit(i)} className="edit_btn">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(i)}
                      className="delete_btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}

<div className="container">
    <table border="1">
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
        </tr>
    </table>
</div>
      </div>
    </>
  );
};

export default Api;

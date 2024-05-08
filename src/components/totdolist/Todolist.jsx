import React, { useState, useEffect, Fragment } from "react";
import "./todolist.scss";
import Usercard from "../userCards/Usercard";
import { USERDATA } from "../../constants/userData";

const Todolist = ({ setShowModal }) => {
  function openModal() {
    setShowModal(true);
  }
  const [fname, setFname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [address, setAddress] = useState("");
  const [tel, setTel] = useState("");
  const [gender, setGender] = useState("");
  const [img, setImg] = useState("");
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) {
      setUsers(storedUsers);
    } else {
      setUsers(USERDATA);
      localStorage.setItem("users", JSON.stringify(USERDATA));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = new Date().getTime();
    const newUser = {
      id: id,
      fullName: fname,
      birthDate: birthdate,
      tel: tel,
      address: address,
      gender: gender,
      img: img,
    };

    if (editing) {
      const updatedUsers = users.map((user) =>
        user.id === editId ? newUser : user
      );
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setEditing(false);
      setEditId(null);
    } else {
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }

    resetForm();
  };

  const resetForm = () => {
    setFname("");
    setBirthdate("");
    setAddress("");
    setTel("");
    setGender("");
    setImg("")
  };

  const handleDeleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const filteredUsers = users.filter((user) => user.id !== id);
      setUsers(filteredUsers);
      localStorage.setItem("users", JSON.stringify(filteredUsers));
    }
  };

  const handleEditUser = (user) => {
    setEditing(true);
    setEditId(user.id);
    setFname(user.fullName);
    setBirthdate(user.birthDate);
    setAddress(user.address);
    setTel(user.tel);
    setGender(user.gender);
    setImg(user.img)
  };

  return (
    <Fragment>
      <h1 className="todolist__theme">Enter User Informations</h1>
      <div className="todolist container">
        <form className="form" onSubmit={handleSubmit} action="">
          <input
            required
            placeholder="Enter fullname"
            className="fname__input"
            value={fname}
            onChange={(event) => setFname(event.target.value)}
            type="text"
          />
          <input
            required
            placeholder="Enter birthdate"
            className="birthdate__input"
            value={birthdate}
            onChange={(event) => setBirthdate(event.target.value)}
            type="date"
          />

          <input
            required
            placeholder="Enter address"
            className="address__input"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            type="text"
          />
          <input
            required
            placeholder="Enter tel"
            className="tel__input"
            value={tel}
            onChange={(event) => setTel(event.target.value)}
            type="text"
          />
          <input
            required
            placeholder="Enter image url"
            className="tel__input"
            value={img}
            onChange={(event) => setImg(event.target.value)}
            type="text"
          />
          <div className="gender">
            <div className="male">
              <label htmlFor="male">male</label>
              <input
                type="radio"
                name="gender"
                onChange={(event) => setGender(event.target.value)}
                value="male"
                checked={gender === "male"}
                id="male"
              />
            </div>
            <div className="female">
              <label htmlFor="female">female</label>
              <input
                type="radio"
                name="gender"
                onChange={(event) => setGender(event.target.value)}
                value="female"
                checked={gender === "female"}
                id="female"
              />
            </div>
          </div>

          <button className="create-card">{editing ? "Save" : "Create"}</button>
        </form>
      </div>
      <Usercard>
        {users.map((user) => (
          <div className="user__card" key={user.id}>
            <div className="user__card__image">
              <img src={user.img} alt="" />
            </div>
            <div className="user__card__info">
              <h1>{user.fullName}</h1>
              <h2>{user.birthDate}</h2>
              <h3>{user.tel}</h3>
              <p>{user.address}</p>
              <p>Gender: {user.gender}</p>
            </div>
            <div className="user__card-btns">
              <button className="edit-btn" onClick={() => handleEditUser(user)}>
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDeleteUser(user.id)}
              >
                Delete
              </button>
              <button className="learn-btn" onClick={() => openModal()}>
                Details
              </button>
            </div>
          </div>
        ))}
      </Usercard>
    </Fragment>
  );
};

export default Todolist;

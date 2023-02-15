import React, { useState } from "react";
import Button from "../../components/Button";
import TextFeild from "../../components/TextFeild";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editUser } from "./userSlice";

const EditUser = () => {
  const params = useParams();
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const existingUser = users.filter((user) => user.id === params.id);
  const { name, email } = existingUser[0];
  const [values, setValues] = useState({
    name,
    email,
  });

  const handleEditUser = () => {
    setValues({ name: "", email: "" });
    console.log(values);
    dispatch(
      editUser({
        id: params.id,
        name: values.name,
        email: values.email,
      })
    );
    navigate("/");
  };
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextFeild
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "John Doe" }}
      ></TextFeild>
      <br />
      <TextFeild
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email  ", placeholder: "John@email.com" }}
      ></TextFeild>
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
};

export default EditUser;

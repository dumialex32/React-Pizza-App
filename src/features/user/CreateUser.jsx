import { useState } from "react";
import { createUsername } from "./userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    console.log("test");
    e.preventDefault();
    dispatch(createUsername(username));
  }

  return (
    <div className="text-center space-y-3 mb-7">
      <h2> Welcome, please tell us your name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input border-2 border-stone-100"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </form>
      <Button to="/menu" type="primary">
        Start ordering
      </Button>
    </div>
  );
}

export default CreateUser;

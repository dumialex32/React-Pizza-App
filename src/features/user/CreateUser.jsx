import { useState } from "react";
import { createUsername, getUser } from "./userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(getUser);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createUsername(username));
    navigate("/menu");
  }

  return (
    <div className="text-center space-y-3 mb-7">
      <h2> Welcome, please tell us your name</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-3"
      >
        <input
          type="text"
          className="input border-2 border-stone-100"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        {username && <Button type="primary">Start ordering</Button>}
      </form>
    </div>
  );
}

export default CreateUser;

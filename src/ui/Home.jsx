import { useState } from "react";

import CreateUser from "../features/user/CreateUser";
import { useSelector } from "react-redux";
import { getUser } from "../features/user/userSlice";
import Button from "./Button";

function Home() {
  const [name, setName] = useState("");
  const username = useSelector(getUser);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="py-8 flex flex-col items-center">
        <h1 className="text-xl text-yellow-500 font-semibold text-center mb-7">
          <span className="text-stone-700">The best pizza.</span>
          <br />
          Straight out of the oven, straight to you.
        </h1>

        {(!username && <CreateUser />) ||
          (username && (
            <Button to={"/menu"} type="link">
              &larr; Pizza Menu
            </Button>
          ))}
      </div>
    </div>
  );
}

export default Home;

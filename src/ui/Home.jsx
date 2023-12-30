import { useState } from "react";

import CreateUser from "../features/user/CreateUser";

function Home() {
  const [name, setName] = useState("");
  console.log(name);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="py-8">
        <h1 className="text-xl text-yellow-500 font-semibold text-center mb-7">
          <span className="text-stone-700">The best pizza.</span>
          <br />
          Straight out of the oven, straight to you.
        </h1>
        <CreateUser />
      </div>
    </div>
  );
}

export default Home;

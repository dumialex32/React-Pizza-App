import { useState } from "react";
import Button from "./Button";

function Home() {
  const [name, setName] = useState("");
  console.log(name);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="py-8">
        <h1 className="text-xl text-yellow-500 font-semibold text-center mb-7">
          <span className="text-stone-700">The best pizza.</span>
          <br />
          Straight out of the oven, straight to you.
        </h1>

        <div className="text-center space-y-3 mb-7">
          <h2> Welcome, please tell us your name</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="input border-2 border-stone-100"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </form>
          <Button to="/order/new" type="primary">
            Start ordering
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;

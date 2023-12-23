function Home() {
  return (
    <div className="py-5">
      <h1 className="text-xl text-yellow-500 font-semibold text-center mb-7">
        <span className="text-stone-700">The best pizza.</span>
        <br />
        Straight out of the oven, straight to you.
      </h1>

      <div className="text-center">
        <h2>Welcome, please tell us your name</h2>
        <input type="text" className="input"></input>
      </div>
    </div>
  );
}

export default Home;

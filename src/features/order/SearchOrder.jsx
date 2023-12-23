/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`order/${query}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="w-60 h-8 text-sm px-3 py-1.5 rounded-full focus:outline-none focus:ring focus:ring-yellow-400 md:w-96 placeholder:text-stone-400"
          placeholder="Search order..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchOrder;

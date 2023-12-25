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
          className="input w-64 sm:w-80 md:w-96 md:focus:w-112"
          placeholder="Search order..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchOrder;

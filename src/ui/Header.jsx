import { Link } from "react-router-dom";

import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex justify-between items-center bg-yellow-400 bord uppercase px-4 py-3 border-b border-stone-500 sm:px-6">
      <Link className="tracking-wider text-sm sm:tracking-widest mr-4 " to="/">
        React Pizza App
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;

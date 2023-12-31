import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <div className="h-12 bg-yellow-500 flex items-center justify-between gap-3 sm:gap-6 px-4 py-2.5 sm:px-6 sm:py-3">
      <Link
        to="/"
        className="text-md sm:text-2xl hover:text-yellow-300 font-semibold"
      >
        %COMPANY NAME
      </Link>
      <SearchOrder />
      <Username />
    </div>
  );
}

export default Header;

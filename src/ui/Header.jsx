import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <div className="bg-yellow-500 flex items-center justify-between gap-6 px-6 py-3">
      <Link to="/" className="text-2xl hover:text-yellow-300 font-semibold">
        Fast React Pizza
      </Link>
      <SearchOrder />
      <Username />
    </div>
  );
}

export default Header;

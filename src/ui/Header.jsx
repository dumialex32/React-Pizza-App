import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <div className="bg-yellow-500 flex items-center justify-between gap-6 px-6 py-3">
      <h1 className="text-2xl">Fast React Pizza</h1>
      <SearchOrder />
      <Username />
    </div>
  );
}

export default Header;

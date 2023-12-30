import { useSelector } from "react-redux";
import { getUsername } from "./userSlice";

function Username() {
  const username = useSelector(getUsername);

  return (
    <div className="hidden md:block mt-2 uppercase text-sm font-semibold ">
      {username}
    </div>
  );
}

export default Username;

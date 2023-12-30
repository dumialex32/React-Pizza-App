import { useSelector } from "react-redux";
import { getUsername } from "./userSlice";

function Username() {
  const username = useSelector((state) => state.user.username);
  console.log(username);

  return (
    <p className="text-base uppercase font-semibold hidden sm:block md:text-lg">
      {username}
    </p>
  );
}

export default Username;

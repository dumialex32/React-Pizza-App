import { useSelector } from "react-redux";
import { getUser } from "./userSlice";

function Username() {
  const username = useSelector(getUser);
  console.log(username);

  return (
    <p className="text-base uppercase font-semibold hidden sm:block md:text-lg">
      {username}
    </p>
  );
}

export default Username;

import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { fetchUserAddress } from "./userSlice";

function GetUserPosition() {
  const dispatch = useDispatch();
  return (
    <Button
      type="secondary"
      onClick={(e) => {
        e.preventDefault();
        dispatch(fetchUserAddress());
      }}
    >
      Get position
    </Button>
  );
}

export default GetUserPosition;

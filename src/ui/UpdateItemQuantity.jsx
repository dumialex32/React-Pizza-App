import { useDispatch } from "react-redux";
import Button from "./Button";

function UpdateItemQuantity({ children, onClick }) {
  return (
    <Button type="round" onClick={onClick}>
      {children}
    </Button>
  );
}

export default UpdateItemQuantity;

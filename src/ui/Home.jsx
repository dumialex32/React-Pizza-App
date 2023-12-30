import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "../features/order/Button";

function Home() {
  const username = useSelector((state) => state.username);

  return (
    <div className="my-10 text-center px-4">
      <h1 className="text-xl text-stone-500 font-semibold mb-8 sm:my-16">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {(!username && <CreateUser />) ||
        (username && (
          <Button to="/menu" type="primary">
            To Menu
          </Button>
        ))}
    </div>
  );
}

export default Home;

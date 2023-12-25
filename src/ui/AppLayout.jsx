/* eslint-disable no-constant-condition */
import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  console.log(isLoading);

  return (
    <div className="grid grid-rows-[auto,1fr,auto] h-screen">
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <Main>
          <Outlet />
        </Main>
      )}

      <CartOverview />
    </div>
  );
}

export default AppLayout;

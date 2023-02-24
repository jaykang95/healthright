import { useEffect } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import HomePage from "../../components/home/HomePage.component";
import Footer from "./footer/Footer.layout";
import Header from "./header/Header.layout";
import { useDispatch, useSelector } from "react-redux";
import {
  checkUserSession,
  setRequiresAdminAuth,
} from "../../app/stores/user/user.action";
import { fetchProductsLoading } from "../../app/stores/products/product.action";
import {
  selectCurrentUser,
  selectRequiresAdminAuth,
} from "../stores/user/user.selector";
import AdminHeader from "./admin/header/AdminHeader.layout";
import AdminFooter from "./admin/footer/AdminFooter.layout";
import AdminSidepanel from "./admin/sidepanel/AdminSidepanel.layout";

const App = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);

  const requiresAdminAuth = useSelector(selectRequiresAdminAuth);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProductsLoading());
  }, [dispatch]);

  useEffect(() => {
    if (location.pathname.startsWith("/admin")) {
      dispatch(setRequiresAdminAuth(true));
    } else {
      dispatch(setRequiresAdminAuth(false));
    }
  }, [dispatch, location.pathname]);

  useEffect(() => {
    const messengerElement = document.getElementById("my-chatbot");
    if (location.pathname.startsWith("/admin") || location.pathname.startsWith("/checkout")) {
      messengerElement.style.display = "none"
    } else {
      messengerElement.style.display = "block"
    }
  }, [location.pathname]);

  switch (requiresAdminAuth) {
    case true:
      if (currentUser === null && location.pathname === "/admin/sign-in") {
        return (
          <div className="app">
            <Outlet />
          </div>
        );
      }
      return (
        <div className="dashboard">
          <AdminHeader />
          <div className="dashboard__body">
            <AdminSidepanel />
            <main className="dashboard__main-content">
              <ScrollRestoration />
              <Outlet />
            </main>
          </div>
          <AdminFooter />
        </div>
      );

    default:
      return (
        <div className="app">
          <ScrollRestoration />
          <Header />
          <div className="app__body">
            <main className="app__main-content">
              {location.pathname === "/" ? <HomePage /> : <Outlet />}
            </main>
          </div>
          <Footer />
        </div>
      );
  }
};

export default App;

// import { Modal } from "bootstrap";
import "./App.scss";
import Header from "./Components/Header";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import AppRoutes from "./Routes/AppRoutes";
import { useDispatch } from "react-redux";
import { handleRefresh } from "./redux/actions/userAction";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(handleRefresh());
    }
  }, []);

  return (
    <>
      <div className="App app-container">
        <Header />
        <Container>
          <AppRoutes />
        </Container>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
};

export default App;

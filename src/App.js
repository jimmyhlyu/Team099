import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddFriend from "./AddFriend";
import Survey from "./Survey";
import Dashboard from "./Dashboard";
import Profiles from "./Profiles";
import Login from "./Login";
import FirestoreTest from "./firebaseRelates/Firestore";
import {
  AddUser,
  GetUser,
  TestConnection,
  UpdateUser,
} from "./firebaseRelates/Database";
import "./App.css";
import Logo from "./assets/logo_bg.png";

function App() {
  FirestoreTest();
  TestConnection();
  UpdateUser();
  return (
    <body>
      <div class="sideBar">
        <Nav.Link className="home sideBarButton" href="dashboard"></Nav.Link>
        <Nav.Link className="add sideBarButton" href="add-friend"></Nav.Link>
        {/*<Nav.Link className="person sideBarButton" href="profiles"></Nav.Link>*/}
        {/*<Nav.Link className="light sideBarButton" href="survey"></Nav.Link>*/}
        <Nav.Link className="exit sideBarButton" href="login"></Nav.Link>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="" element={<></>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-friend" element={<AddFriend />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profiles" element={<Profiles />} />
          {/*<Route path="/survey" element={<Survey />} /> */}
        </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;


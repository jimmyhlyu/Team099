import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddFriend from "./AddFriend";
import Dashboard from "./Dashboard";
import Login from "./Login";
import FirestoreTest from "./firebaseRelates/Firestore";

import "./App.css";
import Logo from "./logo_bg.png";

function App() {
  FirestoreTest();
  return (
    <body>
      <div class="sideBar">
        <Nav.Link className="home sideBarButton" href="dashboard"></Nav.Link>
        <Nav.Link className="add sideBarButton"></Nav.Link>
        <Nav.Link className="person sideBarButton"></Nav.Link>
        <Nav.Link className="light sideBarButton"></Nav.Link>
        <Nav.Link className="exit sideBarButton" href="login"></Nav.Link>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="" element={<></>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-friend" element={<AddFriend />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;


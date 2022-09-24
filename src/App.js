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
    <>
      <div class="sideBar">
        <div class="home sideBarButton"></div>
        <div class="add sideBarButton"></div>
        <div class="person sideBarButton"></div>
        <div class="light sideBarButton"></div>
        <div class="exit sideBarButton"></div>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="" element={<></>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-friend" element={<AddFriend />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


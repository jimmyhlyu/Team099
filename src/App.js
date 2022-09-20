import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddFriend from "./AddFriend";
import Friends from "./Friends";
import Login from "./Login";
import FirestoreTest from "./Firestore";

import "./App.css";
import Logo from "./4.jpg";

function App() {
  FirestoreTest();
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="friends">Friends</Nav.Link>
              <Nav.Link href="add-friend">Add Friend</Nav.Link>
              <Nav.Link href="login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search friends..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>

      <BrowserRouter>
        <Routes>
          <Route path="" element={<></>} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/add-friend" element={<AddFriend />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

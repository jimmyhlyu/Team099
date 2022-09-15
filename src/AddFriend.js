import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AddFriend() {
  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col sm={12} md={8} lg={6}>
            <h1 className="text-center">NEW FRIEND</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="First Met At" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="First Met On" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Contact Info" />
              </Form.Group>
              <Row style={{ justifyContent: "space-between" }}>
                <Col sm md lg={1}>
                  <Button variant="danger" type="submit">
                    Clear
                  </Button>
                </Col>
                <Col sm md lg={1}>
                  <Button variant="success" type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default AddFriend;

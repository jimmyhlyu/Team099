import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AddFriend() {
  return (
    <>
      <h1>NEW FRIEND</h1>
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
        <Button variant="primary" type="submit">
          Clear
        </Button>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default AddFriend;

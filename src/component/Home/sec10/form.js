import { Form, Button } from "react-bootstrap";
import "./sec10.css";
function Subform() {
  return (
    <Form className="d-flex justify-content-between align-items-center">
      <Form.Group className="in" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Button className="sub-btn" variant="" size="lg">
        Subscribe
      </Button>
    </Form>
  );
}

export default Subform;

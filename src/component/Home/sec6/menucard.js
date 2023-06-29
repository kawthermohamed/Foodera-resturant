import { Card } from "react-bootstrap";
import Morebtn from "../../reusablecom/learnmorebtn";
import "./sec6.css";
function Menucard({ image, title, text, saleprice, originprice }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <div className="price fw-bold mb-3">
          <span className="sale me-3"> $ {saleprice}</span>{" "}
          <span className="origin">$ {originprice}</span>
        </div>
        <Morebtn />
      </Card.Body>
    </Card>
  );
}

export default Menucard;

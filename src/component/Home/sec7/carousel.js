import { Carousel } from "react-bootstrap";
import "./carousel.css";
function Testimonials() {
  return (
    <Carousel className="container py-5">
      <Carousel.Item>
        <img
          className="mb-4"
          src="https://st3.depositphotos.com/1007566/13175/v/600/depositphotos_131750410-stock-illustration-woman-female-avatar-character.jpg"
          alt="First slide"
        />
        <p className="text-secondary">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <div className="teller-name fw-bold">kawther mohamed - front end</div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="mb-4"
          src="https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg"
          alt="Second slide"
        />
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

        <div className="teller-name fw-bold">israa adel - teacher</div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="mb-4"
          src="https://static.vecteezy.com/system/resources/previews/004/773/704/original/a-girl-s-face-with-a-beautiful-smile-a-female-avatar-for-a-website-and-social-network-vector.jpg"
          alt="Third slide"
        />
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

        <div className="teller-name fw-bold">sara youssef - web developer</div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Testimonials;

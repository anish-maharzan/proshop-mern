import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3"></Col>
          <p>ProShop &copy; {currentYear}</p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

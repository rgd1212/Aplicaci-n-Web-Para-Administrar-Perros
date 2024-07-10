import { Container, Row, Col } from "react-bootstrap";

export default function FooterApp() {
  return (
    <footer className="py-3 bg-dark text-white">
      <Container>
        <Row>
          <Col xs={12}>
            <p className="mb-0 d-flex justify-content-center">
              © {new Date().getFullYear()} Rodrigo Gonzales Dolz
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

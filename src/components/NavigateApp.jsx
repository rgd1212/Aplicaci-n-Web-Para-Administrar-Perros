import { Navbar, Container} from "react-bootstrap";
import { Link} from "react-router-dom";

export default function NavigateApp() {
  return (
    <>
      <Navbar bg="dark" expand="lg" className="py-3" data-bs-theme="dark">
        <Container>
          <div>
            
            <Navbar.Brand>App Web Para Administrar Perros</Navbar.Brand>
          </div>
          <div className="d-flex">
            <div className=" mx-4 ">
              <Link to="/">HOME</Link>
            </div>
            <div className=" mx-4">
              <Link to="agregar">AGREGAR NUEVO PERRO</Link>
            </div>
            <div className="mx-4">
              <Link to="ver">VER PERROS</Link>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

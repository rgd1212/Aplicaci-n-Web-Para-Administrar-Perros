import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ObtenerPerros() {

  const url = "https://sample-dogs-api.netlify.app/api/v1/dogs";
  const navigate = useNavigate();

  const [perros, setPerros] = useState([]);

  // FUNCION DE OBTENER PERROS DE API
  const obtenerPerros = () => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data)
        setPerros(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }  

  useEffect(() => {
    obtenerPerros();
  }, []);

  // FUNCION ELIMINAR PERROS
  const eliminar = (id) => {
    axios.delete(url + '/' + id)
      .then((res) => {
        console.log(res);
        obtenerPerros(); 
      })
      .catch((error) => {
        console.log(error);
      })
  }
  
  return (
    <>
      <div style={{ background: "#BEC526" }}>
        {/* <h1>Obtener Los Perros</h1> */}
        <Container className="mt-4">
          <Row>
            {perros.map((perro) => (
              <Col key={perro._id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    // src="holder.js/100px180?text=Image cap"
                    src={perro.image}
                  />
                  <Card.Body>
                    <Card.Title>{ perro.name }</Card.Title>
                    <Card.Text>{ perro.bio }</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      Es de raza { perro.breed } de color { perro.color }
                    </ListGroup.Item>
                    <ListGroup.Item>Tiene {perro.age} años con una personalidad { perro.personality }</ListGroup.Item>
                    <ListGroup.Item>Y su Juguete favorito es { perro.favoriteToy  }</ListGroup.Item>
                  </ListGroup>
                  <Card.Body  className="mx-auto">
                    <Button onClick={() => navigate('/actualizar/' + perro._id)} variant="info" size="lg">
                      Modificar
                    </Button>
                    <Button onClick={() => {eliminar(perro._id)}} variant="danger" size="lg">
                      Eliminar
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

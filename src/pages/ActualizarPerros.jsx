import axios from "axios"
import {  useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";


export default function ActualizarPerros() {
  const url = "https://sample-dogs-api.netlify.app/api/v1/dogs/";

  

  const navigate = useNavigate();
  const params = useParams();
  const [name, setName] = useState([]);
  const [image, setImage] = useState("");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");
  const [breed, setBreed] = useState("");
  const [color, setColor] = useState("");
  const [favoritetoy, setFavoriteToy] = useState("");
  const [personality, setPersonality] = useState("");


  // FUNCION MODIFICAR
  const modificar = () => {
    const data = {
      name,
      image,
      age,
      bio,
      breed,
      color,
      favoritetoy,
      personality,
    };
    axios
      .put(url + params.perroid, data)
      .then((res) => {
        console.log(res);
        navigate("/ver");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function valorName(e) {
    setName(e.target.value);
  }
  function valorImage(e) {
    setImage(e.target.value);
  }
  function valorAge(e) {
    setAge(e.target.value);
  }
  function valorBio(e) {
    setBio(e.target.value);
  }
  function valorBreed(e) {
    setBreed(e.target.value);
  }
  function valorColor(e) {
    setColor(e.target.value);
  }
  function valorFavoriteToy(e) {
    setFavoriteToy(e.target.value);
  }
  function valorPersonality(e) {
    setPersonality(e.target.value);
  }

  return (
    <>
      <div style={{ background: "#BEC526" }}>
        <div className="d-grid justify-content-center">
          <h2>Actualizar Datos del Perro</h2>
          <div
            style={{
              background: "#212529",
              height: "auto",
            }}
            className=" d-flex justify-content-center">
            <Form>
              <InputGroup className="mb-3 mt-3">
                <Form.Control
                  id="name"
                  onChange={valorName}
                  placeholder="Nombre"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <Form.Control
                  id="image"
                  onChange={valorImage}
                  placeholder="URL de la Imagen"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <Form.Control id="age" onChange={valorAge} placeholder="Edad" />
              </InputGroup>

              <InputGroup className="mb-3">
                <Form.Control
                  id="bio"
                  onChange={valorBio}
                  placeholder="Biografia"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <Form.Control
                  id="breed"
                  onChange={valorBreed}
                  placeholder="Raza"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <Form.Control
                  id="color"
                  onChange={valorColor}
                  placeholder="Color"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <Form.Control
                  id="favoriteToy"
                  onChange={valorFavoriteToy}
                  placeholder="Juguete favorito"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <Form.Control
                  id="personality"
                  onChange={valorPersonality}
                  placeholder="Personalidad"
                />
              </InputGroup>
              <div className="d-grid mb-2 ">
                <Button onClick={modificar} variant="info" size="lg">
                  Actualizar Perro
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

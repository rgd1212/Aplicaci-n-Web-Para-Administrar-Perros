import axios from "axios"
import { useEffect, useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";


export default function ActualizarPerros() {
  const url = "https://sample-dogs-api.netlify.app/api/v1/dogs/";

  const navigate = useNavigate();
  const params = useParams();

  // VARIABLES PARA LOS INPUTS
  const [nameApi, setNameApi] = useState('');
  const [imageApi, setImageApi] = useState('');
  const [ageApi, setAgeApi] = useState('');
  const [bioApi, setBioApi] = useState('');
  const [breedApi, setBreedApi] = useState('');
  const [colorApi, setColorApi] = useState('');
  const [favoriteToyApi, setFavoriteToyApi] = useState('');
  const [personalityApi, setPersonalityApi] = useState('');

  // VARIALES PARA LA API
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");
  const [breed, setBreed] = useState("");
  const [color, setColor] = useState("");
  const [favoriteToy, setFavoriteToy] = useState("");
  const [personality, setPersonality] = useState("");

  // VALORES API
    const data = {
      name,
      image,
      age,
      bio,
      breed,
      color,
      favoriteToy,
      personality,
  };
  // OBTENIENDO VALOR DEL PERRO
    useEffect(() => {
      axios
        .get(`${url}/${params.perroid}`)
        .then((res) => {
          setNameApi(res.data.name);
          setImageApi(res.data.image);
          setAgeApi(res.data.age);
          setBioApi(res.data.bio);
          setBreedApi(res.data.breed);
          setColorApi(res.data.color);
          setFavoriteToyApi(res.data.favoriteToy);
          setPersonalityApi(res.data.personality);
          console.log(res.data.name);
          console.log(res.data.image);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
  // FUNCION MODIFICAR
  const modificar = () => {
      axios.put(url + params.perroid, data)
      .then((res) => {
        console.log(res);
        navigate("/ver");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // FUNCION DE OBTENER VALORES INPUT
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
                  placeholder={nameApi}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <Form.Control
                  id="image"
                  onChange={valorImage}
                  placeholder={imageApi}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <Form.Control
                  id="age"
                  onChange={valorAge}
                  placeholder={ageApi}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <Form.Control id="bio" onChange={valorBio} value={bioApi} />
              </InputGroup>

              <InputGroup className="mb-3">
                <Form.Control
                  id="breed"
                  onChange={valorBreed}
                  placeholder={breedApi}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <Form.Control
                  id="color"
                  onChange={valorColor}
                  placeholder={colorApi}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <Form.Control
                  id="favoriteToy"
                  onChange={valorFavoriteToy}
                  placeholder={favoriteToyApi}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <Form.Control
                  id="personality"
                  onChange={valorPersonality}
                  placeholder={personalityApi}
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

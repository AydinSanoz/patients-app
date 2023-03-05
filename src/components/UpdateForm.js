import { updatePatient } from "@/lib/helper";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

const UpdateForm = (patient) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: patient?.name,
    surname: patient?.surname,
    email: patient?.email,
    diagnosis: patient?.diagnosis,
    treatment: patient?.treatment,
  });

  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Submit form data to the database or server

      updatePatient(patient._id, formData)
        .then((respond) => {
          console.log(respond);
          router.push({
            pathname: "/list",
          });
        })

        .catch((err) => console.log(err.message));
    }
    setValidated(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, file: event.target.files[0] });
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                required
                onChange={handleChange}
                value={formData.name}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Surname"
                name="surname"
                required
                onChange={handleChange}
                value={formData.surname}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid surname.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                required
                onChange={handleChange}
                value={formData.email}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formDiagnosis">
              <Form.Label>Diagnosis</Form.Label>
              <Form.Control
                type="textera"
                placeholder="Enter Diagnosis"
                name="diagnosis"
                required
                onChange={handleChange}
                value={formData.diagnosis}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid diagnosis.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formTreatment">
              <Form.Label>Treatment</Form.Label>
              <Form.Control
                type="textera"
                placeholder="Enter Treatment"
                name="treatment"
                required
                onChange={handleChange}
                value={formData.treatment}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid treatment.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                {" "}
                <br></br>
              </Form.Label>
              <Button type="submit">Update</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default UpdateForm;

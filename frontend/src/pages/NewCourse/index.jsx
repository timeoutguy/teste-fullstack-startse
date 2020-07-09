import React, { useState } from 'react';
import { Container, Form, Button, Row } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import api from '../../services/api';


export default function NewCourse() {

  const initialState = {
    title: '',
    subtitle: '',
    description: '',
    startedAt: new Date(),
    isActive: false,
  };  

  const [title, setTitle] = useState(initialState.title);
  const [subtitle, setSubtitle] = useState(initialState.subtitle);
  const [description, setDescription] = useState(initialState.description);
  const [startedAt, setStartedAt] = useState(initialState.startedAt);
  const [isActive, setIsActive] = useState(initialState.isActive);

  const clearFields = () => {
    setTitle(initialState.title);
    setSubtitle(initialState.subtitle);
    setDescription(initialState.description);
    setStartedAt(initialState.startedAt);
    setIsActive(initialState.isActive);
  }

  const handleSubmit = async () => {
    let body = {
      title,
      subtitle,
      description,
      startedAt,
      isActive,
    }

    try {
      await api.post('/courses', body);
      window.location.href = "/"; 
    } catch (error) {
      toast.error('Um erro ocorreu! 😦', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <Container className="mt-4">
      <h1> Adicionar novo curso </h1>
      <Form>
        <Form.Group >
          <Form.Label>Titulo</Form.Label>
          <Form.Control onChange={e => setTitle(e.target.value)} value={title} type="text" placeholder="Titulo do curso" />
        </Form.Group>

        <Form.Group >
          <Form.Label>Subtitulo</Form.Label>
          <Form.Control onChange={e => setSubtitle(e.target.value)} value={subtitle} type="text" placeholder="Subtitulo do curso" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Descrição</Form.Label>
          <Form.Control as="textarea" rows="3" onChange={e => setDescription(e.target.value)} value={description} />
        </Form.Group>
      
        <Form.Group>
          <Form.Label>Curso ativo</Form.Label>
          <Form.Control as="select" onChange={e => setIsActive(e.target.value)} value={isActive}>
            <option value={true}>Ativo</option>
            <option value={false}>Não ativo</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Começou em</Form.Label>
          <Calendar selected={startedAt} onChange={date => setStartedAt(date)} />
        </Form.Group>
      </Form>
      <Row className="mx-auto">
        <Button onClick={handleSubmit}> Enviar </Button>
        <Button variant='secondary' onClick={clearFields} style={{marginLeft: 5}}> Limpar campos  </Button>
      </Row>
      <ToastContainer />
    </Container>
  )
}

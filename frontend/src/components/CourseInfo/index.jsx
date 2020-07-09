import React, { useState } from 'react'
import { Card, Badge, Button, Modal, Form } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify';
import Calendar from 'react-calendar';
import api from '../../services/api';
import 'react-calendar/dist/Calendar.css';

export default function CourseInfo(props) {

  let initialState = {
    title: props.title,
    subtitle: props.subtitle,
    description: props.description,
    startedAt: props.date,
    isActive: props.isActive,
  };

  const [title, setTitle] = useState(initialState.title);
  const [subtitle, setSubtitle] = useState(initialState.subtitle);
  const [description, setDescription] = useState(initialState.description);
  const [startedAt, setStartedAt] = useState(initialState.startedAt);
  const [isActive, setIsActive] = useState(initialState.isActive);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSubmit = async () => {
    let body = {
      title,
      subtitle,
      description,
      startedAt,
      isActive,
    }

    try {
      await api.put(`/courses/${props.id}`, body);
      window.location.href = "/"; 
    } catch (error) {
      console.log(error)
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

  const handleDelete = async () => {
    try {
      await api.delete(`/courses/${props.id}`);
      window.location.href = "/"; 
    } catch (error) {
      console.log(error)
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
    <>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title> {props.title} </Card.Title>
          <Card.Subtitle> {props.subtitle} </Card.Subtitle>
          <Card.Text>
            {props.description}
          </Card.Text>
          <div className="d-flex justify-content-between">
            <div>
              <Badge variant={props.isActive ? 'success' : 'danger'}>
                {props.isActive ? 'Active' : 'No Active'}
              </Badge>
              <span> Started at: {props.startedAt} </span>
            </div>
            <div>
              <Button variant='warning' onClick={handleShow}> Editar </Button>
              <Button variant='danger' style={{ marginLeft: 10 }} onClick={handleDelete}> Excluir </Button>
            </div>
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Editar {props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          <ToastContainer />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

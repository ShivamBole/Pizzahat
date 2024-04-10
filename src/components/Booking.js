import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

function Booking() {
  return (
    <div>
      <Container className='mt-5'>
      <h1 className='text-start' style={{fontFamily:"brush script mt"}}>Book A Table</h1>
        <Row>
          <Col>
          <Form className='mt-4'>
          <Form.Group controlId="exampleForm.ControlInput1" className='mb-3'>
          <Form.Control type="text" placeholder="your Name" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput2" className='mb-3'>
          <Form.Control type="text" placeholder="Phone Number" />
        </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput3" className='mb-3'>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="exampleForm.Controlselect1" className='mb-3'>
        <Form.Select>
      <option className='disabled' style={{color:'#999'}}>How Many Persons?</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Select>
    </Form.Group>

    <Form.Group controlId="exampleForm.ControlInput4" className='mb-3'>
          <Form.Control type="date" />
        </Form.Group>

        <Button variant="warning" className='text-white fs-5 px-5 rounded-pill mt-4 float-start'>Book Now</Button>
          </Form>
          </Col>

          <Col>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5350.286651016106!2d73.83795164972175!3d18.518778247499846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c077fb3b7107%3A0x971d551b0ffecc71!2sDomino&#39;s%20Pizza!5e0!3m2!1sen!2sin!4v1711084931738!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='x'></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Booking
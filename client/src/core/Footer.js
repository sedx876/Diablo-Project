import React from 'react'
import '../styles/footer.css'
import { Container, Row, Col  } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer class='bg-light' id='footer'>
      <Container>
        <Row>

          <Col className='text-center text-dark' id='foot'>
            About
          </Col>

          <Col className='text-center text-dark' id='foot'>
            Terms of Service
          </Col>

          <Col className='text-center text-dark' id='foot'>
            Links
          </Col>

          <Col className='text-center text-dark' id='foot'>
            Contact Us
          </Col>
        </Row>
        <br/>
        <Row>
        <p 
          className='text-dark' id='footRow'>
            This app has no affiliation with Diablo 3 or Blizzard 
            Entertainment, INC.
        </p>
        </Row>

        <Row>
        <p 
          className='text-dark' id='footRow'>
            Rated Mature 17+ by the ESRB for Blood, Gore and Violence
        </p>
        </Row>

        <Row>
          <p className='text-dark' id='footRow'>Copyright &copy; 2021 D3PlayrPad</p>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
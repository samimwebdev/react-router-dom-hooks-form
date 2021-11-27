import React from 'react'
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom'
import { Row, Col, Card, ListGroup } from 'react-bootstrap'

export const About = ({ company }) => {
  const navigate = useNavigate()
  const location = useLocation()

  console.log(location)
  // React.useEffect(() => {
  //   navigate('/about/founder')
  // }, [navigate])

  return (
    <Row>
      <h2>About {company}</h2>
      <Col sm={5}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Link to='company/webdeveloperbd'> Company</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to='founder'>Founder</Link>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
      <Col sm={7}>
        <Outlet />
      </Col>
    </Row>
  )
}

import { useState } from 'react'
import { Form, Row, Col, Select } from 'react-bootstrap'

const initialState = {
  firstName: '',
  lastName: '',
  submitted: false,
  profession: 'developer',
  gender: 'male',
  errors: {}
}

export const ProfileForm = () => {
  const [state, setState] = useState(initialState)
  //uncontrolled input
  // firstNameRef = React.createRef()

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      errors: {
        ...state.errors,
        [e.target.name]: ''
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const { firstName, lastName } = state

    if (firstName === '') {
      setState({
        ...state,
        errors: {
          ...state.errors,
          firstName: 'FirstName is Required'
        }
      })
      return
    }

    if (lastName === '') {
      setState({
        ...state,
        errors: {
          ...state.errors,
          firstName: 'LastName is Required'
        }
      })
      return
    }

    setState({
      ...initialState,
      submitted: true
    })
  }

  const { firstName, lastName, submitted, profession, gender, errors } = state

  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <h2>Contact Form</h2>
        {submitted && <h2>Form is successfully Submitted</h2>}

        {!submitted && (
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor='firstName'>FirstName: </Form.Label>
              <Form.Control
                type='text'
                onChange={handleChange}
                value={firstName}
                name='firstName'
                id='firstName'
              />
              <Form.Text style={{ color: 'red' }}>
                {errors.firstName && errors.firstName}
              </Form.Text>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label htmlFor='lastName'>LastName: </Form.Label>
              <Form.Control
                type='text'
                onChange={handleChange}
                value={lastName}
                name='lastName'
                id='lastName'
              />
              <Form.Text style={{ color: 'red' }}>
                {errors.lastName && errors.lastName}
              </Form.Text>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label htmlFor='profession'>Profession: </Form.Label>
              <Form.Select
                id='profession'
                name='profession'
                value={profession}
                onChange={handleChange}
              >
                <option value='developer'>Developer</option>
                <option value='designer'>Designer</option>
                <option value='programmer'>Programmer</option>
              </Form.Select>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label htmlFor='gender' className='me-2'>
                Gender:{' '}
              </Form.Label>

              <Form.Check
                inline
                type='radio'
                name='gender'
                checked={gender === 'male'}
                label='male'
                value='male'
                onChange={handleChange}
              />

              <Form.Check
                inline
                type='radio'
                name='gender'
                label='female'
                checked={gender === 'female'}
                value='female'
                onChange={handleChange}
              />
            </Form.Group>
            <br />
            <input type='submit' value='Submit' />
          </Form>
        )}
      </Col>
    </Row>
  )
}

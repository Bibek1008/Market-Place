import React, { useState } from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }
  return (
    <Form onSubmit={submitHandler} className='search-container'>
      <InputGroup className='modern-search-group'>
        <Form.Control
          type='text'
          name='q'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='Search amazing products...'
          className='search-input border-0'
        />
        <Button type='submit' className='search-btn border-0'>
          <i className='fas fa-search'></i>
        </Button>
      </InputGroup>
    </Form>
  )
}

export default SearchBox

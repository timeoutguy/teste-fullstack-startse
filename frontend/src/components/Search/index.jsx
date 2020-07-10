import React, { useState } from 'react'
import { Col, FormControl, Button, Row } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'

export default function Search(props) {

  const [search, setSearch] = useState('');

  const keyHandler = (e) => {
    if(e.key === 'Enter'){
      props.handleSearch(search)  
    }

    if(search === ''){
      props.handleSearch();
    }
  }

  return (
    <div>
      <Row>
        <Col xs={10} sm={10} md={11}>
          <FormControl onKeyUp={keyHandler} onChange={e => setSearch(e.target.value)} value={search} id="title" placeholder="Procure por um curso" />
        </Col>
        <Col xs={2} sm={2} md={1}>
          <Button variant="primary" onClick={() => props.handleSearch(search)} > <FaSearch /> </Button>
        </Col>
      </Row>

    </div>
  )
}

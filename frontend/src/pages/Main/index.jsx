import React from 'react'
import { Container } from 'react-bootstrap'
import Search from '../../components/Search'

export default function Main() {
  return (
    <Container className="mt-4">
      <h1> Cursos </h1>
      <Search />
    </Container>
  )
}

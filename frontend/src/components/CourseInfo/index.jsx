import React from 'react'
import { Card, Badge } from 'react-bootstrap'

export default function CourseInfo(props) {


  return (
      <Card className="mt-4">
        <Card.Body>
          <Card.Title> {props.title} </Card.Title>
          <Card.Subtitle> {props.subtitle} </Card.Subtitle>
          <Card.Text>
            {props.description}
          </Card.Text>
          <div>
            <Badge variant={props.isActive ? 'success' : 'danger'}>
             {props.isActive ? 'Active' : 'No Active'}
            </Badge>
            <span> Started at: {props.startedAt} </span>
          </div>
        </Card.Body>
      </Card>
  )
}

import React, { useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import moment from 'moment'
import Search from '../../components/Search'
import CourseInfo from '../../components/CourseInfo'
import api from '../../services/api'

export default function Main() {

  const [courses, setCourse] = useState([]);

  let getCourse = (filter = '')  => {
    const search = filter ?`/find?q=${filter}` : ''
    api.get(`/courses${search}`).then(res => setCourse(res.data)); 
  }

  let handleSearch = (search) => {
    getCourse(search)
  }

  useEffect(() => {
    getCourse();
  }, [])

  return (
    <Container className="mt-4">
      <h1> Cursos </h1>
      <Search handleSearch={handleSearch}/>
      <div className="mt-4">
        {courses.map((course, i) => {
          return (<CourseInfo key={i}
            title={course.title}
            subtitle={course.subtitle}
            description={course.description}
            isActive={course.isActive}
            startedAt={moment(course.startedAt).format('DD MMM, YYYY')}
          />)
        })}
      </div>
    </Container>
  )
}

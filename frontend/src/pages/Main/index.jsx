import React, { useState, useEffect} from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { Container } from 'react-bootstrap'
import moment from 'moment'
import Search from '../../components/Search'
import CourseInfo from '../../components/CourseInfo'
import api from '../../services/api'

import 'react-toastify/dist/ReactToastify.min.css'; 

export default function Main() {

  const [courses, setCourse] = useState([]);

  let getCourse = async (filter = '')  => {
    const search = filter ?`/find?q=${filter}` : ''

    try {
      await api.get(`/courses${search}`).then(res => setCourse(res.data)); 
    } catch (err) {
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

  let handleSearch = (search) => {
    getCourse(search)
  }

  useEffect(() => {
    getCourse();
  }, [])

  console.log(courses)

  return (
    <>
    <Container className="mt-4">
      <h1> Cursos </h1>
      <Search handleSearch={handleSearch}/>
      <div className="mt-4">
        {courses.map((course, i) => {
          return (<CourseInfo 
            key={i}
            id={course.id}
            title={course.title}
            subtitle={course.subtitle}
            description={course.description}
            isActive={course.isActive}
            startedAt={moment(course.startedAt).format('DD MMM, YYYY')}
          />)
        })}
      </div>
    </Container>
    <ToastContainer />
    </>
  )
}

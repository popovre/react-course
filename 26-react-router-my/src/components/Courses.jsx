import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import styles from './Courses.module.css'

const Courses = (props) => {
  const {courses} = props;

  return (
    <>
      <h1>Courses</h1>
      <nav className={styles.CoursesLinks}>
      {courses.map((course, index) => {
        return <NavLink key={course.id} className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        to={course.slug}>
          {course.title}
        </NavLink>
      })}
      </nav>
    </>
  );
};

export default Courses;

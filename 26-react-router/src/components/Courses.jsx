import { Link } from 'react-router-dom';
import courses from '../data/courses';

const Courses = () => {
  return (
    <>
      <h1>Courses</h1>
      {courses.map((course) => (
        <div className='courseLink' key={course.id}>
          <Link to={course.slug}>
            {course.title}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Courses;

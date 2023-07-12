import { Outlet } from 'react-router-dom';
import Courses from '../components/Courses';

const CoursesLayout = ({courses}) => {
  return (
    <>
      <Courses courses={courses} />
      <Outlet />
    </>
  );
};

export default CoursesLayout;

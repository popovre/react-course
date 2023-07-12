import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contacts from './components/Contacts';
import About from './components/About';
import NotFound from './components/NotFound';
import MainLayout from './layouts/MainLayout';
import CoursesLayout from './layouts/CoursesLayout';
import courses from './data/courses';
import SingleCourse from './components/SingleCourse';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home/>}/>
              <Route path="about" element={<About />} />
              <Route path="contacts" element={<Contacts />} />
                <Route path="courses" element={<CoursesLayout courses={courses} />}>
                  {courses.map((course, index) => {
                    return <Route key={index} path={course.slug} element={<SingleCourse {...course}/>}  />
                  })}
                </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

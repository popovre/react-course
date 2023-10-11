import courses from '../data/courses';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import {useEffect} from 'react';

const SingleCourse = () => {
	const params = useParams();
	const navigate = useNavigate();
	const location = useLocation();
	const course = courses.find(course => course.slug === params.slug);
	
	useEffect(() => {
		if (!course) {
			navigate('..', { relative: 'path'});
		}
	}, [course, navigate]);

	return (
		<>
			<h1>{course?.title}</h1>
			<h2>{course?.slug}</h2>
			<h3>{course?.id}</h3>
			<Link to=".." relative='path'>All courses</Link>
		</>
	)
}

export default SingleCourse
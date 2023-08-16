import { useParams } from 'react-router-dom';
import style from './Course.module.css';

const SingleCourse = ({courses}) => {
	const {react} = useParams();
	const course = courses.find((element) => element.slug === react);
	return (
		<div className={`${style.Course} course-${course.slug}`}>
			<span>{course.title}</span>
		</div>
	)
}

export default SingleCourse
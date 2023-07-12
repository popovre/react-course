import { Routes, Route, useParams } from 'react-router-dom';

const SingleCourse = ({id, slug, title}) => {
	return (
		<div className={`course-${slug}`}>
			<span>{title}</span>
		</div>
	)
}

export default SingleCourse
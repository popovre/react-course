import './Post.css';

export default function Post(props){
	const {id, title, userId, body} = props;


	return (
		<div className="post">
			<p>{title}</p>
			<h2>id is {id}</h2>
			<h3>User ID is {userId}</h3>
			<p>{body}</p>	
		</div>
	)
} 
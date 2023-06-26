import {useEffect} from 'react';
import Post from './Post';
import {useState} from 'react';

export default function Posts() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
		.then((response) => response.json())
		.then((json) => {
			setPosts(json);
		} );
	}, []);

	console.log(posts)

	return <div>
		<Post/>
		<Post/>
	</div>
}
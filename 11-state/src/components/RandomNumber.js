import { useState } from 'react';
import generateRandomNumer from '../utils/generateRandomNumber';

export default function RandomNumber() {
	const [randomNumber, setRandomNumber] = useState(generateRandomNumer())
	const changeRandomNumber = () => {
		setRandomNumber(generateRandomNumer());
	}

	return (
		<div>
			<h1>{randomNumber}</h1>
			<button onClick={changeRandomNumber}>Generate new random number</button>
		</div>
	)
}
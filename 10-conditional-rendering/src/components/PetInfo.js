export default function PetInfo({animal, age, hasPet}) {
	return hasPet? (
		<h1>
			My {animal} is {age} years old!
		</h1>
	) :
	(
		<h1>
			i don't have any pet!
		</h1>
	)
}
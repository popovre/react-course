import {useState} from 'react'

export default function TodoForm(props) {
	const {onFormSubmit} = props;
	const [text, setText] = useState('')
	const onSubmitButtonHandler = (evt) => {
		evt.preventDefault()
		onFormSubmit(text);
		setText('');
	}

	return (
		<form onSubmit={onSubmitButtonHandler}>
			<input placeholder='Enter todo text' value={text} onChange={(evt)=>setText(evt.target.value)}/>
			<button type='submit'>Submit</button>
		</form>
	)
}
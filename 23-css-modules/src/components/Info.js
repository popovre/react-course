import './Info.css';
import styles from './Info.module.css'
console.log(styles);

export default function Info() {
	return <div className={styles.info}>
		<h1>Hello from the Info component</h1>
		<button className='my-button'>Click me Info</button>
		<h2>Heading in the Info</h2>
		<button className={styles.myOtherButton}>Other button</button>
	</div>
}
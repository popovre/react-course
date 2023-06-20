import Person from './Person';
import persons from '../data/persons';

export default function Persons(props) {
  return (
    <div className="cards">
      {persons.map((person, index) => {
        return <Person key={person.id} {...person}></Person>;
      })}
    </div>
  );
}

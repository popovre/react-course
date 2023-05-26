const App = () => {
  console.log('called');
  let [buttonText, setButtonText] = React.useState('Click me');
  console.log(setButtonText);
  const onButtonClick = () => {
    setButtonText('Hello from React');
  };

  return (
    <div className="app center-positioner">
      <button id="my-button" onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);

// const appDiv = document.querySelector('.app');
// console.log(appDiv);
// class User {
//   hello: 'hello'

//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log('method called')
//   }
// }

// const user1 = new User;
// console.log(user1);


// new function() {
//   console.log('function called')
// } 
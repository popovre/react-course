const App = ({initialButtonText, initialButtonClass}) => {
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [buttonClass, setButtonClass] = React.useState(initialButtonClass);
  
  const onButtonClick = () => {
    setButtonText(`Hello from React', ${Math.random()}`);
    setButtonClass(`my-button--green`)
  };

  return (
    <div className="app center-positioner">
      <button className={buttonClass} id="my-button" onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me pls" initialButtonClass="my-button"/>);

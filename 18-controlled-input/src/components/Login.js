import { useState } from 'react';

export default function Login() {
  const [data, setData] = useState({username: '', password: ''});

  function handleFormSubmit(evt) {
    evt.preventDefault();
    console.log(data);
    alert(JSON.stringify(data));
  }

  function hadleInputChange(evt, name) {
    setData({...data, [name]: evt.target.value})
  }

  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={data.username}
            onChange={(evt) => {
              console.log(data);
              hadleInputChange(evt, 'username');
            }}
          ></input>
        </label>
        <label>
          Password:
          <input
            type="password" 
            value={data.password}
            onChange={(evt) => {
              hadleInputChange(evt, 'password');
            }}
          ></input>
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

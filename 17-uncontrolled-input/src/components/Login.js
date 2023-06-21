export default function Login() {
	function handleFormSubmit(evt) {
		evt.preventDefault();
		console.log(evt.target)
	}

	return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input type="text" name="username"></input>
        </label>
        <label>
          Password:
          <input type="text" name="password"></input>
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

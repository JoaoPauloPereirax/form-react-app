import React from 'react'
import './global.css'

function App() {
  return (
    <div className="login-container" >
      <h1>Página de login</h1> <hr/>
      <form >
        <label>
          <h2>Email: </h2>
          <input type="email" name="email"/><br/>
        </label>
        <label>
          <h2>Senha: </h2>
          <input type="password" name="password"/><br/>
        </label>
        <input type="submit" value="Login"/>
      </form>
    </div>
  );
}

export default App;

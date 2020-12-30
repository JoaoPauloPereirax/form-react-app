import React, {useState} from 'react'
import './global.css'

function App() {

  const [emailField,setEmailField] = useState('') 
  const [passwordField,setPasswordField] = useState('')
  const [nameField,setNameField] = useState('')
  const [loading,setLoading] = useState(true)
  

  const handleLoginSubmit = async (event)=>{
   
    let url = "https://api.b7web.com.br/carros/api/auth/login"
    let result = await fetch(url,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        email: emailField,
        password: passwordField
      })
    })
    let json = await result.json()

    if(json !== ''){
      alert(json.error)
    }
      console.log("Result: ",json)
    
    }

    const handleRegisterSubmit = async ()=>{
      let url = "https://api.b7web.com.br/carros/api/auth/register"
      let result = await fetch(url,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          name: nameField,
          email: emailField,
          password: passwordField
        })
      })
      let json = await result.json()
  
      if(json !== ''){
        alert(json.error)
      }
        console.log("Result: ",json)
    }


  return (
    <div className="login-container" >
      Login
      <input type="radio" name="opcao" onChange={()=>setLoading(true)} />
      Cadastro
      <input type="radio" name="opcao" onChange={()=>setLoading(false)} />
      
      {loading && 
          <div>
            <h1>Página de login</h1> <hr/>
            <form onSubmit={handleLoginSubmit} >
              <label>
                <h2>Email: </h2>
                <input type="email" value={emailField} onChange={event=>{setEmailField(event.target.value)}} /><br/>
              </label>
              <label>
                <h2>Senha: </h2>
                <input type="password" value={passwordField} onChange={event=>{setPasswordField(event.target.value)}} /><br/>
              </label>
              <input type="submit" value="Login"/>
            </form>
          </div>
      }
      {
        !loading &&
        <div>
      <h1>Página de Cadastro</h1> <hr/>
      <form onSubmit={handleRegisterSubmit} >
        <label>
          <h2>Nome: </h2>
          <input type="text" value={nameField} onChange={event=>setNameField(event.target.value)} />
        </label>
        <label>
          <h2>Email: </h2>
          <input type="email" value={emailField} onChange={event=>{setEmailField(event.target.value)}} /><br/>
        </label>
        <label>
          <h2>Senha: </h2>
          <input type="password" value={passwordField} onChange={event=>{setPasswordField(event.target.value)}} /><br/>
        </label>
        <input type="submit" value="Login"/>
      </form>
        </div>
      }

    </div>
  );
}

export default App;

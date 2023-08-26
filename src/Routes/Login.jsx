import { useContext, useState } from "react";
import { UserContext } from "../Context/UserProvider";
import {useNavigate} from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("dannyphaton@test.com");
  const [password, setPassword] = useState("123123");

  const { loginUser} = useContext(UserContext);
  const navegate =  useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log("procesando form:", email, password);
    try{
        await loginUser(email, password);
        console.log("Usario logueado")
    }catch (error) {
        console.log(error.code)
        alert("Este correo ya esta registrado")
    }
  };


  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Ingresar email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Ingresar password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Login;

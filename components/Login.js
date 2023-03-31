import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export default function Login() {
  
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  
  const handleChange = (event) => {
    event.preventDefault();
    console.log(event);
    if(event.target.id == 'email'){
      setEmail(event.target.value);
    }else{
      setPassword(event.target.value);
    }
    console.log(`Email: ${email} password:${password}`);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth,email,password).then(
      (userCredentials) => {
        const user = userCredentials.user;
        console.log('User create successfully ' + user);
      }
    ).catch(
      (e) => {
        console.error(e);
      }
    )
  }
    return (
      <form>
        <div className="p-40 justify-center items-center rounded-xl shadow-xl mx-80 w-100 h-100">
        <h2 className='py-4 text-gray-700 text-center'>Login</h2>
        <h4 className="">Email</h4>
        <div className=" bg-white text-xl my-1 py-2 rounded-xl">
          <input type="email"
        id="email"
        placeholder="email"
        onChange={handleChange}
        /></div>
         <h4 className="">Password</h4>
        <div className=" bg-white text-xl my-1 py-2 rounded-xl">
          <input type="password"
         id="password"
         placeholder="password"
         onChange={handleChange}
         /></div>
        <button onClick={handleSubmit} type="submit" className="bg-[#244793] ml-7 object-center mx-auto w-[200px] rounded-xl teXt-xl uppercase my-6 py-3 text-white hover:scale-105 ease-in">Submit</button>
        </div>
      </form>
  )
}

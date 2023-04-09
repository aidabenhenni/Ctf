import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/router";
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
  const handleSignIn = (event) => {
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
  const router = useRouter();
        const handleInput = () => {
        router.push("/");
         };
    return (
      <form>
        <div className="flex flex-col items-center justify-center py-2 min-h-screen" >
          <div className="bg-gray-800 rounded-2xl shadow-2xl flex flex-col w-2/6 p-7" >
          <a onClick={handleInput} className="" >
                <Image src="/../public/images/logow-02.png" alt='/' width='100' height='40'/></a>

            <h2 className='py-4 text-white text-center'>Log In</h2>
      
          <label htmlFor='email' className="text-[#a4b0d4] py-2" >Email</label>
          <input className="bg-[#181C24] p-2 text-[#a4b0d4] rounded"
          type={'email'} onChange={handleChange}  id='email' placeholder={''} required />

          <label htmlFor='passwd' className="text-[#a4b0d4] py-2" >Password</label>
          <input className="bg-[#181C24] p-2 text-[#a4b0d4] rounded"
          type={'password'} onChange={handleChange} id='passwd' placeholder={''} required />

          <button className="text-lg text-[#181C24] bg-white mt-8 rounded p-2 "
          onClick={handleSignIn}>Sign In</button>
          </div>
          <p className="py-8">Don't have an account ? 
          <a className="text-[#a4b0d4]" href="/Signup"> Sign Up</a></p>
        </div>
      </form>
  )
}

import React, { useContext } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import { AuthContext } from "./_app";
const auth = getAuth();

export default function Login() {

  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [authenticationError, setAuthenticationError] = React.useState('');
  const [verificationSent, setVerificationSent] = React.useState(false);
  const {authState, setAuthState} = useContext(AuthContext);
  const router = useRouter();

  const handleChange = (event) => {
    event.preventDefault();

    if (event.target.id == 'email') {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  }
  const handleSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then(
      async (userCredentials) => {
        const user = userCredentials.user;
        if (user.emailVerified) {
          setAuthState({isAuthenticated:true, user});
          router.push('/');
          
        } else {
          setVerificationSent(true);
          await auth.signOut();
          console.log(auth.currentUser);
        }
      }
    ).catch(
      (e) => {
        console.error(e);
        setAuthenticationError(e.code);
      }
    )
  }

  return (
    <form>
      <div className="flex flex-col items-center justify-center py-2 min-h-screen" >
        <div className="bg-gray-800 rounded-2xl shadow-2xl flex flex-col w-2/6 p-7" >
          <a className="" >
            <Image src="/../public/images/logow-02.png" alt='TechFest' width='100' height='40' /></a>

          <h2 className='py-4 text-white text-center'>Log In</h2>
          {(verificationSent || authenticationError) &&
            (<div className={authenticationError ? "bg-red-600" : "bg-gray-600"} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: 20, borderRadius: 10, }}>
              <h3>{authenticationError ? "Authentication Error" : "Email verification"}</h3>
              <p>{authenticationError ? authenticationError : "Check your email, we have sent you an email verification link. Check spam in case ;)"}</p>
            </div>)}
          <label htmlFor='email' className="text-[#a4b0d4] py-2" >Email</label>
          <input className="bg-[#181C24] p-2 text-[#a4b0d4] rounded"
            type={'email'} onChange={handleChange} id='email' placeholder={''} required />

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

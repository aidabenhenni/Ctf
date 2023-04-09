import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import React from "react"
import Image from "next/image"
import { useRouter } from "next/router";

const auth = getAuth();
const db = getFirestore();



export default function SignUp() {
    const [name,setName] = React.useState();
    const [passwd,setPasswd] = React.useState();
    const [email,setEmail] = React.useState();
    
    const handleChange = (event) => {
        switch (event.target.id){
            case 'name':
                setName(event.target.value);
                break;
            case 'email':
                setEmail(event.target.value);
                break;
            case 'passwd':
                setPasswd(event.target.value);
                break;
        }
        
    }


    const handleSignUp =  (event)  =>  {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, passwd).then(
            userCredentials => {
                const user = userCredentials.user;
                console.log('User Created Successfully');
                setDoc(doc(db,'users',user.uid), {
                    displayName: name,
                    email: user.email,
                }).then(
                    () => {
                        console.log("User added to db successfully");
                    }
                ).catch(
                    error => console.error(error)
                );

            }
        ).catch(
            error=> console.error(error)
        )

    }
        const router = useRouter();
        const handleInput = () => {
        router.push("/");
         };
    return (
        <div className="flex flex-col items-center justify-center py-4 pt-10 min-h-screen" >
          <div className="bg-gray-800 rounded-2xl shadow-2xl flex flex-col w-2/6 p-7" >
                <a onClick={handleInput}>
                <Image src="/../public/images/logow-02.png" alt='/' width='100' height='40'/></a>
            
            <h2 className='py-4 text-white text-center'>Sign Up</h2>
            <label htmlFor='name' className="text-[#a4b0d4] py-2">Nickname</label>

            <input className="bg-[#181C24] p-2 text-[#a4b0d4] rounded "
            type={'text'} onChange={handleChange} id='name' placeholder={''} required />

            <label htmlFor='email' className="text-[#a4b0d4] py-2">Email</label>
            <input className="bg-[#181C24] p-2 text-[#a4b0d4] rounded"
            type={'email'} onChange={handleChange} id='email' placeholder={''} required />

            <label htmlFor='passwd' className="text-[#a4b0d4] py-2">Password</label>
            <input className="bg-[#181C24] p-2 text-[#a4b0d4] rounded "
            type={'password'} onChange={handleChange} id='passwd' placeholder={''} required />
        
            <button className="text-lg text-[#181C24] bg-white mt-8 rounded p-2 "
            onClick={handleSignUp}>Sign up</button>
          </div>
          <p className="py-8">Already have an account ?  
          <a className="text-[#a4b0d4]" href="/Login"> Login</a></p>
        </div>
    )
}
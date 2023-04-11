import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import React from "react"
import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/router";


const auth = getAuth();
const db = getFirestore();




export default function SignUp() {
    const [name, setName] = React.useState();
    const [passwd, setPasswd] = React.useState();
    const [email, setEmail] = React.useState();
    const [verificationSent, setVerificationSent] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [authenticationError, setAuthenticationError] = React.useState('');
    const router = useRouter();

    const handleChange = (event) => {
        switch (event.target.id) {
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


    const handleSignUp = (event) => {
        event.preventDefault();
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, passwd).then(
            userCredentials => {
                const user = userCredentials.user;
                const avatar = `https://api.dicebear.com/6.x/lorelei/svg?seed=${user.uid}`;
                updateProfile(user, { displayName: name, photoURL: avatar });
                console.log('User Created Successfully');
                setDoc(doc(db, 'users', user.uid), {
                    displayName: name,
                    email: user.email,
                    score: 0,
                    avatar: avatar,
                }).then(
                    () => {
                        console.log("User added to db successfully");
                        sendEmailVerification(user).then(
                            verificationSnapshot => {
                                setVerificationSent(true);
                                console.log('Verification link has been sent!');
                                setTimeout((time) => {
                                router.push('/');
                                  
                                }, 5000);

                            }
                        ).catch(
                            error => console.error(error.message)
                        );
                    }
                ).catch(
                    error =>
                        console.error(error.error)
                );

            }
        ).catch(
            error => {
                setAuthenticationError(error.code);
            }
        )

    }


    return (
        <div className="flex flex-col items-center justify-center py-4 pt-10 min-h-screen" >
            <div className="bg-gray-800 rounded-2xl shadow-2xl flex flex-col w-2/6 p-7" >
                <Link href={'/'}>
                    <Image src="/../public/images/logow-02.png" alt='/' width='100' height='40' /></Link>

                <h2 className='py-4 text-white text-center'>Sign Up</h2>
                {(verificationSent || authenticationError) &&
                    (<div className={authenticationError ? "bg-red-600" : "bg-gray-600"} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: 20, borderRadius: 10, }}>
                        <h3>{authenticationError ? "Authentication Error" : "Email verification"}</h3>
                        <p>{authenticationError ? authenticationError : "Check your email, we have sent you an email verification link. Check spam in case ;)"}</p>
                    </div>)}
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
                    onClick={handleSignUp} disabled={loading}>Sign up</button>
            </div>
            <p className="py-8">Already have an account ?
                <a className="text-[#a4b0d4]" href="/Login"> Login</a></p>
        </div>
    )
}
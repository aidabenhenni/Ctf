import React, {  useEffect, useState } from 'react'
import Navbar from '@components/components/Navbar'
import Footer
  from '@components/components/Footer'
import { collection, getFirestore, getDocs, onSnapshot, query, orderBy } from 'firebase/firestore'

const Table = () => {
 

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const db = getFirestore();
    const unsubscribe = onSnapshot(query(collection(db, 'users'),orderBy('score','desc')), (snapshot)=>{
      const data = snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()}));
      setUsers(data);
    });
    return unsubscribe;
  },[]);
  return (
    <>
      <Navbar/>
      <div className='w-full h-screen p-2'>
        <h2 className='py-4'>Scoreboard</h2>
        <div className='mb-6 justify-center items-center max-w-[1240px] w-full h-full'>
          <table className='bg-gray-800 shadow-xl py-4 w-full'>
            <thead>
              <tr className='border-b'>
                <th className='py-2 px-8 text-xl'>#</th>
                <th className='py-2 px-8 text-xl'>Name</th>
                <th className='py-2 text-xl'>Points</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className='border-b'>
                  <th className='py-2 px-8 text-xl'>{index + 1}</th>
                  <th className='py-2 px-8 text-xl hover:scale-105 ease-in duration-100'>{user.displayName}</th>
                  <td className='py-2 px-8 pl-80 text-xl'>{user.score}</td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  )
}



export default Table
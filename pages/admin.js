import { getFirestore, addDoc, collection, setDoc, doc, DocumentSnapshot } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { useState } from 'react';

export default function AdminPage() {
    const [title, setTitle] = useState('');
    const [flag, setFlag] = useState('');
    const [text, setText] = useState('');
    const [category, setCategory] = useState('crypto');
    const [files, setFiles] = useState(null);

    // SETUP FIREBASE
    const db = getFirestore();
    const storage = getStorage();
    const auth = getAuth();

    const handleChange = (event) => {
        var value = event.target.value;
        switch (event.target.id) {
            case 'title':
                setTitle(value)
                break;
            case 'text':
                setText(value)
                break;
            case 'category':
                setCategory(value)
                break;
            case 'files':
                setFiles(event.target.files[0])
                break;
            case 'flag':
                setFlag(value)
                break;
        }


    }
    const createChallenge = () => {

        addDoc(collection(db, 'challenges'), {
            title, flag, text, category
        }).then(
            docSnapshot => {
                const attachementRef = ref(storage, `${docSnapshot.id}/${files.name}`);
                uploadBytes(attachementRef, files).then(
                    fileSnapshot => {

                        getDownloadURL(attachementRef).then(data => {

                            console.log('url fetched successfully');
                            setDoc(doc(db, "challenges", docSnapshot.id), {
                                attachements: data
                            }, {
                                merge: true
                            }).then(() => console.log('done setting!')).catch(e => console.log(e.code));
                        });
                        console.log(docSnapshot.id);

                    }
                )
            }
        )
    }

    return (
        <div className="admin-page">
            <div className='admin-page-form'>
                <label htmlFor='title' >Title</label>
                <input className="bg-[#181C24] p-2 text-[#a4b0d4] rounded"
                    type={'text'} onChange={handleChange} id='title' placeholder={'Challenge Title'} required />
                <label htmlFor='category' >Category</label>

                <select className="bg-[#181C24] p-2 text-[#a4b0d4] rounded"
                    onChange={handleChange} id='category' required >
                    <option value={'crypto'}>Cryptography</option>
                    <option value={'rev-eng'}>Reverse Engineering</option>
                    <option value={'osint'}>Forensics</option>
                    <option value={'be'}>Binary Explotation</option>
                </select>
                <label htmlFor='text' >Challenge story</label>

                <textarea className="bg-[#181C24] p-2 text-[#a4b0d4] rounded"
                    type={'text'} onChange={handleChange} id='text' placeholder={'Challenge Text'} required />
                <label htmlFor='files' >Attachements</label>

                <input className="bg-[#181C24] p-2 text-[#a4b0d4] rounded"
                    type={'file'} onChange={handleChange} id='files' placeholder={'Attachements'} />
                <label htmlFor='flag' >Flag</label>
                <input className="bg-[#181C24] p-2 text-[#a4b0d4] rounded"
                    type={'text'} onChange={handleChange} id='flag' placeholder={'CTF{sdkfskldf}'} required />
                <button onClick={createChallenge}>Create !</button>
            </div>

        </div>
    )
}
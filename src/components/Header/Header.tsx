
import { PostContext } from '@/contexts/PostContext';
import {useContext, useState} from 'react'

export const Header = () =>{
    const postCtx = useContext(PostContext)

    const [titleInput, setTitleInput] = useState('');
    const [bodyInput, setBodyInput] = useState('');

    const handleAddButton = () =>{
        if(titleInput.trim().length < 5 || bodyInput.trim().length < 5){
            alert('Title and body must be at least 3 characters long');
            return;
        }
        postCtx?.addPost(titleInput, bodyInput);
        
        setTitleInput('');
        setBodyInput('');
    }

    return(
        <header>
            <h1 className="text-3xl">Título da página</h1>

            <div className='max-w-xl flex flex-col gap-3 border border-dotted border-gray-400 my-4 p-3'> 
                <input 
                    type="text" 
                    className="border border-gray-300 p-2 text-black text-xl" 
                    placeholder='Digite um titulo'
                    value={titleInput}
                    onChange={e=>setTitleInput(e.target.value)}
                />

                <textarea 
                    className="h-24 border border-gray-300 p-2 text-black text-xl" 
                    placeholder='Digite um corpo'
                    value={bodyInput}
                    onChange={e=>setBodyInput(e.target.value)}    
                ></textarea>

                <button 
                    className='bg-blue-500 p-3 text-white rounded-md'
                    onClick={handleAddButton}
                    >Adicionar</button>
            </div>
    
        </header>
    )
}
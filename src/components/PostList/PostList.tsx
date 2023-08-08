import { PostContext } from "@/contexts/PostContext"
import { useContext } from "react"

export const PostList = () =>{
    const postCtx = useContext(PostContext);

    const handleRemoveButton = (id: number) =>{
        postCtx?.delPost(id);
    }

    return(
        <div>
            {postCtx?.posts.map(post =>(
                <div key={post.id} className="border-b border-gray-500 p-3">
                    <div className="text-xl font-bold mb-2">{post.title}</div>
                    <div className="text-sm">
                        {post.body}
                         <button 
                            onClick={()=>handleRemoveButton(post.id)} 
                            className="text-red-500 mx-2">
                            [ Deletar ]</button>
                         
                    </div>
                    
                </div>
            ))}
        </div>
    )
}
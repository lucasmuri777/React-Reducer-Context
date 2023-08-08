import { PostActions, postReducer } from "@/reducers/postReducer";
import { Post } from "@/types/Post";
import { createContext, useReducer, useState, Dispatch } from "react";
import { usePosts } from "@/components/CustomHooks/usePosts";

type PostContextType = {
    posts: Post[];
    addPost: (title: string, body: string) => void;
    delPost: (id: number) => void;
}

export const PostContext = createContext<PostContextType | null>(null)

export const PostProvider = ({children}: {children: React.ReactNode}) =>{   
    const {posts ,addPost, delPost} = usePosts();

    return(
        <PostContext.Provider value={{posts, addPost, delPost}}>
            {children}
        </PostContext.Provider>
    )
}
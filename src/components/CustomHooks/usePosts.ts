'use client'
import { PostActions, postReducer } from "@/reducers/postReducer"
import { Post } from "@/types/Post"
import { useState, Dispatch, useReducer } from "react"



export const usePosts = () =>{
    const [posts, dispatch] = useReducer(postReducer, []);
    const addPost = (title: string, body: string) => {
        dispatch({
            type: 'add',
            payload: {
                title,
                body
            }
        })
    }
    const delPost = (id:number)=>{
        dispatch({
            type: 'remove',
            payload: {
                id
            }
        })
    }
    return {
        posts, addPost, delPost
    }
}
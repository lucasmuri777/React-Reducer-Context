'use client'
import { PostActions, postReducer } from "@/reducers/postReducer"
import { Post } from "@/types/Post"
import { useState, Dispatch, useReducer, useEffect } from "react"



export const usePosts = () =>{
    const [posts, dispatch] = useReducer(
            postReducer, 
            JSON.parse(localStorage.getItem('posts') || '[]')
        );

        useEffect(()=>{
            localStorage.setItem('posts', JSON.stringify(posts))
        }, [posts]);

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
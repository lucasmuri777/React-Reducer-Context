'use client'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { PostList } from '@/components/PostList/PostList'
import { PostProvider } from '@/contexts/PostContext'
 
import {useState} from 'react'

export default function Home() {

  return (
    <PostProvider>
      <div className=''>
          <Header/>
          <PostList/>
          <Footer/>
      </div>
   </PostProvider>
  )
}

"use client"

import styles from './dashboard.module.css'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
const Dashboard = () => {


//   const [data,setData] = useState ([])
//   const [err,setErr] = useState ([false])
//   const [isLoading ,setIsLoading] = useState(false);

// useEffect(() =>{
//   const getData =async () => {
//     setIsLoading(true)

//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' });
  
//     if (!res.ok) {
//       setErr(true)
//     }
//    const data = await res.json()

//     setData(data);
//     setIsLoading(false)
//   };
//   getData()
// },
//   // , { next: { revalidate: 10 }, }
  
// []);

const fetcher = (...args) => fetch (...args).then(res =>res.json())
const { data, error, isLoading} = useSWR ("https://jsonplaceholder.typicode.com/posts", fetcher)
console.log(data)

  return (
    <div className={styles.container}>
      
    </div> 
  )
};

export default Dashboard

import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'


async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' }, { next: { revalidate: 10 }, });
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 

const Blog = async () => {
  const data = await getData()
  return (
    <div className={styles.maincontainer}>
      {data.map(item=>(
      <Link 
      href="/blog/testid" className={styles.container}  key={item.id}>
        <div className={styles.imagecontainer}>
          <Image src="https://images.unsplash.com/photo-1492362856642-6e0ad97a524c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=862&q=80" alt=" "width={400}
          height={250}
          className={styles.image}/>
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className=
          {styles.desc}></p>

        </div>
      </Link>
))}
      
    </div>
  )
}

export default Blog

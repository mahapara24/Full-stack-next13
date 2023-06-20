import React from 'react'
import styles from './pae.module.css'
import Image from 'next/image'
import { notFound } from "next/navigation"



async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' }, { next: { revalidate: 10 }, });
  
  if (!res.ok) {
    return notFound()
  }
 
  return res.json()
}
 


const BlogpPost = async ({params}) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            So hers description that Ai is becoming backbone our daily it has amazing features beyond the expectation it is fast and know exactly what you want write it accordingly more special it is free till now expectingit will be not free anmore because it was reaseach purpose it wasfor free but now it has pass all the results more over it simplify the work.

          </p>
          <div className={styles.author}>
            <Image src="https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80" alt=""
            width={40}
            height={40}
            className={styles.avatar}
            />
            <span className={styles.username}>Artificial Superman </span>

          </div>

        </div>

        <div className={styles.imagecontainer}>
          <Image
          src="https://images.unsplash.com/photo-1494587416117-f102a2ac0a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt=""
          fill={true}
          className={styles.image} />

        </div>
      </div>
      BlogPost

      <div className={styles.content}>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore adipisci rem nihil at, iusto quam suscipit rerum fuga iste ea deleniti repellendus, obcaecati alias ullam cumque sequi doloremque natus omnis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi officia repudiandae esse libero sunt. Dolorem laborum dolorum, facere ut unde enim. Libero sit ipsam voluptatum ut maiores necessitatibus, cupiditate quo.s

        </p>

      </div>

    </div>
  )
}

export default BlogpPost


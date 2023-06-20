import React from 'react'
import styles from './portfolio.module.css'
import Link from 'next/link'
import Image from 'next/image'
const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>

        <Link href="/portfolio/Illustrations" className={styles.item}>
        <Image src="/Illustration.jpg"
          alt=""
          fill={true}
          className={styles.item} />
        <span className={styles.title}>Illustrations</span></Link>

        
        <Link href="/portfolio/websites" className={styles.item}>
        <Image src="/websites.jpg"
          alt=""
          fill={true}
          className={styles.item} />
        <span className={styles.title}>Websites</span></Link>

        
        <Link href="/portfolio/applications" className={styles.item}>
        <Image src="/application.jpg"
          alt=""
          fill={true}
          className={styles.item} />
        <span className={styles.title}>Applications</span></Link>

      </div>
    </div>
  )
}

export default Portfolio

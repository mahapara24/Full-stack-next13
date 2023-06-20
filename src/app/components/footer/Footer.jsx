import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>  ©2023 Fisty. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/fb.png" width={30} height={30} className={styles.icon} alt="Fisty Facebook"/>
        <Image src="/git.png" width={30} height={30} className={styles.icon} alt="Fisty Git"/>
        <Image src="/link.png" width={30} height={30}  className={styles.icon} alt="Fisty linkedin"/>
        <Image src="/insta.png" width={30} height={30} className={styles.icon} alt="Fisty instagram"/>
      </div>
    </div>
  )
}

export default Footer

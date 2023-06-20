import React from 'react'
import styles from './portfolio.module.css'
const layout = ({children}) => {
  return (
    <div>
      <h1 className={styles.maintitle}>Our Works</h1>
      {children}
    </div>
  )
}
export default layout

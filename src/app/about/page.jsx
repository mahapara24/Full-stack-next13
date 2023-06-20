import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
// import Button from './components/Button/Button'
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <Image src=" https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" fill={true} alt='' 
        className={styles.img}/>
        <div className={styles.imgtext}>
          <h1 className={styles.imgtitle}>Digital World</h1>
          <h2 className={styles.imgDesc}>Beyond the tangible, the digital realm thrives,a universe of ones and zeroes waiting to be explored</h2>
        </div> 
        </div>

      <div className={styles.textcontainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
          As programmers immersed in the digital world, we are the architects of the virtual realm. We possess the knowledge and skills to bring concepts and ideas to life through lines of code. Our minds are fueled by logic and creativity, as we meticulously craft algorithms and design systems that power the digital infrastructure.
<br />
<br />
We are the problem solvers, constantly seeking innovative solutions to complex challenges. With a deep understanding of programming languages and frameworks, we navigate through the intricacies of software development. We thrive in an ever-evolving landscape, adapting to new technologies and frameworks, and staying up-to-date with the latest advancements.
          </p>
        </div>
        <div className={styles.item}>
        <h1 className={styles.title}>What We Do?</h1>
        <p className={styles.desc}>
        In the digital world, we possess the ability to shape the future. Through our expertise, we create software applications, websites, and platforms that revolutionize industries and transform the way people interact with technology. Our code becomes the backbone of digital ecosystems, providing seamless experiences and connecting individuals across the globe.
<br />
<br />
We are lifelong learners, continuously honing our skills and expanding our knowledge. In a field that moves at lightning speed, we embrace the challenge of staying ahead of the curve. Whether it is mastering new programming languages or diving into emerging technologies like artificial intelligence and blockchain, we are at the forefront of innovation.
<br />
<br />
-Develop Mobile Apps
<br />
<br />
-Develop Websites
<br />

        </p>
        {/* <Button url="/contact" text="Contact" /> */}
        
        <button className={styles.button}>Contact</button>
        <div className={styles.item}></div>
      </div>
    </div>
    </div>
  )
}

export default About

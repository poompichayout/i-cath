import type { NextPage } from 'next'

import Meta from 'src/components/Meta'

import styles from '../styles/Home.module.css'

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Meta title="About us" />
    </div>
  )
}

export default About

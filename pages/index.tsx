import type { NextPage } from 'next'

import Meta from 'src/components/Meta'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Meta title="Home" />
    </div>
  )
}

export default Home

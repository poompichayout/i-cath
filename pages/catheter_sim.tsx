import type { NextPage } from 'next'

import Meta from 'src/components/Meta'

import styles from '../styles/Home.module.css'

const CatheterSimPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Meta title="Catheterization Simulator" />
    </div>
  )
}

export default CatheterSimPage

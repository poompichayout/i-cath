import type { NextPage } from 'next'

import Meta from 'src/components/Meta'

import styles from '../styles/Home.module.css'

const NormalValuesPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Meta title="Normal Values" />
    </div>
  )
}

export default NormalValuesPage

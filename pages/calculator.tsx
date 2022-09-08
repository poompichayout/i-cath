import type { NextPage } from 'next'

import Meta from 'src/components/Meta'

import styles from '../styles/Home.module.css'

const CalculatorPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Meta title="Calculator" />
    </div>
  )
}

export default CalculatorPage

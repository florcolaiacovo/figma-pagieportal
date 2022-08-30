import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css' ;
import styles from './Component2.module.scss'
import Search from './Search'

export default function Component2() {
  return (
    <div>
        <Search/>
        <h3 className={styles.text}>Showing 233 results</h3>
    </div>
  )
}

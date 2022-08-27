import React, { Component } from 'react'
import Card1 from './Card1'
import styles from './css/Figma.module.scss'
import Filters from './Filters'
import SeachField from './SeachField'
import SlideMenu from './SlideMenu'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'

export default class Figma extends Component {
  render() {
    return (
      <div className={styles.fondo}>
        <SlideMenu>

        </SlideMenu>
        <SeachField></SeachField>
        <h3 className={styles.subtitle}>Showing 233 results</h3>
        <div className={styles.buttonSeach}>SEARCH</div>
        <Card1></Card1>
        <Card2></Card2>
        <Card3></Card3>
        <Card4></Card4>
        <Filters></Filters>
      </div>
    )
  }
}

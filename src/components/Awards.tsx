import { Component } from 'solid-js'
import AwardData from '../assets/awards.json'
import { ItemizeList } from './core/ItemizeList'

export const Awards: Component = () => {
  return (
    <ItemizeList
      name="Awards"
      items={AwardData}
    />
  )
}

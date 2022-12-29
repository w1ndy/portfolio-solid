import { Component } from 'solid-js'
import ServiceData from '../assets/services.json'
import { ItemizeList } from './ItemizeList'

export const Services: Component = () => {
  return (
    <ItemizeList
      name="Services"
      items={ServiceData}
    />
  )
}

import { Component } from 'solid-js'
import EducationData from '../assets/education.json'
import { ItemizeSection } from './core/ItemizeSection'

export const Education: Component = () => {
  return (
    <ItemizeSection
      name="Education"
      items={EducationData}
    />
  )
}

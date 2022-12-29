import { Component } from 'solid-js'
import ExperienceData from '../assets/experience.json'
import { ItemizeSection } from './ItemizeSection'

export const Experience: Component = () => {
  return (
    <ItemizeSection
      name="Experience"
      items={ExperienceData}
    />
  )
}

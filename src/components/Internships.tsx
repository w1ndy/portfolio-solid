import { Component } from 'solid-js'
import InternshipData from '../assets/internships.json'
import { ItemizeSection } from './ItemizeSection'

export const Internships: Component = () => {
  return (
    <ItemizeSection
      name="Internships"
      items={InternshipData}
    />
  )
}

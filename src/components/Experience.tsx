import { Component } from 'solid-js'
import { ItemizeSection } from './ItemizeSection'

export const Experience: Component = () => {
  const experience = [
    {
      institute: 'Microsoft Research Asia',
      location: 'Beijing, China',
      description:
        'Researcher at Data, Knowledge, and Intelligence (DKI) Group',
      time: 'Jan 2022 - Present',
      notes: [
        'Research Interests: Information Visualization, Human-Computer Interaction, Visual Analytics',
      ],
    },
  ]
  return (
    <ItemizeSection
      name="Experience"
      items={experience}
    />
  )
}

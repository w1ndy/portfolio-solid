import { Component } from 'solid-js'
import { ItemizeList } from './ItemizeList'

export const Services: Component = () => {
  const services = [
    {
      description: 'Reviewer, CHI 2021',
    },
    {
      description: 'Reviewer, ChinaVis 2019 & 2021',
    },
    {
      description:
        'Reviewer, International Conference on Image and Graphics 2021',
    },
  ]

  return (
    <ItemizeList
      name="Professional Services"
      items={services}
    />
  )
}

import { Component } from 'solid-js'
import { ItemizeList } from './ItemizeList'

export const Services: Component = () => {
  const services = [
    {
      description: 'Program Committee Member, ChinaVis 2022',
    },
    {
      description: 'Reviewer, ACM CHI 2021 & 2023',
    },
    {
      description: 'Reviewer, IEEE VIS 2022',
    },
    {
      description: 'Reviewer, ChinaVis 2019 & 2021',
    },
    {
      description:
        'Reviewer, International Conference on Image and Graphics 2021',
    },
    {
      description: 'Reviewer, IEEE Computer Graphics & Applications',
    },
    {
      description: 'Reviewer, Journal of Visualization',
    },
  ]

  return (
    <ItemizeList
      name="Services"
      items={services}
    />
  )
}

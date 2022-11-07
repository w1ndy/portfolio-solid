import { Component, For, Show } from 'solid-js'
import { ItemizeSection } from './ItemizeSection'

export const Education: Component = () => {
  const education = [
    {
      institute: 'Zhejiang University',
      location: 'Hangzhou, China',
      description: 'Ph.D. in Computer Science',
      time: 'Sep 2016 - Dec 2021',
      notes: [
        'Advised by Prof. Yingcai Wu, State Key Lab of CAD&CG',
        'Thesis: Visual Decision-Making for Urban Geospace',
      ],
    },
    {
      institute: 'Shandong University',
      location: 'Jinan, China',
      description: 'B.Eng. in Computer Science, Taishan Honors College',
      time: 'Sep 2012 - Jun 2016',
    },
  ]
  return (
    <ItemizeSection
      name="Education"
      items={education}
    />
  )
}

import { Component, For, Show } from 'solid-js'
import { ItemizeSection } from './ItemizeSection'

export const Internships: Component = () => {
  const internships = [
    {
      institute:
        'Alibaba-Zhejiang University Joint Institute of Frontier Technologies',
      location: 'Hangzhou, China',
      description: 'Research Intern',
      time: 'Jun 2021 – Dec 2021',
      notes: ['Supervisor: Prof. Yingcai Wu'],
    },
    {
      institute: 'Zhejiang Lab',
      location: 'Hangzhou, China',
      description:
        'Research Intern, Research Center for Integrated Intelligence',
      time: 'May 2020 – Dec 2020',
      notes: ['Supervisors: Prof. Yingcai Wu and Prof. Wei Chen'],
    },
    {
      institute: 'Monash University',
      location: 'Melbourne, Australia',
      description: 'Visiting Research Student, Immersive Analytics Lab',
      time: 'Jul 2019 – Jan 2020',
      notes: [
        'Supervisors: Prof. Tim Dwyer and Prof. Kim Marriott',
        'Supported by China Scholarship Council',
      ],
    },
    {
      institute: 'JD Finance',
      location: 'Beijing China',
      description: 'Research Intern, Urban Computing Business Unit',
      time: 'Apr 2018 – Sep 2018',
      notes: ['Supervisors: Prof. Yu Zheng and Dr. Jie Bao'],
    },
  ]
  return (
    <ItemizeSection
      name="Internships"
      items={internships}
    />
  )
}

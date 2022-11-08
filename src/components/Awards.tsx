import { Component, createSignal, For, Show } from 'solid-js'
import { ItemizeList } from './ItemizeList'

export const Awards: Component = () => {
  const awards = [
    {
      description: 'National Scholarship',
      year: 2020,
    },
    {
      description: 'He Zhijun Scholarship - Special Award',
      year: 2020,
    },
    {
      description: 'National Scholarship',
      year: 2019,
    },
    {
      description: 'China Scholarship Council Ph.D. Scholarship',
      year: 2019,
    },
    {
      description: 'Luzengyong CAD&CG High Technology Award, Third Prize',
      year: 2019,
    },
    {
      description: 'Wenchixiang Ph.D. Scholarship',
      year: 2018,
    },
    {
      description: 'MSRA Fellowship Nomination Award',
      year: 2018,
    },
  ]

  return (
    <ItemizeList
      name="Awards"
      items={awards}
    />
  )
}

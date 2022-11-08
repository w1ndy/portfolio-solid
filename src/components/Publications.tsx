import { Component, createSignal, For, Show } from 'solid-js'
import { trackSection } from '../store/sections'

false && trackSection

const TagList: Component<{
  tags: string[]
  tagCount: Record<string, number>
  selected: string
  setSelected: (s: string) => void
}> = (props) => {
  return (
    <div class="mt-2 text-sm text-gray-500">
      <For each={props.tags}>
        {(tag) => (
          <div
            class="cursor-pointer select-none"
            classList={{
              'text-black @dark:text-gray-200': props.selected == tag,
            }}
            onClick={() => props.setSelected(props.selected == tag ? '' : tag)}
          >
            {tag} ({props.tagCount[tag]})
          </div>
        )}
      </For>
    </div>
  )
}

export const Publications: Component = () => {
  const publications = [
    {
      authors:
        'S. Liu, <u>D. Weng<sup>&#9993;</sup></u>, Y. Tian, Z. Deng, H. Xu, X. Zhu, H. Yin, X. Zhan, Y. Wu',
      title:
        'ECoalVis: Visual Analysis of Control Strategies in Coal-fired Power Plants',
      venue: 'IEEE Trans. Vis. Comput. Graph. To appear (2023).',
      tags: new Set(['IEEE TVCG', 'First / Corresponding Author']),
    },
    {
      authors:
        'R. Chen, <u>D. Weng<sup>&#9993;</sup></u>, Y. Huang, X. Shu, J. Zhou, G. Sun, Y. Wu',
      title: 'Rigel: Transforming tabular data by declarative mapping',
      venue: 'IEEE Trans. Vis. Comput. Graph. To appear (2023).',
      tags: new Set(['IEEE TVCG', 'First / Corresponding Author']),
    },
    {
      authors:
        'Z. Deng, <u>D. Weng<sup>&#9993;</sup></u>, S. Liu, Y. Tian, M. Xu, Y. Wu<sup>&#9993;</sup>',
      title:
        'A survey of urban visual analytics: Advances and future directions',
      venue: 'Computational Visual Media. 9(1): 3-39 (2022).',
      tags: new Set(['First / Corresponding Author']),
    },
    {
      authors: 'Z. Deng, <u>D. Weng<sup>&#9993;</sup></u>, Y. Wu',
      title:
        'You are experienced: Interactive tour planning with crowdsourcing tour data from web',
      venue: 'Journal of Visualization (2022).',
      tags: new Set(['First / Corresponding Author']),
    },
    {
      authors:
        'R. Chen, X. Shu, J. Chen, <u>D. Weng</u>, J. Tang, S. Fu, Y. Wu',
      title: 'Nebula: A Coordinating Grammar of Graphics',
      venue: 'IEEE Trans. Vis. Comput. Graph. 28(12): 4127-4140 (2022).',
      tags: new Set(['IEEE TVCG']),
    },
    {
      authors:
        'Z. Deng, <u>D. Weng</u>, Y. Liang, J. Bao, Y. Zheng, T. Schreck, M. Xu, Y. Wu',
      title: 'Visual Cascade Analytics of Large-scale Spatiotemporal Data',
      venue: 'IEEE Trans. Vis. Comput. Graph. 28(6): 2486-2499 (2022).',
      tags: new Set(['IEEE TVCG']),
    },
    {
      authors:
        'J. Tang, Y. Zhou, T. Tang, <u>D. Weng</u>, B. Xie, L. Yu, H. Zhang, Y. Wu',
      title:
        'A Visualization Approach for Monitoring Order Processing in E-Commerce Warehouse',
      venue:
        'IEEE Trans. Vis. Comput. Graph. 28(1): 857-867 (2022). Also appears in IEEE VIS 2021.',
      tags: new Set(['IEEE TVCG']),
    },
    {
      authors:
        'Z. Deng, <u>D. Weng</u>, X. Xie, J. Bao, Y. Zheng, M. Xu, W. Chen, Y. Wu',
      title: 'Compass: Towards Better Causal Analysis of Urban Time Series',
      venue:
        'IEEE Trans. Vis. Comput. Graph. 28(1): 1051-1061 (2022). Also appears in IEEE VIS 2021.',
      tags: new Set(['IEEE TVCG']),
    },
    {
      authors: 'S. Liu, <u>D. Weng</u>, Y. Wu',
      title: 'A Review on Industrial Data Visual Analytics',
      venue: 'Journal of Integration Technology. 10(6): 3-19 (2021).',
    },
    {
      authors:
        'Y. Wu, <u>D. Weng</u>, Z. Deng, J. Bao, M. Xu, Z. Wang, Y. Zheng, Z. Ding, W. Chen',
      title:
        'Towards Better Detection and Analysis of Massive Spatiotemporal Co-Occurrence Patterns',
      venue: 'IEEE Trans. Intell. Transp. Syst. 22(6): 3387-3402 (2021)',
      tags: new Set(['IEEE ITS']),
    },
    {
      authors:
        '<u>D. Weng</u>, C. Zheng, Z. Deng, M. Ma, J. Bao, Y. Zheng, M. Xu, Y. Wu',
      title: 'Towards Better Bus Networks: A Visual Analytics Approach',
      venue:
        'IEEE Trans. Vis. Comput. Graph. 27(2): 817-827 (2021). Also appears in IEEE VIS 2020.',
      tags: new Set(['IEEE TVCG', 'First / Corresponding Author']),
    },
    {
      authors: '<u>D. Weng</u>, R. Chen, J. Zhang, J. Bao, Y. Zheng, Y. Wu',
      title:
        'Pareto-Optimal Transit Route Planning With Multi-Objective Monte-Carlo Tree Search',
      venue: 'IEEE Trans. Intell. Transp. Syst. 22(2): 1185-1195 (2021)',
      tags: new Set(['IEEE ITS', 'First / Corresponding Author']),
    },
    {
      authors:
        'Z. Deng, <u>D. Weng</u>, J. Chen, R. Liu, Z. Wang, J. Bao, Y. Zheng, Y. Wu',
      title: 'AirVis: Visual Analytics of Air Pollution Propagation',
      venue:
        'IEEE Trans. Vis. Comput. Graph. 26(1): 800-810 (2020). Also appears in IEEE VIS 2019.',
      tags: new Set(['IEEE TVCG']),
    },
    {
      authors: '<u>D. Weng</u>, R. Chen, Z. Deng, F. Wu, J. Chen, Y. Wu',
      title:
        'SRVis: Towards Better Spatial Integration in Ranking Visualization',
      venue:
        'IEEE Trans. Vis. Comput. Graph. 25(1): 459-469 (2019). Also appears in IEEE VIS 2018.',
      tags: new Set(['IEEE TVCG', 'First / Corresponding Author']),
    },
    {
      authors: '<u>D. Weng</u>, H. Zhu, J. Bao, Y. Zheng, Y. Wu',
      title:
        'HomeFinder Revisited: Finding Ideal Homes with Reachability-Centric Multi-Criteria Decision Making',
      venue: 'Proc. of ACM CHI 2018: 247',
      tags: new Set(['ACM CHI', 'First / Corresponding Author']),
    },
    {
      authors: 'D. Liu, <u>D. Weng</u>, Y. Li, J. Bao, Y. Zheng, H. Qu, Y. Wu',
      title:
        'SmartAdP: Visual Analytics of Large-scale Taxi Trajectories for Selecting Billboard Locations',
      venue:
        'IEEE Trans. Vis. Comput. Graph. 23(1): 1-10 (2017). Also appears in IEEE VIS 2016.',
      tags: new Set(['IEEE TVCG']),
    },
  ]

  const tagCount = publications
    .map((pub) => [...(pub.tags ?? [])])
    .flat()
    .reduce((acc, tag) => {
      acc[tag] = (acc[tag] ?? 0) + 1
      return acc
    }, {} as Record<string, number>)

  const [selected, setSelected] = createSignal('')
  const venueTags = ['IEEE TVCG', 'ACM CHI', 'IEEE ITS']
  const typeTags = ['First / Corresponding Author']

  return (
    <div
      class="flex flex-col md:flex-row mt-5"
      use:trackSection="Publications"
    >
      <div class="mb-2 md:(flex-none w-36)">
        <div class="uppercase font-bold">Publications</div>
        <TagList
          tags={venueTags}
          tagCount={tagCount}
          selected={selected()}
          setSelected={setSelected}
        />
        <TagList
          tags={typeTags}
          tagCount={tagCount}
          selected={selected()}
          setSelected={setSelected}
        />
      </div>
      <div class="flex-1 text-sm">
        <For each={publications}>
          {(pub) => (
            <Show when={selected() == '' || pub.tags?.has(selected())}>
              <div class="ml-4 mb-1 relative">
                <div class="absolute -left-3 top-0">&#9642; </div>
                <span innerHTML={pub.authors}></span>. <b>{pub.title}</b>,{' '}
                {pub.venue}
              </div>
            </Show>
          )}
        </For>
      </div>
    </div>
  )
}

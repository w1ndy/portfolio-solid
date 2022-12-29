import { Component, createSignal, For, Show } from 'solid-js'
import PublicationData from '../assets/publications.json'
import { trackSection } from '../store/sections'

import styles from './styles.module.css'

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
  const publications = PublicationData.map((pub) => ({
    ...pub,
    tags: new Set(pub.tags),
  }))

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
                <span
                  class={styles.smallSup}
                  innerHTML={pub.authors}
                ></span>
                . <b>{pub.title}</b>, {pub.venue}
              </div>
            </Show>
          )}
        </For>
      </div>
    </div>
  )
}

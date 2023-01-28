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

const PublicationLink: Component<{
  text: string
  url: string
}> = (props) => {
  return (
    <a
      class="inline-block font-mono bg-gray-100 px-1 rounded cursor-pointer no-underline"
      href={props.url}
      target="_blank"
    >
      <span class=" text-size-[12px]">{props.text}</span>
    </a>
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
  const yearTags = ['2023', '2022', '2021', '2020', '2019', '2018', '2017']

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
        <TagList
          tags={yearTags}
          tagCount={tagCount}
          selected={selected()}
          setSelected={setSelected}
        />
      </div>
      <div class="flex-1 text-sm">
        <For each={publications}>
          {(pub) => (
            <Show when={selected() == '' || pub.tags?.has(selected())}>
              <div class="ml-4 mb-3 relative">
                <div class="absolute -left-3 top-0 bottom-0 border-l border-gray-300"></div>
                <div
                  class={styles.smallSup}
                  innerHTML={pub.authors}
                ></div>
                <div>
                  <b>{pub.title}</b>
                </div>
                <div>{pub.venue}</div>
                <div class="mt-1">
                  <PublicationLink
                    text={pub.doi}
                    url={`https://doi.org/${pub.doi}`}
                  />
                </div>
              </div>
            </Show>
          )}
        </For>
      </div>
    </div>
  )
}

import { Component, For } from 'solid-js'
import { useSections } from '../store/sections'
import styles from './styles.module.css'

declare module 'solid-js' {
  namespace JSX {
    interface ExplicitAttributes {
      after: string
      xl: string
    }
  }
}

export const TableOfContent: Component = () => {
  const { sections } = useSections()
  const orderedSections = [
    'Experience',
    'Education',
    'Internships',
    'Publications',
    'Awards',
    'Services',
  ]
  return (
    <div class={styles.tocContainer}>
      <For each={orderedSections}>
        {(section) => (
          <div
            class={styles.tocEntry}
            classList={{
              [styles.tocEntryActive]: sections.find((s) => s.name == section)
                ?.visible,
            }}
            onClick={() => sections.find((s) => s.name == section)?.teleport()}
          >
            {section}
          </div>
        )}
      </For>
    </div>
  )
}

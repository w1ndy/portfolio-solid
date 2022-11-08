import { onMount } from 'solid-js'
import { createStore, produce } from 'solid-js/store'

declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      trackSection: string
    }
  }
}

interface Section {
  name: string
  teleport: () => void
  isInsideViewport: () => boolean
  visible: boolean
}

const [sections, setSections] = createStore<Section[]>([])

document.addEventListener('scroll', () => {
  setSections(
    produce((sections) => {
      for (const section of sections) {
        section.visible = section.isInsideViewport()
      }
    })
  )
  console.log(sections)
})

export function trackSection(el: HTMLElement, accessor: () => string) {
  const name = accessor()
  const teleport = () => {
    el.scrollIntoView({ behavior: 'smooth' })
  }
  const isInsideViewport = () => {
    const rect = el.getBoundingClientRect()
    return rect.top <= window.innerHeight && rect.bottom >= 0
  }
  onMount(() => {
    const existing = sections.find((section) => section.name === name)
    if (existing !== undefined) {
      setSections((s) => s == existing, {
        name,
        isInsideViewport,
        visible: isInsideViewport(),
      })
    } else {
      setSections([
        ...sections,
        { name, teleport, isInsideViewport, visible: isInsideViewport() },
      ])
    }
  })
}

export function useSections() {
  return { sections }
}

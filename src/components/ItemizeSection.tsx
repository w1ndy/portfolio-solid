import { Component, For, Show } from 'solid-js'

export const ItemizeSection: Component<{
  name: string
  items: {
    institute: string
    location: string
    description: string
    time: string
    notes?: string[]
  }[]
}> = (props) => {
  return (
    <div class="flex flex-row mt-5">
      <div class="flex-none w-36 uppercase font-bold">{props.name}</div>
      <div class="flex-1">
        <For each={props.items}>
          {(item) => (
            <div class="mb-2">
              <div>
                <span class="font-bold">{item.institute}</span>, {item.location}
              </div>
              <div class="flex flex-row text-sm ml-2">
                <div class="flex-1">&#9642; {item.description}</div>
                <div class="flex-none">{item.time}</div>
              </div>
              <Show when={item.notes}>
                <div class="ml-6 text-sm text-gray-500 italic">
                  <For each={item.notes}>
                    {(note) => <div>&#9642; {note}</div>}
                  </For>
                </div>
              </Show>
            </div>
          )}
        </For>
      </div>
    </div>
  )
}

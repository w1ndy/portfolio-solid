import { Component, For, Show } from 'solid-js'
import { trackSection } from '../store/sections'

false && trackSection

export const ItemizeList: Component<{
  name: string
  items: { description: string; year?: number }[]
}> = (props) => {
  return (
    <div
      class="flex flex-col md:flex-row mt-5"
      use:trackSection={props.name}
    >
      <div class="mb-2 uppercase font-bold md:(flex-none w-36)">
        {props.name}
      </div>
      <div class="flex-1 text-sm">
        <For each={props.items}>
          {(item) => (
            <div class="flex flex-row">
              <div class="flex-1 ml-4 mb-1 relative">
                <div class="absolute -left-3 top-0">&#9642; </div>
                {item.description}
              </div>
              <Show when={item.year !== undefined}>
                <div>{item.year}</div>
              </Show>
            </div>
          )}
        </For>
      </div>
    </div>
  )
}

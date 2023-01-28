import { Component, For, Show } from 'solid-js'
import { trackSection } from '../../store/sections'

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
      <ul class="flex-1 text-sm list-disc ml-3.5">
        <For each={props.items}>
          {(item) => (
            <li class="list-item mb-1">
              <div class="flex flex-row">
                <div class="flex-1">{item.description}</div>
                <Show when={item.year !== undefined}>
                  <div>{item.year}</div>
                </Show>
              </div>
            </li>
          )}
        </For>
      </ul>
    </div>
  )
}

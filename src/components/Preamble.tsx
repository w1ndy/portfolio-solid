import { Component, For, Show } from 'solid-js'
import Contact from '../assets/contact.json'

export const Preamble: Component = () => {
  return (
    <div class="text-center pt-15">
      <h1 class="text-4xl md:text-5xl font-bold pb-3">
        {Contact.name} (
        <span class="text-3xl md:text-4xl">{Contact.name_zh}</span>)
      </h1>
      <div class="text-sm md:text-base">
        <div>
          <a
            class="underline-transparent"
            href={Contact.address_map}
            target="_blank"
          >
            {Contact.address}
          </a>
        </div>
        <div>
          {Contact.email} &#9642;{' '}
          <a href={Contact.google_scholar}>Google Scholar</a> &#9642;{' '}
          <For each={Object.entries(Contact.social)}>
            {(social, index) => (
              <>
                <a
                  rel="me"
                  href={social[1]}
                >
                  {social[0]}
                </a>
                <Show
                  when={index() != Object.entries(Contact.social).length - 1}
                >
                  ,{' '}
                </Show>
              </>
            )}
          </For>
        </div>
      </div>
    </div>
  )
}

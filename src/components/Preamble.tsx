import { Component } from 'solid-js'

export const Preamble: Component = () => {
  return (
    <div class="text-center pt-15">
      <h1 class="text-4xl md:text-5xl font-bold pb-3">Dr. Di Weng</h1>
      <div class="text-sm md:text-base">
        <div>
          <a
            class="underline-transparent"
            href="https://goo.gl/maps/jRBWm5roD5grGCNCA"
            target="_blank"
          >
            Microsoft Research Asia, Tower 2, No. 5 Danling Street, Haidian
            District, Beijing, China
          </a>
        </div>
        <div>
          <span class="text-gray-400">Work:</span> diweng [at] microsoft.com
          &#9642; <span class="text-gray-400">Personal:</span> dweng.cs [at]
          outlook.com &#9642; <span class="text-gray-400">CV:</span>{' '}
          <a href="https://dwe.ng">https://dwe.ng</a> &#9642;{' '}
          <span class="text-gray-400">Social:</span>{' '}
          <a
            rel="me"
            href="https://social.dwe.ng/@dw_vis"
          >
            Mastodon
          </a>
          ,{' '}
          <a
            rel="me"
            href="https://twitter.com/dw_vis"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  )
}

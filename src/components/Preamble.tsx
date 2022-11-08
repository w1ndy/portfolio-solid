import { Component } from 'solid-js'

export const Preamble: Component = () => {
  return (
    <div class="text-center pt-15">
      <h1 class="text-4xl md:text-5xl font-bold pb-3">Dr. Di Weng</h1>
      <div class="text-sm md:text-base">
        <div>
          <a
            href="https://goo.gl/maps/jRBWm5roD5grGCNCA"
            target="_blank"
          >
            Microsoft Research Asia, Tower 2, No. 5 Danling Street, Haidian
            District, Beijing, China
          </a>
        </div>
        <div>
          diweng [at] microsoft.com &#9642;{' '}
          <a href="https://dwe.ng">https://dwe.ng</a>
        </div>
      </div>
    </div>
  )
}

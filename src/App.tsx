import type { Component } from 'solid-js'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Internships } from './components/Internships'
import { Publications } from './components/Publications'
import { Preamble } from './components/Preamble'
import { Awards } from './components/Awards'
import { Services } from './components/Services'
import { TableOfContent } from './components/TableOfContent'

const App: Component = () => {
  return (
    <div class="@dark:(bg-dark-800 text-gray-100)">
      <div class="max-w-250 px-5 md:px-15 mx-auto">
        <Preamble />
        <TableOfContent />
        <div class="mt-10">
          <Experience />
          <Education />
          <Internships />
          <Publications />
          <Awards />
          <Services />
        </div>
        <div class="mt-10 pb-20 text-sm text-gray-500 text-center">
          Last Updated: {new Date(__BUILD_DATE__).toDateString()}. Built with
          Solid.js and &#9829.
        </div>
      </div>
    </div>
  )
}

export default App

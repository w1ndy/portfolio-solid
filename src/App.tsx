import type { Component } from 'solid-js'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Internships } from './components/Internships'
import { Publications } from './components/Publications'
import { Preamble } from './components/Preamble'
import { Awards } from './components/Awards'
import { Services } from './components/Services'

const App: Component = () => {
  return (
    <div class="w-220 mx-auto">
      <Preamble />
      <Experience />
      <Education />
      <Internships />
      <Publications />
      <Awards />
      <Services />
      <div class="mt-10 mb-20 text-sm text-gray-500 text-center">
        Last Updated: {new Date(__BUILD_DATE__).toDateString()}. Built with
        Solid.js and &#9829.
      </div>
    </div>
  )
}

export default App

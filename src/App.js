import React from 'react'
import 'tachyons/css/tachyons.min.css'

import { Intro, CheckboxTree } from './components'
import github from './assets/github.svg'

export const App = () => (
  <main role='main'>
    <section className='flex flex-column w-80 mw8 vh-100 center pv5'>
      <div className='flex flex-auto flex-column'>
        <Intro />
        <CheckboxTree />
      </div>
      <div className='self-center'>
        <a href='https://github.com/joelgeorgev/react-checkbox-tree'>
          <img src={github} alt='GitHub' />
        </a>
      </div>
    </section>
  </main>
)

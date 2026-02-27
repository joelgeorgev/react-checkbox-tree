import { Intro } from './components/Intro/Intro.tsx'
import { CheckboxTree } from './components/CheckboxTree/CheckboxTree.tsx'

import './App.css'

import github from './assets/github.svg'

export const App = () => (
  <main className='main'>
    <header>
      <Intro />
    </header>
    <section className='section'>
      <article>
        <CheckboxTree />
      </article>
    </section>
    <footer className='footer'>
      <a href='https://github.com/joelgeorgev/react-checkbox-tree'>
        <img src={github} alt='Go to GitHub repository page' />
      </a>
    </footer>
  </main>
)

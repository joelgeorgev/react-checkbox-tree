import styled from 'styled-components'

import { Intro, CheckboxTree } from './components'
import data from './data/data.json'
import github from './assets/github.svg'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 64rem;
  height: 100vh;
  margin: 0 auto;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
`

const Footer = styled.footer`
  align-self: center;
  margin: 2rem;
`

export const App = () => (
  <Main>
    <header>
      <Intro />
    </header>
    <Section>
      <article>
        <CheckboxTree data={data} />
      </article>
    </Section>
    <Footer>
      <a href='https://github.com/joelgeorgev/react-checkbox-tree'>
        <img src={github} alt='Go to GitHub repository page' />
      </a>
    </Footer>
  </Main>
)

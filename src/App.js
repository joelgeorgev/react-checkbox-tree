import React from 'react'
import styled from 'styled-components'

import { Intro, CheckboxTree } from './components'
import github from './assets/github.svg'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 64rem;
  height: 100vh;
  margin: 0 auto;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 2rem;
  overflow: auto;
`

const Footer = styled.div`
  align-self: center;
  margin: 2rem;
`

export const App = () => (
  <main role='main'>
    <Section>
      <Wrapper>
        <Intro />
        <CheckboxTree />
      </Wrapper>
      <Footer>
        <a href='https://github.com/joelgeorgev/react-checkbox-tree'>
          <img src={github} alt='GitHub' />
        </a>
      </Footer>
    </Section>
  </main>
)

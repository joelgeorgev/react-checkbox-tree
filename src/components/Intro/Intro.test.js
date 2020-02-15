import React from 'react'
import { render } from '@testing-library/react'

import { Intro } from '.'

const renderIntro = () => render(<Intro />)

const getTitle = (node) => node.querySelector('h3').textContent
const getDescription = (node) => node.querySelector('p').textContent
const getGitHubURL = (node) => node.querySelector('a').href

describe('Intro', () => {
  test('renders a title', () => {
    const { container } = renderIntro()

    expect(getTitle(container)).toEqual('React Checkbox Tree')
  })

  test('renders a description', () => {
    const { container } = renderIntro()

    expect(getDescription(container)).toEqual(
      'A react app showcasing a simple checkbox tree component. This project was created using create-react-app.'
    )
  })

  test('renders the correct GitHub URL for create-react-app', () => {
    const { container } = renderIntro()

    expect(getGitHubURL(container)).toEqual(
      'https://github.com/facebookincubator/create-react-app'
    )
  })
})

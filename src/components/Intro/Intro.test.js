import React from 'react'
import { render } from '@testing-library/react'

import { Intro } from '.'

describe('Intro', () => {
  const getTitle = (node) => node.querySelector('h3').textContent
  const getDescription = (node) => node.querySelector('p').textContent
  const getGitHubURL = (node) => node.querySelector('a').href

  test('should render a title', () => {
    const { container } = render(<Intro />)
    expect(getTitle(container)).toEqual('React Checkbox Tree')
  })

  test('should render a description', () => {
    const { container } = render(<Intro />)
    expect(getDescription(container)).toEqual(
      'A react app showcasing a simple checkbox tree component. This project was created using create-react-app.'
    )
  })

  test('should render the correct GitHub URL for create-react-app', () => {
    const { container } = render(<Intro />)
    expect(getGitHubURL(container)).toEqual(
      'https://github.com/facebookincubator/create-react-app'
    )
  })
})

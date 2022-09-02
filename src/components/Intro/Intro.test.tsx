import { render, screen } from '@testing-library/react'

import { Intro } from '.'

const renderIntro = () => render(<Intro />)

describe('Intro', () => {
  test('renders a header', () => {
    renderIntro()

    expect(
      screen.getByRole('heading', { name: 'React Checkbox Tree' })
    ).toBeDefined()
  })

  test('renders a link to create-react-app GitHub repository', () => {
    renderIntro()

    const link: HTMLAnchorElement = screen.getByRole('link', {
      name: 'create-react-app'
    })

    expect(link).toBeDefined()
    expect(link.href).toEqual(
      'https://github.com/facebookincubator/create-react-app'
    )
  })
})

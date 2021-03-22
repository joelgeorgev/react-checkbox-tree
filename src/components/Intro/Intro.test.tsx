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

  test('renders a description', () => {
    const { container } = renderIntro()

    const paragraph = container.querySelector('p') as HTMLParagraphElement

    expect(paragraph).toBeDefined()
    expect(paragraph.textContent).toEqual(
      'A react app showcasing a simple checkbox tree component. This project was created using create-react-app.'
    )
  })

  test('renders a link to create-react-app GitHub repository', () => {
    renderIntro()

    const link = screen.getByRole('link', {
      name: 'create-react-app'
    }) as HTMLLinkElement

    expect(link).toBeDefined()
    expect(link.href).toEqual(
      'https://github.com/facebookincubator/create-react-app'
    )
  })
})

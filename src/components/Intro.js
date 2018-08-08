import React from 'react'

export class Intro extends React.PureComponent {
  render() {
    return (
      <div>
        <h3>React Checkbox Tree</h3>
        <p>A react app showcasing a simple checkbox tree component. This project was created
        using <a href='https://github.com/facebookincubator/create-react-app'>create-react-app</a>.
        Uses <a href='https://github.com/rtfeldman/seamless-immutable'>seamless-immutable</a> as
          the data structure for the component state.
        </p>
      </div>
    )
  }
}
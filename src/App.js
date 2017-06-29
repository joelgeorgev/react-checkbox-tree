import React, { Component } from 'react';
import { Intro, CheckboxTree } from './components';
import github from './assets/github.svg';
import 'tachyons/css/tachyons.min.css';

export class App extends Component {
  render() {
    return (
      <div className='flex flex-column w-80 mw8 vh-100 center pv4'>
        <div className='flex flex-auto flex-column'>
          <Intro />
          <CheckboxTree />
        </div>
        <div className='self-center'>
          <a href='https://github.com/joelgeorgev/react-checkbox-tree'>
            <img src={github} alt='GitHub' />
          </a>
        </div>
      </div>
    );
  }
}
import React, { Component } from 'react';
import Immutable from 'seamless-immutable';
import Checkbox from './Checkbox';
import './CheckboxTree.css';

class CheckboxTree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tree: Immutable([
        {
          key: 'Name',
          checked: false
        },
        {
          key: 'Age',
          checked: false
        },
        {
          key: 'Contact',
          checked: false,
          childKeys: [{
            key: 'Telephone',
            checked: false,
            childKeys: [{
              key: 'Home',
              checked: false
            }, {
              key: 'Work',
              checked: false
            }]
          }, {
            key: 'Mobile',
            checked: false
          }]
        },
        {
          key: 'Address',
          checked: false,
          childKeys: [{
            key: 'House',
            checked: false
          },
          {
            key: 'Road',
            checked: false
          },
          {
            key: 'Zip Code',
            checked: false
          }]
        }
      ])
    }
  }
  toggleCheck(e) {

    // Get key and checkbox status from <li> element
    let key = e.target.getAttribute('data-attr');
    let checkboxStatus = e.target.checked;

    // Create a mutable deep clone of the component state
    let stateCopy = Immutable.asMutable(this.state.tree, { deep: true });

    let toggleChildNodes = function (node) {
      node.checked = checkboxStatus;
      if (node.childKeys && node.childKeys.length) {
        node.childKeys.forEach(toggleChildNodes);
      }
    };

    let traverseNodes = function (node) {
      if (node.key === key) {
        node.checked = checkboxStatus;
        if (node.childKeys && node.childKeys.length) {
          node.childKeys.forEach(toggleChildNodes);
        }
      }
      if (node.childKeys && node.childKeys.length) {
        node.childKeys.forEach(traverseNodes);
      }
    };

    stateCopy.forEach(traverseNodes);

    // Create a new immutable state
    let newState = Immutable(stateCopy);

    this.setState({
      tree: newState
    });
  }

  renderCheckboxTree() {
    return this.state.tree.map((node) => {
      return <Checkbox key={node.key} config={node} handleChange={this.toggleCheck.bind(this)} />;
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderCheckboxTree()}
        </ul>
      </div>
    );
  }
}

export default CheckboxTree;
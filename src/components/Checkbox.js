import React from 'react';

export class Checkbox extends React.PureComponent {

  handleToggle = () => {
    const { node, handleToggle } = this.props;
    handleToggle(node);
  }

  render() {
    const { node, handleToggle } = this.props;
    if (node.childKeys && node.childKeys.length) {
      let nodeList = node.childKeys.map(childNode => {
        return <Checkbox key={childNode.key} node={childNode} handleToggle={handleToggle} />;
      })
      return (
        <li>
          <input type='checkbox' checked={node.checked} className='pointer'
            onChange={this.handleToggle} />
          <label className='ml2'>{node.key}</label>
          <ul className='list'>
            {nodeList}
          </ul>
        </li>
      );
    } else {
      return (
        <li>
          <input type='checkbox' checked={node.checked} className='pointer'
            onChange={this.handleToggle} />
          <label className='ml2'>{node.key}</label>
        </li>
      );
    }
  }
}
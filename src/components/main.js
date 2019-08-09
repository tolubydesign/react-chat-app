import React, { Component } from 'react';
import ButtonComponent from './button';
import SearchBarComponent from './searchbar';

export default class Home extends Component {
  render() {
    const button = 'Start Chat';
    const elements = ['one', 'two', 'three'];
    const items = [];
    const secondArray = ['four', 'five', 'six'];
    for (const [index, value] of elements.entries()) {
      items.push(<li key={index}>{value}</li>)
    }

    return (
      <div>
        <SearchBarComponent />
        <ButtonComponent button={button} />

        {/* {items}
        {secondArray.map((value, index) => {
          return <li key={index}>{value}</li>
        })} */}
      </div>
    );
  }
}

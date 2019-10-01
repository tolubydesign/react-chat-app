import React, { Component } from 'react';
import ButtonComponent from './button';
import SearchBarComponent from './searchbar';
import ChatChannel from './chat-channel';

export default class Home extends Component {
  render() {
    const button = 'Start Chat';
    const elements = ['one', 'two', 'three'];
    const items = [];
    // const secondArray = ['four', 'five', 'six'];
    for (const [index, value] of elements.entries()) {
      items.push(<li key={index}>{value}</li>)
    }

    return (
      <div>
        <div className='homepage--page-header'>
          <div className='searchbar-component--wrapper'>
            <SearchBarComponent />
          </div>
          <div className='filter-component--wrapper'>
            filter -
          </div>
        </div>
        {/* table of chat channels */}
        <div className='chat-channel-component--wrapper'>
          <ChatChannel />
        </div>

        <ButtonComponent button={button} />

        {/* {items}
        {secondArray.map((value, index) => {
          return <li key={index}>{value}</li>
        })} */}
      </div>
    );
  }
}

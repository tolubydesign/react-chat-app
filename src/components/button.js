import React, { Component } from 'react'
// import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

console.log('this is a button');
export default class ButtonComponent extends Component {
  render() {
    return <Button variant="contained" className='button start-chat-button'>{this.props.button}</Button>;
  }
}
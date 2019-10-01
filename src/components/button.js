import React, { Component } from 'react'
// import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

export default class ButtonComponent extends Component {
  render() {
    return <Button variant="contained" className='button start-chat-button'>{this.props.button}</Button>;
  }
}
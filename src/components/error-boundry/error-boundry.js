import React , {Component} from 'react'



export default class ErrorBoundry  extends Component {

  componentDidCatch() {

  }
  render() {
    return (
      <div>Catch Error!</div> 
    )
  }
}
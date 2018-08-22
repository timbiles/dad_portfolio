import React, { Component } from 'react'
import axios from 'axios'

import './Form.css'

class Form extends Component {
  componentDidMount() {
    this.getForm()
  }

  getForm = () => {
    axios.get('/api/speaker-request').then(res=> {
        console.log(res)
    })



  }
  render() {
    return (
      <div className='form'>
        <div className="form_container">
          <h1>Form</h1>
        </div>
      </div>
    )
  }
}

export default Form

// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameError: false,
    lastNameError: false,
    messageFirst: '',
    messageSecond: '',
  }

  firstName = event => {
    this.setState({firstName: event.target.value})
  }

  lastName = event => {
    this.setState({lastName: event.target.value})
  }

  OnBlurFirst = () => {
    const {lastName, lastNameError, messageSecond} = this.state
    if (lastName === '') {
      this.setState(prev => ({
        lastNameError: !prev.lastNameError,
        messageSecond: 'required',
      }))
    }
  }

  SubmitForm = event => {
    event.preventDeafult()
    const {firstNameError, lastNameError} = this.state
  }

  render() {
    const {firstName, lastName, SuccessMessage, messageSecond} = this.state
    return (
      <div className="main-container">
        <div className="small-container">
          <h1 className="heading"> Registration</h1>
          <div className="form-container">
            <form className="form-div" onSubmit={this.SubmitForm}>
              <div className="text-container">
                <label htmlFor="username">FIRSTNAME</label>
                <input
                  type="text"
                  className="input-text"
                  onChange={this.firstName}
                  value={firstName}
                  onBlur={this.OnBlurFirst}
                />
                <p>{messageSecond}</p>
              </div>
              <div className="text-container">
                <label htmlFor="username">LASTNAME</label>
                <input
                  type="text"
                  className="input-text"
                  onChange={this.lastName}
                  value={lastName}
                  onBlur={this.OnBlurInputlast}
                />
              </div>
              <div className="button-container">
                <button type="submit" className="button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default RegistrationForm

import React, { Component } from "react";
import emailjs from "emailjs-com";

class ContactPage extends Component {
  state = {
    name: "",
    message: "",
    emailAddress: "",
    response: "",
    showResponse: false,
    sending: false,
  };

  sendEmail = () => {
    const { name, message, emailAddress } = this.state;
    const regex = /\S+@\S+\.\S+/;
    if (regex.test(emailAddress)) {
      const template_params = {
        name: name,
        message: message,
        email: emailAddress,
      };
      emailjs
        .send(
          "gmail",
          "contactemail",
          template_params,
          "user_BgQ01PRjvRYfs2HeS7tb0"
        )
        .then(() => {
          this.setState({
            name: "",
            message: "",
            emailAddress: "",
            response: "Thanks for getting in touch!",
            showResponse: true,
            sending: false,
          });
        })
        .catch((err) => {
          console.log(err);
        });
      this.setState({
        showResponse: false,
        sending: true,
      });
    } else {
      this.setState({
        showResponse: true,
        response: "Please provide a valid email address",
      });
    }
  };

  handleChange = (field, value) => {
    this.setState({ [field]: value });
  };

  handleSubmit = (event) => {
    const { name, message, emailAddress } = this.state;
    event.preventDefault();
    if (name !== "" && message !== "" && emailAddress !== "") {
      this.sendEmail();
    } else {
      this.setState({
        response: "Please complete all fields",
        showResponse: true,
      });
    }
  };

  render() {
    const {
      name,
      message,
      emailAddress,
      showResponse,
      response,
      sending,
    } = this.state;
    return (
      <>
        {showResponse ? <p className="response">{response}</p> : null}
        <h1 className="title">Contact</h1>
        {sending ? (
          <p>Sending email, please wait...</p>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <label className="name">
              Name:
              <textarea
                name="name"
                id="formName"
                rows="1"
                placeholder="Your name.."
                value={name}
                onChange={(event) => {
                  this.handleChange(event.target.name, event.target.value);
                }}
              />
            </label>
            <label className="emailAddress">
              Email:
              <textarea
                name="emailAddress"
                id="formEmail"
                rows="1"
                placeholder="Your email.."
                value={emailAddress}
                onChange={(event) => {
                  this.handleChange(event.target.name, event.target.value);
                }}
              />
            </label>
            <div className="message-container">
              <label className="message">
                Get in touch:
                <textarea
                  name="message"
                  id="message"
                  placeholder="Ask me a question about anything, or just say hi!"
                  value={message}
                  onChange={(event) => {
                    this.handleChange(event.target.name, event.target.value);
                  }}
                ></textarea>
              </label>
            </div>
            <input type="submit" value="Submit" className="submitBtn" />
          </form>
        )}
      </>
    );
  }
}

export default ContactPage;

import React, { Component } from "react";

class ContactPage extends Component {
  render() {
    return (
      <>
        <h1 class="title">Contact</h1>
        <form>
          <label for="name" class="label">
            Name:
          </label>
          <br />
          <input
            type="text"
            id="formName"
            name="name"
            placeholder="Your name.."
          />
          <br />
          <label for="message" class="label">
            Message:
          </label>
          <br />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="30"
            placeholder="Your message here.."
          ></textarea>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default ContactPage;

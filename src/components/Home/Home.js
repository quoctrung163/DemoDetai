import React, { Component } from "react";
import NavWesite from "../NavWesite/NavWesite";
import { Prompt, Redirect } from "react-router-dom";
import TotalFormCollection from "../formCollection/TotalFormCollection";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBlocking: false,
      isRedirect: false,
      //đặt null để khi submit mà không có dữ liệu sẽ ra undefine, không chuyên nghiệp
      txtName: "",
      txtEmail: "",
      txtMessage: ""
    };
  }
  isInputChange = event => {
    const target = event.target;

    //Lầy tên của input ra
    const name = target.name;
    //Lấy giá trị của input ra
    const value = target.value;

    this.setState({
      isBlocking: target.value.length > 0,
      [name]: value
    });
  };
  submitForm = event => {
    event.preventDefault();
    event.target.reset();
    this.setState({ isBlocking: false, isRedirect: false });
    let content = "";
    content += "Họ tên: " + this.state.txtName;
    content += "Email: " + this.state.txtEmail;
    content += "Message: " + this.state.txtMessage;
    console.log(content);
  };
  render() {
    if (this.state.isRedirect) {
      return <Redirect to="/products" />;
    }
    return (
      <div className="home-page">
        <NavWesite />
        <Prompt
          when={this.state.isBlocking}
          message={location =>
            `Are you sure you want to go to ${location.pathname}`
          }
        />
        <form
          className="Login"
          onSubmit={e => {
            this.submitForm(e);
          }}
        >
          <div className="trendy-item-wrap-title">
            <h1>Login</h1>
          </div>
          <input
            value={this.state.txtName}
            // giống tên của state
            name="txtName"
            type="text"
            placeholder="User name"
            onChange={event => this.isInputChange(event)}
          />
          <input
            value={this.state.txtEmail}
            name="txtEmail"
            type="email"
            placeholder="Email"
            onChange={event => this.isInputChange(event)}
          />
          <textarea
            defaultValue={this.state.txtMessage}
            name="txtMessage"
            type="text"
            rows="4"
            placeholder="Message"
            onChange={event => this.isInputChange(event)}
          ></textarea>
          <input type="submit" />
        </form>
        <div className="form-group">
          <TotalFormCollection />
        </div>
      </div>
    );
  }
}

export default Home;

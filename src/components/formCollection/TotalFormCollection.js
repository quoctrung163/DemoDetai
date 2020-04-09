import React, { Component } from "react";
import Radio from "./Radio";
import CheckBox from "./CheckBox";
import Option from "./Option";
import FileAvatar from "./FileAvatar";

const checkBoxArr = ["PHP", "ASP", "Swift", "Android"];

class TotalFormCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBlocking: false,
      isRedirect: false,
      //đặt null để khi submit mà không có dữ liệu sẽ ra undefine, không chuyên nghiệp
      sltCity: "hcm",
      rdoGioiTinh: "1",
      chkSubject: new Set(),
      file: ""
    };
  }

  checkBoxSubject = () => {
    const subject = checkBoxArr.map((val, key) => {
      return (
        <div className="pretty p-svg p-plain p-bigger p-smooth" key={key}>
          <input
            name="chkSubject"
            value="ios"
            type="checkbox"
            onChange={() => {
              this.checkedSubject(val);
            }}
            checked={this.state.chkSubject.has(val)}
          />
          <div className="state">
            <img
              alt=""
              className="svg"
              src="./template/images/form/604a0cadf94914c7ee6c6e552e9b4487-curved-check-mark-circle-icon-by-vexels.png"
            />
            <label>{val}</label>
          </div>
        </div>
      );
    });
    return subject;
  };
  UNSAFE_componentWillMount() {
    this.checkedCheckbox = new Set();
  }
  checkedSubject = monhoc => {
    if (this.checkedCheckbox.has(monhoc)) {
      this.checkedCheckbox.delete(monhoc);
    } else {
      this.checkedCheckbox.add(monhoc);
    }
    this.setState({
      chkSubject: this.checkedCheckbox
    });
  };

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

    const { sltCity, file, rdoGioiTinh, chkSubject } = this.state;

    let gioiTinh = "";
    if (parseInt(rdoGioiTinh, 10) === 1) {
      gioiTinh = "Nam";
    } else {
      gioiTinh = "Nữ";
    }
    let content = "";
    let monhocList = "";
    for (const mh of chkSubject) {
      monhocList += mh + ", ";
    }

    content += "City " + sltCity + " | " + gioiTinh + " | " + monhocList;
    console.log(content);
    console.log("Filename: " + file);
  };
  isFileChange = event => {
    this.setState({
      file: event.target.files[0].name
    });
  };

  render() {
    return (
      <div className="form-container">
        <form name="form-control" onSubmit={event => this.submitForm(event)}>
          <input type="submit" />
          <Radio
            event={event => this.isInputChange(event)}
            checkradio={parseInt(this.state.rdoGioiTinh, 10) === 1}
            checkradio1={parseInt(this.state.rdoGioiTinh, 10) === 2}
          />
          <CheckBox checkBoxItem={this.checkBoxSubject()} />
          <Option
            event={event => this.isInputChange(event)}
            value={this.state.sltCity}
          />
          <FileAvatar event={event => this.isFileChange(event)} />
        </form>
      </div>
    );
  }
}

export default TotalFormCollection;

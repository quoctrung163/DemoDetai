import React, { Component } from "react";

class Option extends Component {
  render() {
    return (
      <div className="form-group">
        <select
          name="sltCity"
          className="form-control"
          onChange={this.props.event}
          value={this.props.value}
        >
          <option value="">Vui lòng chọn thành phố</option>
          <option value="hn">Hà Nội</option>
          <option value="dn">Đà Nẵng</option>
          <option value="hcm">Hồ Chí Minh</option>
        </select>
      </div>
    );
  }
}

export default Option;

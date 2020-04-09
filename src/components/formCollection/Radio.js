import React, { Component } from "react";

class Radio extends Component {
  render() {
    return (
      <div className="form-group">
        <div className="pretty p-icon p-curve p-pulse">
          <input
            value="1"
            type="radio"
            name="rdoGioiTinh"
            onClick={this.props.event}
            defaultChecked={this.props.checkradio}
          />
          <div className="state p-info-o">
            <i className="icon fas fa-check"></i>
            <label> Nam</label>
          </div>
        </div>
        <div className="pretty p-icon p-curve p-pulse">
          <input
            value="2"
            type="radio"
            name="rdoGioiTinh"
            onChange={this.props.event}
            defaultChecked={this.props.checkradio1}
          />
          <div className="state p-info-o">
            <i className="icon fas fa-check"></i>
            <label> Nữ</label>
          </div>
        </div>
      </div>
    );
  }
}

export default Radio;

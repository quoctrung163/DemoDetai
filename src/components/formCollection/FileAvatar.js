import React, { Component } from 'react';
class FileAvatar extends Component {
  render() {
    return (
      <div className="form-group">
        <label className="custom-file">
          <input
            type="file"
            id="file"
            className="custom-file-input"
            name="favatar"
            onChange={this.props.event}
          />
          <span className="custom-file-control"></span>
        </label>
      </div>
    );
  }
}

export default FileAvatar;

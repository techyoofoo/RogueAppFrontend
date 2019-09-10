import React from "react";
import axios from "axios";

export default class UnInstallPlugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txtPluginName: null,
      updateFileResponseMsg: ""
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    // const formData = new FormData();
    // console.log("this.state.txtPluginName", this.state.txtPluginName)
    // formData.append("pluginName", this.state.txtPluginName);
    const config = {
      headers: {
        "content-type": "application/json"
      }
    };
    axios.post('http://localhost:3000/test', {
      pluginName: this.state.txtPluginName
    })
    .then(function (response) {
      console.log(response);
      // this.setState({updateFileResponseMsg: "Check"})
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }
  makeNewFolder() {
    console.log("Welcome to folder creation");
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div style={{ marginTop: "100px" }}></div>
        <h1>Un Install Plugin</h1>
        <div className="row">
          <div className="col-sm-3">
            <label>Plugin Name:</label>
          </div>
          <div className="col-sm-3">
            <input
              typ="text"
              placeholder="Enter Plugin Name"
              // value={this.state.txtPluginName}
              onChange={e => this.setState({ txtPluginName: e.target.value })}
            />
          </div>
        </div>
        {/* <input type="file" name="myImage" onChange={this.onChange} /> */}
        <button type="submit">Un Install</button>
        <p>Update Message -- {this.state.updateFileResponseMsg}</p>
      </form>
    );
  }
}

import React from "react";
import axios from "axios";

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      txtPluginName: ""
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("myImage", this.state.file);
    formData.append("pluginName", this.state.txtPluginName);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    axios
      .post("http://localhost:3000/upload", formData, config)
      .then(response => {
        alert("The file is successfully uploaded");
      })
      .catch(error => {});
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
        <h1>File Upload</h1>
        <input type="file" name="myImage" onChange={this.onChange} />
        <div className="row">
          <div className="col-sm-2">
            <label>Plugin Name</label>
          </div>
          <div className="col-sm-2">
            <input type="text" placeholder="Enter Plugin Name" onChange={(e) => this.setState({txtPluginName:e.target.value})} />
          </div>
        </div>
        <button type="submit">Upload</button>
      </form>
    );
  }
}

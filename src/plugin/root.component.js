import React, { Component } from 'react';
import MultiSelect from "@khanacademy/react-multi-select";
import axios from 'axios';

const options = [
  { id: 1, value: 'react', label: 'React' },
  { id: 2, value: 'react-dom', label: 'React-DOM' },
  { id: 3, value: 'webpack', label: 'WebPack' },
  { id: 4, value: '.net', label: '.Net' },
  { id: 5, value: 'angular', label: 'Angular' },
  { id: 6, value: 'java', label: 'Java' },
  { id: 7, value: 'c#', label: 'C#' },
  { id: 8, value: 'swift', label: 'Swift' },
  { id: 9, value: 'ionic', label: 'Ionic' }
];
export default class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      selected: [],
      description: '',
      file: undefined
    };
    this.submitForm = this.submitForm.bind(this)
  }
  validate(){
    if (!this.state.name) {
       alert("Name can not be blank");
       return false;
    }
    if(!this.state.description){
        alert("Description can not be blank"); 
        return false;
    }
    if(this.state.selected.length == 0){
      alert("Please select packages"); 
      return false;
    }
    if(!this.state.file || this.state.file.length ==0){
      alert("Selct a file"); 
      return false;
    }
    const types = ['application/x-zip-compressed']
    if (types.every(type =>this.state.file.type !== type)) {
      alert('File format not supported');
      return;
    }
    return true;
}

  submitForm(e) {
    e.preventDefault();
    const isValid = this.validate();
    if(!isValid){
      return;
    }
    const formData = new FormData();
    formData.append("myImage", this.state.file);
    formData.append("name",this.state.name);
    formData.append("description",this.state.description);
    formData.append("package",this.state.selected);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    axios.post("http://localhost:3000/upload", formData, config)
    .then(response => {
      alert("The file is successfully uploaded");
    })
    .catch(error => {});
  }
  render() {
    const { selected } = this.state;
    return (
      <div className="container" style={{ margin: "0 auto", maxWidth: "500px" }}>
        <div className="row" style={{ marginTop: "150px" }}>
          <div className="col-xs-12 col-sm-12 col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <center><h3 className="panel-title">ADD <small>Plugin</small></h3></center>
              </div>
              <div className="panel-body">
                <form onSubmit={this.submitForm} role="form">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                      <div className="form-group">
                        <input type="text" name="name" id="plugin_name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} className="form-control input-sm" placeholder="Plugin Name" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <MultiSelect
                      options={options}
                      selected={selected}
                      onSelectedChanged={selected => this.setState({ selected })}
                    />
                  </div>
                  <div className="form-group">
                    <textarea name="description" className="form-control" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} placeholder="Description"></textarea>
                  </div>
                  <div className="form-group">
                    <input type="file" name="file" onChange={(e) => this.setState({ file: e.target.files[0] })} />
                  </div>
                  <input type="submit" value="Register" className="btn btn-info btn-block" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


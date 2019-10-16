import React, { Component } from 'react';
import axios from 'axios';


export default class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      server: '',
      database: '',
      userid: '',
      password: '',
      port: null,
      pooling: false,
      errors: {}
    };
    this.submitForm = this.submitForm.bind(this);
    this.testConnection = this.testConnection.bind(this);
  }
  validate() {
    let errors = {};
    let formIsValid = true;
    if (!this.state.server) {
      errors["server"] = "Can not be blank";
      formIsValid = false;
    }
    if (!this.state.database) {
      errors["database"] = "Can not be blank";
      formIsValid = false;
    }
    if (!this.state.userid) {
      errors["userid"] = "Can not be blank";
      formIsValid = false;
    }
    if (!this.state.password) {
      errors["password"] = "Can not be blank";
      formIsValid = false;
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  clearForm() {
    this.setState({
      server: '',
      database: '',
      userid: '',
      password: '',
      port: '',
      pooling: false
    });
  }

  testConnection(e) {
    e.preventDefault();
    const isValid = this.validate();
    if (!isValid) {
      return;
    }
    const config = {
      headers: {
        "content-type": "application/json"
      }
    };
    axios.post("http://localhost:4000/rouge/server/testconnection", JSON.stringify(this.state), config)
      .then(response => {
        if (response.data) {
          alert('Test connection succeeded');

        }
        else {
          alert('Test connection failed');
        }
      })
      .catch(error => { });
  }

  submitForm(e) {
    e.preventDefault();
    const isValid = this.validate();
    if (!isValid) {
      return;
    }
    const config = {
      headers: {
        "content-type": "application/json"
      }
    };

    axios.post("http://localhost:4000/rouge/server/create", JSON.stringify(this.state), config)
      .then(response => {
        alert(response.data.message);
        this.clearForm();
      })
      .catch(error => { });
  }
  render() {
    return (
      <div className="container" style={{ margin: "0 auto", maxWidth: "500px" }}>
        <div className="row" style={{ marginTop: "150px" }}>
          <div className="col-xs-12 col-sm-12 col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <center><h3 className="panel-title">Add Server</h3></center>
              </div>
              <div className="panel-body">
                <form onSubmit={this.submitForm} role="form">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                      <div className="form-group">
                        <input type="text" name="server" id="server" value={this.state.server} onChange={(e) => this.setState({ server: e.target.value })} className="form-control input-sm" placeholder="Server Name" />
                        <span style={{ color: "red", fontSize: "12px" }}> {this.state.errors["server"]}</span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="text" name="database" id="database" value={this.state.database} onChange={(e) => this.setState({ database: e.target.value })} className="form-control input-sm" placeholder="Database Name" />
                    <span style={{ color: "red", fontSize: "12px" }}> {this.state.errors["database"]}</span>
                  </div>
                  <div className="form-group">
                    <input type="text" name="userid" id="user_id" value={this.state.userid} onChange={(e) => this.setState({ userid: e.target.value })} className="form-control input-sm" placeholder="User Id" />
                    <span style={{ color: "red", fontSize: "12px" }}> {this.state.errors["userid"]}</span>
                  </div>
                  <div className="form-group">
                    <input type="password" name="password" id="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} className="form-control input-sm" placeholder="Password" />
                    <span style={{ color: "red", fontSize: "12px" }}> {this.state.errors["password"]}</span>
                  </div>
                  <div className="form-group">
                    <input type="number" name="port" id="port" value={this.state.port} onChange={(e) => this.setState({ port: parseInt(e.target.value) })} className="form-control input-sm" placeholder="Port" />
                  </div>
                  <div className="form-group">
                    <label>
                      <input type="checkbox" checked={this.state.pooling} value={this.state.pooling} id="" name="pooling" onChange={(e) => this.setState({ pooling: e.target.checked })} />
                      <span> Pooling</span>
                    </label>
                  </div>
                  <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6">
                      <input type="submit" value="Submit" className="btn btn-info btn-block" />
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6">
                      <input type="button" value="Test" onClick={this.testConnection} className="btn btn-danger btn-block" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


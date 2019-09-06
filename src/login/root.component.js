import React from "react";

export default class Root extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-sm-3">
            <label>User Name :</label>
          </div>
          <div className="col-sm-3">
            <input typ="text" placeholder="UserName" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <label>Password :</label>
          </div>
          <div className="col-sm-3">
            <input typ="text" placeholder="Password" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div style={{ margin: "20px" }}>
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

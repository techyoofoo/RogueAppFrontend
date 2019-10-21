import React, { Component } from 'react';
import axios from 'axios';


export default class AllCommission extends React.Component {

    render() {
        return (
            <div className="container" style={{ margin: "0 auto" }}>
                <div className="row" style={{ marginTop: "150px" }}>
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <div className="form-group">
                            <select className="form-control" id="">
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12" >
                        <div className="panel panel-default" style={{ border: "1px solid #ced4da" }}>
                            <div className="panel-body">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}





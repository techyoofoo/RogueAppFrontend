import React, { Component } from 'react';
import axios from 'axios';


export default class CurrentCommission extends React.Component {
  constructor() {
    super();
    this.state = {
      commissions: [],
      isLoading: true,
      errors: null
    };
  }

  getCommissions() {
    axios
      .get("http://localhost:4000/rouge/commission/currentcommission/get/967")
      .then(response =>
        response.data.map(commission => ({
          CustomerID: `${commission.CustomerID}`,
          Total: `${commission.Total}`,
          RankID: `${commission.RankID}`,
          RankDescription: `${commission.RankDescription}`,
          PeriodID: `${commission.PeriodID}`,
          PeriodDescription: `${commission.PeriodDescription}`
        }))
      )
      .then(commissions => {
        this.setState({
          commissions,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getCommissions();
  }

  render() {
    const { isLoading, commissions } = this.state;
    return (
      <div className="container" style={{ margin: "0 auto", maxWidth: "500px" }}>
        <div className="row" style={{ marginTop: "150px" }}>
          <div className="col-xs-12 col-sm-12 col-md-12">
            <div className="panel panel-default">
              {/* <div className="panel-heading">
                  <center><h3 className="panel-title">CURRENT COMMISSION</h3></center>
                </div> */}
              <div className="panel-body">
                <div className="card card-default card-metrics" data-scroll-reveal="enter bottom">
                  <div className="card-heading">
                    <center> <h3 className="card-title" style={{ marginTop: "10px" }}>
                      Your Commissions
                      </h3></center>
                  </div>
                  <div className="card-body text-center-mobile" id="card-current-commissions">
                    <table className="table" id="table-current-commissions">
                      <tbody>
                        <tr>
                          <th>Period</th>
                          <th>Paid as Title</th>
                        </tr>
                        {!isLoading ? (
                          commissions.map((commission, index) => {
                            const { CustomerID, Total, RankID, RankDescription, PeriodID, PeriodDescription } = commission;
                            return (
                              <tr key={index}>
                                <td>{PeriodDescription}</td>
                                <td>{RankDescription}</td>
                              </tr>
                            );
                          })
                        ) : (
                            <p>Loading...</p>
                          )}
                      </tbody></table>
                  </div>
                  <a href="/commission/5" className="card-footer block text-right">
                    View current earnings <i className="fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}





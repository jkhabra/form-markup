import * as React from "react";
import { Component } from "react";
import { Link, Route, Switch} from "react-router-dom";
import CompanyDetails from "../CompanyDetails"
import "./style.css";

class CompanyCard extends Component{
  public state = {
    companies: []
  };

  public componentDidMount() {
    this.getData();
  }

  public getData = () => {
    const url = "http://localhost:5000/companies";

    fetch(url, { method: "GET" })
      .then(res => res.json())
      .then(res => {
        const companies = res.data;

        this.setState({ companies });
      })
      .catch(err => {
        console.warn("Error while featching", err); // tslint:disable-line
      });
  };

  public render() {
    const company = this.state.companies;

    return (
      <div className='company-container'>
        {company.map((c: any, index) =>{
           return (
             <Link to={`/company/${c.id}`} key={c.id} className='card-link'>
               <div className="c-frame">
                 <div className="c-name" title='Name'>
                   {c.name}
                 </div>
                 <div className="c-web" title='Website'>
                   {c.website}
                 </div>
                 <div className="c-est" title='Established'>
                   {c.established}
                 </div>
                 <div className="c-type" title='Type'>
                   {c.type}
                 </div>
                 <div className="c-logo">
                   <img className="c-logo2" src={c.logo} alt="company's logo" />
                 </div>
               </div>
             </Link>
           )
        })}
        <Switch>
          <Route exact={true} path="/company/:id" component={CompanyDetails} />
        </Switch>
      </div>
    );
  }
}

export default CompanyCard;

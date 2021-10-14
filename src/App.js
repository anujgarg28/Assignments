import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import UserHome from "./UserHome";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      clicked : false
    }
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>
          <u> Welcome to my Web Store </u>
        </h1>
        <Link to="/">
          <button> Home </button>
        </Link>
        <Link to="/about">
          <button> About </button>
        </Link>
        <Link to={`/contact/${200}`}>
          <button> Contact </button>
        </Link>
        <Link to="/products">
            <button> Get Products</button>
        </Link>
        <button onClick={() => this.setState({name: 'Test User', clicked: true})}> Login </button>
        {this.state.name === 'Test User' ? <Redirect to="/userHome"/> : 
          this.state.clicked ? <Redirect to="/error"/> : null}
        <hr />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/contact/:userId" component={Contact} />
          <Route path="/about" render={(props) => <About {...props} name='Anuj'/>} />
          <Route path="/userHome" render={(props) => <UserHome {...props} name={this.state.name}/>}/>
          <Route path="/error" component={ErrorPage}/>
        </Switch>
      </div>
    );
  }
}

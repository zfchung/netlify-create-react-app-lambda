import React, { Component } from "react";
import "./App.css";

// class LambdaDemo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { loading: false, msg: null };
//   }

//   handleClick = (api) => (e) => {
//     e.preventDefault();

//     this.setState({ loading: true });
//     fetch("/.netlify/functions/" + api)
//       .then((response) => response.json())
//       .then((json) => this.setState({ loading: false, msg: json.msg }));
//   };

//   render() {
//     const { loading, msg } = this.state;

//     return (
//       <p>
//         <button onClick={this.handleClick("hello")}>
//           {loading ? "Loading..." : "Call Lambda"}
//         </button>
//         <button onClick={this.handleClick("async-dadjoke")}>
//           {loading ? "Loading..." : "Call Async Lambda"}
//         </button>
//         <br />
//         <span>{msg}</span>
//       </p>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header App-padding">
          <h1>Zack's Learning Journal.</h1>
          <p>by Chung ZF (Zack)</p>
        </header>
        <main className="App-main App-padding">
          <article>
            <h2>Set up plain static site using Netlify Create React App</h2>
            <p className="App-date">1st August 2021</p>
            <p>
              Started using Netlify to bootstrap a React page. Using this
              website to journal my tech learning journey.
            </p>
            <p>
              Using Netlify save the effort to maintain an webhost by myself.
              Meaning, no need to maintain any infrastructure. It comes with
              Lambda functions. Best of all, it's free.
            </p>
            <p>
              This website design is still very basic, have a few plans in mind
              to revamp the design. More to come.
            </p>
          </article>
        </main>
        <footer className="App-footer App-padding">
          <li>
            <a href="https://linkedin.com/in/zchung1">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/zfchung">GitHub</a>
          </li>
        </footer>
      </div>
    );
  }
}

export default App;

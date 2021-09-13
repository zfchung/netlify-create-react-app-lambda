import React, { Component } from "react";
import "./App.css";
import mindmap from "./mindmap-simplicity.png";

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
            <h1>Notes on 4 Rules of Simple Design</h1>
            <p className="App-date">13th September 2021</p>
            <p>
              Taking notes from Corey Haines'{" "}
              <i>Understanding 4 Rules of Simple Design</i>
            </p>
            <img src={mindmap} alt=""></img>
          </article>
          <hr />
          <article>
            <h2>Notes on Refactoring</h2>
            <p className="App-date">29th August 2021</p>
            <p>
              Taking notes from the video&nbsp;
              <a href="https://www.youtube.com/watch?v=J18mLs-SRpI">
                JavaScript Refactoring Masterclass with Chris Powers
              </a>
            </p>
            <h3>What is Refactoring?</h3>
            <ul>
              <li>
                Breaking code down to smaller components/factors, and then being
                able to use those smaller components in an easier way.
              </li>
              <li>
                Allow you to make changes with zero impact on user, the api, the
                behaviour of your system. It will only change the internals.
              </li>
            </ul>
            <p>
              If Refactoring does not add new feature, new UI, what value does
              it bring to our customers?
            </p>
            <h3>Why do we want to refactor?</h3>

            <ul>
              <li>Software is most valuable when it's flexible</li>
              <li>Flexibility leads to maintainability</li>
              <li>
                The beauty of software, unlike other mediums, is that it is able
                to evolve as user needs changes.
              </li>
              <li>
                Software is no longer be able to evolve, when it becomes like a
                rusty screw with nut: "Tightly Coupled", "Rusted", "Corodded
                over time"
              </li>
            </ul>

            <h3>What about Rewrite?</h3>
            <p>
              Often time we are tempted by the siren song of rewrite when we see
              a code that we don't fully understand, a bad code. We believe that
              rewriting them is easier to right what is wrong, we can do it
              better than the previous developer (including ourselves in the
              past)
            </p>
            <p>But how often does that actually happen?</p>
            <p>
              Speaker claims that often time when we rewrite, we might easily
              get into trouble because we don't realize what the actual problem
              is with the code. The problem isn't that the code is bad (at least
              not the first degree problem). The first degree problem is that we
              don't know what the code does. We might have a general sense of
              what it does, at a high level, but we don't actually know every
              single line. That crappy little piece of syntax that we so happily
              removed, it ended up being a bug fix that were solved years ago.
              And now we might have reintroduced it to our customers.
            </p>
            <p>
              When we are thinking of rewriting, we are saying that the current
              code base has zero value, they might as well be gone. No option is
              a good option at this point, as refactoring is going to take a lot
              of time and rewrite might get someone into trouble.
            </p>
            <p>So how do we not get there? - Test-Driven Development (TDD)</p>
            <h3>
              TDD: Red -{">"} Green -{">"} Refactor
            </h3>

            <ul>
              <li>
                When you only refactor when things went terribly wrong or until
                there is a palpable sense of inefficiency in our code base that
                you feel that you need to refactor to get our days, weeks back
                in our life.
              </li>
              <li>There are no good choices when you got to that point</li>
              <li>TDD means that you are refactoring daily, hourly</li>
              <li>
                We are constantly re-evaluating the design of our code and make
                changes along the way
              </li>
              <li>It gives software its value</li>
              <li>
                Don't think about how do we rehaul the whole project. Think
                about how can I react on something little today/this
                morning/this afternoon.
              </li>
            </ul>

            <h3>Goals of Refactoring</h3>

            <ul>
              <li>
                We're on the job, we have a professional responsibility to set a
                goal of this refactoring exercise.
              </li>
              <li>
                The goal is we're looking for simplicity.
                <ul>
                  <li>
                    If the code that we are looking at is complex, it is
                    disjointed, conjoined in ad places, it's no longer easy to
                    explain to someone, not easy to reason about.
                  </li>
                </ul>
              </li>
              <li>
                How to define simplicity: Kent Beck's 4 Rules of Simple Design
                <ul>
                  <li>
                    Test Passes
                    <ul>
                      <li>
                        You cannot have simple code if you cannot verify the
                        code works. Because it may lie to you if you do not have
                        automated feedback on what it claims it does.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Expresses Intent
                    <ul>
                      <li>What we end up put in the software</li>
                      <li>
                        When we see a code that is rusty, we would be thinking
                        "What is this person thinking". Exactly, we do not know
                        what the person is thinking
                      </li>
                      <li>Easy for people to understand</li>
                    </ul>
                  </li>
                  <li>
                    No Duplication (DRY or SPOT)
                    <ul>
                      <li>Not about syntax or code, but about knowledge</li>
                      <li>
                        When requirement change and knowledge change, out of
                        sync knowledge will break
                      </li>
                    </ul>
                  </li>
                  <li>
                    Small
                    <ul>
                      <li>
                        Remove elements that are not following the above 3 rules
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </article>
          <hr />
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

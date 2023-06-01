import * as React from "react";
import ReactDOM from 'react-dom';
import { Component,  } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { reactApp_backend } from "../../declarations/reactApp_backend";

// const MyHello = () => {
//   const [name, setName] = React.useState('');
//   const [message, setMessage] = React.useState('');

//   async function doGreet() {
//     const greeting = await reactApp_backend.greet(name);
//     setMessage(greeting);
//   }

//   return (
//     <div style={{ "fontSize": "30px" }}>
//       <div style={{ "backgroundColor": "yellow" }}>
//         <p>Greetings, from DFINITY!</p>
//         <p>
//           {" "}
//           Type your message in the Name input field, then click{" "}
//           <b> Get Greeting</b> to display the result.
//         </p>
//       </div>
//       <div style={{ margin: "30px" }}>
//         <input
//           id="name"
//           value={name}
//           onChange={(ev) => setName(ev.target.value)}
//         ></input>
//         <button onClick={doGreet}>Get Greeting!</button>
//       </div>
//       <div>
//         Greeting is: "
//         <span style={{ color: "blue" }}>{message}</span>"
//       </div>
//     </div>
//   );
// };

// render(<MyHello />, document.getElementById("app"));

class EntryPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentView: "signUp"
    }
  }

  changeView = (view) => {
    this.setState({
      currentView: view
    })
  }

  currentView = () => {
    switch(this.state.currentView) {
      case "signUp":
        return (
          <form>
            <h2>Sign Up!</h2>
            <fieldset>
              <legend>Create Account</legend>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" required/>
                </li>
                <li>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" required/>
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" required/>
                </li>
              </ul>
            </fieldset>
            <button>Submit</button>
            <button type="button" onClick={ () => this.changeView("logIn")}>Have an Account?</button>
          </form>
        )
        break
      case "logIn":
        return (
          <form>
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend>Log In</legend>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" required/>
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" required/>
                </li>
                <li>
                  <i/>
                  <a onClick={ () => this.changeView("PWReset")} href="#">Forgot Password?</a>
                </li>
              </ul>
            </fieldset>
            <button>Login</button>
            <button type="button" onClick={ () => this.changeView("signUp")}>Create an Account</button>
          </form>
        )
        break
      case "PWReset":
        return (
          <form>
          <h2>Reset Password</h2>
          <fieldset>
            <legend>Password Reset</legend>
            <ul>
              <li>
                <em>A reset link will be sent to your inbox!</em>
              </li>
              <li>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required/>
              </li>
            </ul>
          </fieldset>
          <button>Send Reset Link</button>
          <button type="button" onClick={ () => this.changeView("logIn")}>Go Back</button>
        </form>
        )
      default:
        break
    }
  }


  render() {
    return (
      <section id="entry-page">
        {this.currentView()}
      </section>
    )
  }
}

ReactDOM.render(<EntryPage/>, document.getElementById("app"))
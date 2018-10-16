import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, Link } from 'react-router';
import store from './redux'
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter
} from './redux/action'

store.dispatch(addTodo('Learn about actions'));

console.log(store.getState());
function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Jime',
  lastName: 'Green',
  name: 'Jime Green1'
}

function Welcome(props){
  return <h1>Hello, {props.name}</h1>;
}

// function tick(){
//   const element = (
//     <div>
//       <h1>Hello, world</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   )
//
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }
//
// setInterval(tick, 1000);

function Avatar(props){
  return (
    <h1>
      imgSrc  {props.user.avatarUrl}
    </h1>
  )
}

function UserInfo(props){
  return (
    <div  className = "UserInfo">
      <Avatar user={props.user} />
      <div className = "UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}

function Comment(props){
  return (
    <div  className="Comment">
      <UserInfo user={props.author} />
      <div  className = "Comment-text">
        {props.text}
      </div>
    </div>
  )
}

function CustomApp(){
  return (
    <div>
      <Welcome name='Tom' />
      <Welcome name='Jerry' />
      <Welcome name='Rose' />
    </div>
  )
}

// function Colock(props1){
//   return (
//     <div>
//       <h1>Hello, World</h1>
//       <h2>It is {props1.date.toLocaleTimeString()}</h2>
//     </div>
//   )
// }

function FormatterDate(props){
  return <h2>It is {props.date.toLocaleTimeString()}</h2>
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    // setInterval("var a=1;var b=2;c=a+b;alert(c);",1000);
  }

  componentDidMount() {
    this.timerId = setInterval(
      () =>this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }


  render() {
    return (
      <div>
        <h1>Hello, World</h1>
        <FormatterDate date= {this.state.date}/>
      </div>
    )
  }
}

function App1(){
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  )
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

function UserGreeting(){
  return <h1>Welcome back!</h1>
}

function GuestGreeting(){
  return <h1>Please Sign Up!</h1>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    if(isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick}/>
    }else{
      button = <LoginButton onClick={this.handleLoginClick}/>
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    )
  }
  
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  )
  return (
    <ul>{listItems}</ul>
  )
}

const numbers = [1, 2, 3, 4, 5];

function BoilingVerdict(props) {
  if(props.celsius >= 100){
    return <p> 水会烧开</p>;
  }
  return <p>水不会烧开</p>
}

const scaleName = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class TemperatureInput extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render(){
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return(
      <fieldset>
        <legend>Enter temperature in {scaleName[scale]}</legend>
        <input value={temperature} onChange={this.handleChange}></input>
        {/* <BoilingVerdict celsius={parseFloat(temperature)}></BoilingVerdict> */}
      </fieldset>
    )
  }

}

class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {temperature: '', scale: 'c'};
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(temperature) {
    this.setState({temperature: temperature, scale: 'c'})
  }

  handleFahrenheitChange(temperature) {
    this.setState({temperature: temperature, scale: 'f'})
  }


  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput 
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}>
        </TemperatureInput>

        <TemperatureInput 
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}>>
        </TemperatureInput>

        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    )
  }
}

function FancyBorder(props) {
  return (
    <div className={props.color}>
      {props.children}
    </div>
  )
}

function WelcomeDialog() {
  return (
    <FancyBorder  color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  )
}


class ListOfWords extends React.Component {
  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
}

class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // This section is bad style and causes a bug
    const words = this.state.words;
    words.push('marklar');
    this.setState({words: words});
    // this.setState(prevState => ({
    //   words: prevState.words.concat(['marklav'])
    // }))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} > addButton</button>
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}

ReactDOM.render(
  <WordAdder  />,
  document.getElementById('root')
)
const commentAuthor = {
  author: {
    name: 'authorName',
    avatarUrl: 'authorUrl'
  },
  text: 'commentText'
}
// ReactDOM.render(
//   <Comment  author={commentAuthor.author} text={commentAuthor.text}/>,
//   document.getElementById('root')
// );

registerServiceWorker();

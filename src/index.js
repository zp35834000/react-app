import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, Link } from 'react-router';

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


class ProductCategoryRow extends React.Component {
  render() {
    return <tr><th colSpan="2">{this.props.category}</th></tr>;
  }
}

class ProductRow extends React.Component {
  render() {
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}


var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];


class AutoFocusTextInput extends React.Component {
  constructor(props){
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.foucsTextInput();
  }

  render(){
    return(
      <CustomTextInput ref={this.textInput}></CustomTextInput>
    )
  }
}

class CustomTextInput extends React.Component {
  constructor(props){
    super(props);
    this.textInput = React.createRef();
    this.foucsTextInput = this.foucsTextInput.bind(this);
  }

  foucsTextInput(){
    this.textInput.current.focus();
    console.log('触发focus事件');
  }

  render(){
    return (
      <div>
        <input type="text" ref={this.textInput}></input>
        <input type="button" value="Focus the text input" onClick={this.foucsTextInput}></input>
      </div>
    )
  }
}

class NameForm extends React.Component{
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: 
          {/* <input type="text" ref={(input) => this.input = input}></input> */}
          <input type="text" defaultValue="Bob" ref={this.input}></input>
        </label>
        <input type="submit" value="Submit"></input>
      </form>
    )
  }
}


class FileInput extends React.Component{
  constructor(props){
    super(props);
    this.fileInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    alert(`Selected file - ${this.fileInput.current.files[0].name}`);
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput}></input>
          <br></br>
          <button type="submit" >Submit</button>
        </label>
      </form>
    )
  }
}


class FileInput1 extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Selected file - ${this.fileInput.files[0].name}`
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input
            type="file"
            ref={input => {
              this.fileInput = input;
            }}

          />

        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

ReactDOM.render(
  <FileInput />,
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

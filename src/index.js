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

const commentAuthor = {
  author: {
    name: 'authorName',
    avatarUrl: 'authorUrl'
  },
  text: 'commentText'
}
ReactDOM.render(
  <Comment  author={commentAuthor.author} text={commentAuthor.text}/>,
  document.getElementById('root')
);
registerServiceWorker();

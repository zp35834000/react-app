import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {BrowserRouter, Route} from 'react-router-dom'

import todoApp from './reducers'
// import App from './components/App'
import Home from './components/Home'
import Story from './components/Story'

let store = createStore(todoApp)


class App extends React.Component{
  render(){
      return(
          <div>   
              {this.props.children}
          </div>              
      )
  }
}

class Header extends React.Component {

  render() {
    return (
      <div>
        header
      </div>
    )
  }
}

render(
  <BrowserRouter>
    <App>
      <Route path="/" exact component={Home}></Route>
      <Route path="/Story/:author/:name" component={Story}/>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
)
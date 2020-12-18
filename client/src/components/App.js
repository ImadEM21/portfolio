import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Presentation from './Presentation';
import Body from './Body';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import GetIdProject from './GetIdProject';
import Auth from './Auth';
import Messages from './Messages';
import NotFoundPage from './NotFoundPage';
import apis from '../api/index';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false
    }
  }

  componentDidMount = () => {
    document.title = "Imad Elmahrad";
    if (sessionStorage.getItem('connexion-and-auth-imad-667') !== null) {
      this.setState({
        isLogged: true
      });
    }
  }

  deleteProject = async id => {
    await apis.deleteProject(id)
    .then(() => {
       console.log("Projet supprimé avec succès");
    })
    .catch(error => console.error(error));
  };
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Header />
              <Presentation />
              <Body />
              <Projects isLogged={this.state.isLogged} />
              <Contact />
              <Footer />
            </Route>
            <Route path='/project/:id'>
              <GetIdProject deleteProject={this.deleteProject.bind(this)} isLogged={this.state.isLogged}/>
            </Route>
            <Route path='/auth/login'>
              <Auth />
            </Route>
            {this.state.isLogged ?
            <Route path='/user/messages'>
              <Messages />
            </Route> : null}
            <Route path='*'>
              <NotFoundPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      
    );
}
}

export default App;

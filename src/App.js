import React ,{Component} from "react";
import ImgComp from './components/ImgComp';
import {Provider } from 'react-redux';
import store from './redux/store';
import Post from './components/Post';
import Albums from './components/Albums';
import Nasa from './components/Nasa';
import AlbumDets from './components/AlbumDets';
import NavbarMain from './components/Navbar';
import PostDetails from './components/PostDetails';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import {BrowserRouter,Route} from 'react-router-dom';
import fire from './config/firebase'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      user:{}
    }

  }
  componentDidMount()
  {
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({
          user:user
        })
      }
      else{
        this.setState({user : null})
      }
    })
  }
  render(){ 
  return (
    <Provider store={store}>
      <BrowserRouter>
      {this.state.user ? (
        <div>
         <NavbarMain/>
         <Route exact path ="/nasa" component={Nasa}/>
         <Route exact path ="/unsplash" component={ImgComp}/>
         <Route exact path ="/post" component={Post}/>
         <Route exact path ="/albums" component={Albums}/>
         <Route exact path ="/album/:id" component={AlbumDets}/>
         <Route exact path ="/post/:id" component={PostDetails}/>
         <Footer/>
         </div>

      ):(     <div>
         <Route exact path ="/" component={Login}/>
      <Route exact path ="/register" component={Register}/>
      </div>
      )
    }
  
    </BrowserRouter>
    </Provider>
  );
}
}

export default App;

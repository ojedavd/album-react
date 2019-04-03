import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import firebase from './initializers/firebase';
import { withStyles } from '@material-ui/core/styles';

class Login extends Component{
    constructor(props){
        super(props)
        this.login = this.login.bind(this)

        this.state = {
            userLoggedIn: false,
            photoURL:''
        };
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({
                    userLoggedIn: true,
                    photoURL: user.providerData[0].photoURL
                })
            } else {

            }
        })
    }

    login(){
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/photoslibrary.readonly');
        firebase.auth().signInWithPopup(provider).then(result=>{
            let token = result.credential.accessToken;
        }).catch(err=>{
            console.log(err);
        })
    }

    logInButton(){
        if(this.state.userLoggedIn) return(
            [<Avatar src={this.state.photoURL} />,<p>Cerrar sesion</p>]
        );

        return (<Button variant="contained" onClick={this.login}>
        Iniciar con Google
        </Button>);
    }

    render(){
        return(
            <div className={this.props.classes.container}>
                {this.logInButton()}
            </div>    
        );
    }
}

export default withStyles({
    container:{
      display: 'flex',
      flexDirection: 'row'
    }
  })(Login);
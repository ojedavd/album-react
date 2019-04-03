import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import firebase from './initializers/firebase';

export default class Login extends Component{
    constructor(props){
        super(props)
        this.login = this.login.bind(this)

        this.state = {
            userLoggedIn: false
        };
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({
                    userLoggedIn: true
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
            <p>Cerrar sesion</p>
        );

        return (<Button variant="contained" onClick={this.login}>
        Iniciar con Google
        </Button>);
    }

    render(){
        return(
            <div>
                {this.logInButton()}
            </div>    
        );
    }
}
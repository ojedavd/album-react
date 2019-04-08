import React,{Component} from 'react';
import AuthElements from '../components/AuthElements';
import firebase from '../initializers/firebase';

import { connect } from 'react-redux';
import { saveToken, clearToken } from '../initializers/actions';



class Login extends Component{
    constructor(props){
        super(props)
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)

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
                this.setState({
                    userLoggedIn: false,
                    photoURL: ''
                })
            }
        })
    }

    login(){
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/photoslibrary.readonly');
        firebase.auth().signInWithPopup(provider).then(result=>{
            let token = result.credential.accessToken;
            this.props.saveToken(token);
        }).catch(err=>{
            console.log(err);
        })
    }

    logout(){
        firebase.auth().signOut().then(()=>{
            this.props.clearToken();
        });
    }

    render(){
        return(
            <AuthElements 
                login={this.login}
                logout={this.llgout}
                userLoggedIn={this.state.userLoggedIn}
                token={this.props.token}
                photoURL={this.state.photoURL}
            />    
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        token: state.token
    }
}

const mapDispatchToProps = {
    saveToken,
    clearToken
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
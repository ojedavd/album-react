import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {setAlbums, clearAlbums} from '../initializers/actions';

class Albums extends Component{
    componentDidMount(){
        if(process.env.NODE_ENV == 'production'){
            this.loadPhotos();
        } else{
            import('../data/albums').then(module=>{
                console.log(module.default);
            })
        }
        
    }

    loadPhotos(){
        axios({
            url: 'https://photoslibrary.googleapis.com/v1/albums',
            method: 'GET',
            headers:{
              'Authorization': `Bearer ${this.props.token}`
          }
        }).then(console.log).catch(console.log);
    }
    
    render(){
        return (<div></div>);
    }
}

const mapStateToProps = (state)=>({
    albums: state.albums,
    token: state.token
});

const mapDispatchToProps = {
    setAlbums,
    clearAlbums
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
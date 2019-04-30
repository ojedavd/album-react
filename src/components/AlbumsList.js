import React from 'react';
import { withStyles } from '@material-ui/core/styles';

function AlbumsList(props){
    return(
    <div>
        {props.albums.map((albums,index)=>{
            
        })}
    </div>);
}

export default withStyles({

})(AlbumsList);
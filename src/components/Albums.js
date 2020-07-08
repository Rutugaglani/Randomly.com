import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getAlbums} from '../redux/actions/dataActions'
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import '../css_styling/post.css'

export class Albums extends Component {
    componentDidMount=()=>{
        this.props.getAlbums();
    }
    render() {
        const {albums}=this.props;
        console.log(albums);
        const list =albums.slice(0,10).map(item=>{
            return(
                <div className="album_display">
                 <Link to={{pathname:`/album/${item.id}`,name:`${item.title}`}} className="album_para" >{item.title}</Link>
                </div>
            )
        })

        return (
            <Container className="album_main" >
            <h1 className="album_header">Album</h1>
            {list}
       </Container>
      
        )
    }
}

const mapStateToProps = (state)=>({
    albums:state.data.albums
})
const mapActionToProps = {getAlbums}
Albums.propTypes = {
    albums:PropTypes.array.isRequired,
    getAlbums:PropTypes.func.isRequired,
    

}

export default connect(mapStateToProps,mapActionToProps)(Albums)


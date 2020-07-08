import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getPosts} from '../redux/actions/dataActions'
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import '../css_styling/post.css'


 class Post extends Component {
    componentDidMount=()=>{
        this.props.getPosts();
    }

    render() { 
        const {posts}=this.props;
        console.log(posts);
        const list =posts.slice(0,10).map(item=>{
            return(
                <div className="post_display">
                   
                 <Link to={{pathname:`/post/${item.id}` , details:item}} className="post_para">{item.title}</Link>
                </div>
            )
        })

        return (
                <Container className="post_main">
                     <h1 className="post_header">Latest Post</h1>
                     {list}
                </Container>
                   
      
        )
    }
}

const mapStateToProps = (state)=>({
    posts:state.data.posts
})
const mapActionToProps = {getPosts}
Post.propTypes = {
    posts : PropTypes.array.isRequired,
    getPosts:PropTypes.func.isRequired,
    

}

export default connect(mapStateToProps,mapActionToProps)(Post)



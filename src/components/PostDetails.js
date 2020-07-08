import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getPost} from '../redux/actions/dataActions';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../css_styling/post.css'
import Default from '../images/empty.jpg';


export class PostDetails extends Component {

    componentDidMount(){
        this.props.getPost(this.props.match.params.id)
    }
    render() {
        const id=this.props.match.params.id
        console.log(this.props.match.params.id)
        console.log(this.props.post)
        console.log(this.props.comments)

        const {post,comments}=this.props;
        const filterComments=comments.filter(items=>items.postId == id).map(item=>{
            return(
                     <Row className="post_item" key={item.id}>
            <Col xs={2} md={1} className="post_ImageCol" >
              <img src={Default}  alt="default"/>
            </Col>
            <Col xs={10} md={11} style={{paddingLeft:0}}>
            <Col xs={6} className="post_NameCol">
            <p>{item.name}</p>
            <p className="post_email"> {item.email}</p>
            </Col>

            <Col sm={12} className="post_commentBody" >
            <p>{item.body}</p>
            </Col>
            </Col>
          </Row>
                  
            )
        })
        return (
            <Container>
                <div className="post_mainDiv">
        <h2 className="post_header">{post.title}</h2>
        <p className="post_body">{post.body}</p>
                </div>
                <div className="post_commentsMain">
                    <h3 className="post_header">Comments : </h3>
                {filterComments}
                </div>

                </Container>
        )
    }
}

const mapStateToProps = (state)=>({
    post:state.data.post,
    comments:state.data.comments
})
const mapActionToProps = {getPost}
PostDetails.propTypes = {
    post : PropTypes.object.isRequired,
    comments:PropTypes.array.isRequired,
    getPost:PropTypes.func.isRequired,
    
}

export default connect(mapStateToProps,mapActionToProps)(PostDetails)




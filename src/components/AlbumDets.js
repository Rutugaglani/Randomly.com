import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getPhotos} from '../redux/actions/dataActions';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


export class AlbumDets extends Component {

    componentDidMount(){
        this.props.getPhotos(this.props.match.params.id);

    }
    render() {
        const id=this.props.match.params.id
        console.log(this.props.match.params.id)
        console.log(this.props.location.name)
        const {photos}=this.props;
        const filterPhotos=photos.filter(items=>items.albumId == id).slice(0,20).map(item=>{
            return(
                    <Col sm={4}>
                    <Card className="album_card" >
  <Card.Img variant="top" src={item.url} />
  <Card.Body>
    <Card.Title>{item.title}</Card.Title>
  </Card.Body>
</Card>
                    </Col>
            )
        })
        return (
            <Container>
                <h1 className="selAlbum_header">{this.props.location.name}</h1>
                <Row className="albumPhotosList">
                {filterPhotos}
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state)=>({
    photos:state.data.photos,
    
})
const mapActionToProps = {getPhotos}
AlbumDets.propTypes = {
    photos:PropTypes.array.isRequired,
    getPhotos:PropTypes.func.isRequired,
    
}

export default connect(mapStateToProps,mapActionToProps)(AlbumDets)




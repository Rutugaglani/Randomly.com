import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {searchImages,getImages} from '../redux/actions/dataActions';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css_styling/unsplash.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


 class ImgComp extends Component {
     state={
         search:''
     }
    componentDidMount=()=>{
        this.props.getImages();
    }

    handleChange=(e)=>{
       this.setState({
        [e.target.name]:e.target.value 
       })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state)
        if(this.state.search !== '')
        {
            this.props.searchImages(this.state.search)
        }
    }
    render() { 
        const {images}=this.props;
        //const firstUrl=images[0].urls.regular
        const firstUrl = images.length?images[0].urls.regular:'';
        const list1 =images.slice(1,10).map(imgSrc=>{
            return(
                <Col sm={12} className="unsplash_photos">
                <img src={imgSrc.urls.regular}  alt="img"/>
                </Col>
            )
        })
        const list2 = images.slice(10,19).map(imgSrc=>{
            return(
                <Col sm={12} className="unsplash_photos">
                <img src={imgSrc.urls.regular}  alt="img"/>
                </Col>
            )
        })
        const list3 = images.slice(19,28).map(imgSrc=>{
            return(
                <Col sm={12} className="unsplash_photos">
                <img src={imgSrc.urls.regular}   alt="img"/>
                </Col>
            )
        })
        //style={{backgroundImage:'url('+images[0].urls.regular+')'}}

        return (
            <div>
                <Jumbotron fluid className="unsplash_jumbo" style={{backgroundImage:'url('+firstUrl+')'}}>
                    <Container>
                        <h1 className="unsplash_mainHeader">Unsplash</h1>
                        <p className="unsplash_para">The internet’s source of freely-usable images.</p>
                        <p className="unsplash_para">Powered by creators everywhere.</p>
                        <div>
                        <InputGroup className="mb-3 search_div">
    <InputGroup.Prepend>
      <Button className="searchBtn_unsplash" onClick={this.handleSubmit}> <FontAwesomeIcon icon={faSearch}/></Button>
    </InputGroup.Prepend>
    <FormControl className="unsplash_input" aria-describedby="basic-addon1" placeholder="Search free high-resolution images" name="search" value={this.state.search}  onChange={this.handleChange}/>
  </InputGroup>
                        </div>
                </Container>
                </Jumbotron>

                <Container style={{paddingLeft:0,paddingRight:0}}>
                    <Row>
                        <Col sm={4}  className="Col_main_unsplash">
                            {list1}
                        </Col>
                        <Col sm={4} className="Col_main_unsplash">
                            {list2}
                        </Col>
                        <Col sm={4} className="Col_main_unsplash">
                            {list3}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
    images:state.data.images
})
const mapActionToProps = { searchImages,getImages}
ImgComp.propTypes = {
    images : PropTypes.array.isRequired,
    getImages:PropTypes.func.isRequired,
    searchImages : PropTypes.func.isRequired,

}

export default connect(mapStateToProps,mapActionToProps)(ImgComp)



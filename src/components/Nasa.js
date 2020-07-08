import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getNasa} from '../redux/actions/dataActions';
import Jumbotron from 'react-bootstrap/Jumbotron'
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import '../css_styling/nasa.css'


 class Nasa extends Component {
    componentDidMount=()=>{
        this.props.getNasa();
    }

    render() { 
        const {nasa}=this.props;
        console.log(nasa);

        return (
                <div>
                   <img src={nasa.hdurl} className="nasa_picture" alt="nasa"/>
                   <Container>
        <h1 className="nasa_title">{nasa.title}</h1>
        <p className="nasa_exp">{nasa.explanation}</p>
        <p className="nasa_date">{nasa.date}</p>
        </Container>
                </div>
      
        )
    }
}

const mapStateToProps = (state)=>({
    nasa:state.data.nasa
})
const mapActionToProps = {getNasa}
Nasa.propTypes = {
     nasa: PropTypes.object.isRequired,
    getNasa:PropTypes.func.isRequired,
    

}

export default connect(mapStateToProps,mapActionToProps)(Nasa)



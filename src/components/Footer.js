import React from 'react';
import Container from 'react-bootstrap/Container'
import '../css_styling/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faPinterest} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className="compDets_Footer">
            <div className="compDets_FooterTop">
            <Container className="compDets_FooterTopContainer">
                <div className="compDets_FooterTopIconsDiv">
                    <FontAwesomeIcon icon={ faFacebook }  className="compDets_FooterTopIcons" />
                    <FontAwesomeIcon icon={ faTwitter} className="compDets_FooterTopIcons"/>
                    <FontAwesomeIcon icon= { faInstagram} className="compDets_FooterTopIcons"/>
                    <FontAwesomeIcon icon={ faPinterest} className="compDets_FooterTopIcons"/>
                </div><br/>
                <div className="compDets_center">
                <div className="compDets_FooterTopIMenuDiv" style={{margin : '0 auto'}}>
                    <p className="compDets_FooterTopIMenu">Home</p>
                    <p className="compDets_FooterTopIMenu">Unsplash</p>
                    <p className="compDets_FooterTopIMenu">Post</p>
                    <p className="compDets_FooterTopIMenu">Album</p>
                    <p className="compDets_FooterTopIMenu">Contact</p>
                </div></div>
            </Container>
            </div>
            <div className="compDets_FooterBottom">
            <Container className="compDets_FooterBottomContainer">
               <div className="compDets_FooterCopyright">All Rights Reserved</div> 
            </Container>
            </div>
        </div>
    )
}

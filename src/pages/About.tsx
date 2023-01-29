import { Card } from "react-bootstrap";
import { FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { FaCodepen } from 'react-icons/fa';

export function About() {

    return (
        <>
            <h1>About</h1>
            <Card>
                <Card.Img src="/images/social-media.png" alt="social-media" style={{ objectFit: 'cover', height: '550px' }} />
                <Card.ImgOverlay>
                    <h3 className="text-light">Contact info</h3>
                    <br/>
                    <div className="d-flex flex-column gap-2" style={{ width: 'fit-content' }}>
                        <a href="https://mail.google.com/" className="btn bg-warning text-dark">
                            <SiGmail />
                        </a>
                        <a href="https://www.linkedin.com/in/david-ghibradze-929023247/" className="btn bg-primary text-light">
                            <BsLinkedin />
                        </a>
                        <a href="https://github.com/Ghibrasoft?tab=repositories" className="btn bg-dark text-light">
                            <FaGithub />
                        </a>
                        <a href="https://codepen.io/collection/rxpNLZ" className="btn bg-secondary text-light">
                            <FaCodepen />
                        </a>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </>
    )
}
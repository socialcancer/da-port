import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import daniel from '../../assets/images/daniel.jpg';
import '../../assets/css/about.css';

function About() {
    return (
        <section className="flex-row justify-center vw100">
            <div className="w75 bg-dark section-container flex-row justify-center">
                <h2 className="text-center w100 mb-2">About <span className="text-primary">DCA</span></h2>
                <div className="text-center" id="my-picture">
                    <img className="circle" id="profile-pic" src={daniel} alt="Daniel Allen @ desk" />
                    <a href="https://github.com/socialcancer" target="_blank">
                        <FontAwesomeIcon icon={faGithubAlt} className="mx-2 icon" />
                    </a>
                </div>
                <div className="w75" id="about-me">
                    <p>
                        Hey! I am <span className="bold text-primary">Daniel C. Allen</span>. A Front-End/Full-Stack developer. Nice to meet you.
                    </p>
                    <p>
                        Knowledgeable Developer who brings superior design to promote organization-specific website presence. Extensive collaboration with teams to oversee site creation from initial planning through rollout. Detail-oriented approach to maintaining website responsiveness, effectiveness and security. Detail-oriented, organized and meticulous employee. Works at fast pace to meet tight deadlines. Enthusiastic team player ready to contribute to company success.
                    </p>
                    <p>
                        I am a believer in the power of <span className="bold text-primary"> Story </span>and how telling and understanding our stories can make the web and our would a better place to live and work.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
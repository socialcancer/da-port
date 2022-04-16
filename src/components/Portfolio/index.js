import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import ScrollAnimation from 'react-animate-on-scroll';
import Modal from '../Modal';
// import Showcase from '../Showcase';
import { projects } from '../../lib/projects'


function Portfolio() {

    const [displayedProject, setDisplayedProject] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = project => {
        setDisplayedProject(project);
        setIsModalOpen(!isModalOpen);
    };

    return (
        <section className="flex-row justify-center vw100">
            {isModalOpen && <Modal displayedProject={displayedProject} onClose={toggleModal} />}
            {/* <Showcase toggleModal={toggleModal} /> */}
            <div className="w75 bg-dark section-container">
                <h2 className="text-center mb-2"><span className="text-primary">Projects</span></h2>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                    <Masonry>
                        {projects.map(project => (
                            <ScrollAnimation animateIn="animate__fadeInUp" animatePreScroll={false} animateOnce={true}>
                                <img
                                    key={project.id}
                                    src={project.image}
                                    alt={project.text}
                                    onClick={() => toggleModal(project)}
                                    className="px-1 py-1 w100"
                                    data-aos="fade-right"
                                />
                            </ScrollAnimation>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </section>
    );
};

export default Portfolio;
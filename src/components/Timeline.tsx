import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faGraduationCap, faPersonChalkboard, faSchool } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import ImageLightbox from './ImageLightbox';
import FotoWisuda from '../assets/images/FotoWisuda.jpg';
import FotoLab from '../assets/images/FotoLab.jpg';
import FotoHimpunan from '../assets/images/FotoHimpunan.jpg';
import FotoMaba from '../assets/images/FotoMaba.jpg';

function Timeline() {
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [lightboxImages, setLightboxImages] = React.useState<string[]>([]);
  const [startIndex, setStartIndex] = React.useState(0);

  function openLightbox(images: string[], index = 0) {
    setLightboxImages(images);
    setStartIndex(index);
    setLightboxOpen(true);
  }

  return (
    <div id="history">
      <div className="items-container">
        <h1>History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023"
            icon={<FontAwesomeIcon icon={faGraduationCap} tabIndex={0} role="button" onClick={() => openLightbox([FotoWisuda], 0)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); openLightbox([FotoWisuda], 0); } }} />}
          >
            <h3 className="vertical-timeline-element-title">Graduated from Informatics Major • 3.89 GPA</h3>
            <h4 className="vertical-timeline-element-subtitle">Universitas Gunadarma</h4>
            <p>
              Gained expertise in programming, software and web engineering principles. Applied knowledge in academic projects involving AR based brochure, online system management and sentiment analysis using machine learning.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2022"
            icon={<FontAwesomeIcon icon={faPersonChalkboard} tabIndex={0} role="button" onClick={() => openLightbox([FotoLab], 0)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); openLightbox([FotoLab], 0); } }} />}
          >
            <h3 className="vertical-timeline-element-title">Algorithm and Programming Lab Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Universitas Gunadarma</h4>
            <p>
              Assisted in the teaching process of the algorithm and programming lab course by making materials and tutorial videos, instructing, and conducting assessments of students' capability through assignments and tests.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            icon={<FontAwesomeIcon icon={faBuildingColumns} tabIndex={0} role="button" onClick={() => openLightbox([FotoHimpunan], 0)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); openLightbox([FotoHimpunan], 0); } }} />}
          >
            <h3 className="vertical-timeline-element-title">Research and Development Division Staff</h3>
            <h4 className="vertical-timeline-element-subtitle">Himpunan Mahasiswa Teknik Informatika Gunadarma</h4>
            <p>
              Contributed to the division's technical initiatives through project planning, data researching and mentoring to support student development
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019"
            icon={<FontAwesomeIcon icon={faSchool} tabIndex={0} role="button" onClick={() => openLightbox([FotoMaba], 0)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); openLightbox([FotoMaba], 0); } }} />}
          >
            <h3 className="vertical-timeline-element-title">Entered Informatics Major</h3>
            <h4 className="vertical-timeline-element-subtitle">Universitas Gunadarma</h4>
            <p>
              Entered the Informatics program at Universitas Gunadarma with a strong passion for technology and problem-solving.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        {lightboxOpen && (
          <ImageLightbox
            images={lightboxImages}
            startIndex={startIndex}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </div>
    </div>
  );
}

export default Timeline;
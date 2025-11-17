import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faGraduationCap, faPersonChalkboard, faSchool } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import FotoWisuda from '../assets/images/FotoWisuda.jpg';
import FotoLab from '../assets/images/FotoLab.jpg';
import FotoHimpunan from '../assets/images/FotoHimpunan.jpg';
import FotoMaba from '../assets/images/FotoMaba.jpg';
import { Box } from '@mui/material';

function Timeline() {
  // Images are shown inline beside/under the text depending on screen width.

  return (
    <div id="history">
      <div className="items-container">
        <h1>History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, alignItems: { xs: 'flex-start', md: 'stretch' } }}>
              <Box sx={{ flex: { xs: 'none', md: '0 0 auto' }, width: { xs: '100%', md: '33.333%' }, height: { xs: 300, md: 'auto' } }}>
                <Box
                  component="img"
                  src={FotoWisuda}
                  alt="Graduation"
                  className="timeline-img"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 1, display: 'block' }}
                />
              </Box>
              <Box sx={{ flex: { xs: 'none', md: 1 }, display: 'flex', flexDirection: 'column', width: { xs: '100%', md: '66.666%' } }}>
                <div className="timeline-text">
                  <h3 className="vertical-timeline-element-title">Graduated from Informatics Major • 3.89 GPA</h3>
                  <h4 className="vertical-timeline-element-subtitle">Universitas Gunadarma</h4>
                  <p>
                    Gained expertise in programming, software and web engineering principles. Applied knowledge in academic projects involving AR based brochure, online system management and sentiment analysis using machine learning.
                  </p>
                  <div className="timeline-year">2023</div>
                </div>
              </Box>
            </Box>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            icon={<FontAwesomeIcon icon={faPersonChalkboard} />}
          >
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, alignItems: { xs: 'flex-start', md: 'stretch' } }}>
              <Box sx={{ flex: { xs: 'none', md: '0 0 auto' }, width: { xs: '100%', md: '33.333%' }, height: { xs: 220, md: 'auto' } }}>
                <Box
                  component="img"
                  src={FotoLab}
                  alt="Lab Assistant"
                  className="timeline-img"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 1, display: 'block' }}
                />
              </Box>
              <Box sx={{ flex: { xs: 'none', md: 1 }, display: 'flex', flexDirection: 'column', width: { xs: '100%', md: '66.666%' } }}>
                <div className="timeline-text">
                  <h3 className="vertical-timeline-element-title">Algorithm and Programming Lab Assistant</h3>
                  <h4 className="vertical-timeline-element-subtitle">Universitas Gunadarma</h4>
                  <p>
                    Assisted in the teaching process of the algorithm and programming lab course by making materials and tutorial videos, instructing, and conducting assessments of students' capability through assignments and tests.
                  </p>
                  <div className="timeline-year">2021 - 2022</div>
                </div>
              </Box>
            </Box>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            icon={<FontAwesomeIcon icon={faBuildingColumns} />}
          >
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, alignItems: { xs: 'flex-start', md: 'stretch' } }}>
              <Box sx={{ flex: { xs: 'none', md: '0 0 auto' }, width: { xs: '100%', md: '33.333%' }, height: { xs: 220, md: 'auto' } }}>
                <Box
                  component="img"
                  src={FotoHimpunan}
                  alt="Himpunan"
                  className="timeline-img"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 1, display: 'block' }}
                />
              </Box>
              <Box sx={{ flex: { xs: 'none', md: 1 }, display: 'flex', flexDirection: 'column', width: { xs: '100%', md: '66.666%' } }}>
                <div className="timeline-text">
                  <h3 className="vertical-timeline-element-title">Research and Development Division Staff</h3>
                  <h4 className="vertical-timeline-element-subtitle">Himpunan Mahasiswa Teknik Informatika Gunadarma</h4>
                  <p>
                    Contributed to the division's technical initiatives through project planning, data researching and mentoring to support student development
                  </p>
                  <div className="timeline-year">2020 - 2022</div>
                </div>
              </Box>
            </Box>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            icon={<FontAwesomeIcon icon={faSchool} />}
          >
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, alignItems: { xs: 'flex-start', md: 'stretch' } }}>
              <Box sx={{ flex: { xs: 'none', md: '0 0 auto' }, width: { xs: '100%', md: '33.333%' }, height: { xs: 180, md: 'auto' } }}>
                <Box
                  component="img"
                  src={FotoMaba}
                  alt="Entrance"
                  className="timeline-img"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 1, display: 'block' }}
                />
              </Box>
              <Box sx={{ flex: { xs: 'none', md: 1 }, display: 'flex', flexDirection: 'column', width: { xs: '100%', md: '66.666%' } }}>
                <div className="timeline-text">
                  <h3 className="vertical-timeline-element-title">Entered Informatics Major</h3>
                  <h4 className="vertical-timeline-element-subtitle">Universitas Gunadarma</h4>
                  <p>
                    Entered the Informatics program at Universitas Gunadarma with a strong passion for technology and problem-solving.
                  </p>
                  <div className="timeline-year">2019</div>
                </div>
              </Box>
            </Box>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
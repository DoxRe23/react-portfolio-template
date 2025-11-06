import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faGraduationCap, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faPersonChalkboard} />}
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
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBuildingColumns} />}
          >
            <h3 className="vertical-timeline-element-title">Research and Development Division Staff</h3>
            <h4 className="vertical-timeline-element-subtitle">Himpunan Mahasiswa Teknik Informatika Gunadarma</h4>
            <p>
              Contributed to the division's technical initiatives through project planning, data researching and mentoring to support student development
            </p>
          </VerticalTimelineElement>
                    <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Informatics Major (3.89 GPA)</h3>
            <h4 className="vertical-timeline-element-subtitle">Universitas Gunadarma</h4>
            <p>
              Gained expertise in programming, software and web engineering principles. Applied knowledge in academic projects involving AR based brochure, online system management and sentiment analysis using machine learning.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
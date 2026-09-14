import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";
import ExperienceCards from "./ExperienceCards";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ExperienceCards
              isBlog={false}
              title="Nestlé Bangladesh PLC"
              description="
              Nutrition Associate
              Nestlé Bangladesh PLC | Domar, Nilphamari
              *01/10/2024 – 30/11/2025*

              Coordinated with sales teams to ensure product availability and compliance with company standards.

              Managed territory objectives, visit frequency, and analyzed market trends to support business growth.

              Communicated effectively with Healthcare Professionals (HCPs) using updated product knowledge and organized scientific events to strengthen brand engagement ,"
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCards
              isBlog={false}
              title="The PH Factor"
              description="Area Scientific Executive
              The PH Factor | Savar, Dhaka
                *01/11/2022 – 30/09/2023*

                Monitored business growth and sales performance across nutrition, food, dental hygiene, and oral care product lines.

                Visited distributors regularly to analyze business trends and maintained strong networking with the sales force for collaborative execution.

                Planned and organized product meetings, Expert Marketing activities, events, and champ programs to drive engagement and advocacy among HCPs and chemists."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;

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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ExperienceCards
              isBlog={false}
              title="Internship onIntegrated Malnutrition Treatment & Prevention"
              description={
                <>
                  <p>
                    Internship at a Non-Governmental Organization
                    (NGO) — 60 Days (15 October 2021 – 15 December 2021). Nutritional
                    status of children aged 6 to 23 months & dietary behavior of their
                    mothers in Rohingya camps.
                    <br />
                    <a
                      href="https://drive.google.com/file/d/1U4n4vgTb4eEJf0RJnqoE1Ev8kaQdYDmM/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="purple"
                    >
                      📄 View Certificate
                    </a>
                  </p>

                  <p>
                    <strong>Specific Objectives:</strong>
                  </p>
                  <ol>
                    <li>
                      Identified SAM, MAM, and normal children (0–59 months) and provided
                      necessary counseling and supplements.
                    </li>
                    <li>
                      Assessed the nutritional condition of Pregnant and Lactating Women
                      (PLW) and provided necessary counseling and supplements.
                    </li>
                  </ol>

                  <p>
                    <strong>Report Submitted:</strong>{" "}
                    <span className="purple">
                      Successfully prepared "A Report on Integrated Malnutrition
                      Treatment & Prevention in Rohingya Refugee Camp."
                    </span>
                  </p>
                </>
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCards
              isBlog={false}
              title="Project — Nutritional Status of Children"
              description={
                <>
                  <p>
                    Nutritional status of children aged 6 to 23
                    months & dietary behavior of their mothers in Rohingya camps.
                  </p>
                  <p><strong>Specific Objectives:</strong></p>
                  <ol>
                    <li>To collect the socio-demographic information of the selected children.</li>
                    <li>To assess the food security related information.</li>
                    <li>To gather dietary diversity and food frequency related information.</li>
                    <li>To collect data on the child's anthropometry information.</li>
                    <li>To evaluate the nutritional status of children using standard anthropometric indicators (weight-for-age, height-for-age, and weight-for-height).</li>
                    <li>To identify the prevalence of stunting, wasting, and underweight among the selected children aged 6 to 23 months.</li>
                  </ol>
                </>
              }
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;

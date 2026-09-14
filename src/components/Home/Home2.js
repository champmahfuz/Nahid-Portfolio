import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/nahid.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <div className="home-about-body">
              <p style={{ textAlign: "justify ", paddingRight: "20px" }}>
                I'm a passionate Nutrition and Food Engineering graduate and currently pursuing an EMBA in Supply Chain Management with hands-on experience in the FMCG and healthcare nutrition sector. I specialize in building strong relationships with healthcare professionals (HCPs), driving territory growth, and executing scientific marketing activities that create real impact. I thrive in collaborative environments, value honest leadership, and constantly push myself to grow — both professionally and personally.
              </p>

              <p style={{ textAlign: "justify" }}>
                <strong>Key Areas of Interest</strong><br />
                Supply Chain Management | Sales & Business Development | Product Development | Operations & Process Improvement
              </p>

              <p style={{ textAlign: "justify" }}>
                Blending a technical foundation in Nutrition & Food Engineering with strategic business training (EMBA, Supply Chain Management) to drive value across supply chain and sales functions in the food and nutrition sector.
              </p>
            </div>
          </Col>
          <Col md={4} className="myAvtar ">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid "
                alt="avatar"
                style={{ borderRadius: "20px", marginTop: "80px" }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

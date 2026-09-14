import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {/* Hi everyone! I’m <span className="purple">Nahid Hasan</span>{" "}
            from <span className="purple">Khilkhet,Dhaka,Bangladesh</span>.
            <br />
            I’m currently working as a{" "}

            <span className="purple">Customer Service Executive</span> at{" "}
            <span className="purple">Paikari Ghor</span>.
            <br />I currently studying in M.Sc.  in{" "}
            <span className="purple">Executive Masters of Business Administration</span> from{" "}
            <span className="purple">East West University</span>.
            <br />
            <br /> */}
            Hi everyone! I’m <span className="purple">Nahid Hasan</span> from{" "}
            <span className="purple">Khilkhet, Dhaka, Bangladesh</span>.
            <br />
            I am currently studying in M.Sc. in{" "}
            <span className="purple">Executive Masters of Business Administration</span> from{" "}
            <span className="purple">East West University</span>.
            I completed my undergraduate degree in the department of Nutrition & Food Engineering(NFE) from{" "}
            <span className="purple">Daffodil International University</span>.
            <br />
            Supply chain management is my passion. I have a strong interest in logistics, procurement, and operations management. I am always eager to learn and explore new technologies and trends in the field of supply chain management.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nahid</footer>
        </blockquote>
      </Card.Body>
    </Card >
  );
}

export default AboutCard;

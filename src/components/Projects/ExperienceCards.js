import React from "react";
import Card from "react-bootstrap/Card";
function ExperienceCards(props) {
  return (
    <Card className="project-card-view">
      {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
      <Card.Body>
        <Card.Title
          style={{
            color: "#16a34a",
            fontWeight: "bold",
            marginBottom: "16px",
          }}
        >
          {props.title}
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>


      </Card.Body>
    </Card>
  );
}
export default ExperienceCards;

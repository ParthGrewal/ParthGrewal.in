import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
//import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              {/* 🔥 Changed Heading */}
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                About <strong className="purple">Me</strong>
              </h1>

              {/* About content comes from AboutCard */}
              <Aboutcard />
            </Col>

            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="Parth Grewal" className="img-fluid" />
            </Col>
          </Row>

          {/* 🔥 Updated Skill Heading */}
          <h1 className="project-heading">
            My <strong className="purple">Skillset</strong>
          </h1>

          <Techstack />

          {/* 🔥 Updated Tools Heading */}
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I Use
          </h1>

          <Toolstack />

          
        </Container>
      </Container>
    </>
  );
}

export default About;
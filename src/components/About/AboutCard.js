import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Parth Grewal</span> from{" "}
            <span className="purple">Delhi</span>.
            <br />
            I am currently a{" "}
            <span className="purple">Computer Science student</span> with a strong foundation in{" "}
            <span className="purple">Web Development and Data Analytics</span>.
            <br />
            I have designed and developed data driven solutions, including{" "}
            <span className="purple">customer segmentation models and interactive dashboards</span>.
            <br />
            My work focuses on building{" "}
            <span className="purple">scalable applications</span> that deliver meaningful insights and real world impact.
            <br />
            I also have hands on experience with{" "}
            <span className="purple">business analytics, data visualization, and modern web technologies</span>.
            <br />
            <br />
            Beyond academics, I actively engage in activities that strengthen my leadership and teamwork skills:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Represented in Football (Subroto Cup 2017)
            </li>
            <li className="about-activity">
              <ImPointRight /> Led BGMI Team as In Game Leader (IGL)
            </li>
            <li className="about-activity">
              <ImPointRight /> Building and exploring innovative tech projects
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Committed to building scalable and impactful technology solutions."
          </p>
          <footer className="blockquote-footer">Parth Grewal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
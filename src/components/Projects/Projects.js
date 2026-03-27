import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/editor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/bitsOfCode.png";
import todo from "../../Assets/Projects/todo.png";
import bookmydoc from "../../Assets/Projects/DocLab.png";
import rideX from "../../Assets/Projects/rideX.png";
import SENSAI from "../../Assets/Projects/SENSAI.png";

function Projects() {
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
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              ghLink="https://github.com/ParthGrewal/TODO/tree/main"
              title="TODO📝"
              description="Developed a responsive To-Do List application using HTML, CSS, and JavaScript enabling users to add, manage, and track daily tasks efficiently."              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookmydoc}
              isBlog={false}
              ghLink="https://github.com/ParthGrewal/BookMYDoc"
              title="DocLab 🏥"
              description="A web application for booking medical appointments with doctors, featuring a user-friendly interface and efficient appointment management."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rideX}
              isBlog={false}
              ghLink="https://github.com/ParthGrewal/rideX"
              title="RideX 🚗"
              description="It is a modern full-stack car rental web application built using MERN STACK, allows customers to explore, search, and book cars, and also provides a dashboard for car owners to list and manage vehicles."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SENSAI}
              isBlog={false}
              ghLink="https://github.com/ParthGrewal/SENSai"
              title="SENSai 🚀"
              description="An AI powered full stack web application built using Next.js, Prisma, and PostgreSQL. SENSai helps users manage resumes, track onboarding, and streamline workflows with a modern UI and scalable backend."
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              ghLink="https://github.com/ParthGrewal/CatchSss"
              title="CatchSss🐍"
              description="Built a Snake Game using Python featuring real-time movement, collision detection, and score tracking, demonstrating strong understanding of game logic and programming fundamentals."              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="PrimeFlix🎬"
              ghLink="https://github.com/ParthGrewal/Netflix-And-Prime-Videos-Dashboard"
              description="Built a data analytics dashboard for Netflix and Prime Video using Python, SQL, and Power BI to visualize content trends, genres, and ratings, enabling data-driven insights through interactive dashboards."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              ghLink="https://github.com/ParthGrewal/Tech-Gen-Software"
              title="PaperBills🧾"
              description="Created a billing and invoice management system to handle transactions, generate bills, and manage records efficiently using web technologies."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              ghLink="https://github.com/ParthGrewal/Customer-Segmentation-Analysis"
              title="CustomerSegmentationAnalysis👨"
              description="Performed customer segmentation using machine learning techniques like K-Means clustering to identify distinct customer groups for targeted marketing strategies."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              ghLink="https://github.com/ParthGrewal/Heart-Disease-Predictor"
              title="Healthify🫀"
              description="Developed a heart disease prediction system using machine learning algorithms to analyze health parameters and provide early risk detection."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              ghLink="https://github.com/ParthGrewal/SQL-Python-Ecommerce-Project"
              title="Ecomm-jet 🛍️"
              description="Built an e-commerce data analysis project using SQL and Python to extract insights on sales performance, customer behavior, and product trends."
            />
          </Col>
          



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

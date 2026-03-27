import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "./Certificatecard"; // ✅ fixed
import Particle from "../Particle";

// 👉 Add your certificate images here
import cert1 from "../../Assets/Certificates/excel.jpg";
import cert2 from "../../Assets/Certificates/Data Analytics.jpg";
import cert3 from "../../Assets/Certificates/Web Development.jpg";
import cert4 from "../../Assets/Certificates/Node.js.jpg";
import cert5 from "../../Assets/Certificates/React.jpg";
import cert6 from "../../Assets/Certificates/Digital business - Act on the digital.jpg";
import cert7 from "../../Assets/Certificates/IBM Databases and SQL for Data Science with Python.jpg";
import cert8 from "../../Assets/Certificates/Data Analyst - Big 4 Ready.jpg";
import cert9 from "../../Assets/Certificates/IBM Python for Data Science, AI & Development.jpg";
import cert10 from "../../Assets/Certificates/deloittedata.jpg";
import cert11 from "../../Assets/Certificates/eaproductmanagement.jpg";
import cert12 from "../../Assets/Certificates/jpmorgan.jpg";
import cert13 from "../../Assets/Certificates/mastercardconsultant.jpg";
import cert14 from "../../Assets/Certificates/pwc.jpg";
import cert15 from "../../Assets/Certificates/siemens.jpg";


function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some certifications I have earned.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert1}
              title="Udemy Microsoft Excel Certification"
              certLink="https://www.udemy.com/certificate/UC-15da72ec-4ef2-4ceb-931c-21c53a3edc35/"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert2}
              title="Google Data Analytics Certification"
              certLink="https://coursera.org/share/da6adfbd876f136465db88ab0c818759"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert3}
              title="Udemy Web The Complete Full Stack Development"
              certLink="https://www.udemy.com/certificate/UC-e1da21b7-e343-4cac-a9b5-ccb675f57dcb/"
            />
          </Col>


          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert4}
              title="Node.js Certification"
              certLink="https://www.oneroadmap.io/skills/node/certificate/CERT-0F54C60F"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert5}
              title="React.js Developer Certification"
              certLink="https://www.oneroadmap.io/skills/react/certificate/CERT-D02C6960"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert6}
              title="Digital Business - Act on the Digital Certification"
              certLink="https://coursera.org/share/e9ebf980126b7872fa08a5b2e572b2f0"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert7}
              title="IBM Databases and SQL for Data Science with Python Certification"
              certLink="https://coursera.org/share/e2509c90c67d9c0b4a3f93fa899623b0"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert8}
              title="Data Analyst - Big 4 Ready Certification"
              certLink="https://www.oneroadmap.io/skills/data-analyst-big4/certificate/CERT-C4C79BF1"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert9}
              title="IBM Python for Data Science, AI & Development Certification"
              certLink="https://coursera.org/share/87273fcb763751810b0e0fee566e3d50"
            />
          </Col>


          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert10}
              title="Deloitte Data Analytics Job Simulation"
              certLink="https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_7jgwLbcXPh2LjQ35E_1774538040529_completion_certificate.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert11}
              title="EA Product Management Job Simulation"
              certLink="https://www.theforage.com/completion-certificates/j43dGscQHtJJ57N54/5genWYpfo5b57G7yv_j43dGscQHtJJ57N54_7jgwLbcXPh2LjQ35E_1774535541548_completion_certificate.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert12}
              title="JPMorgan Chase & Co. Software Engineer Job Simulation"
              certLink="https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_7jgwLbcXPh2LjQ35E_1774538773310_completion_certificate.pdf"
            />
          </Col>


          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert13}
              title="Mastercard Consultant Job Simulation"
              certLink="https://www.theforage.com/completion-certificates/mfxGwGDp6WkQmtmTf/DZxgGgvMB6cEtEyJg_mfxGwGDp6WkQmtmTf_7jgwLbcXPh2LjQ35E_1774549007102_completion_certificate.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert14}
              title="PwC Data Analytics Job Simulation"
              certLink="https://www.theforage.com/completion-certificates/CA4pBqsy4b4PdyaBP/douE8ih9jWMQ2P7sS_CA4pBqsy4b4PdyaBP_7jgwLbcXPh2LjQ35E_1774539120624_completion_certificate.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={cert15}
              title="Siemens Data Analytics Job Simulation"
              certLink="https://www.theforage.com/completion-certificates/YtWaumzWHmKiqP63y/zSefEeEKvojiQqiaH_YtWaumzWHmKiqP63y_7jgwLbcXPh2LjQ35E_1774549271457_completion_certificate.pdf"
            />
          </Col>

           
          

        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
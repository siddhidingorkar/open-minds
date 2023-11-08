import React from "react";
import "./About.css"; // Import your CSS file here
import OurTeam from "./OurTeam";
import { Button } from "@mui/material";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col-6 px-4 bruh"
            style={{
              display: "flex",
              textAlign: "left",
              alignItems: "center",
            }}
          >
            <div>
              <h1 className="display-5" style={{ fontWeight: "bold", color:"yellow" }}>
                Our Mission
              </h1>
              <p className="lead" style={{ fontWeight: "bolder" }}>
                At the core of our organization's mission lies an unwavering
                dedication to supporting and educating young children through
                our NGO foundation. We fervently believe in the transformative
                power of education to nurture the minds of these young
                individuals, helping them grow into informed, confident, and
                capable individuals who can positively impact their communities
                and the world at large.
              </p>
            </div>
          </div>
          <div className="col-6">
            <img
              src="images/our mission image.jpg"
              className="rounded mx-auto d-block"
              alt="our aim image 1"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6 px-4">
            <img
              src="images/our vision image.jpg"
              className="rounded mx-auto d-block"
              alt="our aim image 1"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
          <div
            className="col-6 px-4 bruh"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <h1 className="display-5" style={{ fontWeight: "bold" , color:"yellow"}}>
                Our Vision
              </h1>
              <p className="lead" style={{ fontWeight: "bolder" }}>
                In our vision, we aspire to create a world where every child has
                the opportunity to access quality education and unlock their
                full potential. We envision a future where no child goes without
                the chance to learn and grow. Our goal is to build a sustainable
                and compassionate system that efficiently channels educational
                resources to those who need it the most, contributing to a
                brighter and more equitable society.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-12"
        style={{
          display: "flex",
          width: "100%",
          height: "88px",
          backgroundColor: "#1976d2",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div
          style={{ color: "white", fontWeight: "bold", fontSize: "32px" }}
          className="mx-5 px-2"
        >
       Educate, Elevate, Empower!
        </div>
        
      </div>
      <div className="container">
        <h1
          className="display-5 text-center mb-4"
          style={{ fontWeight: "bold" }}
        >
          Our Programs
        </h1>
        <div
        // className="p-3"
        // style={{ border: "2px solid", borderRadius: "10px" }}
        >
          <div className="row">
            <div
              className="col-6 px-4"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div>
                <h1
                  className="display-5"
                  style={{ fontWeight: "bold", color: "yellow" }}
                >
                  Education
                </h1>
                <p
                  className="lead pr-3"
                  style={{ fontWeight: "bolder", textAlign: "justify" }}
                >
                  OpenMinds addresses gaps in education systems with innovative,
                  low-cost, replicable interventions that span the age spectrum.
                  Working both directly and through government systems, these
                  programs collectively reach millions of children and thousands
                  of school dropouts each year. In “direct” work, a Pratham
                  instructor works with children either in the school or in the
                  community.
                </p>
                <Button
                  variant="outlined"
                  sx={{ fontWeight: "bold", color: "white" }}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="col-6">
              <img
                src="images/edu-1.jpg"
                className="rounded mx-auto d-block"
                alt="our aim image 1"
                style={{ maxWidth: "100%", maxHeight: "100%", width: "100%" }}
              />
            </div>
          </div>
          <div className="row">
            <div
              className="col-6"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src="images/edu-2.jpg"
                className="rounded mx-auto d-block"
                alt="our aim image 1"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>
            <div className="col-6">
              <img
                src="images/saeei.jpg"
                className="rounded mx-auto d-block"
                alt="our aim image 1"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-12"
        style={{
          display: "flex",
          width: "100%",
          height: "88px",
          backgroundColor: "#1976d2",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div
          style={{ color: "white", fontWeight: "bold", fontSize: "32px" }}
          className="mx-5 px-2"
        >
    "Empowering Minds, Building Futures, and Lighting the Path to a Brighter Tomorrow!"
        </div>
      
      </div>
      <div className="container">
        <OurTeam />
      </div>
      <Footer/>
    </>
  );
}

export default About;
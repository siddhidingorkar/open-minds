import React from 'react';
import EventCard from './EventCard'; 
import Footer from '../components/Footer';
import { Box, Button } from "@mui/material";
import { Card, CardContent, Typography, CardMedia, colors } from '@material-ui/core';
// Import the EventCard component

import { Link } from 'react-router-dom'; 
// You need to import 'Link' from react-router-dom

//import '../index.css';

function Events() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center-align items horizontally
    justifyContent: 'center', // Center-align items vertically
    //height: '100vh', // Make the container fill the entire viewport height
  };

  return (
    <>
    {/* // <div style={themeStyle}> */}
      <div style={containerStyle}>
      <br></br>
      <h1 style={{ color: 'black', fontFamily: 'bold' }}>EVENTS</h1>

      <EventCard 
        title="Open Minds - HAMARA GAON (Our Village - Our Community)"
        content="Open Minds gaps in education systems with innovative, low-cost and replicable interventions. Working both directly and through government systems, these programs reach millions of children and school dropouts each year. In direct work, an instructor works with children either in the school or in the community, whereas the partnership model involves teams working closely with government teams at the state, district or city level to implement programs. Its approach to improving learning outcomes continues to serve as a model, both within India and beyond.
        
        Our efforts for the last two decades have been largely focussed on finding a solution for this learning crisis."
        //imageSrc="image1.jpg"
        imageSrc="https://rebirthcaretrust.org/wp-content/uploads/2020/08/28102016045204284ingoodcompany.jpg"
      /><br></br>

      <EventCard
        title="DEVELOPMENT OF THE TaRL: IMPLEMENTING LEARNING CAMPS IN GOVERNMENT SCHOOLS"
        content="From 2012 we have been working directly on helping children in Grade 3 and above, catch up on basic reading and arithmetic. This teaching-learning approach is called Teaching at the Right Level (TaRL). Targeted at children enrolled in government schools in Grades 3 to 5, these intensive bursts of activity ensured that by the end of the last camp more than 70% of children were able to read simple texts fluently and confidently do arithmetic operations."
        imageSrc="https://images.indianexpress.com/2022/12/bmc-schools59.jpg"
      /><br></br>


      <EventCard
        title="Open Minds' Early Childhood Education"
        content="Our program focuses on the holistic development of children and their readiness for school in the age group of 3-8 years. This is done with the support of  mothers, school teachers and volunteers in the community. 
        
        The instructor has a strong understanding of the local context, which helps effectively interact with children and engage with parents. The content is based on the child’s immediate surroundings. Activities are conducted in groups and individually and are supported with contextualized play material such as cards, beads, clay and objects. Children are regularly assessed by instructors through simple activities. Mothers are also engaged through periodic meetings, discussions, creation of mothers’ groups in the community and individual home visits."
        imageSrc="https://i.pinimg.com/1200x/b1/8c/93/b18c93ecc750c99be075d8a41adee614.jpg"
      />
      <br></br>

<EventCard
        title="Open Minds' Elementary Education"
        content="Our initiatives span the entire age range from Grade I to Grade VIII. However, much of the work in the last two decades has been with children of primary school age. Our education interventions have two major components – the actual teaching-learning approach and the implementation models.

        Our teaching-learning approach is called CAMaL which stands for Combined Activities for Maximized Learning. Learning goals are clearly articulated so that teachers know what is to be achieved. Simple assessment is used for grouping children for instruction. Appropriate but low-cost teaching-learning materials are developed for the program."
        imageSrc="https://d1ns4ht6ytuzzo.cloudfront.net/oxfamdata/oxfamdatapublic/styles/news_detail_748x373/public/blogimages/education.jpg?itok=WcwNyx8i"
      /><br></br>

<EventCard
        title="Open Minds’ Girls and Women Education"
        content="Our Second Chance program focuses on providing school drop-outs another chance at education. We focus on completion of Grade 10, in the hope that this academic certificate would prove useful for the learners. It uses innovative teaching methods, to provide accessible and affordable learning opportunities.
        
        The students go through a Foundation Course as a part of the preparation for the Secondary School exam. Then they move to the Main Course, where they study in an interactive environment that includes discussions, debates and presentations."
        imageSrc="https://images.yourstory.com/cs/4/a9efa9c02dd911e9adc52d913c55075e/Imagear74-1624019576243.jpg?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces"
      /><br></br>

<EventCard
        title="Open Minds’ Digital Initiatives"
        content="The Hybrid learning program involves getting children in the age group 10-14 in a village to form their own groups of 5-6 each, thus enabling them to co-create a learning space within their community. Digital devices and content placed directly in the hands of children providing them with opportunities and choices to learn on their own. Groups engage in choice-based learning and are guided by the coaches and youth members in the communities.

        The program aims to create an open learning mechanism enabling children and youth to prepare for school, work, and life. It has been designed on the premise that children can be motivated to learn on their own. Children learn on tablets and do projects or conduct activities and then present what they have learned in front of a live audience of parents."
        imageSrc="https://www.thestatesman.com/wp-content/uploads/2021/07/QT-Aahwahan.jpg"
      /><br></br>

<EventCard
        title="Open Minds’ Vocational Training"
        content="The objective is to train youth from economically disadvantaged backgrounds and provide employable skills and employment opportunities.
        
        We conduct short-term courses focusing rural areas and urban slums. The model is based on industry linkages and focuses on hands-on skills training. Courses include construction, hospitality, automotive, healthcare and wellness services. Students also learn English, computers and life skills. It has a four-step approach: Mobilization, Training, Placement and Post-placement support. It also provides mentoring support to set up micro-enterprises."
        imageSrc="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://swadesfoundation.org/wp-content/uploads/2019/01/image1_smakvx.jpg"
      /><br></br>

      {/* Link to the volunteering page */}
      <Link to="./Volunteering">

      <Button
            size="larger"
            variant="contained"
            className="mt-2 mb-5"
            sx={{
              borderRadius: "8px",
              bgcolor: "#2a284d",
              filter: "drop-shadow(white 0rem 0rem 100px)",
              width: "300px",
              fontWeight: "bold",
              margin: "20px 0"
            }}
           
          >
            Join Us By Volunteering
          </Button>
      </Link>

    </div>
    <Footer/>
    </>
  );
}

export default Events;


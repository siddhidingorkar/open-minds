import React from 'react';
import EventCard from './EventCard'; 
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';
// Import the EventCard component

import { Link } from 'react-router-dom'; 
// You need to import 'Link' from react-router-dom

import '../index.css';

function Events() {
  
  // const themeStyle = {
  //   backgroundColor: 'yellow',
  //   color: 'black',
  //   padding: '20px',
  // };

  return (
    <>
    {/* // <div style={themeStyle}> */}
      <div>
      <h1>Events</h1>

      <EventCard 
        title="Open Minds - HAMARA GAON (OUR VILLAGE-OUR COMMUNITY)"
        content="Open Minds gaps in education systems with innovative, low-cost, replicable interventions that span the age spectrum. Working both directly and through government systems, these programs collectively reach millions of children and thousands of school dropouts each year. In “direct” work, an Open Minds instructor works with children either in the school or in the community, whereas the “partnership” model involves teams working closely with government teams at the state, district or city level to design and implement programs. Its approach to improving learning outcomes continues to serve as a model, both within India and beyond.
        
        Open Minds' efforts for the last two decades have been largely focussed on finding a solution for this learning crisis Over the years, the approach that has evolved is called Teaching at the Right Level or TaRL."
        //imageSrc="image1.jpg"
        imageSrc="https://rebirthcaretrust.org/wp-content/uploads/2020/08/28102016045204284ingoodcompany.jpg"
      />

      <EventCard
        title="DEVELOPMENT OF THE TaRL: IMPLEMENTING LEARNING CAMPS IN GOVERNMENT SCHOOLS"
        content="From 2012 to 2017, Open Minds had been working directly on helping children in Grade 3 and above, catch up on basic reading and arithmetic. This teaching-learning approach is called Teaching at the Right Level (TaRL). Targeted at children enrolled in government schools in Grades 3 to 5, these intensive bursts of activity (30-50 days or 3 to 5 camps of 10 days each) ensured that by the end of the last camp more than 70% of children were able to read simple texts fluently and confidently do basic arithmetic operations.Open Minds gaps in education systems with innovative, low-cost, replicable interventions that span the age spectrum. Working both directly and through government systems, these programs collectively reach millions of children and thousands of school dropouts each year."
        imageSrc="https://images.indianexpress.com/2022/12/bmc-schools59.jpg"
      />


      <EventCard
        title="Open Mind’s Early Childhood Education"
        content="Our Early Childhood Education program focuses on the holistic development of children and their readiness for school in the age group of 3-8 years.  This is done with the support of  mothers, school teachers and volunteers in the community. 
        
        The instructor or teacher is a local community member, who has a strong understanding of the local context, which helps her effectively interact with children and engage with parents. The content is based on the child’s immediate surroundings. Activities are conducted with children in varying setups – big groups, small groups and individually – and are supported with contextualized print and play material such as flash cards, story books, story cards, picture cards, beads, clay and locally available objects of daily use. Children are regularly assessed by instructors through simple activities and observations. The findings of these periodic assessments help instructors track children’s progress and are regularly communicated to parents as an engagement tool. Mothers are also engaged through periodic meetings, discussions, creation of mothers’ groups in the community and individual home visits."
        imageSrc="https://csrbox.org/media/Pratham-org.jpeg"
      />

<EventCard
        title="Open Minds' Elementary Education"
        content="Over the years, our initiatives have spanned the entire age range from Grade I to Grade VIII. However, much of the work in the last two decades has been with children of primary school age and largely focused on ensuring that children learn to read fluently and to do arithmetic confidently. Our education interventions have two major components – the actual teaching-learning approach and the implementation models – i.e. how the teaching-learning innovation reaches children.

        Overall, Open Minds' teaching-learning approach is called CAMaL which stands for Combined Activities for Maximized Learning. We believe that a combination of activities helps children engage and learn. At the start of the program learning goals are clearly articulated so that teachers and parents know what is to be achieved. Simple assessment is used for grouping children for instruction. Secondly, ppropriate but low-cost teaching-learning materials are developed for the program."
        imageSrc="https://d1ns4ht6ytuzzo.cloudfront.net/oxfamdata/oxfamdatapublic/styles/news_detail_748x373/public/blogimages/education.jpg?itok=WcwNyx8i"
      />

<EventCard
        title="Open Minds’ Girls and Women Education"
        content="Our Second Chance program focuses on providing school drop-outs, especially women, another chance at education. Second Chance aims to support those who could not complete their secondary education. The program focuses on completion of Grade 10, in the hope that this academic certificate would prove useful for the learners and further their opportunities for educational growth and employability. The Second Chance program uses innovative teaching methods, to provide accessible and affordable learning opportunities very close to where the students live.
        
        The Second Chance program prepares and supports students to take the Grade 10 - Secondary Board/Open School examinations. The program runs in two phases. The first phase is called the Foundation Course (FC). When the students first enrol in the program, they go through a Foundation Course as a part of the preparation for the Secondary School exam curriculum. The Foundation course lasts for 3-4 months. Then students move to the Main Course, where they study in an interactive environment that includes discussions, debates and presentations through group learning and peer learning activities. As part of an effort to improve employability skills, exposure to personal development concepts is provided through vocational courses with modules such as health and hygiene, child care, development and nutrition and digital learning."
        imageSrc="https://images.yourstory.com/cs/4/a9efa9c02dd911e9adc52d913c55075e/Imagear74-1624019576243.jpg?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces"
      />

<EventCard
        title="Open Minds’ Digital Initiatives"
        content="The Hybrid learning program involves getting children in the age group 10-14 in a village to form their own groups of 5-6 each, thus enabling them to co-create a learning space within their community. Digital devices and content placed directly in the hands of children providing them with opportunities and choices to learn on their own. Community based children’s groups engage in choice-based learning and are guided by the coaches and youth members in the communities. The communities are organized to facilitate and support the learning activities and assessments.

        The program aims to create an open learning mechanism enabling children and youth to prepare for school, work, and life. The program has been designed on the premise that children can be motivated to learn on their own. Children learn on tablets and do projects or conduct activities (e.g. role plays, playing games) and then present what they have learned either in front of a live audience of parents or on a video."
        imageSrc="https://www.thestatesman.com/wp-content/uploads/2021/07/QT-Aahwahan.jpg"
      />

<EventCard
        title="Open Minds’ Vocational Training"
        content="In 2005, we launched the Open Minds Institute, its vocational skilling arm. The objective was to train youth from economically disadvantaged backgrounds (age 18‐25 years) and provide them with employable skills, coupled with access to employment and entrepreneurship opportunities. Today Open Minds Institute programs across the country enable youth to access entry-level positions and placements in 10 major vocations. 
        
        Open Minds conducts short-term, often residential courses of 2 to 3 months in duration, focusing on young men and women from rural areas and urban slums. The model is based on strong industry linkages and youth counselling and focuses on hands-on skills training. Courses taught include construction, hospitality, automotive mechanic, healthcare nursing and beauty and wellness services. In addition to industry specific skills, students also learn basic English, computer literacy and life skills. Pratham has a four-step approach to its vocational training programs: Mobilization, Training, Placement and Post-placement support. For youth who are interested in setting up their own enterprises near their homes and to support creation of new jobs, Pratham provides mentoring support to set up micro-enterprises."
        imageSrc="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://swadesfoundation.org/wp-content/uploads/2019/01/image1_smakvx.jpg"
      />

      {/* Link to the volunteering page */}
      <Link to="/volunteer">
        <h2>Join us by volunteering</h2>
      </Link>

    </div>
    </>
  );
}

export default Events;
import React, { useState, useEffect } from "react"
import Content from "../../components/layout/Content";
import About from "../../components/About";
import ExperienceBox from "../../components/ExperienceBox";
import SkillBox from "../../components/SkillBox";

import dataExperiences from "./../../data/experiences.json"

export default function Home() {

  const [experiences, setExperiences] = useState([])

  useEffect(() => {
    setExperiences(dataExperiences)
  },[])

  return (
    <Content>
      <About title="Cover Letter">
        <p>
          I Am a Web Developer with 9 years experience with different
          technologies such us React ,Express Js , and PHP Laravel and Codeigniter.
          Besides being a web developer, I am also an Instructor in my field for
          3 years as Fullstack Javascript instructure and Web Development.
        </p>

        <p>
          Technologies always growing rapidly including my field as Web
          Developer so i am learning new technologies such us Golang and Python
          for building API and learning Flutter for mobile apps and Svelte for
          Front End Web based and i'm still learning and studying from youtube
          about code everyday because it helped improved my career
        </p>
      </About>
      <About title="Experiences" className="experiences">
        {experiences?.slice(0,3)?.map(item => (<ExperienceBox
          year_range={item.range}
          company={item.company}
          job_title={item.job_title}
        >
          <ul>
            { item.job_desk.map(item2 => (<li> {item2} </li>))}
          </ul>
        </ExperienceBox>)
        )}
        
      </About>
      <About title="Professional Skills" className="skills">
        <div style={{ fontSize: 12, marginTop: -10 }}>
          * from 0 - 10 years scale
        </div>
        <SkillBox
          title="HTML & CSS"
          year_range="8 years"
          percent="80"
        ></SkillBox>
        <SkillBox title="Jquery" year_range="8 years" percent="80"></SkillBox>
        <SkillBox
          title="PHP Codeigniter"
          year_range="8 years"
          percent="80"
        ></SkillBox>
        <SkillBox
          title="PHP Laravel"
          year_range="3 years"
          percent="30"
        ></SkillBox>
        <SkillBox title="PHP Lumen" year_range="1 year" percent="10"></SkillBox>
        <SkillBox
          title="Node JS and Express JS"
          year_range="1 year"
          percent="10"
        ></SkillBox>
        <SkillBox title="React JS" year_range="2 years" percent="20"></SkillBox>
        <SkillBox title="React TS" year_range="1 year" percent="10"></SkillBox>
        <SkillBox
          title="React Native"
          year_range="1 year"
          percent="10"
        ></SkillBox>
        <SkillBox title="Nuxt JS" year_range="2 years" percent="20"></SkillBox>
        <SkillBox title="Next JS" year_range="3 months" percent="3"></SkillBox>
        <SkillBox
          title="Python Django"
          year_range="3 months"
          percent="3"
        ></SkillBox>
      </About>
    </Content>
  );
}

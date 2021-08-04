// import React from "react"
import Content from "../../components/layout/Content";
import About from "../../components/About";
import ExperienceBox from "../../components/ExperienceBox";
import SkillBox from "../../components/SkillBox";

export default function home() {
  return (
    <Content>
      <About title="Profile">
        <p>
          I Am a Web Developer with 8 years experience with different
          technologies such us React , Django , and PHP Laravel and Codeigniter.
          Besides being a web developer, I am also an Instructor in my field for
          2 years as Fullstack Javascript instructure and Web Development.
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
        <ExperienceBox
          year_range="2019 - 2021"
          company="PT Baezeni Digital Service"
          job_title="Front End and Back End Developer"
        >
          <ul>
            <li> Build Front End using React TS for Trimble for 1 year </li>
            <li> Build Front End React JS for Phenikaa Admin for 1 year </li>
            <li> Build BZ Roomname service using Django and Jquery AJAX </li>
          </ul>
        </ExperienceBox>
        <ExperienceBox
          year_range="2018 - 2019"
          company="PT Hacktivate Teknologi Indonesia"
          job_title="Instructor Fullstack Javascript"
        >
          <ul>
            <li> Teaching Students </li>
            <li> make Quiz and Exercises </li>
            <li> Making report of Student progress</li>
          </ul>
        </ExperienceBox>
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

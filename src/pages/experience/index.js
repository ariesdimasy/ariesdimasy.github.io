import Content from "./../../components/layout/Content";
import ExperienceBox from "../../components/ExperienceBox";
import About from "./../../components/About";

export default function Experience(props) {
  return (
    <Content>
      <About title="Experiences" className="experiences">
        <ExperienceBox
          year_range="2021 - Present"
          company="PT Datasintesa Teknologi Nusantara"
          job_title="Front End Developer"
        >
          <ul>
            <li> Build Front End React JS for ICMS Bakti Online </li>
            <li> Build Front End React JS for Template DTN</li>
          </ul>
        </ExperienceBox>
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
            <li> Teaching Students FullStack javascript </li>
            <li> make Quiz and Exercises Phase 0 and Phase 1</li>
            <li> Making report of Student progress</li>
          </ul>
        </ExperienceBox>
        <ExperienceBox
          year_range="2014 - 2017"
          company="Informasea"
          job_title="Senior Web Developer"
        >
          <ul>
            <li> Build informasea.com using Codeigniter and AJAX Jquery </li>
            <li> Build Dashboard Scheduling seafarer onboard </li>
          </ul>
        </ExperienceBox>
        <ExperienceBox
          year_range="2013 - 2014"
          company="PT Babastudio"
          job_title="Web Master Instructor"
        >
          <ul>
            <li> Teaching Web master class </li>
            <li> making learning video course for PHP </li>
            <li> making learning video course for Codeigniter </li>
            <li> Developed Prototype system PHP Advance for learning course</li>
          </ul>
        </ExperienceBox>
        <ExperienceBox
          year_range="2013"
          company="PT Pricearea Andalan Prestasi"
          job_title="Web Developer"
        >
          <ul>
            <li> develop forum and comment in product detail page </li>
          </ul>
        </ExperienceBox>
      </About>
    </Content>
  );
}

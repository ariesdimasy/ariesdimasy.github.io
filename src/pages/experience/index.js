import { useEffect, useState } from "react";

import Content from "./../../components/layout/Content";
import ExperienceBox from "../../components/ExperienceBox";
import About from "./../../components/About";

import dataExperiences from "./../../data/experiences.json"

export default function Experience(props) {

  const [experiences, setExperiences] = useState([])

  useEffect(() => {
   setExperiences(dataExperiences)
  },[])

  return (
    <Content>
      <About title="Experiences" className="experiences">
        {experiences.map((item) => {
            return(
              <ExperienceBox
                year_range={item?.range}
                company={item?.company}
                job_title={item?.job_title}
              >
             
                <ul>
                  { item?.job_desk.map(item2 => {
                    return(<li>{item2} </li>)
                  })}
                </ul>
              </ExperienceBox>
            )
            })
        }
       </About>
    </Content>
  );
}

export default function ExperienceBox(props) {
  return (
    <div className="box">
      <div class="year-company">
        <h5>{props.year_range}</h5>
        <h5>{props.company}</h5>
      </div>
      <div class="text">
        <h4> {props.job_title} </h4>
        {props.children}
      </div>
    </div>
  );
}

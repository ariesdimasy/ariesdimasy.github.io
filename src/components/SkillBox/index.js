export default function SkillBox(props) {
  return (
    <div className="box">
      <h4>{props.title}</h4>
      <div className="years" title={props.years_title}>
        <div style={{ width: `${props.percent}%` }}></div>
      </div>
    </div>
  );
}

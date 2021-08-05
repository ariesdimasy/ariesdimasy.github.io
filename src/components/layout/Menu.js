import "./Menu.css";

export default function Menu(props) {
  return (
    <div className="menu">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/experience">Experiences</a>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
      </ul>
    </div>
  );
}

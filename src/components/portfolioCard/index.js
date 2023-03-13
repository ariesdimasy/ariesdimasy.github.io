import style from "./index.module.css"

export default function portfolioCard(props) { 
    return (<div className={style['portfolio-card']}>
        <img src={props.srcImage} height={props.imgHeight} width={props.imgWidth} alt="" />
        <div>
            <h3>{props.title || "Portfolio Title"}</h3>
            <p>{props.desc || "Description for this portfolio"}</p>
        </div>
    </div>)
}
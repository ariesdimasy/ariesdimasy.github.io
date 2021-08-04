
export default function About(props) { 
    return (<div className={`about ${props.className}`}>
         <h2 className={`title2 `}>{ props.title }</h2>
         { props.children }
    </div>)
}
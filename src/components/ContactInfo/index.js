
export default function ContactInfo(props) { 
    return (<div className={`contact-info ${props.className}`}>
        <h3>{ props.title }</h3>
        { props.children }
    </div>)
}
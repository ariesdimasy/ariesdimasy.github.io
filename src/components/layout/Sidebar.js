
import ProfileText from "../profileText"
import ContactInfo from "../ContactInfo"

export default function Sidebar() { 
    return (<div className="left-side">
        <ProfileText></ProfileText>
        <ContactInfo
            className=""
            title="Contact Info"

        >
            <ul>
                <li>
                    <span className="icon"><i className="fa fa-whatsapp" aria-hidden="true"></i></span>
                    <span className="text">+62-813-256-1233-9</span>
                </li>
                <li>
                    <span className="icon"><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                    <span className="text">ariesdimasy@gmail.com</span>
                </li>
                <li>
                    <span className="icon"><i className="fa fa-link" aria-hidden="true"></i></span>
                    <span className="text"><a target="_blank" href="https://yudhistira.id">yudhistira.id</a></span>
                </li>
                <li>
                    <span className="icon"><i className="fa fa-github" aria-hidden="true"></i></span>
                    <span className="text"><a target="_blank"
                            href="https://github.com/ariesdimasy">ariesdimasy</a></span> ,
                    <span className="text"><a target="_blank" href="https://github.com/kunglaw">kunglaw</a></span>
                </li>

                <li>
                    <span className="icon"><i className="fa fa-linkedin" aria-hidden="true"></i></span>
                    <span className="text"><a target="_blank"
                            href="https://www.linkedin.com/in/aries-dimas-yudhistira-428a3798/">
                            linkedIn </a></span>
                </li>
                <li>
                    <span className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                    <span className="text">Slipi, Jakarta Barat</span>
                </li>
            </ul>
        </ContactInfo>
        <ContactInfo
            className="education"
            title="Education"
        >
            <ul>
                <li>
                    <h5> 2008 - 2012 </h5>
                    <h4>Bachelor Degree in Computer Science</h4>
                    <h4>Bina Nusantara University</h4>
                </li>
                <li>
                    <h5> 2005 - 2008 </h5>
                    <h4>Social Science</h4>
                    <h4>SMAN 75</h4>
                </li>


            </ul>
        </ContactInfo>
        <ContactInfo
            className="language"
            title="languages"
        >
            <ul>
                <li>
                    <span className="text"> Indonesia (Native) </span>
                    <span className="percent">
                        <div style={{width: "100%"}}></div>
                    </span>
                </li>
                <li>
                    <span className="text"> English </span>
                    <span className="percent">
                        <div style={{width: "80%"}}></div>
                    </span>
                </li>
            </ul>
        </ContactInfo>
        <ContactInfo
            classNameName="download"
        >
            <a style={{color: "white", textDdecoration: "none"}} target="_blank"
                href="https://drive.google.com/file/d/1h_ospp-frNJ35BX6hmvBI6jVvDLVgDuV/view?usp=sharing">
                <h3 className="title">
                    Download Full CV
                </h3>
            </a>
        </ContactInfo>
    </div>)
}
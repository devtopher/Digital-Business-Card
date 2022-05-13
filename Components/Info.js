import React from "react"

export default function Info(){
    return (
        <>
            <div className="info--grid">
                <div className="info--image"></div>
                <h1 className="info--name">Chris McCoy</h1>
                <h2 className="info--title">Frontend Developer</h2>
                <a href="#" className="info--website">chrismccoy.dev</a>
                <a href="mailto:christopher.david.mccoy@gmail.com" 
                className="info--email"><i className="fa-solid fa-envelope"></i>Email</a>
                <a className="info--linkedin" href="https://www.linkedin.com/in/chris-mccoy-4a415a224/"><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
            </div>
        </>
    )
}
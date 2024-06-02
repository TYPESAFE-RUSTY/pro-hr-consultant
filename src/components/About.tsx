import "@/styles/r_about.css"
import HexagonDiagrma from "./HexagonDiagram"

export default function About() {
    return (
        <section id="About" className="container section-padding" style={{ overflow: "clip" }}>
            <div className="flex align-center wrap" style={{ justifyContent: "center" }}>
                <div className="flex place-center content" style={{ flexDirection: "column" }}>
                    <h2 className="fs-200">ABOUT US.</h2>
                    <h3 className="fs-600">
                        <span>We are a leading </span><br />
                        <span>HR Consulting Firm </span><br />
                        <span>dedicated to optimizing your workforce.</span><br />
                    </h3>
                    <p className="fs-xs">We believe that if you follow your passion, you won&apos;t have to work a day in your life. Our expertise lies in helping you discover your passion.
                        <br />
                        With over 20 years of industry experience, a group of dynamic individuals decided to share their expertise and assist people in finding companies that enable them to pursue their passions.
                        <br />
                        How do we help?
                        <br />
                        We help you address every situation and prepare you to meet present and future challenges.</p>
                    {/* <div className="flex wrap  border info">
                        <div>
                            <span className="outline fs-600">12K</span>
                            <div>Happy Users around World</div>
                        </div>
                        <div>
                            <div className="flex wrap">
                                <span className="outline fs-600">30K</span>
                            </div>
                            <div>Projects Already Done</div>
                        </div>
                    </div> */}
                </div>
                <HexagonDiagrma />
            </div>
        </section>
    )
}

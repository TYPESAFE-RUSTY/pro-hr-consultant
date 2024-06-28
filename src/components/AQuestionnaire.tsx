import AccordionWrapper from "@/wrappers/AccordionWrapper"
import "@/styles/a_aquestionnaire.css"
import Summary from "./a_questionnaire/Summary"
import Language from "./a_questionnaire/Language"
import Skills from "./a_questionnaire/Skills"
import Education from "./a_questionnaire/Education"
import Experience from "./a_questionnaire/Experience"

export default function AQuestionnaire() {
    return (
        <section id="Questionnaire" className="container section-padding bgcolor">
            <div style={{ border: "1px solid var(--border)", borderRadius: "5px" }}>
                <AccordionWrapper heading="PROFESSIONAL SUMMARY" id="heading">
                    <Summary />
                </AccordionWrapper>
                <AccordionWrapper heading="EDUCATION" id="this">
                    <Education />
                </AccordionWrapper>
                <AccordionWrapper heading="WORK EXPERIENCE" id="this">
                    <Experience />
                </AccordionWrapper>
                <AccordionWrapper heading="SKILLS AND ABILITIES" id="this">
                    <Skills />
                </AccordionWrapper>
                <AccordionWrapper heading="LANGUAGE" id="this">
                    <Language />
                </AccordionWrapper>
            </div>
        </section>
    )
}

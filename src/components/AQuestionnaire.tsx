import AccordionWrapper from "@/wrappers/AccordionWrapper"
import "@/styles/a_aquestionnaire.css"

export default function AQuestionnaire() {
    return (
        <section id="Questionnaire" className="container section-padding bgcolor">
            <div className="glass">
                <AccordionWrapper heading="This" id="heading">
                    <div>Expanded</div>
                </AccordionWrapper>
                <AccordionWrapper heading="This" id="this">
                    <div>Expanded</div>
                </AccordionWrapper>
            </div>
        </section>
    )
}

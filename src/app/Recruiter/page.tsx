import "@/styles/a_aquestionnaire.css"
import "@/styles/r_rquestionnaire.css"
import AccordionWrapper from "@/wrappers/AccordionWrapper"
import Pinfo from "@/components/r_questionnaire/Pinfo"
import Cinfo from "@/components/r_questionnaire/Cinfo"
import Rne from "@/components/r_questionnaire/Rne"
import Rnp from "@/components/r_questionnaire/Rnp"
import Tnt from "@/components/r_questionnaire/Tnt"
import Cnc from "@/components/r_questionnaire/Cnc"
import Mnsm from "@/components/r_questionnaire/Mnsm"
import Cns from "@/components/r_questionnaire/Cns"
import Ac from "@/components/r_questionnaire/Ac"

export default function page() {
    return (
        <section id="Questionnaire" className="container section-padding bgcolor" style={{ paddingBlock: "4rem" }}>
            <div style={{ border: "1px solid var(--border)", borderRadius: "5px" }}>
                <AccordionWrapper heading="PERSONAL INFORMATION" id="pinfo" open>
                    <Pinfo />
                </AccordionWrapper>
                <AccordionWrapper heading="COMPANY INFORMATION" id="cinfo" >
                    <Cinfo />
                </AccordionWrapper>
                <AccordionWrapper heading="RECRUITMENT EXPERIENCE" id="rne" >
                    <Rne />
                </AccordionWrapper>
                <AccordionWrapper heading="RECRUITMENT PROCESS" id="rnp" >
                    <Rnp />
                </AccordionWrapper>
                <AccordionWrapper heading="TOOLS AND TECHNOLOGY" id="tnt" >
                    <Tnt />
                </AccordionWrapper>
                <AccordionWrapper heading="COLLABORATION AND COMMUNICATION" id="cnc" >
                    <Cnc />
                </AccordionWrapper>
                <AccordionWrapper heading="MATRICES AND SUCCESS MEASUREMENT" id="mnsm" >
                    <Mnsm />
                </AccordionWrapper>
                <AccordionWrapper heading="CHALLENGES AND STRATEGIES" id="cns" >
                    <Cns />
                </AccordionWrapper>
                <AccordionWrapper heading="ADDITIONAL COMMENT" id="ac" >
                    <Ac />
                </AccordionWrapper>
            </div>
        </section>
    )
}

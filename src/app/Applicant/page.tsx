import Profile from "@/components/Profile";
import AQuestionnaire from "@/components/AQuestionnaire"

export default function page() {
    return (
        <>
            <Profile />
            <AQuestionnaire />
            <div className="container bgcolor" style={{ padding: "2rem" }}>
                <div className="flex align-center" style={{ justifyContent: "center" }}>
                    <a href="./Applicant/Resume"><button className="button">GENERATE RESUME</button></a>
                </div>
            </div>
        </>
    )
}

import "@/styles/r_team.css"
import Image from "next/image"

interface team {
    picture: string,
    position: string,
    name: string
}

const Members: Array<team | undefined> = [
    {
        picture: "/images/team/t1.jpg",
        position: "Co-Founder",
        name: "Matt Smith"
    },
    {
        picture: "/images/team/t2.jpg",
        position: "Co-Founder",
        name: "Matt Smith"
    },
    {
        picture: "/images/team/t3.jpg",
        position: "Co-Founder",
        name: "Matt Smith"
    },
    undefined
]

function TeamDetails({ member }: { member: team | undefined }) {
    if (member === undefined) {
        return <div className="join-us border flex align-center">
            <div style={{ marginInline: "auto" }}>
                <h4 className="fs-200">BECOME A MEMBER</h4>
                <a href="" className="color">JOIN US</a>
            </div>
        </div>
    }
    return <div>
        <Image
            src={member.picture}
            alt={`${member.position} ${member.name}`}
            width={300}
            height={300}
            blurDataURL="/images/background/8.jpg"
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority={true}
        ></Image>
        <h4 className="fs-xs">{member.position}</h4>
        <p className="fs-200">{member.name}</p>
    </div>
}

export default function Team() {
    return (
        <section id="Team" className="container section-padding">
            <h2 className="fs-200">THE AVENGERS</h2>
            <h3 className="fs-600">Meet Our Team.</h3>
            <div className="flex wrap section-padding-top" style={{ justifyContent: "space-between", gap: "1rem" }}>
                {Members.map((member, i) => (<TeamDetails key={i} member={member} />))}
            </div>
        </section>
    )
}

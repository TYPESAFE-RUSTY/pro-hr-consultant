import "@/styles/r_blog.css"

import Image from "next/image"


enum tags {
    DESIGN,
    MARKETING
}

interface Blog {
    author: string,
    title: string,
    url: string,
    date: Date,
    profile: string
    tags?: Array<tags>
}

interface blogtype {
    data: Blog,
    backgroundImage: string
}

let blog: Array<blogtype> = [
    {
        data: {
            author: "Olivia Rhye",
            title: "The Highly Creative UI/UX Workflow from a Silicon Valley.",
            url: "",
            profile: "/images/blog/author1.jpg",
            date: new Date("6 AUGUST 2022"),
            tags: [tags.DESIGN, tags.MARKETING]
        },
        backgroundImage: "/images/blog/b1.jpg"
    },
    {
        data: {
            author: "Olivia Rhye",
            title: "Creativo Jóvenes: a Lead Designer's UI/UX Core Checklist.",
            url: "",
            profile: "/images/blog/author1.jpg",
            date: new Date("6 AUGUST 2022"),
            tags: [tags.DESIGN, tags.MARKETING]
        },
        backgroundImage: "/images/blog/b2.jpg"
    },
    {
        data: {
            author: "Olivia Rhye",
            title: "Definitive Guide to Make a Daily More Productive Working Flow.",
            url: "",
            profile: "/images/blog/author1.jpg",
            date: new Date("6 AUGUST 2022"),
            tags: [tags.DESIGN, tags.MARKETING]
        },
        backgroundImage: "/images/blog/b3.jpg"
    }
]


function BlogTemplate({ blog }: { blog: blogtype }) {
    return (
        <div
            className="blogDetails flex wrap"
            style={{
                gap: "2rem",
                backgroundImage: `url(${blog.backgroundImage})`,
                backgroundSize: '0 0',
                position: "relative",
                marginBlockEnd: "1px"
            }}
        >
            <div className="author flex wrap" style={{ gap: "0.5rem", paddingBlockStart: "1rem" }}>
                <Image className="img" src={blog.data.profile} alt="Profile Picture" width={60} height={60} style={{ objectFit: "contain", objectPosition: "center" }}></Image>
                <div>
                    <p className="fs-xs">Posted by</p>
                    <h4 className="fs-200">
                        {blog.data.author}
                    </h4>
                </div>
            </div>
            <div className="info" style={{ paddingBlockEnd: "1rem" }}>
                <h4 className="fs-200">
                    <a href={blog.data.url} className="color">{blog.data.title}</a>
                </h4>
                <div className="tags flex wrap" style={{ gap: "0.5rem" }}>
                    {
                        blog.data.tags?.map(
                            (e: tags, i: number) => <div key={i}>{tags[e]}</div>
                        )
                    }
                </div>
            </div>
            <div className="date" style={{ paddingBlockEnd: "1rem" }}>
                {`${blog.data.date.getDate()} ${blog.data.date.toLocaleString('en-US', { month: 'long' }).toUpperCase()} ${blog.data.date.getFullYear()}`}
            </div>
            <div style={{ position: "absolute", top: "50%", left: "calc(50vw - 9ch)" }}>
                <a href={blog.data.url} className="color">Read More</a>
            </div>
        </div>
    )
}

export default function Blog() {
    return (
        <section className="container bgdiff section-padding" id="Blog">
            <div className="flex wrap" style={{ marginBlockEnd: "4rem" }}>
                <div >
                    <h2 className="fs-200">FEATURED STORIES</h2>
                    <h3 className="fs-600">Latest News</h3>
                </div>
                <a className="fancy color" href="">
                    View All Our News
                </a>
            </div>
            {
                blog.map((blog, i) => <BlogTemplate key={i} blog={blog} />)
            }
        </section>
    )
}

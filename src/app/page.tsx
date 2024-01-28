import Hero from "@/components/Hero"
import About from "@/components/About"
import Blog from "@/components/Blog"
import Team from "@/components/Team"
import Contacts from "@/components/Contacts"
import Timeline from "@/components/Timeline"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Timeline />
      <Team />
      <Blog />
      <Contacts />
    </>
  )
}

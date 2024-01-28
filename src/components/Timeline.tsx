'use client';
import Image from 'next/image';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '@/styles/r_timeline.css'


function Timeline() {
  return (
    <section id='Timeline'>
      <VerticalTimeline className="curved-timeline"
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: '7px solid  rgba(0, 0, 0, 0.02)' }}
          date="2010"
          iconStyle={{ background: '#c9f31d', color: '#ffff' }}
          icon={
            <Image className='timelineCar' src='/images/Car.png' style={{ objectFit: "contain", objectPosition: "left", zIndex: 3 }} alt='timeline scroll position' width={100} height={100}></Image>
          }

        >
          <h3 className="vertical-timeline-element-title">Company Name Established</h3>
          <p>
            In 2010, we founded ABC HR Solutions with a vision to revolutionize the way businesses manage their human resources. Our mission was clear: to provide exceptional HR consulting services that drive organizational success and employee satisfaction.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010-2012"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Rapid Growth and Expansion</h3>
          <p>
            Within just two years of our establishment, we experienced rapid growth and expanded our client base across various industries. Our team grew significantly, allowing us to cater to the diverse needs of our clients and build long-lasting partnerships.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2012-2014"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Launch of Innovative HR Solutions</h3>
          <p>
            In 2014, we launched our flagship HR solution, HRPro+. This groundbreaking software streamlined HR processes, from recruitment and onboarding to performance management and employee engagement. HRPro+ quickly became a game-changer, enabling our clients to optimize their HR operations and foster a thriving work environment.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2014 - 2016"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Recognition and Awards</h3>

          <p>
            Our dedication to excellence earned us the prestigious HR Excellence Award in 2016. This recognition highlighted our commitment to delivering high-quality HR consultancy services and solidified our position as a trusted industry leader.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016-2018"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Expansion of Service Offerings</h3>

          <p>
            Responding to the evolving needs of our clients, we expanded our service offerings to encompass comprehensive HR solutions. This included talent acquisition, employee training and development, HR policy development, and HR compliance consulting. Our expanded portfolio allowed us to provide end-to-end HR support to our clients.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018-2020"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Collaborations and Partnerships</h3>

          <p>
            In 2020, we formed strategic partnerships with leading HR technology providers to enhance our offerings and provide clients with cutting-edge solutions. These collaborations allowed us to integrate advanced HR analytics tools and automation software into our services, empowering organizations to make data-driven decisions and improve HR efficiency.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020-2023"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title"> Thought Leadership and Industry Contributions</h3>

          <p>
            Our HR experts have been at the forefront of industry thought leadership. In 2022, our senior consultants spoke at major HR conferences, published articles in renowned HR publications, and conducted webinars on emerging HR trends and best practices. We are dedicated to sharing our knowledge and helping organizations navigate the ever-changing HR landscape.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  )
}


export default Timeline
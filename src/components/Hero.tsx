import '@/styles/r_hero.css'

import Radio from './Radio'

export default function Hero() {
    return (
        <section id="hero" className="container full-height">
            <div className=' full-width container bganim' style={{ zIndex: '2' }}>
                <div className="flex align-center wrap" >
                    <div className="content" style={{ maxWidth: "50rem" }}>
                        <p className='fs-200'>HR Consulting Experts</p>
                        <h1 className='fs-xl'>Unlocking the Potential of Your Human Capital</h1>
                    </div>
                    <div className="button">
                        <Radio text='Applicant' />
                        <Radio text='Recruiter' />
                    </div>
                </div>
            </div>
        </section>
    )
}
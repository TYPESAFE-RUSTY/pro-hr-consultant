import '@/styles/r_contacts.css'
import Form from './Form'

export default function Contacts() {
    return (
        <section id="Contacts" className="container bgcolor section-padding">
            <div className="flex wrap" style={{ placeContent: "space-evenly" }}>
                <div className='content'>
                    <h2 className='fs-200'>GET IN TOUCH</h2>
                    <h3 className='fs-600'>Let&apos;s make your brand brilliant!</h3>
                    <p>If you would like to work with us or just want to get in touch, we&apos;d love to hear from you!</p>
                    <p className='coloraccent fs-400'>+1 840 841 25 69 </p>
                    <div className="flex wrap">
                        <a href="" className='color'>Facebook</a>
                        <a href="" className='color'>Twitter</a>
                        <a href="" className='color'>LinkedIn</a>
                        <a href="" className='color'>Instagram</a>
                    </div>
                </div>
                <Form />
            </div>
        </section>
    )
}

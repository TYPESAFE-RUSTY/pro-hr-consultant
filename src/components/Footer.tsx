import '@/styles/footer.css'


export default function Footer() {
    return (
        <footer className="container section-padding-top" id="Footer">
            <div className="flex wrap" style={{ gap: '2rem' }}>
                <div className="address">
                    <h2>Address</h2>
                    <p>Germany — 785 15h Street, Office 478 Berlin, De 81566</p>
                </div>
                <div className="hello">
                    <h2>Say Hello</h2>
                    <a href="" className='color'>hello@design.com</a>
                    <p className="number fs-200">+1 840 841 25 69</p>
                </div>
                <div className="socials">
                    <h2>Socials</h2>
                    <a href="" className='color'>FACEBOOK</a>
                    <a href="" className='color'>TWITTER</a>
                    <a href="" className='color'>LINKEDIN</a>
                    <a href="" className='color'>INSTAGRAM</a>
                </div>
                <div className="newsletter">
                    <h2>NewsLetter</h2>
                    <div className='input'>
                        <input type="email" placeholder='Type Your Email' className='bgcolor color' />
                    </div>
                </div>
            </div>
            <div className="brand full-width container" style={{ paddingBlockStart: '2rem' }}>
                <div className="flex align-center" style={{ gap: "2rem" }}>
                    <a href="" className='color fs-200' style={{ fontWeight: '700' }}>GeekFolio</a>
                    <p className='fs-xs'>© 2023 Geekfolio is Proudly Powered by Ui-ThemeZ</p>
                </div>
            </div>
        </footer>
    )
}

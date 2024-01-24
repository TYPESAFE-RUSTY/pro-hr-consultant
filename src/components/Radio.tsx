'use client';

import { useRouter } from 'next/navigation';
import '@/styles/r_hero_radio.css'

function Radio({ text }: { text: string }) {

    const router = useRouter()

    return (
        <label>
            <input type="checkbox" className="slider" />
            <div className="switch" >
                <div className="text" style={{ display: 'flex' }}>
                    <div className="applicants" onTransitionEnd={() => router.push(`/${text}`)}>{text}</div>
                    <div className="recruiters">{text}</div>
                </div>
                <div className="suns"></div>

                <div className="green" style={{ backgroundColor: '#112350' }}>

                </div>
                <div className="sand"></div>
                <div className="bb8" >
                    <div className="translate" id='' style={{ scale: 0.75 }}>

                        <div className="antennas">
                            <div className="antenna short"></div>
                            <div className="antenna long"></div>
                        </div>
                        <div className="head" style={{ scale: 1.2 }}>
                            <div className="stripe one"></div>
                            <div className="stripe two"></div>
                            <div className="eyes">
                                <div className="eye one"></div>
                                <div className="eye two"></div>
                            </div>
                            <div className="stripe detail">
                                <div className="detail zero"></div>
                                <div className="detail zero"></div>
                                <div className="detail one"></div>
                                <div className="detail two"></div>
                                <div className="detail three"></div>
                                <div className="detail four"></div>
                                <div className="detail five"></div>
                                <div className="detail five"></div>
                            </div>
                            <div className="stripe three"></div>
                        </div>
                        <div className="ball">
                            <div className="lines one"></div>
                            <div className="lines two"></div>
                            <div className="ring one"></div>
                            <div className="ring two"></div>
                            <div className="ring three"></div>
                        </div>
                    </div>
                </div>
            </div>
        </label>
    )
}


export default Radio
"use client";
import { Tooltip } from "react-tooltip"


export default function HexagonDiagram() {
    return (
        <ul id="grid" className="hexcontainer clear fs-xs">
            <li >
                <div className="hexagon" style={{ visibility: "hidden" }}></div>
            </li>
            <li>
                <div className="hexagon" style={{ display: "flex", alignItems: "center", placeContent: "center" }}>
                    <div
                        data-tooltip-id="tooltip"
                        data-tooltip-content="Pro hr helps you find the perfect job for you growth. Set alerts which will enable you to be on top of every new posting on real time basis"
                    >Discovering Job</div>
                </div>
            </li>
            <li>
                <div className="hexagon" style={{ visibility: "hidden" }}></div>
            </li>
            <li>
                <div className="hexagon" style={{ display: "flex", alignItems: "center", placeContent: "center" }}>
                    <div
                        data-tooltip-id="tooltip"
                        data-tooltip-content="Pro hr also helps you prepare for the role you have applied for.  We help you with mock drills and interviews. Contact us to know more"
                    >Preparation for the job
                    </div>
                </div>
            </li>
            <li>
                <div className="hexagon" style={{ display: "flex", alignItems: "center", placeContent: "center" }}>
                    <div
                        data-tooltip-id="tooltip"
                        data-tooltip-content="Stay connected with us to know what is the latest trend and how to keep yourself updated with changing times. Contact us to know more"
                    >Shaping future growth</div>
                </div>
            </li>
            <Tooltip id="tooltip" style={{ maxWidth: "25ch", fontSize: "0.7rem" }} />
        </ul>
    )
}

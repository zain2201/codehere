import React from 'react'
import { FaRegFileCode } from "react-icons/fa"
import "./SingleSaved.css"

export default function SingleSaved(props) { 
    return (
        <div >
            <a href={props.dataItem.url} target="_blank">
                <div className="saved-file" style={{ borderBlockColor: 'coral' }}>
                    <FaRegFileCode size={26} />
                    <h2>{props.dataItem.fn}</h2>
                </div>
                <div>__________________________________________________________________</div>
            </a>
        </div>
    )
}
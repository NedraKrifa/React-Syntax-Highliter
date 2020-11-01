import React from 'react'

function Form({setTextCode,textCode}) {

    return (
        <div className="form">
            <textarea className="form_text" value={textCode} onChange={(e)=>setTextCode(e.target.value)} placeholder="Enter code here" />
        </div>
    )
}
export default Form;
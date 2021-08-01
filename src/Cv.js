import React from "react"

function DisplayCV(props) {
    return (
        <div id='cvContainer'>
            <p id='name'>{props.data.firstName} {props.data.lastName}</p>
            <p id='email-phone'>{props.data.email} {props.data.phoneNumber}</p>
            
            <h2> Education </h2>
            <hr/>
            <div id = 'educ-section'>
            <p id='school-name'> {props.data.schoolName} </p>
            <p id='study-title'>  {props.data.titleStudy} </p> 
            <p id='study-dates'> {props.data.startEdu} - {props.data.endEdu}</p>
            </div>
            
            <h2> Work Experience </h2>
            <hr/> 
            <div id='work-section'>
            <div id='experience-one'> 
            <div class='position'>{props.data.positionOne}</div>
            <div class = 'company'>{props.data.companyOne}</div>
            <div class='exp-dates'> {props.data.startOne} - {props.data.endOne} </div>
                    <ul class='description'>
                        <li> {props.data.experienceOne}</li>
                    </ul> 
            </div>
            <div id='experience-two'> 
            <div class ='position'>{props.data.positionTwo}</div>
            <div class='company'>{props.data.companyTwo}</div>
            <div class='exp-dates'> {props.data.startTwo} - {props.data.endTwo} </div>
                    <ul class='description'>
                        <li> {props.data.experienceTwo}</li>
                    </ul>
            </div>
            </div>
            
        </div>
    )
}

export default DisplayCV
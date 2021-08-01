
import React from 'react'

function WorkExperience(props) {
    return (
        <main id='workExperience'>
            <form>
                <h2> Work Experience </h2>
                <h3> Experience 1 </h3>
                <p> Company and position information</p>
                <input
                    name="companyOne"
                    value={props.data.companyOne}
                    onChange={props.handleChange}
                    placeholder='Company name'
                />
                <input
                    name="positionOne"
                    value={props.data.positionOne}
                    onChange={props.handleChange}
                    placeholder='Position name'
                />
                
                <p> Description</p>
                <textarea 
                    name="experienceOne"
                    value={props.data.experienceOne}
                    onChange={props.handleChange}
                    placeholder='Describe the first work experience here'>
                </textarea>
                <p> Start and End dates </p>
                <input
                    type='date'
                    name="startOne"
                    value={props.data.startOne}
                    onChange={props.handleChange}
                    placeholder='Start date'
                />
                <input
                    type='date'
                    name="endOne"
                    value={props.data.endOne}
                    onChange={props.handleChange}
                    placeholder='End date'
                />
                <hr style={{marginRight: "50px"}}/>
                <h3> Experience 2 </h3>
                <p> Company and position information</p>
                <input
                    name="companyTwo"
                    value={props.data.companyTwo}
                    onChange={props.handleChange}
                    placeholder='Company name'
                /> 
                <input
                    name="positionTwo"
                    value={props.data.positionTwo}
                    onChange={props.handleChange}
                    placeholder='Position name'
                />
                <p> Description</p>
                <textarea 
                    name="experienceTwo"
                    value={props.data.experienceTwo}
                    onChange={props.handleChange}
                    placeholder='Describe the second work experience here'>
                </textarea>

                <p> Start and End dates </p>
                <input
                    type='date'
                    name="startTwo"
                    value={props.data.startTwo}
                    onChange={props.handleChange}
                    placeholder='Start date'
                />
                <input
                    type='date'
                    name="endTwo"
                    value={props.data.endTwo}
                    onChange={props.handleChange}
                    placeholder='End date'
                />
                <hr style={{marginRight: "50px"}}/>
            </form>
      
        </main>
    )
}

export default WorkExperience
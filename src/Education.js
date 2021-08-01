import React from 'react'

function Education(props) {
    return (
        <main id='education'>
            <form>
                <h2> Education </h2>
                <input
                    name="schoolName"
                    value={props.data.schoolName}
                    onChange={props.handleChange}
                    placeholder='School Name'
                />
                <input
                    name="titleStudy"
                    value={props.data.titleStudy}
                    onChange={props.handleChange}
                    placeholder='Title of Study'
                />
                <br/>
                <p> Start date </p>
                <input
                    type='date'
                    name="startEdu"
                    value={props.data.startEdu}
                    onChange={props.handleChange}
                    placeholder='Start date'
                />
                <p> End Date </p>
                <input
                    type='date'
                    name="endEdu"
                    value={props.data.endEdu}
                    onChange={props.handleChange}
                    placeholder='End date'
                />
            </form>
            <hr/>
        </main>
    )
}

export default Education
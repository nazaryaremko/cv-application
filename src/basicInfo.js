import React from 'react'

function BasicInfo(props) {
    return (
        <main id='basicInfo'>
            <form onSubmit={props.handleChange}>
                <h2> Basic Information </h2>
                <input
                    name="firstName"
                    value={props.data.firstName}
                    onChange={props.handleChange}
                    placeholder='First Name'
                />
                <br/>
                <input
                    name="lastName"
                    value={props.data.lastName}
                    onChange={props.handleChange}
                    placeholder='Last Name'
                />
                <br/>

                <input
                    name="email"
                    value={props.data.email}
                    onChange={props.handleChange}
                    placeholder='Email'
                />
                <br/>

                <input
                    name="phoneNumber"
                    value={props.data.phoneNumber}
                    onChange={props.handleChange}
                    placeholder='Phone Number'
                />
                <br/>
                <hr/>
                <input type="submit" value="Submit" />
            </form>
        </main>
    )
}

export default BasicInfo
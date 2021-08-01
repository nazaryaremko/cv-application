import React, {Component} from "react"
import BasicInfo from "./basicInfo"
import DisplayCV from "./Cv"
import WorkExperience from "./WorkExperience"
import Education from "./Education"

class Form extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            experienceOne: "",
            experienceTwo: "",
            experienceThree: "",
            startOne: "",
            endOne: "",
            startTwo: "", 
            endTwo: "",
            companyOne: "",
            companyTwo: "",
            positionOne: "",
            positionTwo: "",
            schoolName: "",
            titleStudy: "",
            startEdu: "",
            endEdu: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        }) 
    }
    
    render() {
        return(
            <div id='container'>
            <BasicInfo
                handleChange={this.handleChange}
                data={this.state}
            />
            <Education
                handleChange={this.handleChange}
                data={this.state}
            />
            <WorkExperience
                handleChange={this.handleChange}
                data={this.state}
            />
            <DisplayCV
                handleChange={this.handleChange}
                data={this.state}
            />
            </div>
            
        )
    }
}

export default Form
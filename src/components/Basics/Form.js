import { Component } from "react"

class BasicForm extends Component {

    constructor() {
        super()

        this.state = {
            userInfo: {
                fname: '',
                lname: '',
                email: '',
                password: '',
                cpassword: ''
            }
        }
    }

    handleChange(e) {
        let name = e.target.name
        this.setState((state) => {
            return {
                userInfo: {
                    ...state.userInfo,
                    [name]: e.target.value
                }
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.userInfo)
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)} style={{ padding: '1vh 1vw' }}>
                    <fieldset>
                        <legend>Basic Info</legend>
                        <div>
                            <label htmlFor="fname">First Name</label>
                            <br />
                            <input name="fname" type="text" value={this.state.userInfo.fname} onChange={(e) => { this.handleChange(e) }} required/>
                        </div>
                        <div>
                            <label htmlFor="lname">Last Name</label>
                            <br />
                            <input name="lname" type="text" value={this.state.userInfo.lname} onChange={(e) => { this.handleChange(e) }} required/>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Account Info</legend>
                        <div>
                            <label htmlFor="email">Email</label>
                            <br />
                            <input name="email" type="email" value={this.state.userInfo.email} onChange={(e) => { this.handleChange(e) }} required/>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <br />
                            <input name="password" type="password" value={this.state.userInfo.password} onChange={(e) => { this.handleChange(e) }} required/>
                        </div>
                        <div>
                            <label htmlFor="cpassword">Confirm Password</label>
                            <br />
                            <input name="cpassword" type="password" value={this.state.userInfo.cpassword} onChange={(e) => { this.handleChange(e) }} required/>
                        </div>
                    </fieldset>
                    <div style={{ padding: '1vh 1vw' }}>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default BasicForm
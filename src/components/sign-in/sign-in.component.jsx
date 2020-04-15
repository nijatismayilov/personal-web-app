import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 

import { auth } from '../../firebase/firebae.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
                this.setState({
                email: "",
                password: ""
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const { email, password } = this.state;
        const { currentUser } = this.props;
        
        return (
            <section className="sign-in-section main">
                <form className="sign-in" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={email}
                        name="email"
                        className="sign-in__input"
                        onChange={this.handleChange}
                        placeholder="Email"
                    />

                    <input
                        type="password"
                        value={password}
                        name="password"
                        className="sign-in__input"
                        onChange={this.handleChange}
                        placeholder="Password"
                    />

                    <div>
                        {
                            currentUser
                                ? (
                                    <input
                                        type="button"
                                        name="submit"
                                        value="Çıxış"
                                        className="sign-in__btn"
                                        onClick={() => auth.signOut()}
                                    />
                                )
                                : (
                                    <input
                                        type="submit"
                                        name="submit"
                                        value="Daxil Ol"
                                        className="sign-in__btn"
                                    />
                                )
                        }
                    </div>
                </form>
            </section>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(SignIn);
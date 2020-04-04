import React from 'react';

import { auth } from '../../firebase/firebae.utils';

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
        console.log('succesful');
      } catch (error) {
        console.log(error.message)
      }
    }

    handleChange = event => {
      const { name, value } = event.target;

      this.setState({ [name]: value }, () => console.log(this.state[name]));
    }

    render() {
        const { email, password } = this.state;
        return (
          <section className="sign-in main">
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

              <input
                type="submit"
                name="submit"
                value="Sign In"
                className="sign-in__input"
              />
            </form>
          </section>
        );
    }
}

export default SignIn;
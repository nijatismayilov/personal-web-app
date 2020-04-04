import React from 'react';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: ""
        }
    }

    render() {
        const { email, password } = this.state;
        return (
          <section className="sign-in main">
            <form action="" className="sign-in">
              <input
                type="text"
                value={email}
                name="email"
                className="sign-in__input"
              />

              <input
                type="password"
                value={password}
                name="password"
                className="sign-in__input"
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
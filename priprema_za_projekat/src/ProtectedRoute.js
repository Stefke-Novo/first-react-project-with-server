import React from 'react'
import { Redirect } from 'react-router-dom'

class ProtectedRoute extends React.Component {
    render() {
        const isAuthenticated = this.props.isSubmitted;
        return isAuthenticated ? (
            <Redirect to="/pocetna" />
        ) : (
            <Redirect to="/" />
        );
    }
}

export default ProtectedRoute;
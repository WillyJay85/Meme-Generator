import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SiteNav extends Component {
    render() {
        return (

            <nav>
                <Link to="/">Create Page</Link>
                <div className="vl">&nbsp;</div>
                <Link to="/about">About Page</Link>
                
            </nav>
        )
    }
}
export default SiteNav
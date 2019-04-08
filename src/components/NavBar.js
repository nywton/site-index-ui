import React, {Component} from 'react'
import logo from '../images/wagon.png'
import GitHubButton from 'react-github-btn'

class NavBar extends Component {
    render() {
        return(<div className="navbar navbar-default navbar-static-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <img src={logo} className="img-responsive navbar-brand-logo" alt="logo"/>
                    <a className="navbar-brand" href="https://site-indexer-ui.herokuapp.com">Site Indexer</a>
                    <div className="padding float-right">
                        <GitHubButton href="https://github.com/nywton/site-index-ui" data-icon="octicon-star" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</GitHubButton>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default NavBar;
import React, {Component} from 'react'

class NavBar extends Component {
    render() {
        return(<div className="navbar navbar-default navbar-static-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse"
                            data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                    </button>
                    <a className="navbar-brand" href="/">Site Indexer</a>
                </div>
                <div className="navbar-collapse collapse">
                    {/*<ul className="nav navbar-nav">*/}
                        {/*<li className="active"><a href="#">Sites</a></li>*/}
                    {/*</ul>*/}
                    <ul className="nav navbar-nav navbar-right">
                        <div className="padding pull-right">
                            <a className="github-button margin-top" href="https://github.com/nywton/site-index-ui" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
                        </div>
                    </ul>
                </div>
            </div>
        </div>);
    }
}

export default NavBar;
import React, { Component } from 'react';

class CreateSiteIndex extends Component {

    state = { sites: [] }
    //
    // chooseTheme = (theme, evt) => {
    //     evt.preventDefault();
    //     if (theme.toLowerCase() === 'reset') { theme = null }
    //     this.setState({ theme });
    // }

    render() {

        // const { theme } = this.state;
        // const themeClass = theme ? theme.toLowerCase() : 'default';
        //
        const parentContainerStyles = {
            position: 'absolute',
            height: '100%',
            width: '100%',
            display: 'table'
        };

        const subContainerStyles = {
            position: 'relative',
            height: '100%',
            width: '100%',
            display: 'table-cell',
            verticalAlign: 'middle'
        };

        return (
            <div style={parentContainerStyles}>
                <div className="padding pull-right">
                    <a className="github-button margin-top" href="https://github.com/nywton/site-index-ui" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
                </div>

                <div className="container">
                    <div className="demo-headline">
                        <h1 className="demo-logo">
                            <div className="logo"></div>
                            Site Indexer
                            <small>Search for tags for free</small>
                        </h1>
                    </div>
                    <form role="form">
                        <input type="text" className="form-control" id="search"
                               placeholder="Paste your URL..." />
                    </form>
                </div>
            </div>
        );

    }

}

export default CreateSiteIndex;
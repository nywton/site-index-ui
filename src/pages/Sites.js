import React, { Component } from 'react';
import NavBar from '../components/NavBar'

class Sites extends Component {

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
                <NavBar/>

            </div>
        );

    }

}

export default Sites;
import React, { Component } from 'react';
import SiteService from '../services/SiteService'
import { css } from '@emotion/core';
import PacManLoader from 'react-spinners/ClipLoader';

class CreateSiteIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            siteUrl: '',
            loading: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createSite = this.createSite.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    createSite() {
        return SiteService.save(this.state.siteUrl);
    }

    handleChange(event) {
        this.setState({siteUrl: event.target.value});
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.handleSubmit();
        }
    }

    handleSubmit() {
        this.setState({loading: true});
        this.createSite()
            .then((data) => {
                console.log(data);
                this.setState({loading: false})
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const parentContainerStyles = {
            position: 'fixed',
            height: '100%',
            width: '100%',
            display: 'table'
        };

        const override = css`
            position: absolute;
            top: 40%;
            left: 40%;
            width: 100%;
            height: 100%;
            z-index: 10;
            background-color: rgba(0,0,0,0.5);
        `;

        return (
            <div style={parentContainerStyles}>
                <PacManLoader
                    css={override}
                    sizeUnit={"px"}
                    size={150}
                    color={'#123abc'}
                    loading={this.state.loading}
                />
                <div className="padding pull-right">
                    <a className="github-button margin-top" href="https://github.com/nywton/site-index-ui" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
                </div>

                <div className="container">
                    <div className="demo-headline">
                        <h1 className="demo-logo">
                            <div className="logo"/>
                            Site Indexer
                            <small>Search tags</small>
                        </h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-10">
                            <input type="text" className="form-control" id="search" onChange={this.handleChange} value={this.state.value}
                                   placeholder="Paste your URL..." />
                        </div>
                        <div className="col-lg-2">
                            <button onKeyPress={this.handleKeyPress} disabled={this.state.loading || (this.state.siteUrl === '')} type="button" onClick={this.handleSubmit} className="btn btn-block btn-lg btn-primary">Go!</button>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}

export default CreateSiteIndex;
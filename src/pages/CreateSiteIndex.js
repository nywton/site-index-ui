import React, { Component } from 'react';
import SiteService from '../services/SiteService'
import { css } from '@emotion/core';
import PacManLoader from 'react-spinners/ClipLoader';
import urlRegex from 'url-regex'
import GitHubButton from 'react-github-btn'

class CreateSiteIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            siteUrl: '',
            loading: false,
            error: false,
    };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createSite = this.createSite.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    createSite() {
        let {siteUrl} = this.state;
        if(siteUrl[0] !== 'h') {
            siteUrl = 'https://' + siteUrl;
        }
        return SiteService.save(siteUrl);
    }

    handleChange(event) {
        urlRegex().test(event.target.value) ? this.setState({error: false}) : this.setState({error: true})
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
            .then((result) => {
                this.setState({loading: false})
                this.props.history.push(`/details/${result.data.resource.id}`)
            })
            .catch(error => {
                alert('Desculpe, nenhum resultado encontrado a partir da URL informada.')
            });
    }

    render() {
        const parentContainerStyles = {
            position: 'relative',
            display: 'table',
            height: '100%',
            width: '100%',
        };
        const parentContainerStylesFlex = {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
        };

        const override = css`
            position: absolute;
            margin-top: 300px;
            width: 100%;
            height: 100%;
            z-index: 10;
            background-color: rgba(0,0,0,0.5);
        `;

        return (
            <div style={parentContainerStyles}>
                <div style={parentContainerStylesFlex}>
                    <PacManLoader
                        css={override}
                        sizeUnit={"px"}
                        size={150}
                        color={'#123abc'}
                        loading={this.state.loading}
                    />
                </div>
                <div className="padding pull-right">
                    <GitHubButton href="https://github.com/nywton/site-index-ui" data-icon="octicon-star" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</GitHubButton>
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
                            <div className={"form-group" + (this.state.error ? 'has-error' : '')}>
                                <input type="text" className="form-control" id="search" onChange={this.handleChange} value={this.state.value}
                                       placeholder="Paste your URL..." />
                            </div>
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
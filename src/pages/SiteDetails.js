import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import SiteService from '../services/SiteService'
export default class SiteDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            site: {included: []},
            tags: [
                {name: 'H1', opened: false },
                {name: 'H2', opened: false },
                {name: 'H3', opened: false },
                {name: 'a', opened: false }
                ],
            loading: false
        };
        this.getTags = this.getTags.bind(this);
        this.toggleTag = this.toggleTag.bind(this);
    }

    componentWillMount() {
        const { id } = this.props.match.params;
        SiteService.getById(id)
            .then(result => {
                this.setState({site: result.data});
            })
    }

    getTags(tag) {

        return this.state.site.included.filter(i => i.attributes.name.toLocaleLowerCase() === tag.name.toLowerCase())
    }

    toggleTag(e) {
        const {tags} = this.state
        // e.preventDefault()
        if(tags[e.target.id]) {
            let oldVal = tags.find(item => item.name === (tags[e.target.id] || {}).name)
            oldVal.opened = !oldVal.opened
            this.setState({tags})
        }
    }


    render() {
        const parentContainerStyles = {
            position: 'absolute',
            height: '100%',
            width: '100%',
            display: 'table'
        };

        return (
            <div style={parentContainerStyles}>
                <NavBar/>
                <div className="container">
                    <div className="row">
                        <div {...{ className: 'wrapper col-12' }}>
                            <ul {...{ className: 'accordion-list' }}>
                                {this.state.tags.map((tag, key) => {
                                    return (
                                        <li
                                            {...{ className: 'accordion-list__item', key }} onClick={(e) => this.toggleTag(e)}>
                                            <div
                                                {...{
                                                    className: `accordion-item, ${tag.opened && 'accordion-item--opened'}`
                                                }}
                                            >
                                                <div id={key}
                                                     {...{ className: 'accordion-item__line' }}>
                                                    <h3 {...{ className: 'accordion-item__title' }}>
                                                        {tag.name === 'a' ? 'Links' : tag.name}: {this.getTags(tag).length}
                                                    </h3>
                                                    <span {...{ className: 'accordion-item__icon' }}/>
                                                </div>
                                                <div {...{ className: 'accordion-item__inner' }}>
                                                    <div {...{ className: 'accordion-item__content' }}>
                                                        {
                                                            this.getTags(tag).map(tag => {
                                                                return (
                                                                    <p {...{ className: 'accordion-item__paragraph' }}>
                                                                        {tag.attributes.content}
                                                                    </p>
                                                                );
                                                            })
                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}
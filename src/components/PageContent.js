// PageContent.js
import React from 'react';
import './PageContent.scss';

class PageContent extends React.Component {
    render() {
        return (
            <div class="page-content">
                <div class="page-content--inner">
                    <h1 class="page-content__title">{this.props.Title}</h1>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default PageContent;
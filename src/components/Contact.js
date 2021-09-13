// Contact.js
import React from 'react';
import './Contact.scss'
import { Icons } from '../utils';

function Contact() {
    return (
        <div className="contact">
            <ContactRow Label="Email" Link="mailto: private@ethandavis.me" Icon="envelope-fill.svg" Details="private@ethandavis.me" />
            <ContactRow Label="GitHub" Link="https://github.com/sealater/" Icon="github.svg" Details="sealater" />
        </div>
    );
}

class ContactRow extends React.Component {
    render() {
        return (
            <span className="contact__row">
                <h2 className="contact__label">{this.props.Label + ":"}</h2>
                <a href={this.props.Link} target="_blank" rel="norefferer noopener" className="contact__info">
                    <img src={Icons[this.props.Icon].default} className="contact__icon" />
                    <h2 className="contact__details">{this.props.Details}</h2>
                </a>
            </span>
        );
    }
}

export default Contact;
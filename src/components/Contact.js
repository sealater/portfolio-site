// Contact.js
import React from 'react';
import './Contact.scss'
import { Icons } from '../utils';

function Contact() {
    return (
        <div className="contact">
            <ContactButton IconName="envelope-fill"></ContactButton>
            <ContactButton IconName="github"></ContactButton>
        </div>
    );
}

class ContactButton extends React.Component {
    render() {
        const iconStyle = { backgroundImage: "url(" + Icons[this.props.IconName + ".svg"].default + ")" };

        return (
            <a className="" style={iconStyle}>{this.props.children}</a>
        );
    }
}

export default Contact;
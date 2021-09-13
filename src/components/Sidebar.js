// Sidebar.js
import React from 'react';
import './Sidebar.scss';
import Avatar from '../assets/avatar.png';
import { Icons } from '../utils';

//// Sidebar
class Sidebar extends React.Component {
    render() {
        return (
            <nav className="sidebar">
                <div className="sidebar--inner">
                    <SidebarHeader />
                    <SidebarNavigation Links={this.props.children} />
                    <SidebarContact />
                </div>
            </nav>
        );
    }
}

class SidebarHeader extends React.Component {
    render() {
        return (
            <a href="" className="sidebar__header">
                <img className="sidebar__avatar" src={Avatar} />
                <h1 className="sidebar__name">Ethan Davis</h1>
                <h2 className="sidebar__title">Junior Full-Stack Software Engineer</h2>
            </a>
        );
    }
}

function SidebarNavigation(props) {
    return (
        <ul className="sidebar__navigation">
            {/* TODO: Add href urls for respective buttons */}
            {props.Links.map((link, i) => {
                return <li>{link}</li>
            })}
            {/*
            <li><a href="" className="sidebar__button">Portfolio</a></li>
            <li><a href="" className="sidebar__button">Resume</a></li>
            <li><a href="" className="sidebar__button">Contact Me</a></li>
            */}
        </ul>
    );
}

class SidebarContact extends React.Component {
    render() {
        return (
            <div className="sidebar__contact">
                <span className="sidebar__label">
                    Get In Touch
                </span>
                <ul className="sidebar__icons">
                    <li><SidebarContactButton Icon="envelope-fill.svg" Link="mailto: private@ethandavis.me" /></li>
                    <li><SidebarContactButton Icon="github.svg" Link="https://github.com/sealater/" /></li>
                    {/*<li><SidebarContactButton IconName="telephone-fill" /></li>*/}
                </ul>
            </div>
        );
    }
}

class SidebarContactButton extends React.Component {
    render() {
        const iconStyle = { backgroundImage: "url(" + Icons[this.props.Icon].default + ")" };

        return (
            <a href={this.props.Link} target="_blank" rel="norefferer noopener" className="sidebar__button sidebar__button--contact" style={iconStyle}></a>
        );
    }
}

export default Sidebar;

// Sidebar.js
import './Sidebar.scss';
import React from 'react';
import Avatar from '../assets/avatar.png';

//// Import Images
const Images = importAll(require.context('../assets/icons/bootstrap', false, /\.(png|jpe?g|svg)$/));

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

//// Sidebar
class Sidebar extends React.Component {
    render() {
        return (
            <nav className="sidebar">
                <div className="sidebar--inner">
                    <SidebarHeader />
                    <SidebarNavigation />
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

class SidebarNavigation extends React.Component {
    render() {
        return (
            <ul className="sidebar__navigation">
                {/* TODO: Add href urls for respective buttons */}
                <li><a href="" className="sidebar__button">Portfolio</a></li>
                <li><a href="" className="sidebar__button">Resume</a></li>
                <li><a href="" className="sidebar__button">Contact Me</a></li>
            </ul>
        );
    }
}

class SidebarContact extends React.Component {
    render() {
        return (
            <div className="sidebar__contact">
                <span className="sidebar__label">
                    Get In Touch
                </span>
                <ul className="sidebar__icons">
                    <li><SidebarContactButton IconName="envelope-fill" /></li>
                    <li><SidebarContactButton IconName="github" /></li>
                    <li><SidebarContactButton IconName="telephone-fill" /></li>
                </ul>
            </div>
        );
    }
}

class SidebarContactButton extends React.Component {
    render() {
        const iconStyle = { backgroundImage: "url(" + Images[this.props.IconName + ".svg"].default + ")" };

        return (
            <a className="sidebar__button sidebar__button--contact" style={iconStyle}></a>
        );
    }
}

export default Sidebar;

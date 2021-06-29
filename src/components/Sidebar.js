// Sidebar.js
import './Sidebar.css';
import React from 'react';

// Sidebar
class Sidebar extends React.Component {
    render() {
        const sidebarStyle = {
            top: "0px",
            bottom: "0px",
            left: "0px",
            position: "fixed",
            width: "25%",
            backgroundColor: "rgba(0, 233, 159, 0.4)" /* Hex: #00E99F */
        };

        const sidebarInnerStyle = {
            position: "relative",
            height: "100%",
            padding: "48px 40px"
        };

        return (
            <div className="App__sidebar" style={sidebarStyle}>
                <div className="App__sidebar--inner" style={sidebarInnerStyle}>
                    <SidebarHeader />
                    <SidebarNavigation />
                    <SidebarContact />
                </div>
            </div>
        );
    }
}

class SidebarHeader extends React.Component {
    render() {
        const sidebarHeaderAvatarStyle = {
            display: "block",
            margin: "0px auto",
            marginBottom: "24px",
            width: "160px",
            height: "160px",
            borderRadius: "256px"
        };

        const sidebarNavigationNameStyle = {
            marginBottom: "12px",
            fontSize: "22px",
            fontWeight: "400",
            textAlign: "center",
            textTransform: "uppercase"
        };

        const sidebarNavigationTitleStyle = {
            marginBottom: "24px",
            fontSize: "16px",
            fontWeight: "400",
            textAlign: "center",
            textTransform: "uppercase"
        };

        return (
            <a className="Sidebar__header"> {/* ?: Should I wrap this in a <button> instead? */}
                <img src="./imgs/avatar.png" style={sidebarHeaderAvatarStyle} />
                <h1 style={sidebarNavigationNameStyle}>Ethan Davis</h1>
                <h2 style={sidebarNavigationTitleStyle}>Junior Full-Stack Software Engineer</h2>
            </a>
        );
    }
}

class SidebarNavigation extends React.Component {
    render() {
        const sidebarNavigationStyle = {
            margin: "64px 0",
            textAlign: "left"
        }

        return (
            <div className="Sidebar__navigation" style={sidebarNavigationStyle}>
                <ul>
                    {/* TODO: Add href urls for respective buttons */}
                    <li><SidebarNavigationButton Text="Portfolio" /></li>
                    <li><SidebarNavigationButton Text="Resume" /></li>
                    <li><SidebarNavigationButton Text="Contact Me" /></li>
                </ul>
            </div>
        );
    }
}

class SidebarContact extends React.Component {
    render() {
        const sidebarContactStyle = {
            textAlign: "left"
        };

        const sidebarContactListStyle = {
            paddingTop: "12px"
        };

        const sidebarContactListElementStyle = {
            display: "inline-block",
            paddingRight: "8px"
        };

        /* DUPLICATE: In reference to SidebarNavigationButton, streamline later */
        const sidebarContactHeaderButtonStyle = {
            textAlign: "left",
            cursor: "pointer"
        };

        const sidebarContactHeaderButtonTextStyle = {
            display: "block",
            color: "#FAFAFA",
            fontFamily: "IBM Plex Serif, serif",
            fontSize: "11px",
            textTransform: "uppercase"
        };
        /* --------------------------------------------------------------------- */

        return (
            <div className="Sidebar__contact" style={sidebarContactStyle} >
                {/* DUPLICATE: In reference to SidebarNavigationButton, streamline later */}
                <a className="Sidebar__contact--headerButton" style={sidebarContactHeaderButtonStyle}>
                    <span style={sidebarContactHeaderButtonTextStyle}>Get In Touch</span>
                </a>
                {/* --------------------------------------------------------------------- */}
                <ul style={sidebarContactListStyle}>
                    <li style={sidebarContactListElementStyle}><SidebarContactButton IconName="envelope-fill" /></li>
                    <li style={sidebarContactListElementStyle}><SidebarContactButton IconName="github" /></li>
                    <li style={sidebarContactListElementStyle}><SidebarContactButton IconName="telephone-fill" /></li>
                </ul>
            </div>
        );
    }
}

class SidebarNavigationButton extends React.Component {
    render() {
        const sidebarNavigationButtonStyle = {
            position: "relative",
            width: "100%",
            textAlign: "left",
            cursor: "pointer"
        };

        const sidebarNavigationButtonTextStyle = {
            display: "block",
            paddingBottom: "16px",
            color: "#FAFAFA",
            fontFamily: "IBM Plex Serif, serif",
            fontSize: "14px",
            textTransform: "uppercase"
        };

        return (
            <a className="SidebarNavigation__button" style={sidebarNavigationButtonStyle}>
                <span style={sidebarNavigationButtonTextStyle}>{this.props.Text}</span>
                {/*<i className="SidebarNavigation__button--indicator"></i>*/} {/* TODO: Page indicator logic */}
            </a>
        );
    }
}

class SidebarContactButton extends React.Component {
    render() {
        const sidebarNavigationButtonImageStyle = {
            display: "block",
            width: "16px",
            height: "16px",
            backgroundImage: "url(./imgs/icons/bootstrap/" + this.props.IconName + ".svg" + ")",
            backgroundSize: "16px 16px",
            cursor: "pointer"
        };

        return (
            <a className="SidebarContact__button" >
                <span style={sidebarNavigationButtonImageStyle}></span>
            </a>
        );
    }
}

export default Sidebar;

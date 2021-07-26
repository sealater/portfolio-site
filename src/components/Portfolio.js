// Portfolio.js
import React from 'react';
import './Portfolio.scss';
import { importAll } from '../utils';

const Images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

class PortfolioTimeline extends React.Component {
    render() {
        return (
            <div className="portfolio__timeline">
                <span className="portfolio__border" />
                <PortfolioTimelineEntry DateRange="Now" Image="react-logo.png">
                    <PortfolioTimelineEntryHeader Title="React.js Based Portfolio Site" Subtitle="The website you are viewing now. Developed using the React.js framework." />
                    <p>My first exposure to <span style={{ color: "#00E99F" }}>React.js</span>, this site was developed over the course of four days. <span style={{ color: "#00E99F" }}>React.js</span>, among many things, makes it possible to create styled <span style={{ fontStyle: "italic" }}>Components</span> and reuse them across the site.</p>
                    <p>Content blocks, such as this portfolio entry, are capable of containing nested components and dynamically adapting their formatting depending on context and properties supplied. </p>
                    <p>For example, the sidebar to the left is wrapped into a component and dropped into place with a single tag.</p>
                    <p>A cloud-based <span style={{ color: "#00E99F" }}>Droplet</span> hosted on <span style={{ color: "#00E99F" }}>DigitalOcean</span> has been configured to serve the <span style={{ color: "#00E99F" }}>React.js</span> application.</p>
                    <p>This site is static and thus warrants little reason for scaling. However, a cloud-based <span style={{ color: "#00E99F" }}>Droplet</span> opens the possibility of quick, low cost, low effort scaling.</p>
                </PortfolioTimelineEntry>
                <PortfolioTimelineEntry DateRange="" Image="taskmanager560-dashboard.png">
                    <PortfolioTimelineEntryHeader Title="Razor Pages Task Manager" Subtitle="A course project developed with ASP.NET Core Razor Pages in a team of three." />
                    <p>My team and I designed and developed a task-management web application tailored both for individual and group needs. The principal goal of the assigned project was exposure to Microsoft web application development tools. Our completed web application offered:</p>
                    <ul>
                        <p>A <span style={{ color: "#00E99F" }}>SQL</span> backed user registration and login system for data storage and retrieval.</p>
                        <p>A personal account dashboard with the ability to add, complete, or remove individual tasks.</p>
                        <p>A group management system featuring group creation, subscription, and task management.</p>
                    </ul>
                    <p>Group owner’s may assign tasks to the individual or broadly assign a task to all members within a group. Once a group is created, members can be added by their unique username via the <span style={{ fontWeight: "bold" }}>+ Add Member</span> button. While I worked on all portions of the project, the database design, procedures, <span style={{ fontWeight: "bold", color: "#00E99F" }}>C#</span> interface, and <span style={{ fontWeight: "bold", color: "#00E99F" }}>SQL</span> code was completed by myself exclusively.</p>
                </PortfolioTimelineEntry>
                <PortfolioTimelineEntry DateRange="" Image="cowboy-cafe.png">
                    <PortfolioTimelineEntryHeader Title="Cowboy Cafe POS System" Subtitle="A course project developed using Microsoft WPF framework." />
                    <p>Using Windows Presentation Foundation, I developed a point-of-sale system consisting of a desktop application to facilitate mock-transactions and a web application for public display of menu items.</p>
                    <p>Highly stressed programming principles such as:</p>
                    <ul>
                        <p>Encapsulation</p>
                        <p>The Single Responsiblity Principle</p>
                        <p>Composition, inheritance, and delegation</p>
                        <p>Abstraction</p>
                    </ul>
                    <p>The primary goal of the semester long project was to become familiar with object-oriented programming principles and display the versatility of systems with Model-View-Controller designs.</p>
                    <p>For example, the website sourced the same data model which led to both consistency and ease of modification/updating.</p>
                </PortfolioTimelineEntry>
                <PortfolioTimelineEntry DateRange="">
                    <PortfolioTimelineEntryHeader Title="Starbucks Automated Schedule Retriever" />
                    <p>Using <span style={{ color: "#00E99F" }}>Node.js</span> and <span style={{ color: "#00E99F" }}>Puppeteer</span>, I wrote a small application to automate a headless <span style={{ color: "#00E99F" }}>Chromium</span> browser. The script automatically navigates to the login portal, enters my account information, then scrapes and returns the relevant data for later viewing.</p>
                </PortfolioTimelineEntry>
                <PortfolioTimelineEntry DateRange="" Image="steam-library-unlock.png">
                    <PortfolioTimelineEntryHeader Title="Steam Games Shared Library Unlocker" />
                    <p>The popular video game portal <span style={{ color: "#00E99F" }}>Steam</span> has a feature which allows a user to share their library with friends; the caveat being that no game in the shared library can be currently in use. By chance, I discovered that when launching the <span style={{ color: "#00E99F" }}>Steam Client</span>, it performs an outbound request just after logging in. The response of the request dictates whether the shared library will remain unlocked.</p>
                    <p>In lieue of more invasive exploit development methods, I wrote a <span style={{ color: "#00E99F" }}>Powershell</span> script completely detached from the <span style={{ color: "#00E99F" }}>Steam Client</span> process.</p>
                    <p>The script utilizes tricky firewall rules that, when enabled within millisecond margins, do not allow the outbound request to resolve. The default behavior of the unresolved request does not block the shared library thus leaving it unlocked for use by both users. </p>
                    <p>Of course, the script has not been distributed and may be patched at any time. Along the way, I implemented these features:</p>
                    <ul>
                        <p>A custom command-line interface complete with command aliasing.</p>
                        <p>Commands to enable and disable the firewall.</p>
                        <p>A command to kill the currently running client and a command to start the client with automatic login.</p>
                        <p>A command to increase/decrease the millisecond timing of firewall toggling.</p>
                        <p>A command to save/load firewall timings from a configuration file.</p>
                        <p>A terminal header displaying script variables states.</p>
                    </ul>
                </PortfolioTimelineEntry>
                <PortfolioTimelineEntry DateRange="">
                    <p>Developed a web-based forum application for a course project using <span style={{ color: "#00E99F" }}>Node.js</span>, <span style={{ color: "#00E99F" }}>Express.js</span>, <span style={{ color: "#00E99F" }}>PUG</span>, and <span style={{ color: "#00E99F" }}>SASS</span> to display and discuss K-12 computer science standards.</p>
                </PortfolioTimelineEntry>
                <PortfolioTimelineEntry DateRange="">
                    <PortfolioTimelineEntryHeader Title="Powershell Based File Backup" />
                    <p>A Powershell based script utilizing <span style={{ color: "#00E99F" }}>robocopy</span> and <span style={{ color: "#00E99F" }}>BurntToast</span> to automatically create backups of specified files and inform the user of data transferred/modified via toast notification.</p>
                </PortfolioTimelineEntry>
                <PortfolioTimelineEntry DateRange="">
                    <PortfolioTimelineEntryHeader Title="Misc. Windows Registry Tweaks" />
                    <p>The Windows operating system does not lend well to change. Simple frustrations led me to begin writing registry tweaks so I might bring some level of order to chaos.</p>
                    <p>Among these tweaks are standalone <span style={{ color: "#00E99F" }}>.reg</span> files whose names reflect their application.</p>
                    <ul>
                        <p><span style={{ color: "#00E99F" }}>copy-as-path.reg</span>: adds a context menu item to all files allowing their path to be directly copied.</p>
                        <p><span style={{ color: "#00E99F" }}>desktop-background.reg</span>: modifies the Desktop background context menu with custom icons and helpful tools.</p>
                        <p><span style={{ color: "#00E99F" }}>directory-background.reg</span>: modifies all directory's Explorer background context menu with custom icons and helpful tools.</p>
                        <p><span style={{ color: "#00E99F" }}>modify-explorer.reg</span>: removes bloated listings in Explorer such as OneDrive and QuickLinks.</p>
                        <p><span style={{ color: "#00E99F" }}>open-with-notepad++.reg</span>: context menu item to open any file in Notepad++</p>
                        <p><span style={{ color: "#00E99F" }}>replicate-folder-view-settings.red</span>: grants ability to apply current Explorer folder view settings globally.</p>
                        <p><span style={{ color: "#00E99F" }}>transparent-shortcut-overlay.reg</span>: removes the ugly shortcut icon overlaying all shortcuts.</p>
                    </ul>
                </PortfolioTimelineEntry>
                <PortfolioTimelineEntryPeriod EndCap /> {/* DUPLICATE: Hacky, reavaluate... in reference to the EndCap switch in 'portfolioTimelineEntryPeriodIndicatorStyle' */}
            </div>
        );
    }
}

function PortfolioTimelineEntry(props) {
    if (props.Image) {
        return (
            <div className="entry">
                <PortfolioTimelineEntryPeriod Text={props.DateRange} />

                <div className="entry__body">
                    {props.children}
                </div>
                <img src={Images[props.Image].default} className="entry__image" />

                <span className="entry__seperator"></span>
            </div>
        );
    }

    return (
        <div className="entry">
            <PortfolioTimelineEntryPeriod Text={props.DateRange} />
            {props.children}
            <span className="entry__seperator"></span>
        </div>
    );
}

class PortfolioTimelineEntryPeriod extends React.Component {
    render() {
        return (
            <div className="entry__period">
                <p className="entry__range">{this.props.Text}</p>
                <span className="entry__indicator"></span>
            </div>
        );
    }
}

class PortfolioTimelineEntryHeader extends React.Component {
    render() {
        return (
            <div className="entry__header">
                <h1 class="entry__title">{this.props.Title}</h1>
                <h2 class="entry__subtitle">{this.props.Subtitle}</h2>
            </div>
        );
    }
}

export default PortfolioTimeline
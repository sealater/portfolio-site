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
                    <PortfolioTimelineEntryHeader Title="Personal Portfolio Website" />
                    <p>The purpose of this project was to familiarize myself with React.js and create a space to showcase my work.</p>
                    <PortfolioTimelineEntryFooter>
                        <p className="entry__tool entry__tool--sky-blue">React.js</p>
                        <p className="entry__tool entry__tool--green">Node.js</p>
                        <p className="entry__tool entry__tool--vibrant-pink">SASS</p>
                        <a className="entry__link entry__link--sky-blue" href="https://google.com">View on GitHub</a>
                    </PortfolioTimelineEntryFooter>
                </PortfolioTimelineEntry>
                <PortfolioTimelineEntry DateRange="" Image="taskmanager560-dashboard.png">
                    <PortfolioTimelineEntryHeader Title="Razor Pages Task Manager" Subtitle="A course project developed with ASP.NET Core Razor Pages in a team of three." />
                    <p>My team and I designed and developed a task-management web application tailored both for individual and group needs. The principal goal of the assigned project was exposure to Microsoft web application development tools. Our completed web application offered:</p>
                    <ul>
                        <li>A <span style={{ color: "#00E99F" }}>SQL</span> backed user registration and login system for data storage and retrieval.</li>
                        <li>A personal account dashboard with the ability to add, complete, or remove individual tasks.</li>
                        <li>A group management system featuring group creation, subscription, and task management.</li>
                    </ul>
                    <p>Group owner’s may assign tasks to the individual or broadly assign a task to all members within a group. Once a group is created, members can be added by their unique username via the <span style={{ fontWeight: "bold" }}>+ Add Member</span> button. While I worked on all portions of the project, the database design, procedures, <span style={{ fontWeight: "bold", color: "#00E99F" }}>C#</span> interface, and <span style={{ fontWeight: "bold", color: "#00E99F" }}>SQL</span> code was completed by myself exclusively.</p>
                </PortfolioTimelineEntry>
                <PortfolioTimelineEntry DateRange="" Image="cowboy-cafe.png">
                    <PortfolioTimelineEntryHeader Title="Cowboy Cafe POS System" Subtitle="A course project developed using Microsoft WPF framework." />
                    <p>Using Windows Presentation Foundation, I developed a point-of-sale system consisting of a desktop application to facilitate mock-transactions and a web application for public display of menu items.</p>
                    <p>Highly stressed programming principles such as:</p>
                    <ul>
                        <li>Encapsulation</li>
                        <li>The Single Responsiblity Principle</li>
                        <li>Composition, inheritance, and delegation</li>
                        <li>Abstraction</li>
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
                        <li>A custom command-line interface complete with command aliasing.</li>
                        <li>Commands to enable and disable the firewall.</li>
                        <li>A command to kill the currently running client and a command to start the client with automatic login.</li>
                        <li>A command to increase/decrease the millisecond timing of firewall toggling.</li>
                        <li>A command to save/load firewall timings from a configuration file.</li>
                        <li>A terminal header displaying script variables states.</li>
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
                        <li><span style={{ color: "#00E99F" }}>copy-as-path.reg</span>: adds a context menu item to all files allowing their path to be directly copied.</li>
                        <li><span style={{ color: "#00E99F" }}>desktop-background.reg</span>: modifies the Desktop background context menu with custom icons and helpful tools.</li>
                        <li><span style={{ color: "#00E99F" }}>directory-background.reg</span>: modifies all directory's Explorer background context menu with custom icons and helpful tools.</li>
                        <li><span style={{ color: "#00E99F" }}>modify-explorer.reg</span>: removes bloated listings in Explorer such as OneDrive and QuickLinks.</li>
                        <li><span style={{ color: "#00E99F" }}>open-with-notepad++.reg</span>: context menu item to open any file in Notepad++</li>
                        <li><span style={{ color: "#00E99F" }}>replicate-folder-view-settings.red</span>: grants ability to apply current Explorer folder view settings globally.</li>
                        <li><span style={{ color: "#00E99F" }}>transparent-shortcut-overlay.reg</span>: removes the ugly shortcut icon overlaying all shortcuts.</li>
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

                <div className="entry__body entry__body--img">
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

            <div className="entry__body">
                {props.children}
            </div>
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
                <h3 class="entry__subtitle">{this.props.Subtitle}</h3>
            </div>
        );
    }
}

class PortfolioTimelineEntryFooter extends React.Component {
    render() {
        return (
            <div className="entry__footer">
                <h3>Tools Used</h3>
                {this.props.children}
            </div>
        );
    }
}

export default PortfolioTimeline
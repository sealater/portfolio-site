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
                    <PortfolioTimelineEntryHeader Title="Personal Portfolio Website" Subtitle="The purpose of this project is to familiarize myself with React.js and provide a space to showcase my past and future work." />
                    <h2>Design</h2>
                    <p className="has-header">This site was designed and prototyped in Draw.io and Adobe XD. Each element has been styled independent of prebuilt frameworks such as Bootstrap. My intention behind designing the site by hand is to further my studies in abstract concepts like UI/UX principles alongside the concrete skills needed to implement them. Seeking conceptual understanding, I studied popular opinions on card design, form structure, breadcrumbs, loaders, modals, pagination, navigation, and many more modern design elements. Further, I studied color design, typography, design values, calls to action, and the importance of simplicity.</p>
                    <h2>Implementation</h2>
                    <p className="has-header">In the spirit of exposing myself to new challenges, I chose to implement this site using the React.js framework. The sidebar and content area are split into two seperate components. Each portfolio entry within the content section is a React.js component comprised of a header, body, image, footer, and timeline indicator. Each HTML element has been styled using BEM compliant class names. The styling itself is written in SASS and compiled into CSS. Nested components within a portfolio entry are dynamic and styled according to properties supplied to the React.js components.</p>
                    <p>SASS partials, such as _global.scss and _page.scss, are imported. The partials provide global variables referenced by individual component stylesheets. This removes duplicate definitions and allows customization of variables, such as the primary color, to be modified easily and only once.</p>
                    <p>This project has proven invaluable in developing a familiarity with industry popular frameworks and libraries like React.js and SASS.</p>
                    <PortfolioTimelineEntryFooter>
                        <p className="entry__tool entry__tool--sky-blue">React.js</p>
                        <p className="entry__tool entry__tool--green">Node.js</p>
                        <p className="entry__tool entry__tool--vibrant-pink">SASS</p>
                        <a className="entry__link entry__link--sky-blue" href="https://github.com/sealater/portfolio-site">View on GitHub</a>
                    </PortfolioTimelineEntryFooter>
                </PortfolioTimelineEntry>
                <PortfolioTimelineEntry DateRange="" Image="taskmanager-560-groups.png">
                    <PortfolioTimelineEntryHeader Title="Razor Pages Task Manager" Subtitle="A course project developed with ASP.NET Core Razor Pages." />
                    <h2>Design</h2>
                    <p className="has-header">In a team of three, I worked alongside two peers to design a task management web application tailored to the needs of both an individual and a group. The project was split into three domains of responsibility: structure and visual design, functionality and implementation, and database development and connection. I was personally responsible for:</p>
                    <ul>
                        <li>Developing a suitable SQL database design.</li>
                        <li>Implementing the database and the procedures needed for interacting with it.</li>
                        <li>Providing an interface in C# to easily communicate and interact the with the database.</li>
                    </ul>
                    <h2>Implementation</h2>
                    <p className="has-header">The outcome for the project aimed at exposing myself and my peers to web application development within the Microsoft framework. Our completed application offered:</p>
                    <ul>
                        <li>A user based login system with data storage and data retrieval all backed by a remote SQL database.</li>
                        <li>A user account dashboard with the ability to add, complete, and remove personally created tasks.</li>
                        <li>A group management system allowing group creation, member subscription, and task management (both for the group as a whole and for each individual group member within it.)</li>
                    </ul>
                    <p>Group owner's may assign tasks to an individual or broadly assign a task to the group. A member may be added via the Add Member button followed by providing a user's unique username. Collaboration was imperative for the success of this project. While collaborating, our roles often bleed into one anothers. I found this to be very important in finalizing a cohesive web application under the time constraints for the project.</p>
                    <PortfolioTimelineEntryFooter>
                        <p className="entry__tool entry__tool--light-orange">Razor Pages</p>
                        <p className="entry__tool entry__tool--purple">Bootstrap</p>
                        <p className="entry__tool entry__tool--sky-blue">MSSQL</p>
                        <a className="entry__link entry__link--sky-blue" href="https://github.com/sealater/560-task-manager">View on GitHub</a>
                    </PortfolioTimelineEntryFooter>
                </PortfolioTimelineEntry>
                <PortfolioTimelineEntry DateRange="" Image="cowboy-cafe.png">
                    <PortfolioTimelineEntryHeader Title="Cowboy Cafe POS System" Subtitle="A course project developed using Microsoft WPF framework." />
                    <h2>Design</h2>
                    <p className="has-header">Built using Windows Presentation Foundation, this project provides a point-of-sale desktop application for a mock restaurant dubbed Cowboy Cafe. In addition, a Razor Pages website is included to demonstrate the benefits of a Model-View-Controller approach to software development.</p>
                    <p>The projects design phase stressed key Object Oriented Programming concepts such as:</p>
                    <ul>
                        <li>Abstraction</li>
                        <li>Encapsulation</li>
                        <li>Inheritance</li>
                        <li>Polymorphism</li>
                    </ul>
                    <h2>Implementation</h2>
                    <p className="has-header">An interface defines "contractual requirements" for each order item while abstract classes for entrees, sides, and drinks provide inheritable base code alongside variables and methods to be overidden. Views, such as the order summary list, use data binding and listen for property changes to update their contents. As each entree, side, and drink implement the order item interface, lists can very easily define a consistent way to display a collection of order item's contents. Further, because property changes are written into an abstract class, the functionality can then simply be inherited. The benefits of inheritance and abstraction became clear while developing this project.</p>
                    <p>Lastly, the Razor Pages website pulls from the same "Model" within the Model-View-Controller architecture. This means any change to the models menu items will propagate on both the point-of-sale program and the website.</p>
                    <PortfolioTimelineEntryFooter>
                        <p className="entry__tool entry__tool--light-orange">Razor Pages</p>
                        <p className="entry__tool entry__tool--purple">Bootstrap</p>
                        <p className="entry__tool entry__tool--sky-blue">WPF</p>
                        <a className="entry__link entry__link--sky-blue" href="https://github.com/sealater/cowboy-cafe-pos">View on GitHub</a>
                    </PortfolioTimelineEntryFooter>
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

                <div className="entry--inner">
                    <div className="entry__body entry__body--img">
                        {props.children}
                    </div>

                    <PortfolioTimelineSlideshow ImageSrc={Images[props.Image].default} />
                    {/*<img src={Images[props.Image].default} className="entry__image" />*/}
                </div>

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

class PortfolioTimelineSlideshow extends React.Component {
    render() {
        return (
            <div className="slideshow">
                {/*<div className="slideshow__gallery"></div>*/}
                <div className="slideshow__image--outer">
                    <img src={this.props.ImageSrc} className="slideshow__image" />
                </div>
                {/*<div className="slideshow__gallery"></div>*/}
            </div>
        );
    }
}

export default PortfolioTimeline
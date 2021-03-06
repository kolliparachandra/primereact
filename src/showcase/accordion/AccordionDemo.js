import React, {Component} from 'react';
import {Link} from 'react-router';
import {Accordion,AccordionTab} from '../../components/accordion/Accordion';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../../components/codehighlight/CodeHighlight';

export class AccordionDemo extends Component {
        
    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Accordion</h1>
                        <p>Accordion groups a collection of contents in tabs.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Default</h3>
                    <Accordion>
                        <AccordionTab header="Godfather I">
                            The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughters wedding.
                            His beloved son Michael has just come home from the war, but does not intend to become part of his fathers business.
                            Through Michaels life the nature of the family business becomes clear. The business of the family is just like the head
                            of the family, kind and benevolent to those who give respect,
                            but given to ruthless violence whenever anything stands against the good of the family.
                        </AccordionTab>
                        <AccordionTab header="Godfather II">
                            Francis Ford Coppolas legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young
                            Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfathers depiction of the dark side of
                            the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family.
                            Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand
                            Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.
                        </AccordionTab>
                        <AccordionTab header="Godfather III">
                            After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this
                            third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone,
                            now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.
                        </AccordionTab>
                    </Accordion>

                    <h3>Multiple</h3>
                    <Accordion multiple={true}>
                        <AccordionTab header="Godfather I">
                            The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughters wedding.
                            His beloved son Michael has just come home from the war, but does not intend to become part of his fathers business.
                            Through Michaels life the nature of the family business becomes clear. The business of the family is just like the head
                            of the family, kind and benevolent to those who give respect,
                            but given to ruthless violence whenever anything stands against the good of the family.
                        </AccordionTab>
                        <AccordionTab header="Godfather II">
                            Francis Ford Coppolas legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young
                            Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfathers depiction of the dark side of
                            the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family.
                            Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand
                            Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.
                        </AccordionTab>
                        <AccordionTab header="Godfather III">
                            After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this
                            third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone,
                            now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.
                        </AccordionTab>
                    </Accordion>
                </div>
                <AccordionDoc></AccordionDoc>
            </div>
        )
    }
}

export class AccordionDoc extends Component {
    
    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {Accordion,AccordionTab} from 'primereact/components/accordion/Accordion';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>Accordion element consists of one or more p-accordionTab elements. Title of the tab is defined using header attribute.</p>
<CodeHighlight className="language-markup">
{`
<Accordion>
    <AccordionTab header="Godfather I">
        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughters wedding.
        His beloved son Michael has just come home from the war, but does not intend to become part of his fathers business.
        Through Michaels life the nature of the family business becomes clear. The business of the family is just like the head
        of the family, kind and benevolent to those who give respect,
        but given to ruthless violence whenever anything stands against the good of the family.
    </AccordionTab>
    <AccordionTab header="Godfather II">
        Francis Ford Coppolas legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young
        Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfathers depiction of the dark side of
        the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family.
        Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand
        Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.
    </AccordionTab>
    <AccordionTab header="Godfather III">
        After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this
        third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone,
        now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.
    </AccordionTab>
</Accordion>

`}
</CodeHighlight>

             <h3>Multiple</h3>
            <p>By default only one tab at a time can be active, enabling multiple property changes this behavior to allow multiple tabs be active at the same time.</p>
<CodeHighlight className="language-markup">
{`
<Accordion multiple={true}>
    <AccordionTab header="Godfather I">
        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughters wedding.
        His beloved son Michael has just come home from the war, but does not intend to become part of his fathers business.
        Through Michaels life the nature of the family business becomes clear. The business of the family is just like the head
        of the family, kind and benevolent to those who give respect,
        but given to ruthless violence whenever anything stands against the good of the family.
    </AccordionTab>
    <AccordionTab header="Godfather II">
        Francis Ford Coppolas legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young
        Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfathers depiction of the dark side of
        the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family.
        Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand
        Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.
    </AccordionTab>
    <AccordionTab header="Godfather III">
        After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this
        third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone,
        now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.
    </AccordionTab>
</Accordion>

`}
</CodeHighlight>

            <h3>Attributes</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>multiple</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When enabled, multiple tabs can be activated at the same time.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the element.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the element.</td>
                        </tr>
                        <tr>
                            <td>activeIndex</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Active Index of the element.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Events</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>onTabClose</td>
                            <td>event.originalEvent: Click object  <br/>
                                event.index: Index of the tab 
                            </td>
                            <td>Callback to invoke when an active tab is collapsed by clicking on the header.</td>
                        </tr>
                        <tr>
                            <td>onTabOpen</td>
                            <td>event.originalEvent: Click object  <br/>
                                event.index: Index of the tab 
                            </td>
                            <td>Callback to invoke when a tab gets expanded.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Styling</h3>
            <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Element</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ui-accordion</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>ui-accordion-header</td>
                            <td>Header of a tab.</td>
                        </tr>
                        <tr>
                            <td>ui-accordion-content</td>
                            <td>Container of a tab.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>
            
            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/accordion" className="btn-viewsource" target="_blank">
                    <i className="fa fa-github"></i>
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="language-javascript">
{`
export class AccordionDemo extends Component {
        
    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Accordion</h1>
                        <p>Accordion groups a collection of contents in tabs.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Default</h3>
                    <Accordion>
                        <AccordionTab header="Godfather I">
                            The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughters wedding.
                            His beloved son Michael has just come home from the war, but does not intend to become part of his fathers business.
                            Through Michaels life the nature of the family business becomes clear. The business of the family is just like the head
                            of the family, kind and benevolent to those who give respect,
                            but given to ruthless violence whenever anything stands against the good of the family.
                        </AccordionTab>
                        <AccordionTab header="Godfather II">
                            Francis Ford Coppolas legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young
                            Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfathers depiction of the dark side of
                            the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family.
                            Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand
                            Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.
                        </AccordionTab>
                        <AccordionTab header="Godfather III">
                            After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this
                            third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone,
                            now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.
                        </AccordionTab>
                    </Accordion>

                    <h3>Multiple</h3>
                    <Accordion multiple={true}>
                        <AccordionTab header="Godfather I">
                            The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughters wedding.
                            His beloved son Michael has just come home from the war, but does not intend to become part of his fathers business.
                            Through Michaels life the nature of the family business becomes clear. The business of the family is just like the head
                            of the family, kind and benevolent to those who give respect,
                            but given to ruthless violence whenever anything stands against the good of the family.
                        </AccordionTab>
                        <AccordionTab header="Godfather II">
                            Francis Ford Coppolas legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young
                            Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfathers depiction of the dark side of
                            the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family.
                            Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand
                            Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.
                        </AccordionTab>
                        <AccordionTab header="Godfather III">
                            After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this
                            third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone,
                            now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.
                        </AccordionTab>
                    </Accordion>
                </div>
                <AccordionDoc></AccordionDoc>
            </div>
        )
    }
}

`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}
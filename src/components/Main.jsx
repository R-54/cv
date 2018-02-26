import React, { Component } from 'react';

import PersonalInformation from './PersonalInformation';
import Description from './Description';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'I V A N\nR O D R I G U E Z',
      personalInfo: [
        {
          title: 'C o n t a c t',
          content: [
            { data: 'Name: Ivan Rodriguez Soria' }, 
            { data: 'Birth date: December 14, 1992' }, 
            { data: 'Github: https://github.com/R-54' }, 
            { data: 'Mail: vendeta.ivan@gmail.com' }
          ]
        },
        {
          title: 'S k i l l s',
          content: [
            { data: 'Javascript' }, 
            { data: 'HTML' }, 
            { data: 'CSS' },
            { data: 'Java' },
            { data: 'Python' },
            { data: 'C#' },
            { data: 'React' },
            { data: 'JQuery' },
            { data: 'GIT' },
            { data: 'Linux' },
            { data: 'Windows' },
            { data: 'Agile' },
            { data: 'Scrum' },
            { data: 'Kanban' },
            { data: 'Jira' },
            { data: 'Zeplin' },
            { data: 'UML' },
            { data: 'Unity 3D' },
          ]
        },
        {
          title: 'H o b b i e s',
          content: [
            { data: 'Keep learning' }, 
            { data: 'Chess player' }, 
            { data: 'Sports fan' },
            { data: 'Videogames' }
          ]
        }
      ],
      description: [
        {
          title: 'P r o f e s s i o n a l \u00a0 o v e r v i e w',
          content: [
            { data: `Ivan is a passionate programmer.\nHe has more than ${(new Date()).getFullYear() - 2014} years of experience working with Javascript, HTML, CSS, GIT, Windows and Linux. He also has experience with the ReactJS, ReactNative, JQuery and Meteor frameworks and with the SCRUM and Kanban methodology.\nHe has great work experience; he worked at TATA Consultancy Services as a Javascript / Salesforce Developer, lead a React / ReactNative team in 15 Rooftop and build a web page and web app for Citibanamex at Globant with React / Angular 1.` }, 
          ]
        },
        {
          title: 'E d u c a t i o n',
          content: [
            { data: 'High School\nEscuela Nacional Preparatoria 6 / 2009 – 2013' },
            { data: 'Bachelor Degree in Computer Science\nUniversidad Nacional Autonoma de Mexico / 2015 - Current' }, 
          ]
        },
        {
          title: 'C o u r s e s',
          content: [
            { data: 'Linux Server Administration Course\nUniversidad Nacional Autónoma de México / 30 hrs' },
          ]
        },
        {
          title: 'W o r k \u00a0 E x p e r i e n c e',
          content: [
            { data: 'Globant\nJavascript / ReactJS / Angular 1  Developer / April 2017 - Current' },
            { data: '15 Rooftop\nJavascript /ReactJS / ReactNative Developer / February 2017 - April 2017' },
            { data: 'TATA Consultancy Services\nJavascript / Salesforce Developer / October 2016 - March 2017' },
            { data: 'Solar System Simulator\nUnity 3D Videogame / August 2015 - September 2015' },
            { data: 'Aeromexico Aerovias S.A de C.V\nAssistant / April 2015 – July 2015' },
          ]
        },
      ],
    };
  };

  render() {
    return (
      <div className="main">
        <PersonalInformation sections={this.state.personalInfo} />
        <Description title={this.state.title} sections={this.state.description}/>
      </div>
    );
  }
}

export default Main;

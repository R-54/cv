import React from 'react';

const PersonalInformation = (props) => (
  <div className="personal-informaction">
    <Sections sections={props.sections} />
  </div>
);

const Sections = (props) => (
  <div className='sections'>
    {
      props.sections.map((section, index) => (
        <div className='section' key={index}>
          <div className='section__title'>
            {section.title}
          </div>
          <SectionContent content={section.content} />
        </div>
      ))
    }
  </div>
);

const SectionContent = (props) => (
  <div className='section-content'>
    {
      props.content.map((element, index) => (
        <div className='section-content__list' key={index}>
          {element.data}
        </div>
      ))
    }
  </div>
);

export default PersonalInformation;

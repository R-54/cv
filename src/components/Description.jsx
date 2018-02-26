import React, { Component } from 'react';

const Description = (props) => (
  <div className="description">
    <div className='description__title'>
      {props.title}
    </div>
    <Sections sections={props.sections} />
  </div>
);

const Sections = (props) => (
  <div className='sections'>
    {
      props.sections.map((section, index) => (
        <div className='section' key={index}>
          <div className='section__title section__title--white'>
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
        <div className='section-content__list section-content__list--white' key={index}>
          {element.data}
        </div>
      ))
    }
  </div>
);

export default Description;

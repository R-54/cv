import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import App from './../App';
import Main from './../components/Main';
import PersonalInformation from './../components/PersonalInformation';
import Description from './../components/Description';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe(<App />, () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a <PersonalInformation /> component', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find(PersonalInformation)).toHaveLength(1);
  });

  it('renders a <Description /> component', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find(Description)).toHaveLength(1);
  });

  it('renders 3 <Sections /> in <PersonalInformation /> component', () => {
    const sections = [
      {title: 'title 1', content: [{ data: 'data 1' }]},
      {title: 'title 2', content: [{ data: 'data 1' }]},
      {title: 'title 3', content: [{ data: 'data 1' }]}
    ];
    const wrapper = mount(<PersonalInformation sections={sections} />);
    expect(wrapper.find('SectionContent')).toHaveLength(3);
  });

  it('renders 3 <Sections /> in <Description /> component', () => {
    const sections = [
      {title: 'title 1', content: [{ data: 'data 1' }]},
      {title: 'title 2', content: [{ data: 'data 1' }]},
      {title: 'title 3', content: [{ data: 'data 1' }]}
    ];
    const wrapper = mount(<Description sections={sections} />);
    expect(wrapper.find('SectionContent')).toHaveLength(3);
  });

});

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

  it('renders a <Main /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Main />)).toBe(true);
  });

  it('renders an <PersonalInformation /> component', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.contains(<PersonalInformation />)).toBe(true);
  });

  it('renders a <Description /> component', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.contains(<Description />)).toBe(true);
  });

});

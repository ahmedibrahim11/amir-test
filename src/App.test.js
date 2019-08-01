import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme'
import App from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './modules/shared/header';


Enzyme.configure({ adapter: new Adapter() })

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  })
  it('renders without crashing', () => {
    expect(wrapper.find("div").exists()).toEqual(true)
  });

})

import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import React from "react";
import Header from './Header';

configure({adapter:new Adapter()});

describe("Header", ()=>{
  let wrapper;

  beforeAll(() => {
    wrapper = mount(<Header />)
  });

  it('should show Header Line component', ()=>{
    expect(wrapper).toBeDefined();
  });

});

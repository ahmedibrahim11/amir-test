import React from 'react';
import { shallow } from 'enzyme';
import UserDetailsComponent from './user-details';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() })

describe("UserDetailsComponent", () => {
    let wrapper;
    const mockUser = {
        avatar_url: "test",
        name: "test",
        email: "test",
        created_at: "test"
    }

    beforeEach(() => {
        wrapper = shallow(<UserDetailsComponent currentUser={mockUser} />)
    })
    it("renders img", () => {
        expect(wrapper.find("img").exists()).toEqual(true);
    })
    it("renders name", () => {
        expect(wrapper.find("#name").text()).toEqual("Name:test")
    })
})

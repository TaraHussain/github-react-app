import App from '../App.js';
import { shallow } from 'enzyme';


describe('App', () => {
  let component;

  beforeEach(() => {
     component = shallow(<App />);
  });

  test('it renders', () => {
     expect(component).toExist
  });
  
  test('Check the h1 text content', () => {
   expect(component.find("h1").text()).toBe("Repo Search");
  });

});

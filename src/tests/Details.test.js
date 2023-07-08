import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Details from '../components/pages/Details';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';

describe('Details page', () => {
  test('Render Details Page Component', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <Details />
          </Provider>
          ,
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

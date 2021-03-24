import { render, screen } from '@testing-library/react';
import App from './App';
import WebSpaceApp from './App';
import * as ReactDOM from "react-dom";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WebSpaceApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
import React from 'react';
import { render } from '@testing-library/react';

import Menu from './Menu';

describe('Menu', () => {
  it('should render properly', () => {
    const { container } = render(<Menu />);

    expect(container).toMatchSnapshot();
  });
});

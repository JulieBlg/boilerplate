import React from 'react';
import { render } from '@testing-library/react';

import TopBar from './TopBar';

describe('TopBar', () => {
  it('should render properly', () => {
    const { container } = render(<TopBar />);

    expect(container).toMatchSnapshot();
  });
});

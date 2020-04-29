import React from 'react';
import { render } from '@testing-library/react';

import ContentPage from './ContentPage';

describe('ContentPage', () => {
  it('should render properly', () => {
    const { container } = render(<ContentPage />);

    expect(container).toMatchSnapshot();
  });
});

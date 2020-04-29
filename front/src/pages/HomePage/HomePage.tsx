import React from 'react';

import NoMenuLayout from '../../layouts/NoMenuLayout';

const HomePage = () => {
  return (
    <NoMenuLayout>
      <p>HomePage</p>
      <a href="/content">Content</a>
    </NoMenuLayout>
  );
};

export default HomePage;

import { expect, it } from '@jest/globals';
import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

it('render correctly', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});

/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const Databases = lazyLoad(
  () => import('./index'),
  module => module.Databases,
);

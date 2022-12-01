/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const OpenIssues = lazyLoad(
  () => import('./index'),
  module => module.OpenIssues,
);

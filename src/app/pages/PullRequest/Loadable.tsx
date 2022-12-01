/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const PullRequest = lazyLoad(
  () => import('./index'),
  module => module.PullRequest,
);

import { NotFoundPage } from 'app/components/NotFoundPage/Loadable';
import { Databases } from 'app/pages/Databases/Loadable';
import { Discussions } from 'app/pages/Discussions/Loadable';
import { HomePage } from 'app/pages/HomePage/Loadable';
import { Login } from 'app/pages/Login/Loadable';
import { OpenIssues } from 'app/pages/OpenIssues/Loadable';
import { PullRequest } from 'app/pages/PullRequest/Loadable';

export const publicRouters = [
  { path: '/', component: HomePage, layout: true },
  { path: '/request', component: PullRequest, layout: true },
  { path: '/issues', component: OpenIssues, layout: true },
  { path: '/discussions', component: Discussions, layout: true },
  { path: '/databases', component: Databases, layout: true },
  { path: '/login', component: Login },
  { path: '*', component: NotFoundPage },
];

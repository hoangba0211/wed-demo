import { NotFoundPage } from 'app/components/NotFoundPage';
import { HomePage } from 'app/pages/HomePage';
import { Login } from 'app/pages/Login';

export const publicRouters = [
  { path: '/', component: HomePage, layout: true },
  { path: '/login', component: Login },
  { path: '*', component: NotFoundPage },
];

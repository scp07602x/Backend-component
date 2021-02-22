import defaultProgram from './default';

if (localStorage.token) {
  defaultProgram.getRouteAndSidebar();
}
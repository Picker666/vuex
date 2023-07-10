import HomePage from './components/HomePage';
import HelloWorld from './components/HelloWorld';
import FirstPage from './components/FirstPage';


export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '/helloWorld',
    name: 'helloWorld',
    component: HelloWorld
  },
  {
    path: '/firstPage',
    name: 'firstPage',
    component: FirstPage
  }
];

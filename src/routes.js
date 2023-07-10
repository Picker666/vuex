import HomePage from './components/HomePage';
import HelloWorld from './components/HelloWorld';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';

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
  },
  {
    path: '/secondPage',
    name: 'secondPage',
    component: SecondPage
  },
  {
    path: '/thirdPage',
    name: 'thirdPage',
    component: ThirdPage
  }
];

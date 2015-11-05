/**
 * Created by githop on 10/28/15.
 */
import angular from 'angular';
import 'angular-ui-router';
import 'angular-material';
import shell from './shell.html!text';
import nav from './nav.html!text';
import body from './body.html!text';
import landing from './landing.tmpl.html!text';
import styles from './style.css!css';
import NavCtrl from './nav.controller';
import ThemeModule from './md-theme.module';

let layoutModule = angular.module('scrumPoker.layout', [
  'ui.router',
  ThemeModule.name
])
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('poker', {
        abstract: true,
        views: {
          '@': {
            template: shell
          },
          'nav@poker': {
            template: nav,
            controller: 'NavCtrl as Nav'
          },
          'body@poker': {
            template: body
          }
        }
      })
      .state('poker.landing', {
        url: '/',
        template: landing
      });
    $urlRouterProvider.otherwise('/');
  })
  .controller('NavCtrl', NavCtrl);

export default layoutModule;
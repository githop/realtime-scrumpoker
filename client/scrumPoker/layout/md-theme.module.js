/**
 * Created by githop on 11/2/15.
 */

import angular from 'angular';

let ThemeModule = angular.module('scrumPoker.layout.theme', [
  'ngMaterial'
])
  .config(($mdThemingProvider) => {
    var customPrimary = {
      '50': '#a8bac3',
      '100': '#99aeb8',
      '200': '#8aa2ae',
      '300': '#7a96a3',
      '400': '#6b8a99',
      '500': '#607D8B',
      '600': '#566f7c',
      '700': '#4b626d',
      '800': '#41545e',
      '900': '#36474f',
      'A100': '#b7c6cd',
      'A200': '#c6d2d8',
      'A400': '#d5dee2',
      'A700': '#2c3940'
    };
    $mdThemingProvider
      .definePalette('customPrimary',
      customPrimary);

    var customAccent = {
      '50': '#a3d7a5',
      '100': '#92cf94',
      '200': '#80c883',
      '300': '#6ec071',
      '400': '#5cb860',
      '500': '#4CAF50',
      '600': '#449d48',
      '700': '#3d8b40',
      '800': '#357a38',
      '900': '#2d682f',
      'A100': '#b5dfb7',
      'A200': '#c7e7c8',
      'A400': '#d9eeda',
      'A700': '#255627'
    };
    $mdThemingProvider
      .definePalette('customAccent',
      customAccent);

    var customWarn = {
      '50': '#ffc1c1',
      '100': '#ffa8a8',
      '200': '#ff8e8e',
      '300': '#ff7575',
      '400': '#ff5b5b',
      '500': '#FF4242',
      '600': '#ff2828',
      '700': '#ff0f0f',
      '800': '#f40000',
      '900': '#db0000',
      'A100': '#ffdbdb',
      'A200': '#fff4f4',
      'A400': '#ffffff',
      'A700': '#c10000'
    };
    $mdThemingProvider
      .definePalette('customWarn',
      customWarn);

    var customBackground = {
      '50': '#c3c3bb',
      '100': '#b8b7ad',
      '200': '#acaba0',
      '300': '#a09f92',
      '400': '#949385',
      '500': '#888777',
      '600': '#7a796b',
      '700': '#6d6c5f',
      '800': '#5f5e53',
      '900': '#525147',
      'A100': '#cfcfc9',
      'A200': '#dbdbd6',
      'A400': '#e7e7e4',
      'A700': '#44433c'
    };
    $mdThemingProvider
      .definePalette('customBackground',
      customBackground);

    $mdThemingProvider.theme('scrumPoker')
      .primaryPalette('customPrimary')
      .accentPalette('customAccent')
      .warnPalette('customWarn');
      //.backgroundPalette('customBackground');

    $mdThemingProvider.setDefaultTheme('scrumPoker');

  });

export default ThemeModule;
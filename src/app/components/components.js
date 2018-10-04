import angular from 'angular';

import Card from './card/card.component';

const Components = angular
    .module('app.components', [
    ])
    .component('card', Card);

export default Components;
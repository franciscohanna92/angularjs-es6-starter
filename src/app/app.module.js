import angular from 'angular';
import appComponent from './app.component';
import Components from './components/components';
import './app.component.scss'

angular
    .module('app', [
        Components.name
    ])
    .component('app', appComponent);
'use strict';
import { remote } from 'electron';
import * as riot from 'riot';
import normalizeUrl from 'normalize-url';

// RIOT tag imports
import './js/example.js';

riot.mount('example');
console.log('Hello, World!');

console.log(normalizeUrl('octograde.com'));

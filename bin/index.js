#!/usr/bin/env node

import 'v8-compile-cache'

import './init.js';
import './create.js';
import { program } from './program.js';

program.parse(process.argv);
#!/usr/bin/env node

import { program } from './program.js';

program.command('init').action(() => {
  console.log('init');
});

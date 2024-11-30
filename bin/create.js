#!/usr/bin/env node

import { program } from './program.js';

program.command('create').action(() => {
  console.log('create');
});

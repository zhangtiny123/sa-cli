#!/usr/bin/env node

import { clone } from 'isomorphic-git';
import { program } from './program.js';
import * as fs from 'fs'
import http from "isomorphic-git/http/node/index.cjs";
const TEMPLATE_REPO = 'https://github.com/symbo-ls/starter-kit.git';

const init = async (targetDir) => {
  console.log('Cloning the template repository...');

  try {
    await clone({
      fs,
      http,
      dir: targetDir || '.',
      corsProxy: 'https://cors.isomorphic-git.org',
      url: TEMPLATE_REPO,
      singleBranch: true,
      depth: 1
    });
    console.log('Repository cloned successfully!');
  } catch (error) {
    console.error('Failed to clone repository:', error.message);
    process.exit(1);
  }
};

program.command('init')
  .option('-d, --dir <targetDir>', 'The directory to initialize the project in')
  .action(async (options) => {
    await init(options.dir);
  });

#!/usr/bin/env node
const { spawn } = require('child_process');

// forward all args to `npx playwright-cli`, and ensure headed mode unless user provided head flags
const rawArgs = process.argv.slice(2);
const hasHeadFlag = rawArgs.some(a => a === '--headed' || a === '--headless' || a.startsWith('--headed') || a.startsWith('--headless'));
const args = rawArgs.slice();
if (!hasHeadFlag) args.push('--headed');

const cmd = 'npx';
const child = spawn(cmd, ['playwright-cli', ...args], { stdio: 'inherit', shell: true });

child.on('exit', code => process.exit(code));
child.on('error', err => {
  console.error('Failed to run playwright-cli:', err);
  process.exit(1);
});

#!/usr/bin/env node

'use strict'

// $ chmod +x cat.js
// $ ./cat.js ../target.txt
require('fs').createReadStream(process.argv[2]).pipe(process.stdout)
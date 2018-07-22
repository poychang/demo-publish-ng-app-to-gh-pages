/**
 * Copyright (c) 2018-present, Poy Chang
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const fs = require('fs');
const shell = require('shelljs');

function checkFileExist(folder, filename) {
    const CWD = process.cwd();

    if (!fs.existsSync(`${CWD}/.gh-pages.json`)) {
        shell.echo(`Error: No .gh-pages.json file found in ${CWD}.`);
        process.exit(1);
    }
}

module.exports = {
    checkFileExist,
};

'use strict';

const { expect } = require('code');

const { it } = exports.lab = require('lab').script();

it('returns true when 1 + 1 = 2', () => {

  expect(1 + 1).to.equal(2);
});

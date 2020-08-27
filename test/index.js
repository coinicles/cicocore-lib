"use strict";

var should = require("chai").should();
var cicocore = require("../");

describe('#versionGuard', function() {
  it('global._cicocore should be defined', function() {
    should.equal(global._cicocore, cicocore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      cicocore.versionGuard('version');
    }).should.throw('More than one instance of cicocore');
  });
});

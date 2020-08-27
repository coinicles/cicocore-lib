'use strict';

var cicocore = module.exports;

// module information
cicocore.version = 'v' + require('./package.json').version;
cicocore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of cicocore-lib found. ' +
      'Please make sure to require cicocore-lib and check that submodules do' +
      ' not also include their own cicocore-lib dependency.';
    throw new Error(message);
  }
};
cicocore.versionGuard(global._cicocore);
global._cicocore = cicocore.version;

// crypto
cicocore.crypto = {};
cicocore.crypto.BN = require('./lib/crypto/bn');
cicocore.crypto.ECDSA = require('./lib/crypto/ecdsa');
cicocore.crypto.Hash = require('./lib/crypto/hash');
cicocore.crypto.Random = require('./lib/crypto/random');
cicocore.crypto.Point = require('./lib/crypto/point');
cicocore.crypto.Signature = require('./lib/crypto/signature');

// encoding
cicocore.encoding = {};
cicocore.encoding.Base58 = require('./lib/encoding/base58');
cicocore.encoding.Base58Check = require('./lib/encoding/base58check');
cicocore.encoding.BufferReader = require('./lib/encoding/bufferreader');
cicocore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
cicocore.encoding.Varint = require('./lib/encoding/varint');

// utilities
cicocore.util = {};
cicocore.util.buffer = require('./lib/util/buffer');
cicocore.util.js = require('./lib/util/js');
cicocore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
cicocore.errors = require('./lib/errors');

// main bitcoin library
cicocore.Address = require('./lib/address');
cicocore.Block = require('./lib/block');
cicocore.MerkleBlock = require('./lib/block/merkleblock');
cicocore.BlockHeader = require('./lib/block/blockheader');
cicocore.HDPrivateKey = require('./lib/hdprivatekey.js');
cicocore.HDPublicKey = require('./lib/hdpublickey.js');
cicocore.Message = require('./lib/message');
cicocore.Networks = require('./lib/networks');
cicocore.Opcode = require('./lib/opcode');
cicocore.PrivateKey = require('./lib/privatekey');
cicocore.PublicKey = require('./lib/publickey');
cicocore.Script = require('./lib/script');
cicocore.Transaction = require('./lib/transaction');
cicocore.URI = require('./lib/uri');
cicocore.Unit = require('./lib/unit');

// dependencies, subject to change
cicocore.deps = {};
cicocore.deps.bnjs = require('bn.js');
cicocore.deps.bs58 = require('bs58');
cicocore.deps.Buffer = Buffer;
cicocore.deps.elliptic = require('elliptic');
cicocore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
cicocore.Transaction.sighash = require('./lib/transaction/sighash');

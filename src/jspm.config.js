SystemJS.config({
  browserConfig: {
    "paths": {
      "npm:": "/jspm_packages/npm/",
      "github:": "/jspm_packages/github/"
    }
  },
  nodeConfig: {
    "paths": {
      "npm:": "jspm_packages/npm/",
      "github:": "jspm_packages/github/"
    }
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.17"
    }
  },
  transpiler: "plugin-babel",
  map: {
    "tag": "systemjs-riot.js",
    "riot-compiler": "npm:riot-compiler@3.1.1",
    "sortablejs": "npm:sortablejs@1.5.0-rc1",
    "i18next": "npm:i18next@4.0.0",
    "i18next-browser-languagedetector": "npm:i18next-browser-languagedetector@1.0.1",
    "i18next-xhr-backend": "npm:i18next-xhr-backend@1.2.1"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "bootstrap": "github:twbs/bootstrap@3.3.7",
    "less": "github:systemjs/plugin-less@0.1.2",
    "sweetalert": "npm:sweetalert@1.1.3",
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "bcrypt-pbkdf": "npm:bcrypt-pbkdf@1.0.1",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.1",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
    "cluster": "npm:jspm-nodelibs-cluster@0.2.0",
    "constants": "npm:jspm-nodelibs-constants@0.2.0",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
    "css": "github:systemjs/plugin-css@0.1.32",
    "dgram": "npm:jspm-nodelibs-dgram@0.2.0",
    "dns": "npm:jspm-nodelibs-dns@0.2.0",
    "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "fsevents": "npm:fsevents@1.0.17",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.1",
    "jodid25519": "npm:jodid25519@1.0.2",
    "jquery": "npm:jquery@3.1.1",
    "jsbn": "npm:jsbn@0.1.0",
    "module": "npm:jspm-nodelibs-module@0.2.0",
    "net": "npm:jspm-nodelibs-net@0.2.0",
    "nprogress": "github:rstacruz/nprogress@0.2.0",
    "os": "npm:jspm-nodelibs-os@0.2.0",
    "path": "npm:jspm-nodelibs-path@0.2.1",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "querystring": "npm:jspm-nodelibs-querystring@0.2.0",
    "riot": "npm:riot@3.1.0",
    "riot-route": "npm:riot-route@3.1.0",
    "semantic-ui": "github:Semantic-Org/Semantic-UI@2.2.7",
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
    "tls": "npm:jspm-nodelibs-tls@0.2.0",
    "tty": "npm:jspm-nodelibs-tty@0.2.0",
    "tweetnacl": "npm:tweetnacl@0.14.5",
    "url": "npm:jspm-nodelibs-url@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.1",
    "vm": "npm:jspm-nodelibs-vm@0.2.0",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.2"
  },
  packages: {
    "npm:ecc-jsbn@0.1.1": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:jodid25519@1.0.2": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.0": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.0": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.6.3"
      }
    },
    "npm:jspm-nodelibs-os@0.2.0": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:jspm-nodelibs-url@0.2.0": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.2",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "base64-js": "npm:base64-js@1.2.0",
        "ieee754": "npm:ieee754@1.1.8",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "create-hash": "npm:create-hash@1.1.2",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "randombytes": "npm:randombytes@2.0.3",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:tar-pack@3.3.0": {
      "map": {
        "readable-stream": "npm:readable-stream@2.1.5",
        "rimraf": "npm:rimraf@2.5.4",
        "tar": "npm:tar@2.2.1",
        "fstream-ignore": "npm:fstream-ignore@1.0.5",
        "fstream": "npm:fstream@1.0.10",
        "debug": "npm:debug@2.2.0",
        "once": "npm:once@1.3.3",
        "uid-number": "npm:uid-number@0.0.6"
      }
    },
    "npm:tar@2.2.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "fstream": "npm:fstream@1.0.10",
        "block-stream": "npm:block-stream@0.0.9"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4",
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "elliptic": "npm:elliptic@6.3.2",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:pbkdf2@3.0.9": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "ripemd160": "npm:ripemd160@1.0.1",
        "cipher-base": "npm:cipher-base@1.0.3",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "has-ansi": "npm:has-ansi@2.0.0",
        "supports-color": "npm:supports-color@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1"
      }
    },
    "npm:rimraf@2.5.4": {
      "map": {
        "glob": "npm:glob@7.1.1"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:rc@1.1.6": {
      "map": {
        "minimist": "npm:minimist@1.2.0",
        "deep-extend": "npm:deep-extend@0.4.1",
        "strip-json-comments": "npm:strip-json-comments@1.0.4",
        "ini": "npm:ini@1.3.4"
      }
    },
    "npm:nopt@3.0.6": {
      "map": {
        "abbrev": "npm:abbrev@1.0.9"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.3.2"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-des": "npm:browserify-des@1.0.0"
      }
    },
    "npm:readable-stream@2.1.5": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.3",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:glob@7.1.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "once": "npm:once@1.4.0",
        "inflight": "npm:inflight@1.0.6",
        "minimatch": "npm:minimatch@3.0.3",
        "fs.realpath": "npm:fs.realpath@1.0.0"
      }
    },
    "npm:are-we-there-yet@1.1.2": {
      "map": {
        "readable-stream": "npm:readable-stream@1.1.14",
        "delegates": "npm:delegates@1.0.0"
      }
    },
    "npm:fstream@1.0.10": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "mkdirp": "npm:mkdirp@0.5.1",
        "rimraf": "npm:rimraf@2.5.4",
        "graceful-fs": "npm:graceful-fs@4.1.11"
      }
    },
    "npm:fstream-ignore@1.0.5": {
      "map": {
        "fstream": "npm:fstream@1.0.10",
        "inherits": "npm:inherits@2.0.3",
        "minimatch": "npm:minimatch@3.0.3"
      }
    },
    "npm:block-stream@0.0.9": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6"
      }
    },
    "npm:har-validator@2.0.6": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "commander": "npm:commander@2.9.0",
        "is-my-json-valid": "npm:is-my-json-valid@2.15.0"
      }
    },
    "npm:form-data@2.1.2": {
      "map": {
        "combined-stream": "npm:combined-stream@1.0.5",
        "mime-types": "npm:mime-types@2.1.14",
        "asynckit": "npm:asynckit@0.4.0"
      }
    },
    "npm:tough-cookie@2.3.2": {
      "map": {
        "punycode": "npm:punycode@1.4.1"
      }
    },
    "npm:elliptic@6.3.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "brorand": "npm:brorand@1.0.6",
        "hash.js": "npm:hash.js@1.0.3"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "asn1.js": "npm:asn1.js@4.9.1"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:once@1.3.3": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:combined-stream@1.0.5": {
      "map": {
        "delayed-stream": "npm:delayed-stream@1.0.0"
      }
    },
    "npm:hawk@3.1.3": {
      "map": {
        "cryptiles": "npm:cryptiles@2.0.5",
        "boom": "npm:boom@2.10.1",
        "sntp": "npm:sntp@1.0.9",
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:http-signature@1.1.1": {
      "map": {
        "jsprim": "npm:jsprim@1.3.1",
        "assert-plus": "npm:assert-plus@0.2.0",
        "sshpk": "npm:sshpk@1.10.2"
      }
    },
    "npm:readable-stream@1.1.14": {
      "map": {
        "isarray": "npm:isarray@0.0.1",
        "stream-browserify": "npm:stream-browserify@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31",
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:inflight@1.0.6": {
      "map": {
        "once": "npm:once@1.4.0",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:string-width@1.0.2": {
      "map": {
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "code-point-at": "npm:code-point-at@1.1.0",
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0"
      }
    },
    "npm:wide-align@1.1.0": {
      "map": {
        "string-width": "npm:string-width@1.0.2"
      }
    },
    "npm:cryptiles@2.0.5": {
      "map": {
        "boom": "npm:boom@2.10.1"
      }
    },
    "npm:boom@2.10.1": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:sntp@1.0.9": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:is-my-json-valid@2.15.0": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "generate-function": "npm:generate-function@2.0.0",
        "jsonpointer": "npm:jsonpointer@4.0.1",
        "generate-object-property": "npm:generate-object-property@1.2.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:stream-browserify@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@1.1.14"
      }
    },
    "npm:minimatch@3.0.3": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.6"
      }
    },
    "npm:pinkie-promise@2.0.1": {
      "map": {
        "pinkie": "npm:pinkie@2.0.4"
      }
    },
    "npm:commander@2.9.0": {
      "map": {
        "graceful-readlink": "npm:graceful-readlink@1.0.1"
      }
    },
    "npm:jsprim@1.3.1": {
      "map": {
        "json-schema": "npm:json-schema@0.2.3",
        "extsprintf": "npm:extsprintf@1.0.2",
        "verror": "npm:verror@1.3.6"
      }
    },
    "npm:verror@1.3.6": {
      "map": {
        "extsprintf": "npm:extsprintf@1.0.2"
      }
    },
    "npm:getpass@0.1.6": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:brace-expansion@1.1.6": {
      "map": {
        "concat-map": "npm:concat-map@0.0.1",
        "balanced-match": "npm:balanced-match@0.4.2"
      }
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.1"
      }
    },
    "npm:generate-object-property@1.2.0": {
      "map": {
        "is-property": "npm:is-property@1.0.2"
      }
    },
    "github:rstacruz/nprogress@0.2.0": {
      "map": {
        "css": "github:systemjs/plugin-css@0.1.32"
      }
    },
    "github:Semantic-Org/Semantic-UI@2.2.7": {
      "map": {
        "jquery": "npm:jquery@2.2.4",
        "css": "github:systemjs/plugin-css@0.1.32"
      }
    },
    "npm:riot-cli@3.0.0": {
      "map": {
        "riot-compiler": "npm:riot-compiler@3.1.2",
        "optionator": "npm:optionator@0.8.2",
        "co": "npm:co@4.6.0",
        "rollup": "npm:rollup@0.36.4",
        "chokidar": "npm:chokidar@1.6.1",
        "chalk": "npm:chalk@1.1.3",
        "shelljs": "npm:shelljs@0.7.6"
      }
    },
    "npm:optionator@0.8.2": {
      "map": {
        "prelude-ls": "npm:prelude-ls@1.1.2",
        "type-check": "npm:type-check@0.3.2",
        "wordwrap": "npm:wordwrap@1.0.0",
        "levn": "npm:levn@0.3.0",
        "deep-is": "npm:deep-is@0.1.3",
        "fast-levenshtein": "npm:fast-levenshtein@2.0.6"
      }
    },
    "npm:chokidar@1.6.1": {
      "map": {
        "readdirp": "npm:readdirp@2.1.0",
        "glob-parent": "npm:glob-parent@2.0.0",
        "anymatch": "npm:anymatch@1.3.0",
        "is-binary-path": "npm:is-binary-path@1.0.1",
        "async-each": "npm:async-each@1.0.1",
        "inherits": "npm:inherits@2.0.3",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "is-glob": "npm:is-glob@2.0.1"
      }
    },
    "npm:rollup@0.36.4": {
      "map": {
        "source-map-support": "npm:source-map-support@0.4.11"
      }
    },
    "npm:type-check@0.3.2": {
      "map": {
        "prelude-ls": "npm:prelude-ls@1.1.2"
      }
    },
    "npm:glob-parent@2.0.0": {
      "map": {
        "is-glob": "npm:is-glob@2.0.1"
      }
    },
    "npm:levn@0.3.0": {
      "map": {
        "prelude-ls": "npm:prelude-ls@1.1.2",
        "type-check": "npm:type-check@0.3.2"
      }
    },
    "npm:readdirp@2.1.0": {
      "map": {
        "set-immediate-shim": "npm:set-immediate-shim@1.0.1",
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "minimatch": "npm:minimatch@3.0.3",
        "readable-stream": "npm:readable-stream@2.2.2"
      }
    },
    "npm:anymatch@1.3.0": {
      "map": {
        "micromatch": "npm:micromatch@2.3.11",
        "arrify": "npm:arrify@1.0.1"
      }
    },
    "npm:is-binary-path@1.0.1": {
      "map": {
        "binary-extensions": "npm:binary-extensions@1.8.0"
      }
    },
    "npm:micromatch@2.3.11": {
      "map": {
        "is-glob": "npm:is-glob@2.0.1",
        "is-extglob": "npm:is-extglob@1.0.0",
        "object.omit": "npm:object.omit@2.0.1",
        "filename-regex": "npm:filename-regex@2.0.0",
        "arr-diff": "npm:arr-diff@2.0.0",
        "regex-cache": "npm:regex-cache@0.4.3",
        "extglob": "npm:extglob@0.3.2",
        "normalize-path": "npm:normalize-path@2.0.1",
        "parse-glob": "npm:parse-glob@3.0.4",
        "array-unique": "npm:array-unique@0.2.1",
        "kind-of": "npm:kind-of@3.1.0",
        "expand-brackets": "npm:expand-brackets@0.1.5",
        "braces": "npm:braces@1.8.5"
      }
    },
    "npm:readable-stream@2.2.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "core-util-is": "npm:core-util-is@1.0.2",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "string_decoder": "npm:string_decoder@0.10.31",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:is-glob@2.0.1": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0"
      }
    },
    "npm:rechoir@0.6.2": {
      "map": {
        "resolve": "npm:resolve@1.2.0"
      }
    },
    "npm:extglob@0.3.2": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0"
      }
    },
    "npm:parse-glob@3.0.4": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0",
        "is-glob": "npm:is-glob@2.0.1",
        "glob-base": "npm:glob-base@0.3.0",
        "is-dotfile": "npm:is-dotfile@1.0.2"
      }
    },
    "npm:once@1.4.0": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:arr-diff@2.0.0": {
      "map": {
        "arr-flatten": "npm:arr-flatten@1.0.1"
      }
    },
    "npm:object.omit@2.0.1": {
      "map": {
        "for-own": "npm:for-own@0.1.4",
        "is-extendable": "npm:is-extendable@0.1.1"
      }
    },
    "npm:regex-cache@0.4.3": {
      "map": {
        "is-equal-shallow": "npm:is-equal-shallow@0.1.3",
        "is-primitive": "npm:is-primitive@2.0.0"
      }
    },
    "npm:expand-brackets@0.1.5": {
      "map": {
        "is-posix-bracket": "npm:is-posix-bracket@0.1.1"
      }
    },
    "npm:kind-of@3.1.0": {
      "map": {
        "is-buffer": "npm:is-buffer@1.1.4"
      }
    },
    "npm:glob-base@0.3.0": {
      "map": {
        "glob-parent": "npm:glob-parent@2.0.0",
        "is-glob": "npm:is-glob@2.0.1"
      }
    },
    "npm:npmlog@4.0.2": {
      "map": {
        "set-blocking": "npm:set-blocking@2.0.0",
        "console-control-strings": "npm:console-control-strings@1.1.0",
        "gauge": "npm:gauge@2.7.2",
        "are-we-there-yet": "npm:are-we-there-yet@1.1.2"
      }
    },
    "npm:request@2.79.0": {
      "map": {
        "uuid": "npm:uuid@3.0.1",
        "aws-sign2": "npm:aws-sign2@0.6.0",
        "tunnel-agent": "npm:tunnel-agent@0.4.3",
        "har-validator": "npm:har-validator@2.0.6",
        "combined-stream": "npm:combined-stream@1.0.5",
        "form-data": "npm:form-data@2.1.2",
        "forever-agent": "npm:forever-agent@0.6.1",
        "http-signature": "npm:http-signature@1.1.1",
        "stringstream": "npm:stringstream@0.0.5",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "aws4": "npm:aws4@1.5.0",
        "caseless": "npm:caseless@0.11.0",
        "oauth-sign": "npm:oauth-sign@0.8.2",
        "hawk": "npm:hawk@3.1.3",
        "is-typedarray": "npm:is-typedarray@1.0.0",
        "tough-cookie": "npm:tough-cookie@2.3.2",
        "extend": "npm:extend@3.0.0",
        "mime-types": "npm:mime-types@2.1.14",
        "isstream": "npm:isstream@0.1.2",
        "qs": "npm:qs@6.3.0"
      }
    },
    "npm:is-equal-shallow@0.1.3": {
      "map": {
        "is-primitive": "npm:is-primitive@2.0.0"
      }
    },
    "npm:braces@1.8.5": {
      "map": {
        "expand-range": "npm:expand-range@1.8.2",
        "repeat-element": "npm:repeat-element@1.1.2",
        "preserve": "npm:preserve@0.2.0"
      }
    },
    "npm:gauge@2.7.2": {
      "map": {
        "supports-color": "npm:supports-color@0.2.0",
        "console-control-strings": "npm:console-control-strings@1.1.0",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "string-width": "npm:string-width@1.0.2",
        "object-assign": "npm:object-assign@4.1.1",
        "wide-align": "npm:wide-align@1.1.0",
        "has-unicode": "npm:has-unicode@2.0.1",
        "signal-exit": "npm:signal-exit@3.0.2",
        "aproba": "npm:aproba@1.0.4"
      }
    },
    "npm:for-own@0.1.4": {
      "map": {
        "for-in": "npm:for-in@0.1.6"
      }
    },
    "npm:expand-range@1.8.2": {
      "map": {
        "fill-range": "npm:fill-range@2.2.3"
      }
    },
    "npm:fill-range@2.2.3": {
      "map": {
        "repeat-element": "npm:repeat-element@1.1.2",
        "repeat-string": "npm:repeat-string@1.6.1",
        "isobject": "npm:isobject@2.1.0",
        "randomatic": "npm:randomatic@1.1.6",
        "is-number": "npm:is-number@2.1.0"
      }
    },
    "npm:isobject@2.1.0": {
      "map": {
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:randomatic@1.1.6": {
      "map": {
        "kind-of": "npm:kind-of@3.1.0",
        "is-number": "npm:is-number@2.1.0"
      }
    },
    "npm:is-number@2.1.0": {
      "map": {
        "kind-of": "npm:kind-of@3.1.0"
      }
    },
    "npm:dashdash@1.14.1": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:asn1.js@4.9.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "github:systemjs/plugin-less@0.1.2": {
      "map": {
        "css": "github:systemjs/plugin-css@0.1.30"
      }
    },
    "github:twbs/bootstrap@3.3.7": {
      "map": {
        "jquery": "npm:jquery@3.1.1"
      }
    },
    "npm:bcrypt-pbkdf@1.0.1": {
      "map": {
        "tweetnacl": "npm:tweetnacl@0.14.5"
      }
    },
    "npm:riot@3.1.0": {
      "map": {
        "riot-tmpl": "npm:riot-tmpl@3.0.2",
        "simple-html-tokenizer": "npm:simple-html-tokenizer@0.4.0",
        "riot-cli": "npm:riot-cli@3.0.0",
        "riot-compiler": "npm:riot-compiler@3.1.2",
        "riot-observable": "npm:riot-observable@3.0.0",
        "simple-dom": "npm:simple-dom@0.3.2"
      }
    },
    "npm:riot-route@3.1.0": {
      "map": {
        "riot-observable": "npm:riot-observable@3.0.0"
      }
    },
    "npm:fsevents@1.0.17": {
      "map": {
        "node-pre-gyp": "npm:node-pre-gyp@0.6.33",
        "nan": "npm:nan@2.5.1"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.2": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.1": {
      "map": {
        "buffer": "npm:buffer@4.9.1"
      }
    },
    "npm:node-pre-gyp@0.6.33": {
      "map": {
        "rimraf": "npm:rimraf@2.5.4",
        "rc": "npm:rc@1.1.6",
        "semver": "npm:semver@5.3.0",
        "nopt": "npm:nopt@3.0.6",
        "mkdirp": "npm:mkdirp@0.5.1",
        "request": "npm:request@2.79.0",
        "npmlog": "npm:npmlog@4.0.2",
        "tar": "npm:tar@2.2.1",
        "tar-pack": "npm:tar-pack@3.3.0"
      }
    },
    "npm:stream-http@2.6.3": {
      "map": {
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1",
        "readable-stream": "npm:readable-stream@2.2.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:shelljs@0.7.6": {
      "map": {
        "interpret": "npm:interpret@1.0.1",
        "glob": "npm:glob@7.1.1",
        "rechoir": "npm:rechoir@0.6.2"
      }
    },
    "npm:mime-types@2.1.14": {
      "map": {
        "mime-db": "npm:mime-db@1.26.0"
      }
    },
    "npm:source-map-support@0.4.11": {
      "map": {
        "source-map": "npm:source-map@0.5.6"
      }
    },
    "npm:sshpk@1.10.2": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0",
        "dashdash": "npm:dashdash@1.14.1",
        "asn1": "npm:asn1@0.2.3",
        "getpass": "npm:getpass@0.1.6"
      }
    }
  }
});
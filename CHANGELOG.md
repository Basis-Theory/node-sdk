# [3.2.0](https://github.com/Basis-Theory/node-sdk/compare/v3.1.0...v3.2.0) (2025-07-22)


### Features

* Add documents ([#102](https://github.com/Basis-Theory/node-sdk/issues/102)) ([19c24ce](https://github.com/Basis-Theory/node-sdk/commit/19c24ce7a186ed121331e44edee2a4e251d74dde))

# [3.1.0](https://github.com/Basis-Theory/node-sdk/compare/v3.0.0...v3.1.0) (2025-06-04)


### Features

* Add Apple Pay unlink support ([5a16146](https://github.com/Basis-Theory/node-sdk/commit/5a161461eff5672a428769ffe6cacbe71511e10c))

# [3.0.0](https://github.com/Basis-Theory/node-sdk/compare/v2.6.1...v3.0.0) (2025-05-20)


### Features

* Add Apple Pay Token support ([0ffce8d](https://github.com/Basis-Theory/node-sdk/commit/0ffce8dbfebce3434e596139a2ade536e1d4d9ba))


### BREAKING CHANGES

* The old methods for using Apple Pay and Token Intents have moved to the "connection" namespace.

## [2.6.1](https://github.com/Basis-Theory/node-sdk/compare/v2.6.0...v2.6.1) (2025-05-09)


### Bug Fixes

* removes formdata-node from dependency ([#80](https://github.com/Basis-Theory/node-sdk/issues/80)) ([69ad68e](https://github.com/Basis-Theory/node-sdk/commit/69ad68e90c6fe58d591aa88e0c24ede301a3c184))

# [2.6.0](https://github.com/Basis-Theory/node-sdk/compare/v2.5.0...v2.6.0) (2025-05-07)


### Features

* add network tokens and 3ds co-badged cards props ([42b85ca](https://github.com/Basis-Theory/node-sdk/commit/42b85cad4da022daa44253cbdd563e3fc9f0ca7e))

# [2.5.0](https://github.com/Basis-Theory/node-sdk/compare/v2.4.0...v2.5.0) (2025-05-05)


### Features

* adds account updater endpoints ([#76](https://github.com/Basis-Theory/node-sdk/issues/76)) ([bb938f0](https://github.com/Basis-Theory/node-sdk/commit/bb938f0e95f5741bed0601067a0520dbbf7a0147))

# [2.4.0](https://github.com/Basis-Theory/node-sdk/compare/v2.3.0...v2.4.0) (2025-04-30)


### Features

* Add card fields to tokens and token-intents ([#74](https://github.com/Basis-Theory/node-sdk/issues/74)) ([69de0cb](https://github.com/Basis-Theory/node-sdk/commit/69de0cb57e585005a1e2ffafe3bf98c4e00fa27f))

# [2.3.0](https://github.com/Basis-Theory/node-sdk/compare/v2.2.0...v2.3.0) (2025-04-01)


### Features

* Add registerAll to Apple Pay Domains and network token create ([d1b814d](https://github.com/Basis-Theory/node-sdk/commit/d1b814d09c560eefbf9dd75338c862197252eacd))

# [2.2.0](https://github.com/Basis-Theory/node-sdk/compare/v2.1.0...v2.2.0) (2025-03-28)


### Features

* update threeds authentication props ([5daddba](https://github.com/Basis-Theory/node-sdk/commit/5daddba11e41d6db2c450754d3ca2d33ac796427))

# [2.1.0](https://github.com/Basis-Theory/node-sdk/compare/v2.0.0...v2.1.0) (2025-03-18)


### Features

* Apple Pay support ([6a0da8e](https://github.com/Basis-Theory/node-sdk/commit/6a0da8ebb8df0d2c1ef38b6265ce9ff54ffa23fe))

# [2.0.0](https://github.com/Basis-Theory/node-sdk/compare/v1.5.3...v2.0.0) (2025-03-05)


### Features

* adding get token intents ([51743fe](https://github.com/Basis-Theory/node-sdk/commit/51743fe9dd58eb729e7e4ecd3abe79bdee1e9b71))


### BREAKING CHANGES

* Updated Token Usage response and removes expires_at from Applications

## [1.5.3](https://github.com/Basis-Theory/node-sdk/compare/v1.5.2...v1.5.3) (2025-03-03)


### Bug Fixes

* falling back to node-fetch if fetch doesn't exist ([#55](https://github.com/Basis-Theory/node-sdk/issues/55)) ([a972405](https://github.com/Basis-Theory/node-sdk/commit/a972405b2c5f3ba834b865ab14366226264f766d))

## [1.5.2](https://github.com/Basis-Theory/node-sdk/compare/v1.5.1...v1.5.2) (2025-01-31)


### Bug Fixes

* Add `network_token` to token intents ([adbc492](https://github.com/Basis-Theory/node-sdk/commit/adbc492f4ca42f443fab204fb28ecea6e1ca80b8))

## [1.5.1](https://github.com/Basis-Theory/node-sdk/compare/v1.5.0...v1.5.1) (2025-01-30)


### Bug Fixes

* New `network_token` card details object ([08789e0](https://github.com/Basis-Theory/node-sdk/commit/08789e0881008ae46a4e50d4961a3ac55e610c78))

# [1.5.0](https://github.com/Basis-Theory/node-sdk/compare/v1.4.7...v1.5.0) (2025-01-27)


### Features

* Google Pay ([5a1573b](https://github.com/Basis-Theory/node-sdk/commit/5a1573b95aaee4c14a1237361a1cf41de46fc86c))

## [1.4.7](https://github.com/Basis-Theory/node-sdk/compare/v1.4.6...v1.4.7) (2024-11-20)


### Bug Fixes

* Add token-intents ([#45](https://github.com/Basis-Theory/node-sdk/issues/45)) ([c21bcca](https://github.com/Basis-Theory/node-sdk/commit/c21bcca824385795085c239dcf135fde384fd40e))

## [1.4.6](https://github.com/Basis-Theory/node-sdk/compare/v1.4.5...v1.4.6) (2024-11-20)


### Bug Fixes

* Remove deprecated endpoints ([#44](https://github.com/Basis-Theory/node-sdk/issues/44)) ([62146a8](https://github.com/Basis-Theory/node-sdk/commit/62146a8e14425a752fe9c74d7f0747b818c736bb))

## [1.4.5](https://github.com/Basis-Theory/node-sdk/compare/v1.4.4...v1.4.5) (2024-11-19)


### Bug Fixes

* permissions.list method ([#42](https://github.com/Basis-Theory/node-sdk/issues/42)) ([b2aaf65](https://github.com/Basis-Theory/node-sdk/commit/b2aaf6538eec2a8dcea5b5e59cd2b986be21b2b3))

## [1.4.4](https://github.com/Basis-Theory/node-sdk/compare/v1.4.3...v1.4.4) (2024-11-19)


### Bug Fixes

* Fix bankAccountVerify method name ([#41](https://github.com/Basis-Theory/node-sdk/issues/41)) ([6b673ea](https://github.com/Basis-Theory/node-sdk/commit/6b673ea8a39ba50d47351e4a7f6e0e1a0e443036))

## [1.4.3](https://github.com/Basis-Theory/node-sdk/compare/v1.4.2...v1.4.3) (2024-11-19)


### Bug Fixes

* Fixes response object for bank-account-verify ([#38](https://github.com/Basis-Theory/node-sdk/issues/38)) ([7289785](https://github.com/Basis-Theory/node-sdk/commit/7289785028c638234d21acedb99612418836052d))

## [1.4.2](https://github.com/Basis-Theory/node-sdk/compare/v1.4.1...v1.4.2) (2024-11-19)


### Bug Fixes

* Rename methods, fix return objects ([#37](https://github.com/Basis-Theory/node-sdk/issues/37)) ([a1c264d](https://github.com/Basis-Theory/node-sdk/commit/a1c264db3ff4687227546a66c552d95e749221ac))

## [1.4.1](https://github.com/Basis-Theory/node-sdk/compare/v1.4.0...v1.4.1) (2024-11-18)


### Bug Fixes

* Move 3DS create session ([#35](https://github.com/Basis-Theory/node-sdk/issues/35)) ([6737667](https://github.com/Basis-Theory/node-sdk/commit/6737667c42c69882b19faa14e07285b7e39c0774))

# [1.4.0](https://github.com/Basis-Theory/node-sdk/compare/v1.3.0...v1.4.0) (2024-11-15)


### Features

* Add correlation id ([#34](https://github.com/Basis-Theory/node-sdk/issues/34)) ([98cbd30](https://github.com/Basis-Theory/node-sdk/commit/98cbd30c27f806b45abde30b1c0ba7912027fb1a))

# [1.3.0](https://github.com/Basis-Theory/node-sdk/compare/v1.2.0...v1.3.0) (2024-11-05)


### Features

* Update to latest ([#25](https://github.com/Basis-Theory/node-sdk/issues/25)) ([1a5454f](https://github.com/Basis-Theory/node-sdk/commit/1a5454f00c30d1a4709890aebf1c7c10c92903da))

# [1.2.0](https://github.com/Basis-Theory/node-sdk/compare/v1.1.0...v1.2.0) (2024-10-09)


### Features

* Adds notify_email to webhooks ([#23](https://github.com/Basis-Theory/node-sdk/issues/23)) ([a7562a0](https://github.com/Basis-Theory/node-sdk/commit/a7562a0b21db3ba7bff8b673a5e800bccf8421cb))

# [1.1.0](https://github.com/Basis-Theory/node-sdk/compare/v1.0.3...v1.1.0) (2024-10-08)


### Features

* Rename Webhook components ([#22](https://github.com/Basis-Theory/node-sdk/issues/22)) ([5f112af](https://github.com/Basis-Theory/node-sdk/commit/5f112afe166cd9632370d1edc1cfacc6bb06a2fd))

## [1.0.3](https://github.com/Basis-Theory/node-sdk/compare/v1.0.2...v1.0.3) (2024-09-30)


### Bug Fixes

* Support correct PATCH content-type ([#21](https://github.com/Basis-Theory/node-sdk/issues/21)) ([8b59ea5](https://github.com/Basis-Theory/node-sdk/commit/8b59ea504ffc3a4df526d3c33be2838f6b12efa4))

## [1.0.2](https://github.com/Basis-Theory/js-sdk/compare/v1.0.1...v1.0.2) (2024-09-25)


### Bug Fixes

* Publish publiclly ([#16](https://github.com/Basis-Theory/js-sdk/issues/16)) ([ce506cb](https://github.com/Basis-Theory/js-sdk/commit/ce506cb4b92b85d8c7b4793497123f925c4e8c3b))

## [1.0.1](https://github.com/Basis-Theory/js-sdk/compare/v1.0.0...v1.0.1) (2024-09-25)


### Bug Fixes

* Change working directory in release script ([#14](https://github.com/Basis-Theory/js-sdk/issues/14)) ([e1e6fce](https://github.com/Basis-Theory/js-sdk/commit/e1e6fce044494f53bb0687e7544367514c883707))
* Prepare package.json in dist directory ([#15](https://github.com/Basis-Theory/js-sdk/issues/15)) ([63c3c0a](https://github.com/Basis-Theory/js-sdk/commit/63c3c0ab215ce8b5fa95c451e14e501ccc7ed539))
* Try with releaserc ([#12](https://github.com/Basis-Theory/js-sdk/issues/12)) ([ccc3b9d](https://github.com/Basis-Theory/js-sdk/commit/ccc3b9dfb162e441d7350307eb41d00d80804ea6))

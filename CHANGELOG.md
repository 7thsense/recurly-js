## Recurly.js CHANGELOG

### Version 4.1.0 (July 29, 2016)

* Adds Gift card support [#275][275]
* Adds click event binding to label tags referenced to hosted field containers [#279][279]
* Enables CORS-XHR API client by default [#269][269]
* Fixes expiry validation of invalid inputs [#278][278]
* Fixes dom value reader for empty selects [#282][282]

### Version 4.0.5 (July 6, 2016)

* Adds a pricing error when a coupon is not found [#263][263]
* Removes ussageAddons from pricing calculations [#268][268]
* Fixes bug around initial pricing not respecting coupons [#264][264]

### Version 4.0.4 (May 23, 2016)

* Adds functionality for running fraud data collector [#254][254]

### Version 4.0.3 (Apr 28, 2016)

* Updates discount type indication [#250][250]

### Version 4.0.2 (Apr 20, 2016)

* Adds detection of new Mastercard BIN ranges [#229][229]
* Adds pricing case for trial extension coupons [#246][246]

### Version 4.0.1 (Feb 16, 2016)

* Fixes cvv requirement enforcement [#231][231]
* Misc. code cleanup and test infrastructure changes [#234][234] [#233][233] [#230][230]

### Version 4.0.0 (Jan 13, 2016)

* Adds support for hosted fields for card transactions: recurly-hosted iframes
  are injected in place of card fields
* Adds recurly.ready
* Adds eventing to main recurly instance
* Adds 'ready', 'change', and 'field:submit' events

### Version 3.1.1 (June 11, 2015)

* Adds single use coupon support to discount calculations [#204][204]
* Fix issue where XDRs aborted unpredictably [#207][207]

### Version 3.1.0 (May 7, 2015)

* Adds bank account tokenization [#202][202]
* Adds optional additional field validations [#196][196]
* Fixes tax rounding issue [#199][199]

### Version 3.0.11 (March 17, 2015)

* Adds partial number detection to cardType method [#187][187]
* Adds tax information to pricing object [#169][169]
* Fixes plan tax exemption for taxation other than US sales tax [#186][186]
* Fixes validate.cardNumber throwing on falsey values [#179][179]
* Fixes issue with pricing coupon and plan mismatches [#177][177]
* Fixes issue where Pricing detachment fails on multiple instances [#188][188]

### Version 3.0.10 (December 18, 2014)

* Adds Pricing support for tax_code [#166][166]

### Version 3.0.9 (November 12, 2014)

* Adds CORS support [#157][157]

### Version 3.0.8 (November 6, 2014)

* Rejects falsey configuration values [#155][155]
* Switches build from component to duo [#154][154]
* Adds plan unit price and setup fee to pricing output [#150][150]

### Version 3.0.7 (September 17, 2014)

* Fixes issue with IE PayPal communication [#152][152]

### Version 3.0.6 (September 8, 2014)

* Fixes rounding issues around tax and floats [#147][147]
* Correctly sets setup_fee on pricing output object [#144][144]

### Version 3.0.5 (August 5, 2014)

* Fixed missing json module dependency [#138][138]

### Version 3.0.4 (July 24, 2014)

* Fixed issue with addons and pricing module [#137][137]

### Version 3.0.3 (June 10, 2014)

* Added 'phone' and 'vat_number' to list of tokenizable fields [#126][126]
* Added checkbox support to Pricing.prototype.attach [#123][123]
* Fixed issue in Pricing.prototype.attach where addons would attempt to load out of order [#127][127]
* Fixed issue where coupon not found errors would go uncaught in Pricing.prototype.attach [#124][124]
* Fixed coupon rounding behavior in Pricing.prototype.calculations [#125][125]
* Updated testing dependencies [#121][121]

### Version 3.0.2 (June 3, 2014)

* Fixed parse cardType bug [#120][120]
* Fixed issue where publicKey was not sent to the PayPal flow initiation API [#117][117]

### Version 3.0.1 (May 29, 2014)

* Added Plan quantity manipulation to recurly.Pricing [#115][115]

### Version 3.0.0 (May 13, 2014)

* Full rewrite for Billing Info tokenization

[276]: https://github.com/recurly/recurly-js/commit/a4059994b2ed864ef6820f7e6e544db48eac52ff
[269]: https://github.com/recurly/recurly-js/commit/d035eee4ec6fd420aeb30d70ed2b6c05a2cdb8e0
[278]: https://github.com/recurly/recurly-js/commit/cbc650d5b9a9836d7391e8abb285a1bd219af4a3
[275]: https://github.com/recurly/recurly-js/commit/92256e4cb070696f972c88442f98a05e9bc4602c
[282]: https://github.com/recurly/recurly-js/commit/b301f028dbef0b9a601118bec675fc41e4a07f4d
[279]: https://github.com/recurly/recurly-js/commit/29d9f7d42a7d5d30da2f049b3da373002a932157
[263]: https://github.com/recurly/recurly-js/commit/313c143d20813b029f9831a4446857083252ef6e
[268]: https://github.com/recurly/recurly-js/commit/bd70dd34bef3ece01b50ed9f461104209571e9b7
[264]: https://github.com/recurly/recurly-js/commit/a84da7b2f0f40d9ff9d959e6a10e07de8dd10923
[254]: https://github.com/recurly/recurly-js/commit/44bfc4f8d6cb9fef81b2335cc609a5b2ef8165b2
[250]: https://github.com/recurly/recurly-js/commit/436c6b8ac165f1acc5e41288591f8d7f1e84e23e
[246]: https://github.com/recurly/recurly-js/commit/1bed75dca6f68036fc7d1c0be9d3dadb9dcfb67a
[229]: https://github.com/recurly/recurly-js/commit/8e073b10dd8db163162579b67b7263d39ce0b2e4
[230]: https://github.com/recurly/recurly-js/commit/137e1ba91610bfe7fdaf9f5ba0974a9018f914d7
[233]: https://github.com/recurly/recurly-js/commit/c2a7a19801d28e1058e414c475755880c227af0c
[234]: https://github.com/recurly/recurly-js/commit/3b3249c914b324945c0884b96d4ccab8d61ae3bf
[231]: https://github.com/recurly/recurly-js/commit/8d1db92efa11d8e6363046cdc0dd83926a8b61bb
[204]: https://github.com/recurly/recurly-js/commit/6623b0a1d55384b3c03b2918b4ba94a0a34238b5
[207]: https://github.com/recurly/recurly-js/commit/0ecc549acc218176db72578747c07288578db027
[202]: https://github.com/recurly/recurly-js/commit/684119566898568f9947210b26cb794f0823e28e
[199]: https://github.com/recurly/recurly-js/commit/e04662b887e3f51553a0c691d704ec680c36f772
[196]: https://github.com/recurly/recurly-js/commit/bd49c9a7785bda07ade74d4f17cf9351599dbf11
[188]: https://github.com/recurly/recurly-js/commit/7f03c8798a7286fbcc30e32388ad0eeae86c1be5
[187]: https://github.com/recurly/recurly-js/commit/5e771eae688135338478281d947bd96c7fa5dbc6
[186]: https://github.com/recurly/recurly-js/commit/b5ab08d328c8687e747443cb9c0cae42d8d9fe48
[179]: https://github.com/recurly/recurly-js/commit/410182d331d787c180b6e8dbf628e365cc9a0865
[177]: https://github.com/recurly/recurly-js/commit/4973d752291fa76410469fed4d965d66c68bcb9d
[169]: https://github.com/recurly/recurly-js/commit/0f3088c4ee3ada7f23a3ef3fa4d512d53f363307
[166]: https://github.com/recurly/recurly-js/commit/f5b476550d23a46028f8a24579ea5dbc1bd23236
[157]: https://github.com/recurly/recurly-js/commit/8585f26f9a816b21c6689b9fd72c65714f138378
[155]: https://github.com/recurly/recurly-js/commit/7c3d22b5e75ddd565631adbd96ecc02d8cc868b7
[154]: https://github.com/recurly/recurly-js/commit/63d7ba073d22841401ff5fe6bf0d5bba36328f62
[152]: https://github.com/recurly/recurly-js/commit/47d120185804e28ecbe7d96a0ce8a07b4234353d
[150]: https://github.com/recurly/recurly-js/commit/4b0fb749c36b46c22a0ca2b49f690b2b09243dd5
[147]: https://github.com/recurly/recurly-js/commit/30a7310148d2109dfb4f2b46232d9204ee3f7211
[144]: https://github.com/recurly/recurly-js/commit/25c505b5a158c30fdf6ab8009dae37f2ddc3b749
[138]: https://github.com/recurly/recurly-js/commit/ce631dbd75c62670f91f226ab02dad0218f5c90f
[137]: https://github.com/recurly/recurly-js/commit/db481de4459dcb7918060f1d3fbfaeb57c39d802
[127]: https://github.com/recurly/recurly-js/commit/744942e2922c42ee6a67fb131cdf1f8a208ab797
[126]: https://github.com/recurly/recurly-js/commit/0fa3b8a57a12e89050a51e40e91ec1a9b34bb30e
[125]: https://github.com/recurly/recurly-js/commit/f7072d7387b8a43d41a5ec94bb069a26eb28f19d
[124]: https://github.com/recurly/recurly-js/commit/ce5103a0e67e7c96b61bbbbdc684ebda96f46068
[123]: https://github.com/recurly/recurly-js/commit/85483f9117dc871c3d9a0c0a33fcbe57613ec322
[121]: https://github.com/recurly/recurly-js/commit/5abe15a3054d2ccfe0577c8aecfe26ed081dd7fe
[120]: https://github.com/recurly/recurly-js/commit/05c2f92d503aadbca16f16f9ef063421f03fee19
[117]: https://github.com/recurly/recurly-js/commit/c59123e8703210e190eadef9177204689566eec4
[115]: https://github.com/recurly/recurly-js/commit/53270974d50f4094f3bd18575dad771ba141a63c

webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _DropModal = __webpack_require__(104);

var _reactImageShow = __webpack_require__(209);

var _reactImageShow2 = _interopRequireDefault(_reactImageShow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
    _inherits(Listings, _Component);

    function Listings() {
        _classCallCheck(this, Listings);

        var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

        _this.state = {
            name: '',
            activeModal: null
        };
        _this.loopListings = _this.loopListings.bind(_this);
        _this.clickHandler = _this.clickHandler.bind(_this);
        _this.hideModal = _this.hideModal.bind(_this);
        return _this;
    }

    _createClass(Listings, [{
        key: 'clickHandler',
        value: function clickHandler(e, index) {
            this.setState({ activeModal: index });
        }
    }, {
        key: 'hideModal',
        value: function hideModal() {
            this.setState({ activeModal: null });
        }
    }, {
        key: 'loopListings',
        value: function loopListings() {
            var _this2 = this;

            var listingsData = this.props.listingsData;


            if (listingsData == undefined || listingsData.length == 0) {
                return "Sorry your filter did not match any listing";
            }

            return listingsData.map(function (listing, index) {
                if (_this2.props.globalState.view == 'long') {
                    return _react2.default.createElement(
                        'div',
                        { className: 'col-md-12 col-lg-6', key: index },
                        _react2.default.createElement(
                            'div',
                            { className: 'listing' },
                            _react2.default.createElement(
                                'div',
                                { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'address' },
                                    listing.availability
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'details' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-md-12' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'user-details' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'user-name' },
                                                'Broker: Steven',
                                                "\n"
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'listing-details' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'floor-space' },
                                                _react2.default.createElement('i', { className: 'fa fa-square-o', 'aria-hidden': 'true' }),
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    listing.floorSpace,
                                                    ' ft\xB2'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'bedrooms' },
                                                _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    listing.rooms,
                                                    ' bedroom(s)'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'a',
                                                { className: 'view-btn', id: index, onClick: function onClick(e) {
                                                        return _this2.clickHandler(e, index);
                                                    } },
                                                'View Pics'
                                            ),
                                            _react2.default.createElement(
                                                _DropModal.Modal,
                                                {
                                                    id: index,
                                                    show: _this2.state.activeModal === index,
                                                    onHide: _this2.hideModal
                                                },
                                                _react2.default.createElement(_reactImageShow2.default, {
                                                    images: listing.suppImagePics,
                                                    width: '100%',
                                                    imagesWidth: '600px',
                                                    imagesHeight: '450px',
                                                    imagesHeightMobile: '56vw',
                                                    thumbnailsWidth: '15vw',
                                                    thumbnailsHeight: '20vw',
                                                    indicators: true, thumbnails: true, fixedImagesHeight: true, arrows: true
                                                })
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'bottom-info' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'price' },
                                    _react2.default.createElement('i', { className: 'fa fa-usd', 'aria-hidden': 'true' }),
                                    listing.price,
                                    '/month'
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'location' },
                                    _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
                                    ' ',
                                    listing.city
                                )
                            )
                        )
                    );
                } else {
                    // THIS IS LONG VIEW
                    return (
                        // THIS IS BOX VIEW
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-3', key: index },
                            _react2.default.createElement(
                                'div',
                                { className: 'listing' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'address' },
                                        listing.availability
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'details' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-md-12' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'user-details' },
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'user-name' },
                                                    'Broker: Steven ',
                                                    "\n"
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'listing-details' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'floor-space' },
                                                    _react2.default.createElement('i', { className: 'fa fa-square-o', 'aria-hidden': 'true' }),
                                                    _react2.default.createElement(
                                                        'span',
                                                        null,
                                                        listing.floorSpace,
                                                        ' ft\xB2'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'bedrooms' },
                                                    _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                                                    _react2.default.createElement(
                                                        'span',
                                                        null,
                                                        listing.rooms,
                                                        ' bedroom(s)'
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'a',
                                                { className: 'view-btn', id: index, onClick: function onClick(e) {
                                                        return _this2.clickHandler(e, index);
                                                    } },
                                                'View Pics'
                                            ),
                                            _react2.default.createElement(
                                                _DropModal.Modal,
                                                {
                                                    id: index,
                                                    show: _this2.state.activeModal === index,
                                                    onHide: _this2.hideModal
                                                },
                                                _react2.default.createElement(_reactImageShow2.default, {
                                                    images: listing.suppImagePics,
                                                    width: '100%',
                                                    imagesWidth: '600px',
                                                    imagesHeight: '450px',
                                                    imagesHeightMobile: '56vw',
                                                    thumbnailsWidth: '15vw',
                                                    thumbnailsHeight: '20vw',
                                                    indicators: true, thumbnails: true, fixedImagesHeight: true
                                                })
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'bottom-info' },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'price' },
                                        _react2.default.createElement('i', { className: 'fa fa-usd', 'aria-hidden': 'true' }),
                                        listing.price,
                                        '/month'
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'location' },
                                        _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
                                        ' ',
                                        listing.city
                                    )
                                )
                            )
                        )
                    );
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { id: 'listings' },
                _react2.default.createElement(
                    'section',
                    { className: 'search-area' },
                    _react2.default.createElement('input', { type: 'text', name: 'search', onChange: this.props.change, placeholder: 'Search by city...' })
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'sortby-area' },
                    _react2.default.createElement(
                        'div',
                        { className: 'results' },
                        this.props.globalState.filteredData.length,
                        ' results found'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'sort-options' },
                        _react2.default.createElement(
                            'select',
                            { name: 'sortby', className: 'sortby', onChange: this.props.change },
                            _react2.default.createElement(
                                'option',
                                { value: 'price-dsc' },
                                'Lowest Price'
                            ),
                            _react2.default.createElement(
                                'option',
                                { value: 'price-asc' },
                                'Highest Price'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'view' },
                            _react2.default.createElement('i', { className: 'fa fa-th-list', 'aria-hidden': 'true', onClick: this.props.changeView.bind(null, "long") }),
                            _react2.default.createElement('i', { className: 'fa fa-th', 'aria-hidden': 'true', onClick: this.props.changeView.bind(null, "box") })
                        )
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'listings-results' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        this.loopListings()
                    )
                )
            );
        }
    }]);

    return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});


var listingsData = [{
      "suppImagePics": ["./js/components/suppPictures/5b7bafa389933.jpg", "./js/components/suppPictures/5b7bafb9d8324.jpg", "./js/components/suppPictures/5b7bafba49f76.jpg", "./js/components/suppPictures/5b7bafbaacfff.jpg", "./js/components/suppPictures/5b7bafbb1d6dc.jpg", "./js/components/suppPictures/5b7bafbb7d957.jpg", "./js/components/suppPictures/5b7bafbbe35fe.jpg", "./js/components/suppPictures/5b7bafbc4faf4.jpg", "./js/components/suppPictures/5b7bafbcb6584.jpg", "./js/components/suppPictures/5b7bb01dd5639.jpg", "./js/components/suppPictures/5b7bb01e4142e.jpg", "./js/components/suppPictures/5b7bb01ea4d2b.jpg", "./js/components/suppPictures/5b7bb01f122f5.jpg", "./js/components/suppPictures/5b7bb01f7cbc3.jpg", "./js/components/suppPictures/5b7bb01fdd9e9.jpg", "./js/components/suppPictures/5b7bb0204b67f.jpg", "./js/components/suppPictures/5b7bb020aeff6.jpg", "./js/components/suppPictures/5b7bb0592a753.jpg", "./js/components/suppPictures/5b7bb059855a5.jpg", "./js/components/suppPictures/5b7bb059dfb7c.jpg", "./js/components/suppPictures/5b7bb05a46fff.jpg", "./js/components/suppPictures/5b7bb05aa2ca0.jpg", "./js/components/suppPictures/5b7bb05b0b6dd.jpg", "./js/components/suppPictures/5b7bb05b6ef74.jpg", "./js/components/suppPictures/5b7bb05bd05b6.jpg", "./js/components/suppPictures/5b7bb08d3e07d.jpg", "./js/components/suppPictures/5b7bb08d98652.jpg", "./js/components/suppPictures/5b7bb08dedf23.jpg", "./js/components/suppPictures/5b7bb08e4f12f.jpg", "./js/components/suppPictures/5b7bb08ea3036.jpg", "./js/components/suppPictures/5b7bb08f01f52.jpg", "./js/components/suppPictures/5b7bb08f56668.jpg", "./js/components/suppPictures/5b7bb08fad965.jpg", "./js/components/suppPictures/5b7bb0900ed7b.jpg", "./js/components/suppPictures/5b7bb0906866d.jpg", "./js/components/suppPictures/5b7bb090cf5cb.jpg", "./js/components/suppPictures/5b7bb0913a102.jpg", "./js/components/suppPictures/5b7bb0b635c5c.jpg", "./js/components/suppPictures/5b7bb0b68fa96.jpg", "./js/components/suppPictures/5b7bb0b6e5599.jpg", "./js/components/suppPictures/5b7bb0b74712b.jpg", "./js/components/suppPictures/5b7bb0b79e93d.jpg", "./js/components/suppPictures/5b7bb0b802127.jpg", "./js/components/suppPictures/5b7bb0b859c40.jpg"],
      "indexNumber": 0,
      "image": "./js/components/securePictures/5b7bafa389933.jpg",
      "city": "Sherman Oaks",
      "price": 1695,
      "rooms": 1,
      "floorSpace": 650,
      "availability": "Available: Now",
      "fee": "NO FEE",
      "urli": "http://login.realtywarp.com/agent/newlisting/1052/LOS-17947"
}, {
      "suppImagePics": ["./js/components/suppPictures/5b7680fc65368.jpg", "./js/components/suppPictures/5b7680fce7b02.jpg", "./js/components/suppPictures/5b7680fd5bc29.jpg", "./js/components/suppPictures/5b7680fdbc43b.jpg", "./js/components/suppPictures/5b7680fe2cd64.jpg", "./js/components/suppPictures/5b7680fe9078d.jpg", "./js/components/suppPictures/5b7680feead71.jpg", "./js/components/suppPictures/5b7680ff553b9.jpg", "./js/components/suppPictures/5b7680ffb282a.jpg", "./js/components/suppPictures/5b7681001c9e9.jpg", "./js/components/suppPictures/5b7681007ef89.jpg", "./js/components/suppPictures/5b768100dd519.jpg", "./js/components/suppPictures/5b76810167193.jpg", "./js/components/suppPictures/5b768101c82ed.jpg", "./js/components/suppPictures/5b768102357b2.jpg", "./js/components/suppPictures/5b7681028e0d9.jpg", "./js/components/suppPictures/5b768102ecf2f.jpg", "./js/components/suppPictures/5b76810357ed9.jpg", "./js/components/suppPictures/5b768103b5427.jpg", "./js/components/suppPictures/5b76810420f4e.jpg", "./js/components/suppPictures/5b76810480f4d.jpg", "./js/components/suppPictures/5b768104de151.jpg", "./js/components/suppPictures/5b7681054e46c.jpg", "./js/components/suppPictures/5b768105a8598.jpg", "./js/components/suppPictures/5b7681060d2ec.jpg", "./js/components/suppPictures/5b7681066f1c1.jpg", "./js/components/suppPictures/5b768106cac06.jpg", "./js/components/suppPictures/5b768107313dc.jpg", "./js/components/suppPictures/5b7681079197a.jpg", "./js/components/suppPictures/5b768107f208f.jpg", "./js/components/suppPictures/5b7681085d12a.jpg", "./js/components/suppPictures/5b768108c2327.jpg", "./js/components/suppPictures/5b7681092da53.jpg"],
      "indexNumber": 1,
      "image": "./js/components/securePictures/5b7680fc65368.jpg",
      "city": "Canoga Park",
      "price": 1750,
      "rooms": 1,
      "floorSpace": 624,
      "availability": "Available: Now",
      "fee": "NO FEE",
      "urli": "http://login.realtywarp.com/agent/newlisting/1052/LOS-17941"
}, {
      "suppImagePics": ["./js/components/suppPictures/5b88f8e577048.jpg", "./js/components/suppPictures/5b88f8e5e85a5.jpg", "./js/components/suppPictures/5b88f8e654158.jpg", "./js/components/suppPictures/5b88f8e6b329b.jpg", "./js/components/suppPictures/5b88f8e721879.jpg", "./js/components/suppPictures/5b88f8e785a12.jpg", "./js/components/suppPictures/5b88f8e7e4d15.jpg", "./js/components/suppPictures/5b88f8e84ace3.jpg", "./js/components/suppPictures/5b88f8e8a6ebb.jpg", "./js/components/suppPictures/5b88f8e90e233.jpg", "./js/components/suppPictures/5b88f8e96a90a.jpg", "./js/components/suppPictures/5b88f8e9c6d3f.jpg", "./js/components/suppPictures/5b88f8ea2ff71.jpg", "./js/components/suppPictures/5b88f8eb5dbc3.jpg", "./js/components/suppPictures/5b88f8ebb7e70.jpg", "./js/components/suppPictures/5b88f8ec1f4f3.jpg", "./js/components/suppPictures/5b88f8ec7b10f.jpg", "./js/components/suppPictures/5b88f8ecd61dc.jpg", "./js/components/suppPictures/5b88f8ed3f619.jpg", "./js/components/suppPictures/5b88f8ed9b06d.jpg", "./js/components/suppPictures/5b88f8ee00dc9.jpg", "./js/components/suppPictures/5b88f8ee5d9d6.jpg", "./js/components/suppPictures/5b88f8eeb9600.jpg", "./js/components/suppPictures/5b88f8ef234df.jpg", "./js/components/suppPictures/5b88f8ef7e6fd.jpg", "./js/components/suppPictures/5b88f8efd97dc.jpg", "./js/components/suppPictures/5b88f8f03ed5a.jpg", "./js/components/suppPictures/5b88f8f09f581.jpg", "./js/components/suppPictures/5b88f8f105f0a.jpg", "./js/components/suppPictures/5b88f8f161c42.jpg", "./js/components/suppPictures/5b88f8f1bb6a9.jpg", "./js/components/suppPictures/5b88f8f221127.jpg", "./js/components/suppPictures/5b88f8f27badf.jpg"],
      "indexNumber": 2,
      "image": "./js/components/securePictures/5b88f8e577048.jpg",
      "city": "Burbank",
      "price": 1750,
      "rooms": 1,
      "floorSpace": 700,
      "availability": "Available: Now",
      "fee": "NO FEE",
      "urli": "http://login.realtywarp.com/agent/newlisting/1052/BUR-17960"
}, {
      "suppImagePics": ["./js/components/suppPictures/5b8e26badc5f7.jpg", "./js/components/suppPictures/5b8e2737860a5.jpg", "./js/components/suppPictures/5b8e273866044.jpg", "./js/components/suppPictures/5b8e2739415a8.jpg", "./js/components/suppPictures/5b8e273a1d9e0.jpg", "./js/components/suppPictures/5b8e273aed81d.jpg", "./js/components/suppPictures/5b8e273bc9990.jpg", "./js/components/suppPictures/5b8e273ca829b.jpg", "./js/components/suppPictures/5b8e273d83f7e.jpg", "./js/components/suppPictures/5b8e273e60f53.jpg", "./js/components/suppPictures/5b8e273f40fc1.jpg", "./js/components/suppPictures/5b8e274021617.jpg", "./js/components/suppPictures/5b8e27902970a.jpg", "./js/components/suppPictures/5b8e279106081.jpg", "./js/components/suppPictures/5b8e2791d615a.jpg", "./js/components/suppPictures/5b8e2792b2d68.jpg", "./js/components/suppPictures/5b8e27938f7f3.jpg", "./js/components/suppPictures/5b8e27946f6fa.jpg", "./js/components/suppPictures/5b8e279549da9.jpg", "./js/components/suppPictures/5b8e27961e1a2.jpg", "./js/components/suppPictures/5b8e2796eb8b0.jpg", "./js/components/suppPictures/5b8e2797cbbe0.jpg", "./js/components/suppPictures/5b8e2798a4f9b.jpg", "./js/components/suppPictures/5b8e279978c8d.jpg", "./js/components/suppPictures/5b8e279a507e1.jpg", "./js/components/suppPictures/5b8e279b261c0.jpg", "./js/components/suppPictures/5b8e279bf0969.jpg", "./js/components/suppPictures/5b8e279cc865c.jpg", "./js/components/suppPictures/5b8e279d9ea96.jpg", "./js/components/suppPictures/5b8e279e752d5.jpg", "./js/components/suppPictures/5b8e279f4f331.jpg", "./js/components/suppPictures/5b8e27a02bf0e.jpg", "./js/components/suppPictures/5b8e27ed513e0.jpg", "./js/components/suppPictures/5b8e27ee346f5.jpg", "./js/components/suppPictures/5b8e27ef14fae.jpg", "./js/components/suppPictures/5b8e27efebba0.jpg"],
      "indexNumber": 3,
      "image": "./js/components/securePictures/5b8e26badc5f7.jpg",
      "city": "Woodland Hills",
      "price": 1900,
      "rooms": 1,
      "floorSpace": 700,
      "availability": "Available: Now",
      "fee": "NO FEE",
      "urli": "http://login.realtywarp.com/agent/newlisting/1052/LOS-17944"
}, {
      "suppImagePics": ["./js/components/suppPictures/5b8ce58a61964.jpg", "./js/components/suppPictures/5b8ce59d8a09e.jpg", "./js/components/suppPictures/5b8ce59e06d50.jpg", "./js/components/suppPictures/5b8ce59e73818.jpg", "./js/components/suppPictures/5b8ce5cdea9f1.jpg", "./js/components/suppPictures/5b8ce5ce90edb.jpg", "./js/components/suppPictures/5b8ce5cf06373.jpg", "./js/components/suppPictures/5b8ce5cf71e47.jpg", "./js/components/suppPictures/5b8ce5cfda738.jpg", "./js/components/suppPictures/5b8ce5d045b1e.jpg", "./js/components/suppPictures/5b8ce5d0a86bc.jpg", "./js/components/suppPictures/5b8ce5d11aaf4.jpg", "./js/components/suppPictures/5b8ce5d17b20e.jpg", "./js/components/suppPictures/5b8ce5d1da3b7.jpg", "./js/components/suppPictures/5b8ce5d246aa3.jpg", "./js/components/suppPictures/5b8ce5d2a351a.jpg", "./js/components/suppPictures/5b8ce5d30e241.jpg", "./js/components/suppPictures/5b8ce5d36bf36.jpg", "./js/components/suppPictures/5b8ce5d3c995e.jpg", "./js/components/suppPictures/5b8ce5d42e8c6.jpg", "./js/components/suppPictures/5b8ce5d48a4fa.jpg", "./js/components/suppPictures/5b8ce5d4e3c34.jpg", "./js/components/suppPictures/5b8ce5d54e279.jpg", "./js/components/suppPictures/5b8ce5d5acc4b.jpg", "./js/components/suppPictures/5b8ce5d70b635.jpg", "./js/components/suppPictures/5b8ce5d7a159d.jpg", "./js/components/suppPictures/5b8ce5d81ae20.jpg", "./js/components/suppPictures/5b8ce5d879130.jpg", "./js/components/suppPictures/5b8ce5d8da42a.jpg", "./js/components/suppPictures/5b8ce5d943567.jpg", "./js/components/suppPictures/5b8ce5d99c72a.jpg", "./js/components/suppPictures/5b8ce5da08d6e.jpg", "./js/components/suppPictures/5b8ce5da63073.jpg", "./js/components/suppPictures/5b8ce5dabdc1b.jpg", "./js/components/suppPictures/5b8ce5db242a9.jpg", "./js/components/suppPictures/5b8ce5db7de69.jpg", "./js/components/suppPictures/5b8ce5dbda8e4.jpg", "./js/components/suppPictures/5b8ce5dc431b2.jpg", "./js/components/suppPictures/5b8ce5dc9ec9c.jpg", "./js/components/suppPictures/5b8ce5dd074f9.jpg", "./js/components/suppPictures/5b8ce5dd65329.jpg", "./js/components/suppPictures/5b8ce5ddc140a.jpg", "./js/components/suppPictures/5b8ce5de30034.jpg", "./js/components/suppPictures/5b8ce5de90a01.jpg", "./js/components/suppPictures/5b8ce5df032f5.jpg", "./js/components/suppPictures/5b8ce5df6f614.jpg", "./js/components/suppPictures/5b8ce5dfd33fa.jpg", "./js/components/suppPictures/5b8ce5e0436d7.jpg", "./js/components/suppPictures/5b8ce5e0e24f9.jpg"],
      "indexNumber": 4,
      "image": "./js/components/securePictures/5b8ce58a61964.jpg",
      "city": "Van Nuys",
      "price": 1995,
      "rooms": 2,
      "floorSpace": 1000,
      "availability": "Available: Now",
      "fee": "NO FEE",
      "urli": "http://login.realtywarp.com/agent/newlisting/1052/LOS-17925"
}, {
      "suppImagePics": ["./js/components/suppPictures/5b8e2123ca4da.jpg", "./js/components/suppPictures/5b8e213a46d25.jpg", "./js/components/suppPictures/5b8e213ab29d9.jpg", "./js/components/suppPictures/5b8e213b26d45.jpg", "./js/components/suppPictures/5b8e213b946e0.jpg", "./js/components/suppPictures/5b8e213c05ea8.jpg", "./js/components/suppPictures/5b8e213c613b1.jpg", "./js/components/suppPictures/5b8e213cbc400.jpg", "./js/components/suppPictures/5b8e2175b52e1.jpg", "./js/components/suppPictures/5b8e217626d95.jpg", "./js/components/suppPictures/5b8e21768ca7a.jpg", "./js/components/suppPictures/5b8e2176f0754.jpg", "./js/components/suppPictures/5b8e21775c896.jpg", "./js/components/suppPictures/5b8e2177b9f63.jpg", "./js/components/suppPictures/5b8e21782729e.jpg", "./js/components/suppPictures/5b8e217881ad8.jpg", "./js/components/suppPictures/5b8e2178dca77.jpg", "./js/components/suppPictures/5b8e2179420f5.jpg", "./js/components/suppPictures/5b8e21799f3e1.jpg", "./js/components/suppPictures/5b8e217a06473.jpg", "./js/components/suppPictures/5b8e217a63476.jpg", "./js/components/suppPictures/5b8e217abe167.jpg", "./js/components/suppPictures/5b8e217b263c9.jpg", "./js/components/suppPictures/5b8e217b82449.jpg", "./js/components/suppPictures/5b8e217bdd041.jpg", "./js/components/suppPictures/5b8e217c434db.jpg", "./js/components/suppPictures/5b8e217ca0533.jpg", "./js/components/suppPictures/5b8e217d08936.jpg", "./js/components/suppPictures/5b8e217d68c57.jpg", "./js/components/suppPictures/5b8e217dc48e2.jpg", "./js/components/suppPictures/5b8e217e2b9f0.jpg", "./js/components/suppPictures/5b8e217e85d76.jpg", "./js/components/suppPictures/5b8e217ee1348.jpg", "./js/components/suppPictures/5b8e217f46a4d.jpg", "./js/components/suppPictures/5b8e217f9e79e.jpg", "./js/components/suppPictures/5b8e218006d90.jpg", "./js/components/suppPictures/5b8e21805f316.jpg", "./js/components/suppPictures/5b8e2180b9a8e.jpg", "./js/components/suppPictures/5b8e218123a45.jpg", "./js/components/suppPictures/5b8e218182ba5.jpg", "./js/components/suppPictures/5b8e2181e3669.jpg", "./js/components/suppPictures/5b8e21824e547.jpg", "./js/components/suppPictures/5b8e2182a7376.jpg", "./js/components/suppPictures/5b8e21830e360.jpg", "./js/components/suppPictures/5b8e21836a4e4.jpg", "./js/components/suppPictures/5b8e2183c548a.jpg", "./js/components/suppPictures/5b8e21842ce7b.jpg", "./js/components/suppPictures/5b8e21848c39a.jpg", "./js/components/suppPictures/5b8e2184eeecd.jpg", "./js/components/suppPictures/5b8e21855612a.jpg", "./js/components/suppPictures/5b8e2185af81b.jpg"],
      "indexNumber": 5,
      "image": "./js/components/securePictures/5b8e2123ca4da.jpg",
      "city": "Encino",
      "price": 2095,
      "rooms": 2,
      "floorSpace": 1100,
      "availability": "Available: Now",
      "fee": "NO FEE",
      "urli": "http://login.realtywarp.com/agent/newlisting/1052/LOS-17967"
}, {
      "suppImagePics": ["./js/components/suppPictures/5b90e72da08d3.jpg", "./js/components/suppPictures/5b90e72e0eeae.jpg", "./js/components/suppPictures/5b90e72e67ecf.jpg", "./js/components/suppPictures/5b90e72ec3e90.jpg", "./js/components/suppPictures/5b90e72f29e60.jpg", "./js/components/suppPictures/5b90e72f84e73.jpg", "./js/components/suppPictures/5b90e72fddd51.jpg", "./js/components/suppPictures/5b90e73042c65.jpg", "./js/components/suppPictures/5b90e7309e181.jpg", "./js/components/suppPictures/5b90e7310bd00.jpg", "./js/components/suppPictures/5b90e73167c12.jpg", "./js/components/suppPictures/5b90e731d6a27.jpg", "./js/components/suppPictures/5b90e73240d61.jpg", "./js/components/suppPictures/5b90e7329cb29.jpg", "./js/components/suppPictures/5b90e73304d9c.jpg", "./js/components/suppPictures/5b90e733618a9.jpg", "./js/components/suppPictures/5b90e733c082d.jpg", "./js/components/suppPictures/5b90e73428e0f.jpg", "./js/components/suppPictures/5b90e7348d846.jpg", "./js/components/suppPictures/5b90e734e9373.jpg", "./js/components/suppPictures/5b90e735553a5.jpg", "./js/components/suppPictures/5b90e735b2bc8.jpg", "./js/components/suppPictures/5b90e7361a76a.jpg", "./js/components/suppPictures/5b90e736748d2.jpg", "./js/components/suppPictures/5b90e736cf43e.jpg", "./js/components/suppPictures/5b90e7373825c.jpg", "./js/components/suppPictures/5b90e73790bca.jpg", "./js/components/suppPictures/5b90e737ec3e8.jpg", "./js/components/suppPictures/5b90e73851917.jpg", "./js/components/suppPictures/5b90e738b0aec.jpg", "./js/components/suppPictures/5b90e7392983d.jpg", "./js/components/suppPictures/5b90e7398f4fe.jpg", "./js/components/suppPictures/5b90e739f11f8.jpg"],
      "indexNumber": 6,
      "image": "./js/components/securePictures/5b90e72da08d3.jpg",
      "city": "Valley Village",
      "price": 2095,
      "rooms": 2,
      "floorSpace": 1000,
      "availability": "Available: Now",
      "fee": "NO FEE",
      "urli": "http://login.realtywarp.com/agent/newlisting/1052/LOS-17970"
}, {
      "suppImagePics": ["./js/components/suppPictures/5b7a4fb4971d2.jpg", "./js/components/suppPictures/5b7a4fb5075f4.jpg", "./js/components/suppPictures/5b7a4fb567673.jpg", "./js/components/suppPictures/5b7a4fb5c43f1.jpg", "./js/components/suppPictures/5b7a4fe47f2f2.jpg", "./js/components/suppPictures/5b7a4fe4de2e6.jpg", "./js/components/suppPictures/5b7a4fe546696.jpg", "./js/components/suppPictures/5b7a4fe5a3d66.jpg", "./js/components/suppPictures/5b7a4fe60ae4f.jpg", "./js/components/suppPictures/5b7a4fe665b84.jpg", "./js/components/suppPictures/5b7a4fe6c0d13.jpg", "./js/components/suppPictures/5b7a4fe728ec8.jpg", "./js/components/suppPictures/5b7a5042991b6.jpg", "./js/components/suppPictures/5b7a504300d10.jpg", "./js/components/suppPictures/5b7a50435a8e6.jpg", "./js/components/suppPictures/5b7a5043b564b.jpg", "./js/components/suppPictures/5b7a50442113c.jpg", "./js/components/suppPictures/5b7a5044818c1.jpg", "./js/components/suppPictures/5b7a5044dd0fd.jpg", "./js/components/suppPictures/5b7a504542e8c.jpg", "./js/components/suppPictures/5b7a50459bd03.jpg", "./js/components/suppPictures/5b7a5046030e8.jpg", "./js/components/suppPictures/5b7a50465f9be.jpg", "./js/components/suppPictures/5b7a5046bbb61.jpg", "./js/components/suppPictures/5b7a504722a0f.jpg", "./js/components/suppPictures/5b7a50477c20b.jpg", "./js/components/suppPictures/5b7a5047d8091.jpg", "./js/components/suppPictures/5b7a50483f429.jpg", "./js/components/suppPictures/5b7a50489a45c.jpg", "./js/components/suppPictures/5b7a504902e13.jpg", "./js/components/suppPictures/5b7a50495f24b.jpg", "./js/components/suppPictures/5b7a5049b9691.jpg", "./js/components/suppPictures/5b7a504a260bd.jpg", "./js/components/suppPictures/5b7a504a82ea0.jpg", "./js/components/suppPictures/5b7a504adff17.jpg", "./js/components/suppPictures/5b7a504b48ff5.jpg", "./js/components/suppPictures/5b7a504ba27e5.jpg", "./js/components/suppPictures/5b7a504c09f68.jpg", "./js/components/suppPictures/5b7a504c6aa0a.jpg", "./js/components/suppPictures/5b7a504cc8f5a.jpg", "./js/components/suppPictures/5b7a504d33eef.jpg"],
      "indexNumber": 7,
      "image": "./js/components/securePictures/5b7a4fb4971d2.jpg",
      "city": "Van Nuys",
      "price": 2150,
      "rooms": 2,
      "floorSpace": 1000,
      "availability": "Available: Now",
      "fee": "NO FEE",
      "urli": "http://login.realtywarp.com/agent/newlisting/1052/LOS-17946"
}, {
      "suppImagePics": ["./js/components/suppPictures/5b8baa6ac0975.jpg", "./js/components/suppPictures/5b8baa8ba7e74.jpg", "./js/components/suppPictures/5b8baa8c15e0f.jpg", "./js/components/suppPictures/5b8baa8c77d38.jpg", "./js/components/suppPictures/5b8baa8cd77f7.jpg", "./js/components/suppPictures/5b8baa8d45b6a.jpg", "./js/components/suppPictures/5b8baa8da5970.jpg", "./js/components/suppPictures/5b8baa8e136d4.jpg", "./js/components/suppPictures/5b8baa8e6f70c.jpg", "./js/components/suppPictures/5b8baa8eca509.jpg", "./js/components/suppPictures/5b8baa8f3055c.jpg", "./js/components/suppPictures/5b8baaac64eb4.jpg", "./js/components/suppPictures/5b8baaacbf8a9.jpg", "./js/components/suppPictures/5b8baaad26bbd.jpg", "./js/components/suppPictures/5b8baaad7ea12.jpg", "./js/components/suppPictures/5b8baaadd785f.jpg", "./js/components/suppPictures/5b8baaae3c334.jpg", "./js/components/suppPictures/5b8baaae968d7.jpg", "./js/components/suppPictures/5b8baaaef137f.jpg", "./js/components/suppPictures/5b8baaaf5974a.jpg", "./js/components/suppPictures/5b8baaafb3952.jpg", "./js/components/suppPictures/5b8baab01a49a.jpg", "./js/components/suppPictures/5b8baab07858b.jpg", "./js/components/suppPictures/5b8baadd7215d.jpg", "./js/components/suppPictures/5b8baaddd423b.jpg", "./js/components/suppPictures/5b8baade3ed81.jpg", "./js/components/suppPictures/5b8baade9fe9c.jpg", "./js/components/suppPictures/5b8baadf0b1af.jpg", "./js/components/suppPictures/5b8baadf65a5c.jpg", "./js/components/suppPictures/5b8baadfbeabc.jpg", "./js/components/suppPictures/5b8baae02399f.jpg", "./js/components/suppPictures/5b8baae07ef2d.jpg", "./js/components/suppPictures/5b8baae0d6754.jpg", "./js/components/suppPictures/5b8baae13b4cf.jpg", "./js/components/suppPictures/5b8baae198029.jpg", "./js/components/suppPictures/5b8bab0ae4f30.jpg", "./js/components/suppPictures/5b8bab0b4fa21.jpg", "./js/components/suppPictures/5b8bab0ba867d.jpg", "./js/components/suppPictures/5b8bab0c0c8b7.jpg", "./js/components/suppPictures/5b8bab0c6707b.jpg", "./js/components/suppPictures/5b8bab0cbf553.jpg", "./js/components/suppPictures/5b8bab0d2d0e8.jpg", "./js/components/suppPictures/5b8bab0d8723b.jpg", "./js/components/suppPictures/5b8bab0de621d.jpg", "./js/components/suppPictures/5b8bab0e4c0c1.jpg", "./js/components/suppPictures/5b8bab0ea9c17.jpg", "./js/components/suppPictures/5b8bab0f13f9b.jpg", "./js/components/suppPictures/5b8bab3560b7f.jpg", "./js/components/suppPictures/5b8bab35bae41.jpg", "./js/components/suppPictures/5b8bab361fa5b.jpg", "./js/components/suppPictures/5b8bab3674d5b.jpg", "./js/components/suppPictures/5b8bab36c97a3.jpg", "./js/components/suppPictures/5b8bab372b688.jpg", "./js/components/suppPictures/5b8bab37811ac.jpg", "./js/components/suppPictures/5b8bab37d7e0e.jpg", "./js/components/suppPictures/5b8bab3839c15.jpg", "./js/components/suppPictures/5b8bab3893e4d.jpg", "./js/components/suppPictures/5b8bab38ef7ef.jpg", "./js/components/suppPictures/5b8bab3955e4f.jpg", "./js/components/suppPictures/5b8bab58eff4d.jpg", "./js/components/suppPictures/5b8bab595c34b.jpg", "./js/components/suppPictures/5b8bab59b7df8.jpg", "./js/components/suppPictures/5b8bab5a21a80.jpg", "./js/components/suppPictures/5b8bab5a7963a.jpg", "./js/components/suppPictures/5b8bab5ad0b86.jpg", "./js/components/suppPictures/5b8bab5b36ead.jpg", "./js/components/suppPictures/5b8bab5b98589.jpg", "./js/components/suppPictures/5b8bab5bf1de6.jpg"],
      "indexNumber": 8,
      "image": "./js/components/securePictures/5b8baa6ac0975.jpg",
      "city": "Encino",
      "price": 2150,
      "rooms": 2,
      "floorSpace": 1100,
      "availability": "Available: Now",
      "fee": "NO FEE",
      "urli": "http://login.realtywarp.com/agent/newlisting/1052/LOS-17965"
}, {
      "suppImagePics": ["./js/components/suppPictures/5b8ba2bec2208.jpg", "./js/components/suppPictures/5b8ba2bf3ad20.jpg", "./js/components/suppPictures/5b8ba2bf9d06f.jpg", "./js/components/suppPictures/5b8ba2c005ebe.jpg", "./js/components/suppPictures/5b8ba2c06377f.jpg", "./js/components/suppPictures/5b8ba2c0be0fe.jpg", "./js/components/suppPictures/5b8ba2c123925.jpg", "./js/components/suppPictures/5b8ba2c17bf7f.jpg", "./js/components/suppPictures/5b8ba2c1da883.jpg", "./js/components/suppPictures/5b8ba2c2407e4.jpg", "./js/components/suppPictures/5b8ba2c29b528.jpg", "./js/components/suppPictures/5b8ba2c303026.jpg", "./js/components/suppPictures/5b8ba2c35cee1.jpg", "./js/components/suppPictures/5b8ba2c3bc95f.jpg", "./js/components/suppPictures/5b8ba2c425672.jpg", "./js/components/suppPictures/5b8ba2c4854a1.jpg", "./js/components/suppPictures/5b8ba2c4de878.jpg", "./js/components/suppPictures/5b8ba2c544c6f.jpg", "./js/components/suppPictures/5b8ba2c5a1791.jpg", "./js/components/suppPictures/5b8ba2c60d036.jpg", "./js/components/suppPictures/5b8ba2c66ba45.jpg", "./js/components/suppPictures/5b8ba2c6c7815.jpg", "./js/components/suppPictures/5b8ba2c72dda4.jpg", "./js/components/suppPictures/5b8ba2c78ac06.jpg", "./js/components/suppPictures/5b8ba2c7eee99.jpg", "./js/components/suppPictures/5b8ba2c85a559.jpg", "./js/components/suppPictures/5b8ba2c8b4d62.jpg", "./js/components/suppPictures/5b8ba2c91e947.jpg", "./js/components/suppPictures/5b8ba2c97c4c9.jpg", "./js/components/suppPictures/5b8ba2c9d8f94.jpg", "./js/components/suppPictures/5b8ba2ca42131.jpg", "./js/components/suppPictures/5b8ba2ca9d338.jpg", "./js/components/suppPictures/5b8ba2cb10e32.jpg"],
      "indexNumber": 9,
      "image": "./js/components/securePictures/5b8ba2bec2208.jpg",
      "city": "Toluca Lake",
      "price": 2170,
      "rooms": 1,
      "floorSpace": 890,
      "availability": "Available: Now",
      "fee": "NO FEE",
      "urli": "http://login.realtywarp.com/agent/newlisting/1052/LOS-17964"
}, {
      "suppImagePics": ["./js/components/suppPictures/5ae2b91bf242d.jpg", "./js/components/suppPictures/5ae2b91c6bb48.jpg", "./js/components/suppPictures/5ae2b91cdaabf.jpg", "./js/components/suppPictures/5ae2b91d4d21c.jpg", "./js/components/suppPictures/5ae2b91db85ea.jpg", "./js/components/suppPictures/5ae2b91e2b7b4.jpg", "./js/components/suppPictures/5ae2b91e86d3d.jpg", "./js/components/suppPictures/5ae2b91ee0732.jpg", "./js/components/suppPictures/5ae2b91f49d13.jpg", "./js/components/suppPictures/5ae2b91fa71c2.jpg", "./js/components/suppPictures/5ae2b9200e9f6.jpg", "./js/components/suppPictures/5ae2b92067347.jpg", "./js/components/suppPictures/5ae2b920c06c1.jpg", "./js/components/suppPictures/5ae2b92128883.jpg", "./js/components/suppPictures/5ae2b9218122e.jpg", "./js/components/suppPictures/5ae2b921db881.jpg", "./js/components/suppPictures/5ae2b92244140.jpg", "./js/components/suppPictures/5ae2b922a2089.jpg", "./js/components/suppPictures/5ae2b92308355.jpg", "./js/components/suppPictures/5ae2b923615db.jpg", "./js/components/suppPictures/5ae2b923b7a72.jpg", "./js/components/suppPictures/5ae2b9241c9f3.jpg", "./js/components/suppPictures/5ae2b92476278.jpg", "./js/components/suppPictures/5ae2b924d1ad4.jpg", "./js/components/suppPictures/5ae2b92535a2c.jpg", "./js/components/suppPictures/5ae2b9258d901.jpg", "./js/components/suppPictures/5ae2b926005f2.jpg", "./js/components/suppPictures/5ae2b9265c093.jpg", "./js/components/suppPictures/5ae2b926b686b.jpg", "./js/components/suppPictures/5ae2b9272808e.jpg", "./js/components/suppPictures/5ae2b9278152d.jpg", "./js/components/suppPictures/5ae2b927def6e.jpg", "./js/components/suppPictures/5ae2b92853b97.jpg", "./js/components/suppPictures/5ae2b928aeca3.jpg", "./js/components/suppPictures/5ae2b92913759.jpg", "./js/components/suppPictures/5ae2b929707d3.jpg", "./js/components/suppPictures/5ae2b929cc16f.jpg", "./js/components/suppPictures/5ae2b92a3e089.jpg", "./js/components/suppPictures/5ae2b92a9f680.jpg", "./js/components/suppPictures/5ae2b92b0a15a.jpg"],
      "indexNumber": 10,
      "image": "./js/components/securePictures/5ae2b91bf242d.jpg",
      "city": "Studio City",
      "price": 2195,
      "rooms": 1,
      "floorSpace": 700,
      "availability": "Available: Now",
      "fee": "NO FEE",
      "urli": "http://login.realtywarp.com/agent/newlisting/1052/LOS-17701"
}, {
      "suppImagePics": ["./js/components/suppPictures/5b6d2bcf99016.jpg", "./js/components/suppPictures/5b6d2bda8d7f1.jpg", "./js/components/suppPictures/5b6d2bec0a833.jpg", "./js/components/suppPictures/5b6d2c108b407.jpg", "./js/components/suppPictures/5b6d2c10f2b65.jpg", "./js/components/suppPictures/5b6d2c115df1c.jpg", "./js/components/suppPictures/5b6d2c11bbe11.jpg", "./js/components/suppPictures/5b6d2c12275e3.jpg", "./js/components/suppPictures/5b6d2c35ba29a.jpg", "./js/components/suppPictures/5b6d2c3625f9e.jpg", "./js/components/suppPictures/5b6d2c36872fa.jpg", "./js/components/suppPictures/5b6d2c36e72d8.jpg", "./js/components/suppPictures/5b6d2c374da46.jpg", "./js/components/suppPictures/5b6d2c37a7dbf.jpg", "./js/components/suppPictures/5b6d2c3810cc7.jpg", "./js/components/suppPictures/5b6d2c386db31.jpg", "./js/components/suppPictures/5b6d2c71ca77c.jpg", "./js/components/suppPictures/5b6d2c72340f4.jpg", "./js/components/suppPictures/5b6d2c728fe53.jpg", "./js/components/suppPictures/5b6d2c72e84ee.jpg", "./js/components/suppPictures/5b6d2c734d5a7.jpg", "./js/components/suppPictures/5b6d2c73abca7.jpg", "./js/components/suppPictures/5b6d2c7414031.jpg", "./js/components/suppPictures/5b6d2c7475b9c.jpg", "./js/components/suppPictures/5b6d2c74d44ab.jpg", "./js/components/suppPictures/5b6d2c753d98d.jpg", "./js/components/suppPictures/5b6d2c759ba78.jpg", "./js/components/suppPictures/5b6d2c76062b4.jpg", "./js/components/suppPictures/5b6d2c765c534.jpg", "./js/components/suppPictures/5b6d2c76b73d9.jpg", "./js/components/suppPictures/5b6d2c7717265.jpg", "./js/components/suppPictures/5b6d2c776ff13.jpg", "./js/components/suppPictures/5b6d2c77c91df.jpg", "./js/components/suppPictures/5b6d2c782e900.jpg", "./js/components/suppPictures/5b6d2c7885dcf.jpg", "./js/components/suppPictures/5b6d2c78e05a2.jpg", "./js/components/suppPictures/5b6d2c7943a64.jpg", "./js/components/suppPictures/5b6d2c799c7af.jpg", "./js/components/suppPictures/5b6d2c7a01095.jpg", "./js/components/suppPictures/5b6d2c7a59509.jpg", "./js/components/suppPictures/5b6d2c7ab1043.jpg", "./js/components/suppPictures/5b6d2c7b176bf.jpg", "./js/components/suppPictures/5b6d2c7b6eef2.jpg", "./js/components/suppPictures/5b6d2c7bc7264.jpg", "./js/components/suppPictures/5b6d2c7c2c517.jpg", "./js/components/suppPictures/5b6d2c7c8678b.jpg", "./js/components/suppPictures/5b6d2c7cdcd15.jpg", "./js/components/suppPictures/5b6d2c7d424e6.jpg", "./js/components/suppPictures/5b6d2c7d98175.jpg", "./js/components/suppPictures/5b6d2c7def5b0.jpg", "./js/components/suppPictures/5b6d2c7e50ad4.jpg", "./js/components/suppPictures/5b6d2c7ea605e.jpg", "./js/components/suppPictures/5b6d2c7f0e0a9.jpg", "./js/components/suppPictures/5b6d2c7f6e109.jpg", "./js/components/suppPictures/5b6d2c7fcc91c.jpg", "./js/components/suppPictures/5b6d2c803a401.jpg", "./js/components/suppPictures/5b6d2c809505c.jpg", "./js/components/suppPictures/5b6d2c80e90d3.jpg", "./js/components/suppPictures/5b6d2c8148d93.jpg", "./js/components/suppPictures/5b6d2c81a0d32.jpg"],
      "indexNumber": 11,
      "image": "./js/components/securePictures/5b6d2bcf99016.jpg",
      "city": "North Hollywood",
      "price": 2395,
      "rooms": 2,
      "floorSpace": 924,
      "availability": "Available: Now",
      "fee": "NO FEE",
      "urli": "http://login.realtywarp.com/agent/newlisting/1052/LOS-17924"
}, {
      "suppImagePics": ["./js/components/suppPictures/5b6d229227d74.jpg", "./js/components/suppPictures/5b6d229290f00.jpg", "./js/components/suppPictures/5b6d22930106e.jpg", "./js/components/suppPictures/5b6d229362f3e.jpg", "./js/components/suppPictures/5b6d2293c3ddf.jpg", "./js/components/suppPictures/5b6d2294372b2.jpg", "./js/components/suppPictures/5b6d2294934ca.jpg", "./js/components/suppPictures/5b6d2294ed6e8.jpg", "./js/components/suppPictures/5b6d229556ad3.jpg", "./js/components/suppPictures/5b6d2295b0092.jpg", "./js/components/suppPictures/5b6d229617342.jpg", "./js/components/suppPictures/5b6d229676b16.jpg", "./js/components/suppPictures/5b6d2296d496b.jpg", "./js/components/suppPictures/5b6d22973cff1.jpg", "./js/components/suppPictures/5b6d22979bd76.jpg", "./js/components/suppPictures/5b6d229800a27.jpg", "./js/components/suppPictures/5b6d22985aa2f.jpg", "./js/components/suppPictures/5b6d2298b52e8.jpg", "./js/components/suppPictures/5b6d22991c0cf.jpg", "./js/components/suppPictures/5b6d229978683.jpg", "./js/components/suppPictures/5b6d2299d1add.jpg", "./js/components/suppPictures/5b6d229a36e18.jpg", "./js/components/suppPictures/5b6d229a91dbd.jpg", "./js/components/suppPictures/5b6d229aed2aa.jpg", "./js/components/suppPictures/5b6d229b58333.jpg", "./js/components/suppPictures/5b6d229bb4d83.jpg", "./js/components/suppPictures/5b6d229c25962.jpg", "./js/components/suppPictures/5b6d229c7fd02.jpg", "./js/components/suppPictures/5b6d229ce383a.jpg", "./js/components/suppPictures/5b6d229d49f0c.jpg", "./js/components/suppPictures/5b6d229da5450.jpg", "./js/components/suppPictures/5b6d229e0f8dc.jpg", "./js/components/suppPictures/5b6d229e8909b.jpg", "./js/components/suppPictures/5b6d229ee25ce.jpg", "./js/components/suppPictures/5b6d229f4b401.jpg", "./js/components/suppPictures/5b6d229fa69d3.jpg", "./js/components/suppPictures/5b6d22a00e223.jpg", "./js/components/suppPictures/5b6d22a06b43f.jpg", "./js/components/suppPictures/5b6d22a0c610f.jpg", "./js/components/suppPictures/5b6d22a133d12.jpg", "./js/components/suppPictures/5b6d22a190009.jpg", "./js/components/suppPictures/5b6d22a1eea9b.jpg", "./js/components/suppPictures/5b6d22a259f23.jpg", "./js/components/suppPictures/5b6d22a2b8f1d.jpg", "./js/components/suppPictures/5b6d22a32befe.jpg", "./js/components/suppPictures/5b6d22a39d526.jpg", "./js/components/suppPictures/5b6d22a413ff1.jpg", "./js/components/suppPictures/5b6d22a47dc68.jpg", "./js/components/suppPictures/5b6d22a4e1ae2.jpg", "./js/components/suppPictures/5b6d22a550d43.jpg"],
      "indexNumber": 12,
      "image": "./js/components/securePictures/5b6d229227d74.jpg",
      "city": "Sherman Oaks",
      "price": 2500,
      "rooms": 2,
      "floorSpace": 1080,
      "availability": "Available: Now",
      "fee": "NO FEE",
      "urli": "http://login.realtywarp.com/agent/newlisting/1052/LOS-17923"
}, {
      "suppImagePics": ["./js/components/suppPictures/5b806fec4feab.jpg", "./js/components/suppPictures/5b806fecaead8.jpg", "./js/components/suppPictures/5b806fed1918f.jpg", "./js/components/suppPictures/5b806fed79470.jpg", "./js/components/suppPictures/5b806fedd8e83.jpg", "./js/components/suppPictures/5b806fee43351.jpg", "./js/components/suppPictures/5b806fee9eca8.jpg", "./js/components/suppPictures/5b806fef09e59.jpg", "./js/components/suppPictures/5b806fef64b78.jpg", "./js/components/suppPictures/5b806fefc11a3.jpg", "./js/components/suppPictures/5b806ff02839b.jpg", "./js/components/suppPictures/5b806ff084f74.jpg", "./js/components/suppPictures/5b806ff0e24b4.jpg", "./js/components/suppPictures/5b806ff14b85c.jpg", "./js/components/suppPictures/5b806ff1a7779.jpg", "./js/components/suppPictures/5b806ff20dbb8.jpg", "./js/components/suppPictures/5b806ff269948.jpg", "./js/components/suppPictures/5b806ff2c599e.jpg", "./js/components/suppPictures/5b806ff32e51b.jpg", "./js/components/suppPictures/5b806ff388dd5.jpg", "./js/components/suppPictures/5b806ff3e415e.jpg", "./js/components/suppPictures/5b806ff449c5f.jpg", "./js/components/suppPictures/5b806ff4a31fa.jpg", "./js/components/suppPictures/5b806ff50bdae.jpg", "./js/components/suppPictures/5b806ff569599.jpg", "./js/components/suppPictures/5b806ff5c4c36.jpg", "./js/components/suppPictures/5b806ff62b30b.jpg", "./js/components/suppPictures/5b806ff684f4e.jpg", "./js/components/suppPictures/5b806ff6e06cf.jpg", "./js/components/suppPictures/5b806ff74b30e.jpg", "./js/components/suppPictures/5b806ff7ac388.jpg"],
      "indexNumber": 13,
      "image": "./js/components/securePictures/5b806fec4feab.jpg",
      "city": "Studio City",
      "price": 2795,
      "rooms": 2,
      "floorSpace": 950,
      "availability": "Available: Now",
      "fee": "NO FEE",
      "urli": "http://login.realtywarp.com/agent/newlisting/1052/LOS-17951"
}, {
      "suppImagePics": ["./js/components/suppPictures/5b8cec2cedf79.jpg", "./js/components/suppPictures/5b8cec4fb42d3.jpg", "./js/components/suppPictures/5b8cec5031c4d.jpg", "./js/components/suppPictures/5b8cec50938b0.jpg", "./js/components/suppPictures/5b8cec50f30d3.jpg", "./js/components/suppPictures/5b8cec515fa32.jpg", "./js/components/suppPictures/5b8cec51c0f9f.jpg", "./js/components/suppPictures/5b8cec522bcf5.jpg", "./js/components/suppPictures/5b8cec7cc9237.jpg", "./js/components/suppPictures/5b8cec7d3d37e.jpg", "./js/components/suppPictures/5b8cec7d99806.jpg", "./js/components/suppPictures/5b8cec7e00618.jpg", "./js/components/suppPictures/5b8cec7e5b9d3.jpg", "./js/components/suppPictures/5b8cec7eb87f6.jpg", "./js/components/suppPictures/5b8cec7f2f28f.jpg", "./js/components/suppPictures/5b8cec7f9273c.jpg", "./js/components/suppPictures/5b8cec7ff22b0.jpg", "./js/components/suppPictures/5b8cec806700a.jpg", "./js/components/suppPictures/5b8cec80c61c1.jpg", "./js/components/suppPictures/5b8cec812f566.jpg", "./js/components/suppPictures/5b8cec818d593.jpg", "./js/components/suppPictures/5b8cec81ec6f5.jpg", "./js/components/suppPictures/5b8cec82553a1.jpg", "./js/components/suppPictures/5b8cec82b6e48.jpg", "./js/components/suppPictures/5b8cec831ef90.jpg", "./js/components/suppPictures/5b8cec837acf3.jpg", "./js/components/suppPictures/5b8cec83d7528.jpg", "./js/components/suppPictures/5b8cec843f69a.jpg", "./js/components/suppPictures/5b8cec8499973.jpg", "./js/components/suppPictures/5b8cec84f1e0d.jpg", "./js/components/suppPictures/5b8cec855a2d2.jpg", "./js/components/suppPictures/5b8cec85b4cb9.jpg", "./js/components/suppPictures/5b8cec86269f6.jpg", "./js/components/suppPictures/5b8cec868c8bd.jpg", "./js/components/suppPictures/5b8cec870348d.jpg", "./js/components/suppPictures/5b8cec8765743.jpg", "./js/components/suppPictures/5b8cec87c301a.jpg", "./js/components/suppPictures/5b8cec882ba95.jpg", "./js/components/suppPictures/5b8cec8885953.jpg", "./js/components/suppPictures/5b8cec88dfffa.jpg", "./js/components/suppPictures/5b8cec8947102.jpg", "./js/components/suppPictures/5b8cec89a2236.jpg", "./js/components/suppPictures/5b8cec8a0c2cd.jpg", "./js/components/suppPictures/5b8cec8a6782b.jpg", "./js/components/suppPictures/5b8cec8ac403f.jpg", "./js/components/suppPictures/5b8cec8b29848.jpg", "./js/components/suppPictures/5b8cec8b830c9.jpg"],
      "indexNumber": 14,
      "image": "./js/components/securePictures/5b8cec2cedf79.jpg",
      "city": "Sherman Oaks",
      "price": 2795,
      "rooms": 2,
      "floorSpace": 1150,
      "availability": "Available: Now",
      "fee": "NO FEE",
      "urli": "http://login.realtywarp.com/agent/newlisting/1052/LOS-17966"
}, {
      "suppImagePics": ["./js/components/suppPictures/5b3da5316aad5.jpg", "./js/components/suppPictures/5b3da531d8a1c.jpg", "./js/components/suppPictures/5b3da5325bb70.jpg", "./js/components/suppPictures/5b3da532c11c6.jpg", "./js/components/suppPictures/5b3da5333650a.jpg", "./js/components/suppPictures/5b3da533a5af4.jpg", "./js/components/suppPictures/5b3da53422f89.jpg", "./js/components/suppPictures/5b3da5349ab86.jpg", "./js/components/suppPictures/5b3da53514e71.jpg", "./js/components/suppPictures/5b3da5357a1a7.jpg", "./js/components/suppPictures/5b3da535ea174.jpg", "./js/components/suppPictures/5b3da53663817.jpg", "./js/components/suppPictures/5b3da556edefa.jpg", "./js/components/suppPictures/5b3da55756dca.jpg", "./js/components/suppPictures/5b3da557be25e.jpg", "./js/components/suppPictures/5b3da5583269b.jpg", "./js/components/suppPictures/5b3da5588ee34.jpg", "./js/components/suppPictures/5b3da5591a769.jpg", "./js/components/suppPictures/5b3da55994784.jpg", "./js/components/suppPictures/5b3da55a210ea.jpg", "./js/components/suppPictures/5b3da55ab2136.jpg", "./js/components/suppPictures/5b3da55b4065a.jpg", "./js/components/suppPictures/5b3da55bce46f.jpg", "./js/components/suppPictures/5b3da55c54da3.jpg", "./js/components/suppPictures/5b3da58faa4bd.jpg", "./js/components/suppPictures/5b3da590210c1.jpg", "./js/components/suppPictures/5b3da59080f35.jpg", "./js/components/suppPictures/5b3da590e17b2.jpg", "./js/components/suppPictures/5b3da5914c4f3.jpg", "./js/components/suppPictures/5b3da591a8e2d.jpg", "./js/components/suppPictures/5b3da5920fb00.jpg", "./js/components/suppPictures/5b3da5926bcfe.jpg", "./js/components/suppPictures/5b3da592c97cb.jpg", "./js/components/suppPictures/5b3da5932f9b0.jpg", "./js/components/suppPictures/5b3da5938b95a.jpg", "./js/components/suppPictures/5b3da593e893d.jpg", "./js/components/suppPictures/5b3da5bfe3b50.jpg", "./js/components/suppPictures/5b3da5c04a894.jpg", "./js/components/suppPictures/5b3da5c0af3aa.jpg", "./js/components/suppPictures/5b3da5c11733e.jpg", "./js/components/suppPictures/5b3da5c1765b6.jpg", "./js/components/suppPictures/5b3da5c1e3d53.jpg", "./js/components/suppPictures/5b3da5c25a65d.jpg", "./js/components/suppPictures/5b3da5c2bb0e7.jpg", "./js/components/suppPictures/5b3da5c3233e7.jpg", "./js/components/suppPictures/5b3da5c3af146.jpg", "./js/components/suppPictures/5b3da5c43d779.jpg", "./js/components/suppPictures/5b3da5c49a2c9.jpg", "./js/components/suppPictures/5b3da5f10ce2a.jpg", "./js/components/suppPictures/5b3da5f16deb2.jpg", "./js/components/suppPictures/5b3da5f1cf4ad.jpg", "./js/components/suppPictures/5b3da5f24479a.jpg", "./js/components/suppPictures/5b3da5f2a7985.jpg", "./js/components/suppPictures/5b3da5f3124a7.jpg", "./js/components/suppPictures/5b3da5f37fcfa.jpg", "./js/components/suppPictures/5b3da5f402887.jpg", "./js/components/suppPictures/5b3da5f47e9b2.jpg", "./js/components/suppPictures/5b3da5f4e38bd.jpg", "./js/components/suppPictures/5b3da5f555030.jpg", "./js/components/suppPictures/5b3da5f5c957a.jpg", "./js/components/suppPictures/5b3da5f64a379.jpg", "./js/components/suppPictures/5b3da5f6bcaaa.jpg"],
      "indexNumber": 15,
      "image": "./js/components/securePictures/5b3da5316aad5.jpg",
      "city": "Toluca Lake",
      "price": 2870,
      "rooms": 2,
      "floorSpace": 1157,
      "availability": "Available: Now",
      "fee": "NO FEE",
      "urli": "http://login.realtywarp.com/agent/newlisting/1052/LOS-17833"
}, {
      "suppImagePics": ["./js/components/suppPictures/5b81e6f8aeedb.jpg", "./js/components/suppPictures/5b81e7674ea0b.jpg", "./js/components/suppPictures/5b81e767a935f.jpg", "./js/components/suppPictures/5b81e7680f492.jpg", "./js/components/suppPictures/5b81e7686a2f2.jpg", "./js/components/suppPictures/5b81e768c6530.jpg", "./js/components/suppPictures/5b81e76930847.jpg", "./js/components/suppPictures/5b81e7698a37d.jpg", "./js/components/suppPictures/5b81e769e8b4f.jpg", "./js/components/suppPictures/5b81e76a59c8f.jpg", "./js/components/suppPictures/5b81e76ab5cab.jpg", "./js/components/suppPictures/5b81e76b1de26.jpg", "./js/components/suppPictures/5b81e76b79718.jpg", "./js/components/suppPictures/5b81e78bec1a5.jpg", "./js/components/suppPictures/5b81e78c54854.jpg", "./js/components/suppPictures/5b81e78cad6fd.jpg", "./js/components/suppPictures/5b81e78d19f16.jpg", "./js/components/suppPictures/5b81e78d79ef7.jpg", "./js/components/suppPictures/5b81e78dd3602.jpg", "./js/components/suppPictures/5b81e78e3cd63.jpg", "./js/components/suppPictures/5b81e78e96732.jpg", "./js/components/suppPictures/5b81e78ef1e14.jpg", "./js/components/suppPictures/5b81e78f59c83.jpg", "./js/components/suppPictures/5b81e78fb73e7.jpg", "./js/components/suppPictures/5b81e79020f17.jpg", "./js/components/suppPictures/5b81e7ad03c47.jpg", "./js/components/suppPictures/5b81e7ad5fa34.jpg", "./js/components/suppPictures/5b81e7adbbef7.jpg", "./js/components/suppPictures/5b81e7ae20e05.jpg", "./js/components/suppPictures/5b81e7ae7c446.jpg", "./js/components/suppPictures/5b81e7aed9832.jpg", "./js/components/suppPictures/5b81e7af40edc.jpg", "./js/components/suppPictures/5b81e7af9ae3c.jpg", "./js/components/suppPictures/5b81e7b003984.jpg", "./js/components/suppPictures/5b81e7b06581d.jpg", "./js/components/suppPictures/5b81e7b0c1719.jpg", "./js/components/suppPictures/5b81e7b127008.jpg", "./js/components/suppPictures/5b81e7d8ed9c8.jpg", "./js/components/suppPictures/5b81e7d9549f1.jpg", "./js/components/suppPictures/5b81e7d9ad0e4.jpg", "./js/components/suppPictures/5b81e7da1b08f.jpg", "./js/components/suppPictures/5b81e7da7929d.jpg", "./js/components/suppPictures/5b81e7dad4563.jpg", "./js/components/suppPictures/5b81e7db3b195.jpg", "./js/components/suppPictures/5b81e7db96906.jpg", "./js/components/suppPictures/5b81e7dbef6dc.jpg", "./js/components/suppPictures/5b81e7dc57002.jpg", "./js/components/suppPictures/5b81e7dcb4ac1.jpg", "./js/components/suppPictures/5b81e7dd1e3c1.jpg", "./js/components/suppPictures/5b81e7fae3501.jpg", "./js/components/suppPictures/5b81e7fb54d90.jpg", "./js/components/suppPictures/5b81e7fbb334a.jpg", "./js/components/suppPictures/5b81e7fc1cc23.jpg", "./js/components/suppPictures/5b81e7fc7e0b0.jpg", "./js/components/suppPictures/5b81e7fce00ec.jpg", "./js/components/suppPictures/5b81e7fd5561e.jpg", "./js/components/suppPictures/5b81e7fdbbeb7.jpg", "./js/components/suppPictures/5b81e7fe25be2.jpg"],
      "indexNumber": 16,
      "image": "./js/components/securePictures/5b81e6f8aeedb.jpg",
      "city": "Toluca Lake",
      "price": 2870,
      "rooms": 2,
      "floorSpace": 1190,
      "availability": "Available: Now",
      "fee": "NO FEE",
      "urli": "http://login.realtywarp.com/agent/newlisting/1052/LOS-17954"
}, {
      "suppImagePics": ["./js/components/suppPictures/5b90d25b19e97.jpg", "./js/components/suppPictures/5b90d2be1d9e3.jpg", "./js/components/suppPictures/5b90d2be8197d.jpg", "./js/components/suppPictures/5b90d2bedfeaa.jpg", "./js/components/suppPictures/5b90d2bf4a81f.jpg", "./js/components/suppPictures/5b90d2bfa8f4d.jpg", "./js/components/suppPictures/5b90d2c01558f.jpg", "./js/components/suppPictures/5b90d2c0754c6.jpg", "./js/components/suppPictures/5b90d2c0d4fad.jpg", "./js/components/suppPictures/5b90d2c13e9f7.jpg", "./js/components/suppPictures/5b90d2c1991e1.jpg", "./js/components/suppPictures/5b90d2c202276.jpg", "./js/components/suppPictures/5b90d2c25f1f2.jpg", "./js/components/suppPictures/5b90d2e821db1.jpg", "./js/components/suppPictures/5b90d2e87e0af.jpg", "./js/components/suppPictures/5b90d2e8d800a.jpg", "./js/components/suppPictures/5b90d2e93f344.jpg", "./js/components/suppPictures/5b90d2e9997d4.jpg", "./js/components/suppPictures/5b90d2ea00bbf.jpg", "./js/components/suppPictures/5b90d2ea5ef55.jpg", "./js/components/suppPictures/5b90d2eabec4f.jpg", "./js/components/suppPictures/5b90d2eb28669.jpg", "./js/components/suppPictures/5b90d2eb868cf.jpg", "./js/components/suppPictures/5b90d2ebe25c7.jpg", "./js/components/suppPictures/5b90d2ec4ad84.jpg", "./js/components/suppPictures/5b90d30d2b001.jpg", "./js/components/suppPictures/5b90d30d88726.jpg", "./js/components/suppPictures/5b90d30de333d.jpg", "./js/components/suppPictures/5b90d30e4b084.jpg", "./js/components/suppPictures/5b90d30eaa0b8.jpg", "./js/components/suppPictures/5b90d30f11d05.jpg", "./js/components/suppPictures/5b90d30f6d44e.jpg", "./js/components/suppPictures/5b90d30fcde6c.jpg", "./js/components/suppPictures/5b90d31034c14.jpg", "./js/components/suppPictures/5b90d31091ff8.jpg", "./js/components/suppPictures/5b90d310ee618.jpg", "./js/components/suppPictures/5b90d3115535d.jpg", "./js/components/suppPictures/5b90d3345d604.jpg", "./js/components/suppPictures/5b90d334b9476.jpg", "./js/components/suppPictures/5b90d3351f613.jpg", "./js/components/suppPictures/5b90d3357ba29.jpg", "./js/components/suppPictures/5b90d335d6452.jpg", "./js/components/suppPictures/5b90d3363d047.jpg", "./js/components/suppPictures/5b90d33698f0c.jpg", "./js/components/suppPictures/5b90d33701378.jpg", "./js/components/suppPictures/5b90d3375ed6d.jpg", "./js/components/suppPictures/5b90d337ba223.jpg", "./js/components/suppPictures/5b90d338202f8.jpg", "./js/components/suppPictures/5b90d3387cc25.jpg", "./js/components/suppPictures/5b90d355d4788.jpg", "./js/components/suppPictures/5b90d3563b251.jpg", "./js/components/suppPictures/5b90d35697797.jpg", "./js/components/suppPictures/5b90d356f2a3a.jpg", "./js/components/suppPictures/5b90d35759680.jpg", "./js/components/suppPictures/5b90d357b5757.jpg", "./js/components/suppPictures/5b90d3581bc56.jpg", "./js/components/suppPictures/5b90d35877d65.jpg", "./js/components/suppPictures/5b90d358d46cd.jpg", "./js/components/suppPictures/5b90d3593c87e.jpg", "./js/components/suppPictures/5b90d3599819d.jpg", "./js/components/suppPictures/5b90d35a00f38.jpg", "./js/components/suppPictures/5b90d37552afb.jpg", "./js/components/suppPictures/5b90d375af5e2.jpg", "./js/components/suppPictures/5b90d376132ec.jpg", "./js/components/suppPictures/5b90d37669716.jpg", "./js/components/suppPictures/5b90d376c0265.jpg", "./js/components/suppPictures/5b90d37726326.jpg", "./js/components/suppPictures/5b90d3777fc15.jpg", "./js/components/suppPictures/5b90d377dc0f1.jpg", "./js/components/suppPictures/5b90d3784539e.jpg"],
      "indexNumber": 17,
      "image": "./js/components/securePictures/5b90d25b19e97.jpg",
      "city": "Toluca Lake",
      "price": 2970,
      "rooms": 2,
      "floorSpace": 1235,
      "availability": "Available: Now",
      "fee": "NO FEE",
      "urli": "http://login.realtywarp.com/agent/newlisting/1052/LOS-17968"
}, {
      "suppImagePics": ["./js/components/suppPictures/5b90deb5e2af0.jpg", "./js/components/suppPictures/5b90deeaec161.jpg", "./js/components/suppPictures/5b90deeb60a63.jpg", "./js/components/suppPictures/5b90deebc3762.jpg", "./js/components/suppPictures/5b90deec380e6.jpg", "./js/components/suppPictures/5b90deec9dea5.jpg", "./js/components/suppPictures/5b90deed03d9a.jpg", "./js/components/suppPictures/5b90deed6677a.jpg", "./js/components/suppPictures/5b90deedc261c.jpg", "./js/components/suppPictures/5b90deee2d4d7.jpg", "./js/components/suppPictures/5b90deee8916d.jpg", "./js/components/suppPictures/5b90deeee86ac.jpg", "./js/components/suppPictures/5b90df1a72da0.jpg", "./js/components/suppPictures/5b90df1ad6b2e.jpg", "./js/components/suppPictures/5b90df1b42abb.jpg", "./js/components/suppPictures/5b90df1b9a1e6.jpg", "./js/components/suppPictures/5b90df1c00a32.jpg", "./js/components/suppPictures/5b90df1c5a1ce.jpg", "./js/components/suppPictures/5b90df1cb36c5.jpg", "./js/components/suppPictures/5b90df1d156ae.jpg", "./js/components/suppPictures/5b90df1d6a2dc.jpg", "./js/components/suppPictures/5b90df1dc2d35.jpg", "./js/components/suppPictures/5b90df1e26673.jpg", "./js/components/suppPictures/5b90df1e84559.jpg", "./js/components/suppPictures/5b90df1edb4a0.jpg", "./js/components/suppPictures/5b90df1f42db6.jpg", "./js/components/suppPictures/5b90df1f9aa0b.jpg", "./js/components/suppPictures/5b90df2005926.jpg", "./js/components/suppPictures/5b90df421dd74.jpg", "./js/components/suppPictures/5b90df4284243.jpg", "./js/components/suppPictures/5b90df42e5845.jpg", "./js/components/suppPictures/5b90df4350cb8.jpg", "./js/components/suppPictures/5b90df43adfb7.jpg", "./js/components/suppPictures/5b90df441a06e.jpg", "./js/components/suppPictures/5b90df44791a4.jpg", "./js/components/suppPictures/5b90df44d9357.jpg", "./js/components/suppPictures/5b90df4541e03.jpg", "./js/components/suppPictures/5b90df459f85e.jpg", "./js/components/suppPictures/5b90df460c5a0.jpg", "./js/components/suppPictures/5b90df466e5f1.jpg", "./js/components/suppPictures/5b90df65a429f.jpg", "./js/components/suppPictures/5b90df660f3ee.jpg", "./js/components/suppPictures/5b90df6667469.jpg", "./js/components/suppPictures/5b90df66c000c.jpg", "./js/components/suppPictures/5b90df672484b.jpg", "./js/components/suppPictures/5b90df678170f.jpg", "./js/components/suppPictures/5b90df67de076.jpg", "./js/components/suppPictures/5b90df68493f5.jpg", "./js/components/suppPictures/5b90df8f043b8.jpg", "./js/components/suppPictures/5b90df8f5d502.jpg", "./js/components/suppPictures/5b90df8fbba1e.jpg", "./js/components/suppPictures/5b90df90285a8.jpg", "./js/components/suppPictures/5b90df907f700.jpg", "./js/components/suppPictures/5b90df90d7102.jpg", "./js/components/suppPictures/5b90df913b58e.jpg", "./js/components/suppPictures/5b90df919b045.jpg", "./js/components/suppPictures/5b90df92052b7.jpg"],
      "indexNumber": 18,
      "image": "./js/components/securePictures/5b90deb5e2af0.jpg",
      "city": "Los Angeles",
      "price": 3190,
      "rooms": 2,
      "floorSpace": 1275,
      "availability": "Available: Now",
      "fee": "NO FEE",
      "urli": "http://login.realtywarp.com/agent/newlisting/1052/LOS-17969"
}, {
      "suppImagePics": ["./js/components/suppPictures/5b04807d2e01d.jpg", "./js/components/suppPictures/5b04810d726a9.jpg", "./js/components/suppPictures/5b04810dc0070.jpg", "./js/components/suppPictures/5b04810e1fa64.jpg", "./js/components/suppPictures/5b04812aa7b8f.jpg"],
      "indexNumber": 19,
      "image": "./js/components/securePictures/5b04807d2e01d.jpg",
      "city": "Palms",
      "price": 3195,
      "rooms": 2,
      "floorSpace": 1200,
      "availability": "Available: Now",
      "fee": "NO FEE",
      "urli": "http://login.realtywarp.com/agent/newlisting/1052/LOS-17760"
}, {
      "suppImagePics": ["./js/components/suppPictures/5ac4780aeaa78.jpg", "./js/components/suppPictures/5ac47814dfecb.jpg", "./js/components/suppPictures/5ac4781537a53.jpg", "./js/components/suppPictures/5ac478ab2438f.jpg", "./js/components/suppPictures/5ac478ab7e152.jpg", "./js/components/suppPictures/5ac478abd2563.jpg", "./js/components/suppPictures/5ac478ac2bc1f.jpg", "./js/components/suppPictures/5ac478ac80908.jpg", "./js/components/suppPictures/5ac478acd2c61.jpg", "./js/components/suppPictures/5ac478ad34b07.jpg", "./js/components/suppPictures/5ac478ad86b82.jpg", "./js/components/suppPictures/5ac478ae415f3.jpg", "./js/components/suppPictures/5ac478ae8f8bd.jpg", "./js/components/suppPictures/5ac478aededb9.jpg", "./js/components/suppPictures/5ac479242d4fb.jpg", "./js/components/suppPictures/5ac479249774e.jpg", "./js/components/suppPictures/5ac47924e9917.jpg", "./js/components/suppPictures/5ac4792546f94.jpg", "./js/components/suppPictures/5ac4792594ddf.jpg", "./js/components/suppPictures/5ac47925e0e05.jpg", "./js/components/suppPictures/5ac479263a450.jpg", "./js/components/suppPictures/5ac479268679d.jpg", "./js/components/suppPictures/5ac47926d1bc0.jpg", "./js/components/suppPictures/5ac479272778b.jpg", "./js/components/suppPictures/5ac47927bb9a0.jpg", "./js/components/suppPictures/5ac479be74db6.jpg", "./js/components/suppPictures/5ac479bec8b3a.jpg", "./js/components/suppPictures/5ac479bf256fa.jpg", "./js/components/suppPictures/5ac479bf77ffe.jpg", "./js/components/suppPictures/5ac479bfd47e5.jpg", "./js/components/suppPictures/5ac479c309452.jpg", "./js/components/suppPictures/5ac479c36fbcd.jpg", "./js/components/suppPictures/5ac47a1d13247.jpg", "./js/components/suppPictures/5ac47a1d88c19.jpg", "./js/components/suppPictures/5ac47a1e15b09.jpg", "./js/components/suppPictures/5ac47a1e8c3b8.jpg", "./js/components/suppPictures/5ac47a1f0e5a7.jpg", "./js/components/suppPictures/5ac47a1f7f8c7.jpg", "./js/components/suppPictures/5ac47a1ff1722.jpg", "./js/components/suppPictures/5ac47a206fe4a.jpg", "./js/components/suppPictures/5ac47a20e1400.jpg", "./js/components/suppPictures/5ac47a2164d4b.jpg", "./js/components/suppPictures/5ac47a21d7d6f.jpg", "./js/components/suppPictures/5ac47a2252783.jpg", "./js/components/suppPictures/5ac47a22c2643.jpg", "./js/components/suppPictures/5ac47a233c9e1.jpg", "./js/components/suppPictures/5ac47a23a8497.jpg", "./js/components/suppPictures/5ac47a24214fa.jpg", "./js/components/suppPictures/5ac47a24916ce.jpg", "./js/components/suppPictures/5ac47a2511cba.jpg", "./js/components/suppPictures/5ac47a257fc87.jpg", "./js/components/suppPictures/5ac47a2601347.jpg", "./js/components/suppPictures/5ac47a2672f39.jpg", "./js/components/suppPictures/5ac47a26e32b5.jpg", "./js/components/suppPictures/5ac47a2761375.jpg", "./js/components/suppPictures/5ac47a27d0926.jpg", "./js/components/suppPictures/5ac47a284a7dc.jpg", "./js/components/suppPictures/5ac47a28ba0e3.jpg", "./js/components/suppPictures/5ac47a2933181.jpg"],
      "indexNumber": 20,
      "image": "./js/components/securePictures/5ac4780aeaa78.jpg",
      "city": "Toluca Lake",
      "price": 3420,
      "rooms": 3,
      "floorSpace": 1365,
      "availability": "Available: Now",
      "fee": "NO FEE",
      "urli": "http://login.realtywarp.com/agent/newlisting/1052/LOS-17640"
}, {
      "suppImagePics": ["./js/components/suppPictures/5b89e1e839448.jpg", "./js/components/suppPictures/5b89e1e899aa2.jpg", "./js/components/suppPictures/5b89e1e907af1.jpg", "./js/components/suppPictures/5b89e1e96a325.jpg", "./js/components/suppPictures/5b89e1e9d0710.jpg", "./js/components/suppPictures/5b89e1ea421ac.jpg", "./js/components/suppPictures/5b89e1eaa27e5.jpg", "./js/components/suppPictures/5b89e1eb0aa28.jpg", "./js/components/suppPictures/5b89e20f99ab5.jpg", "./js/components/suppPictures/5b89e21001c5f.jpg", "./js/components/suppPictures/5b89e2105f063.jpg", "./js/components/suppPictures/5b89e210b91f2.jpg", "./js/components/suppPictures/5b89e2112164e.jpg", "./js/components/suppPictures/5b89e2117f95f.jpg", "./js/components/suppPictures/5b89e211dc4e6.jpg", "./js/components/suppPictures/5b89e21247c63.jpg", "./js/components/suppPictures/5b89e2348063b.jpg", "./js/components/suppPictures/5b89e234e212c.jpg", "./js/components/suppPictures/5b89e2354d17e.jpg", "./js/components/suppPictures/5b89e235a7bdf.jpg", "./js/components/suppPictures/5b89e2360bdf7.jpg", "./js/components/suppPictures/5b89e2366427f.jpg", "./js/components/suppPictures/5b89e236c036f.jpg", "./js/components/suppPictures/5b89e23724d1c.jpg", "./js/components/suppPictures/5b89e2679ff79.jpg", "./js/components/suppPictures/5b89e2680a390.jpg", "./js/components/suppPictures/5b89e26864ba4.jpg", "./js/components/suppPictures/5b89e268c26d7.jpg", "./js/components/suppPictures/5b89e26928218.jpg", "./js/components/suppPictures/5b89e2698ac99.jpg", "./js/components/suppPictures/5b89e269e5b90.jpg", "./js/components/suppPictures/5b89e26a4f013.jpg", "./js/components/suppPictures/5b89e26aaa2c0.jpg", "./js/components/suppPictures/5b89e26b10e74.jpg", "./js/components/suppPictures/5b89e26b6b6d3.jpg", "./js/components/suppPictures/5b89e26bc3349.jpg", "./js/components/suppPictures/5b89e26c295d9.jpg", "./js/components/suppPictures/5b89e26c85012.jpg", "./js/components/suppPictures/5b89e26ce3d39.jpg", "./js/components/suppPictures/5b89e26d4e445.jpg", "./js/components/suppPictures/5b89e26da9738.jpg", "./js/components/suppPictures/5b89e26e14690.jpg", "./js/components/suppPictures/5b89e26e7160c.jpg", "./js/components/suppPictures/5b89e26ed5278.jpg", "./js/components/suppPictures/5b89e26f3e80f.jpg"],
      "indexNumber": 21,
      "image": "./js/components/securePictures/5b89e1e839448.jpg",
      "city": "Hollywood",
      "price": 3500,
      "rooms": 2,
      "floorSpace": 1100,
      "availability": "Available: Now",
      "fee": "NO FEE",
      "urli": "http://login.realtywarp.com/agent/newlisting/1052/LOS-17963"
}];

exports.default = listingsData;

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(99);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(97);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(100);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(101);

var _listingsData2 = _interopRequireDefault(_listingsData);

var _Footer = __webpack_require__(98);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            name: 'Joe',
            listingsData: _listingsData2.default,
            city: 'All',
            bedrooms: 0,
            min_price: 0,
            max_price: 9000,
            min_floor_space: 0,
            max_floor_space: 6500,
            elevator: false,
            finished_basement: false,
            gym: false,
            swimming_pool: false,
            filteredData: _listingsData2.default,
            populateFormsData: '',
            sortby: 'price-dsc',
            view: 'box',
            search: '',
            items: []
        };
        _this.change = _this.change.bind(_this);
        _this.filteredData = _this.filteredData.bind(_this);
        _this.populateForms = _this.populateForms.bind(_this);
        _this.changeView = _this.changeView.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'componentWillMount',
        value: function componentWillMount() {

            var listingsData = this.state.listingsData.sort(function (a, b) {
                return a.price - b.price;
            });
            this.setState({
                listingsData: listingsData
            });
        }
    }, {
        key: 'change',
        value: function change(event) {
            var _this2 = this;

            var name = event.target.name;
            var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

            this.setState(_defineProperty({}, name, value), function () {
                console.log(_this2.state);
                _this2.filteredData();
            });
        }
    }, {
        key: 'changeView',
        value: function changeView(viewName) {
            this.setState({
                view: viewName
            });
        }
    }, {
        key: 'filteredData',
        value: function filteredData() {
            var _this3 = this;

            var newData = this.state.listingsData.filter(function (item) {
                return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace <= _this3.state.max_floor_space && item.rooms >= _this3.state.bedrooms;
            });

            if (this.state.city != "All") {
                newData = newData.filter(function (item) {
                    return item.city == _this3.state.city;
                });
            }

            if (this.state.sortby == 'price-dsc') {
                newData = newData.sort(function (a, b) {
                    return a.price - b.price;
                });
            }

            if (this.state.sortby == 'price-asc') {
                newData = newData.sort(function (a, b) {
                    return b.price - a.price;
                });
            }

            if (this.state.search != '') {
                newData = newData.filter(function (item) {
                    var city = item.city.toLowerCase();
                    var searchText = _this3.state.search.toLowerCase();
                    var n = city.match(searchText);

                    if (n != null) {
                        return true;
                    }
                });
            }

            this.setState({
                filteredData: newData
            });
        }
    }, {
        key: 'populateForms',
        value: function populateForms() {
            // city
            var cities = this.state.listingsData.map(function (item) {
                return item.city;
            });
            cities = new Set(cities);
            cities = [].concat(_toConsumableArray(cities)).sort();

            // bedrooms
            var bedrooms = this.state.listingsData.map(function (item) {
                return item.rooms;
            });
            bedrooms = new Set(bedrooms);
            bedrooms = [].concat(_toConsumableArray(bedrooms)).sort();

            this.setState({
                populateFormsData: {
                    bedrooms: bedrooms,
                    cities: cities
                }
            }, function () {
                // console.log(this.state)
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Header2.default, null),
                _react2.default.createElement(
                    'section',
                    { id: 'content-area' },
                    _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state, populateAction: this.populateForms }),
                    _react2.default.createElement(_Listings2.default, { listingsData: this.state.filteredData, change: this.change, globalState: this.state, changeView: this.changeView })
                ),
                _react2.default.createElement(_Footer2.default, null)
            );
        }
    }]);

    return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactCollapsible = __webpack_require__(138);

var _reactCollapsible2 = _interopRequireDefault(_reactCollapsible);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {
      name: '',
      open: true,
      closed: false
    };
    _this.cities = _this.cities.bind(_this);
    _this.bedrooms = _this.bedrooms.bind(_this);
    return _this;
  }

  _createClass(Filter, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.populateAction();
    }
  }, {
    key: 'cities',
    value: function cities() {
      if (this.props.globalState.populateFormsData.cities != undefined) {
        var cities = this.props.globalState.populateFormsData.cities;

        return cities.map(function (item) {

          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: 'bedrooms',
    value: function bedrooms() {
      if (this.props.globalState.populateFormsData.bedrooms != undefined) {
        var bedrooms = this.props.globalState.populateFormsData.bedrooms;

        return bedrooms.map(function (item) {

          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item,
            '+ BR'
          );
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactCollapsible2.default,
        { className: 'collap', trigger: 'Filter Results Here!' },
        _react2.default.createElement(
          'section',
          { id: 'filter' },
          _react2.default.createElement(
            'div',
            { className: 'inside' },
            _react2.default.createElement(
              'span',
              { id: 'cityLabel' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'city' },
                'City'
              )
            ),
            _react2.default.createElement(
              'select',
              { name: 'city', className: 'filters city', onChange: this.props.change },
              _react2.default.createElement(
                'option',
                { value: 'All' },
                'All'
              ),
              this.cities()
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'bedrooms', id: 'bedRoomLabel' },
              '# of Bedrooms'
            ),
            _react2.default.createElement(
              'select',
              { name: 'bedrooms', className: 'filters bedrooms', onChange: this.props.change },
              this.bedrooms()
            ),
            _react2.default.createElement(
              'div',
              { className: 'filters price' },
              _react2.default.createElement(
                'span',
                { className: 'title' },
                'Min Price($/Month) Max'
              ),
              _react2.default.createElement('input', { type: 'text', name: 'min_price', className: 'min-price', onChange: this.props.change, value: this.props.globalState.min_price }),
              _react2.default.createElement('input', { type: 'text', name: 'max_price', className: 'max-price', onChange: this.props.change, value: this.props.globalState.max_price })
            ),
            _react2.default.createElement(
              'div',
              { className: 'filters floor-space' },
              _react2.default.createElement(
                'span',
                { className: 'title' },
                'Min Floorspace(Sqft.) Max'
              ),
              _react2.default.createElement('input', { type: 'text', name: 'min_floor_space', className: 'min-floor-space', onChange: this.props.change, value: this.props.globalState.min_floor_space }),
              _react2.default.createElement('input', { type: 'text', name: 'max_floor_space', className: 'max-floor-space', onChange: this.props.change, value: this.props.globalState.max_floor_space })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "footer",
        null,
        _react2.default.createElement(
          "ul",
          null,
          _react2.default.createElement(
            "li",
            null,
            "BRE License #: ",
            _react2.default.createElement(
              "a",
              { href: "http://www2.dre.ca.gov/PublicASP/pplinfo.asp?start=1" },
              "01868104"
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: ''
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          'Angels Realty',
          _react2.default.createElement(
            'span',
            { className: 'trademark' },
            '  \u2122'
          ),
          ' '
        ),
        _react2.default.createElement('img', { height: '140', src: 'https://preview.ibb.co/eAaJNy/Angels_Realty_Full_Logo.png', alt: 'Angels_Realty_Full_Logo', border: '0' }),
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'a',
            { href: '#', className: 'register-btn' },
            'Contact Steve at (818) 577-8499'
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ })

},[103]);
console.log("reading main.js starts");

requirejs.config({
  baseDir: '/js',
  paths: {
    'jquery': '/bower_components/jquery/dist/jquery.min',
    'tabzilla': 'https://mozorg.cdn.mozilla.net/tabzilla/tabzilla',
    'selectize': "/bower_components/selectize/dist/js/standalone/selectize.min",
    'localized': '/bower_components/webmaker-i18n/localized',
    'list': '/bower_components/listjs/dist/list.min',
    'fuzzySearch': '/bower_components/list.fuzzysearch.js/dist/list.fuzzysearch.min',
    'analytics': '/bower_components/webmaker-analytics/analytics',
    'languages': '/bower_components/webmaker-language-picker/js/languages',
    //makerparty ones
    'masonry': '/bower_components/masonry/dist/masonry.pkgd.min', // live-updates
    'makeapi': '/bower_components/makeapi-client/src/make-api', // live-updates
    'quilt': '/bower_components/supportopen-quilt/dist/quilt', // live-updates
    'jquery-colorbox': '/bower_components/jquery-colorbox/jquery.colorbox-min',
    'bootstrap-affix': '/bower_components/bootstrap/js/affix',
    'bootstrap-collapse': '/bower_components/bootstrap/js/collapse',
    'bootstrap-scrollspy': '/bower_components/bootstrap/js/scrollspy',
    'elastislide.modernizr': '/lib/elastislide/js/modernizr.custom.17475',
    'elastislide.jquerypp': '/lib/elastislide/js/jquerypp.custom',
    'elastislide': '/lib/elastislide/js/jquery.elastislide',
    'makerparty-ui': '/js/ui'
  },
  shim: {
    'tabzilla': ['jquery'],
    'jquery-colorbox': ['jquery'],
    'bootstrap-affix': ['jquery'],
    'bootstrap-collapse': ['jquery'],
    'bootstrap-scrollspy': ['jquery'],
    'elastislide.modernizr': ['jquery'],
    'elastislide.jquerypp': ['jquery', 'elastislide.modernizr' ],
    'elastislide': ['jquery', 'elastislide.modernizr', 'elastislide.jquerypp'],
    'quilt': ['jquery', 'makeapi', 'masonry'],
    'makerparty-ui': [
            'jquery',
            'jquery-colorbox',
            'bootstrap-affix',
            'bootstrap-collapse',
            'bootstrap-scrollspy',
            'elastislide.modernizr',
            'elastislide.jquerypp']
  }
});

require([
  'jquery',
  'tabzilla',
  'elastislide',
  // 'masonry',
  // 'makeapi',
  // 'quilt',
  'languages',
  'selectize',
  'makerparty-ui'
], function($, languages) {
  'use strict';
  console.log("loadedddddd");
  console.log(languages);
  // var quiltConfig = {
  //       tags: [ 'makerparty', 'maker party', '#makerparty' ],
  //       execution: 'or',
  //       limit: 50,
  //       duration: 7000
  // };
  // Quilt(quiltConfig);

   // Call this when the element is ready
  languages.ready({
    position: "top",
    arrow: "left"
  });
  // $('#supportedLocales').selectize();
});


console.log("reading main.js ends");

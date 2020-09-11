const { DateTime } = require("luxon");

module.exports = {
  name: 'Boston T Party',
  short_name: 'BTP',
  metaTitle: 'Boston T Party',
  metaDescription: 'Rustic accommodation & venue hire.',
  metaImage: '/assets/images/common/logo.png',
  metaImageAlt: 'Site logo for Boston T Party.',
  logoAlt: 'Site logo for Boston T Party.',
  lang: 'en-za',
  start_url: '/',
  display: 'standalone',
  rootUrl: process.env.URL || '',
  environment: process.env.ELEVENTY_ENV,
  logo: '/assets/images/common/logo.png',
  theme_color_android: '#212227',
  theme_color_ios: '#212227',
  background_color_android: '#ffffff',
  background_color_mstile: '#212227',
  accent_color: '#212227',
  favicon: '/assets/ico/favicon.ico',
  icon: '/assets/ico/apple-touch-icon.png',
  icon_192: '/assets/ico/android-chrome-192x192.png',
  icon_512: '/assets/ico/android-chrome-512x512.png',
  icon_maskable_196: '/assets/ico/android-chrome-maskable-196x196.png', // Maskable icon for Android devices (https://web.dev/maskable-icon-audit/)
  icon_mstile: '/assets/ico/mstile-150x150.png',
  twitter: '', // Twitter handle
  analyticsUrchin: 'UA-1673348-6', // Analytics urchin uses this value
  scriptsVendor: false, // If using vendor (ie. 3rd party) scripts
  scriptsMain: false, // If using any `main` scripts on the site (eg. carousel, objectfit polyfill etc.)
  scriptsServiceworker: true, // If using a service worker
  yearCurrent: new Date().getFullYear(),
  timeCurrent: DateTime.local().diff(DateTime.local(1982, 5, 25)).milliseconds,
  siteMessage: false,
  author: {
    name: 'Bruce Taylor',
    url: 'https://brootaylor.com'
  },
};

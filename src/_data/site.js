const { DateTime } = require("luxon");

module.exports = {
  name: 'Boston T Party',
  short_name: 'Boston T Party',
  metaTitle: 'Boston T Party',
  metaDescription: 'Accommodation, venue hire, activities & events in the Boston and Impendle area, KwaZulu-Natal',
  metaImage: '/assets/images/common/logo.png',
  metaImageAlt: 'Site logo for Boston T Party.',
  logoAlt: 'Site logo for Boston T Party.',
  lang: 'en-za',
  start_url: '/',
  display: 'standalone',
  rootUrl: process.env.URL || '',
  environment: process.env.NODE_ENV,
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
  robotsCrawl: true, // Allow search engine robots to crawl site
  aiCrawl: false, // Allow AI robots to crawl site and train AI models
  // analyticsUrchin: 'UA-1673348-6', // Analytics urchin uses this value
  scriptsVendor: false, // If using vendor (ie. 3rd party) scripts
  scriptsMain: false, // If using any `main` scripts on the site (eg. carousel, objectfit polyfill etc.)
  scriptsServiceworker: true, // If using a service worker
  dateTimeNow: DateTime.local().toFormat('dd LLLL yyyy @ t'),
  timeCurrent: DateTime.local().diff(DateTime.local(1982, 5, 25)).milliseconds,
  siteMessage: false, // A message 'bar' appears on the pages
  author: {
    name: 'Bruce Taylor',
    url: 'https://brootaylor.com'
  },
  client: {
    name: 'Susan Brighton',
    url: 'https://bostontparty.co.za',
    email: 'tsusan394@gmail.com'
  },
  social: {
    facebook: 'https://www.facebook.com/TheBostonTParty'
  }
};

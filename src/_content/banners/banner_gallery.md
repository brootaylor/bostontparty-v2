---
# Banner component rules / properties
banner:
  hasImage: true
  hasTint: true

# Image component rules / properties
image:
  multiFormat: false
  multiSize: true
  objectFit: true
  lazyLoad: false
  # List of images for use in responsive image sourceset
  multiSrc:
    x_small: "/assets/images/banners/gallery/banner-gallery-01--xsmall.jpg"
    small: "/assets/images/banners/gallery/banner-gallery-01--small.jpg"
    medium: "/assets/images/banners/gallery/banner-gallery-01--medium.jpg"
    large: "/assets/images/banners/gallery/banner-gallery-01--large.jpg"
    x_large: "/assets/images/banners/gallery/banner-gallery-01--xlarge.jpg"
    xx_large: "/assets/images/banners/gallery/banner-gallery-01--xxlarge.jpg"
  width: 768
  height: 230
  alt: "Outside view of the main house"

# This collection `tag` value corresponds with the `for` loop that renders this content
tags:
  - "bannerGallery"

permalink: false
hidden: true
---

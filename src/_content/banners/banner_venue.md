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
  # List of images for use in responsive image sourceset
  multiSrc:
    x_small: "/assets/images/banners/venue/feature-venue-bg-01--xsmall.jpg"
    small: "/assets/images/banners/venue/feature-venue-bg-01--small.jpg"
    medium: "/assets/images/banners/venue/feature-venue-bg-01--medium.jpg"
    large: "/assets/images/banners/venue/feature-venue-bg-01--large.jpg"
    x_large: "/assets/images/banners/venue/feature-venue-bg-01--xlarge.jpg"
    xx_large: "/assets/images/banners/venue/feature-venue-bg-01--xxlarge.jpg"
  alt: "Venue bar area"

# This collection `tag` value corresponds with the `for` loop that renders this content
tags:
  - "bannerVenue"

permalink: false
hidden: true
---
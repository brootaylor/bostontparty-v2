---
layout: "layouts/gallery.njk"
title: "Gallery"
summary: "A great way to see what's on offer at Boston T party is to look through our photo gallery."
lead:
- "A great way to see what's on offer is to look through our photo gallery. Here are some pics of Boston T Party to give
you a better idea of what we're about. You may even spot a few 'local residents'."

bodyClass: "gallery"

date: 2020-09-12T01:12:00
updated: 2020-09-22T13:43:00

hidden: true
eleventyExcludeFromCollections: true
---

{% from "components/core/images/images.njk" import imageNormal %}

<section class="flow" aria-label="Accommodation pictures">
  <h2>Accommodation</h2>
  <ul class="auto-grid no-list">
    <li>
      {{ imageNormal(
      "/assets/images/pages/accommodation/accommodation-01.jpg",
      "Outside view of accommodation building",
      "shadow")
      }}</li>
    <li>
      {{ imageNormal(
      "/assets/images/pages/accommodation/accommodation-03.jpg",
      "Communal shower area",
      "shadow")
      }}</li>
    <li>
      {{ imageNormal(
      "/assets/images/pages/accommodation/accommodation-04.jpg",
      "Self-catering kitchen",
      "shadow")
      }}</li>
    <li>
      {{ imageNormal(
      "/assets/images/pages/accommodation/accommodation-02.jpg",
      "Tents pitched on the lawn near some small trees",
      "shadow")
      }}</li>
  </ul>
</section>

---

<section aria-label="Venue pictures">
  <h2>Venue</h2>
  <ul class="auto-grid no-list">
    <li>
      {{ imageNormal(
      "/assets/images/pages/venue/venue-01--sml-screen.jpg",
      "People standing around a bar",
      "shadow")
      }}</li>
  </ul>
</section>

---

<section aria-label="Activities pictures">
  <h2>Activities</h2>
  <ul class="auto-grid no-list">
    <li>
      {{ imageNormal(
      "/assets/images/pages/activities/activities-01--sml-screen.jpg ",
      "Young people playing in a dam",
      "shadow")
      }}</li>
  </ul>
</section>

---

<section aria-label="General pictures">
  <h2>General</h2>
  <ul class="auto-grid no-list">
    <li>
      {{ imageNormal(
      "/assets/images/pages/about/about-01--sml-screen.jpg",
      "Sign leaning against a wall",
      "shadow")
      }}</li>
  </ul>
</section>

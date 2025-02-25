---
layout: "layouts/about.njk"
title: "About us"
summary: "Should you find yourself in the Boston or Impendle area, KwaZulu-Natal, the Boston T Party is a perfect spot if you need somewhere to stay or an authentic venue to hold your event."
lead:
  - 'Welcome to our little oasis!'
  - 'Should you find yourself in the Boston or Impendle area, the Boston T Party is a perfect spot if you need <a href="/accommodation">somewhere to stay</a> or an authentic <a href="/venue-hire">venue to hold your event</a>.'

bodyClass: "page about"

date: 2020-09-12T01:12:00
updated: 2024-11-06T13:45:00
---

{% from "components/core/buttons/buttons.njk" import button %}
{% from "components/core/images/images.njk" import imageDirection %}

{{ imageDirection(
  "/assets/images/pages/about/about-01--sml-screen.jpg",
  "/assets/images/pages/about/about-01--lg-screen.jpg",
  "768px",
  "Sign leaning against a wall",
  "img-left",
  "shadow")
}}

**On the R617 between Howick and Underberg**, KwaZulu-Natal, nestled in rolling hills, just over an hours drive from the majestic **Southern Drakensberg** and **Sani Pass**, is the little village of Boston and the Boston T Party – rustic / backpackers accommodation and events venue.

---

Rory & Sue Brighton along with Maddy and Squeak, our furry friends, and Blossom, our sweet cat, are ready to welcome you to our home!

From individual leisure guests to groups, backpackers, campers, bikers & hikers, birthday celebrations, farm-style weddings, office events, team building activities, and bull's parties, we invite you to come and enjoy our beautiful surroundings and relaxing atmosphere.

A homely, personal, farm experience, where you can cast a line from the jetty, jump in a canoe and paddle around the dam or relax on the lawn under the Willow trees.

This is a super spot to enjoy beautiful sunsets, a roaring bonfire or head off for a cycle or walk in the surrounding area or just rejuvenate your soul sitting near the dam watching the ducks!

**All are welcome &mdash; but not your pets, sorry!**

{{ imageDirection(
  "/assets/images/pages/about/about-02--sml-screen.jpg",
  "/assets/images/pages/about/about-02--lg-screen.jpg",
  "768px",
  "The dam and its beautiful surroundings",
  "img-right",
  "shadow",
  "lazy")
}}

---

## Our address

<address>

Boston T Party   
118 Elands Vlei Farm  
Boston, 3211  
Kwa-Zulu Natal  
South Africa

**Call:** <a href="tel:27-83-6560979" rel="nofollow">+27 (0)83 656 0979</a>  
<small><sup><b>*</b></sup>*WhatsApp messages/calls **ONLY** due to poor network coverage.*</small>

Or send us an email... <span class="visually-hidden">By clicking the following button.</span>

{{ button(false, 'button--primary', '/contact', 'Send us an email') }}

</address>

---

<div class="[ call-out ] [ flow ]">

## Need directions?

[Directions to Boston T Party][1]

**GPS Co-Ords**: S29&rsquo;40.850, E30&rsquo;01.594

</div>

---

## Associations

We are proud members of the [Boston Dargle Impendle Tourism Organisation][2] and [Midlands Meander Association][3].

{% from "components/core/images/images.njk" import imageMultiResolution %}

<ol role="list" class="[ auto-grid ] [ no-list ] [ flow ] [ align_items--center ]">
  <li>
    {{ imageMultiResolution(
      "/assets/images/partners/partner_bdit-logo.png",
      "/assets/images/partners/partner_bdit-logo@1.5x.png",
      "/assets/images/partners/partner_bdit-logo@2x.png",
      "Boston Dargle Impendle Tourism logo",
      "https://bditourism.co.za/")
    }}
  </li>
  <li>
    {{ imageMultiResolution(
      "/assets/images/partners/partner_midlands-logo.png",
      "/assets/images/partners/partner_midlands-logo@1.5x.png",
      "/assets/images/partners/partner_midlands-logo@2x.png",
      "Midlands Meander Association logo",
      "https://midlandsmeander.co.za/")
    }}
  </li>
</ol>

[1]: /contact/directions
[2]: https://bditourism.co.za/
[3]: https://midlandsmeander.co.za/

---
title: "You're offline"
summary: "It looks like you're offline."
lead: "It looks like you're offline. Fingers-crossed your connection to the internet will be sorted out soon."
bodyClass: "offline"

date: 2020-09-12T01:12:00
updated: 2020-09-20T17:31:00

hidden: true
eleventyExcludeFromCollections: true
---

In the mean time, why not visit one of the following pages that are available while you're offline.

---

<ul class="[ wrapper flow ]">
  {%- for item in collections.pageFeatured -%}
    <li>
      <article>
        <h2><a href="{{ item.url | pretty }}">{{ item.data.title }}</a></h2>
        <p>{{ item.data.summary }}</p>
      </article>
    </li>
  {%- endfor -%}
</ul>

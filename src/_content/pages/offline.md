---
title: "You're offline"
summary: "It looks like you're offline."
lead:
  - "It looks like you're offline. Fingers-crossed your connection to the internet will be sorted out soon."

bodyClass: "offline"

date: 2020-09-12T01:12:00
updated: 2021-05-11T17:52:00

hidden: true
eleventyExcludeFromCollections: true
---

In the mean time, why not visit one of the following pages that are available while you're offline.

---

<ul role="list" class="[ wrapper flow ] [ no-list ]">
  {%- for item in collections.newsCentre -%}
    <li>
      <article>
        <h2><a href="{{ item.url | pretty }}">{{ item.data.title | safe }}</a></h2>
        <p>{{ item.data.lead[0] | safe }}</p>
      </article>
    </li>
  {%- endfor -%}
</ul>

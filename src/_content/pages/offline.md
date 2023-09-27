---
title: "You're offline"
summary: "It looks like you're offline."
lead:
  - "It looks like you're offline. Fingers-crossed your connection to the internet will be sorted out soon."

bodyClass: "page offline"

date: 2020-09-12T01:12:00
updated: 2023-09-27T15:02:00

hidden: true
eleventyExcludeFromCollections: true
---

In the mean time, why not visit one of the following posts that are available while you're offline.

---

<ul role="list" class="[ wrapper flow ] [ no-list ]">
  {%- set allPosts = collections.newsCentre -%}
  {# Shows the latest 5 `post` entries... #}
  {%- for item in allPosts.slice(0, 5) -%}
  <li>
    <article class="[ flow ]">
      <h2>
        <a href="{{ item.url | pretty }}">{{ item.data.title | safe }}</a>
      </h2>
      <time datetime="{{ item.date | dateTime }}">{{ item.date | dateTimeReadable("d LLLL y, ") }}{{ item.date | dateTimeReadable("t") | lower }}</time>
      <p>{{ item.data.summary | safe }}</p>
    </article>
  </li>
  {%- endfor -%}
</ul>

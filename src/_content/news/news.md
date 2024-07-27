---
title: "News"
summary: "Welcome to our news section. Here you'll find news and information relating to Boston T Party."
lead:
  - "Welcome to our news section. Here you'll find news and information relating to Boston T Party."

bodyClass: "posts news"

date: 2021-05-09T17:36:00
updated: 2024-07-15T13:10:00
---

<ul role="list" class="[ news__list ] [ flow ]">
{%- for news in collections.newsCentre -%}
  <li class="[ news__list-item ]">
    <article class="[ news__summary ] [ flow ]">
      <h2><a href="{{ news.url }}">{{ news.data.title | safe }}</a></h2>
      <time datetime="{{ news.date | dateTime }}">{{ news.date | dateTimeReadable("d LLLL y, ") }}{{ news.date | dateTimeReadable("t") | lower }}</time>
      <div class="[ news__snippet ]">
        {%- if news.data.snippet -%}
          <p>{{ news.data.snippet | safe }}</p>
        {%- endif -%}
      </div>
    </article>
  </li>
{%- endfor -%}
</ul>

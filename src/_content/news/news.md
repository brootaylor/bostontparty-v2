---
title: "News"
summary: "Welcome to our news section. Here you'll find news, posts and event information relating to Boston T Party."
lead:
  - "Welcome to our news section. Here you'll find news, posts and event information relating to Boston T Party."

bodyClass: "news"

date: 2021-05-09T17:36:00
updated: 2021-05-11T17:52:00
---

<ul class="[ news__list ] [ flow ]">
{%- for news in collections.newsCentre -%}
  <li class="[ news__list-item ]">
    <article class="[ news__summary ]">
      <h2>{{ news.data.title | safe }}</h2>
      <time datetime="{{ news.date | dateTime }}">{{ news.date | dateTimeReadable("d LLLL y, ") }}{{ news.date | dateTimeReadable("t") | lower }}</time>
      <div class="[ news__snippet ] [ flow ]">
        {%- if news.data.snippet -%}
          <p>{{ news.data.snippet | safe }}</p>
        {%- endif -%}
        <p><a href="{{ news.url }}">{{ news.data.snippetCta }}</a></p>
      </div>
    </article>
  </li>
{%- endfor -%}
</ul>

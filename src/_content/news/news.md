---
title: "News"
summary: "Just over an hours drive from the majestic Southern Drakensberg and Sani Pass, is the little village of Boston and the Boston T Party – rustic / backpackers accommodation and functions venue."
lead: 'Welcome to our little oasis! The Boston T Party is a perfect spot if you need <a href="/accommodation">somewhere to stay</a> or an authentic <a href="/venue-hire">venue to hold your function</a>.'
bodyClass: "about"

date: 2021-05-09T17:36:00
updated: 2021-05-09T17:36:00
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

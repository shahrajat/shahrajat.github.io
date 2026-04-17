---
layout: page
title: Writing
subtitle: Posts and notes
published: true
---

<ul class="post-list">
{% for post in site.posts %}
  <li class="post-list-item">
    <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    <time>{{ post.date | date: "%b %Y" }}</time>
  </li>
{% endfor %}
</ul>

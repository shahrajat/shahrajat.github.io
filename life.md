---
layout: page
css: "/css/index.css"
title: "Hi, I'm Rajat"
subtitle: Software Engineer / Reader / Explorer
meta-title: "Some Machine Learning title"
meta-description: "Some Machine Learning description"
---

<div class="list-filters">
  <a href="/" class="list-filter">All posts</a>
  <span class="list-filter filter-selected">Life</span>
  <a href="/machine-learning" class="list-filter">Machine Learning</a>
</div>

<div class="posts-list">
  {% for post in site.tags.life %}
  <article>
    <a class="post-preview" href="{{ post.url | prepend: site.baseurl }}">
	    <h2 class="post-title">{{ post.title }}</h2>
	
	    {% if post.subtitle %}
	    <h3 class="post-subtitle">
	      {{ post.subtitle }}
	    </h3>
	    {% endif %}
      <p class="post-meta">
        Posted on {{ post.date | date: "%B %-d, %Y" }}
      </p>

      <div class="post-entry">
        {{ post.content | truncatewords: 50 | strip_html | xml_escape}}
        <span href="{{ post.url | prepend: site.baseurl }}" class="post-read-more">[Read&nbsp;More]</span>
      </div>
    </a>  
   </article>
  {% endfor %}
</div>

---
layout: post
title: "Talk at AI Engineer World's Fair 2026"
tags:
  - talks
  - ai
  - ml
  - netflix
published: true
---

I had the chance to speak at the [AI Engineer World's Fair 2026](https://www.ai.engineer/worldsfair/2026) in San Francisco. My talk was called "AI Agents for Performance: Ship Faster, Pay Less."

It started from a real bug: a quadratic-time pattern hiding inside a tensor merge method on a live Netflix service, quietly burning CPU on every request. Nothing in code review caught it, but it stood out clearly in a call stack. That's the usual story with this kind of waste - the normal process of finding it (profile, read a flamegraph, trace it through the code, write a fix, validate it) takes long enough that inefficiencies sit in production for months before anyone looks. And AI-assisted coding makes it worse, since it tends to produce code optimized for how fast it's written, not how fast it runs.

So my team built an agent to close that loop: take a call stack, trace it to the exact source line, propose a fix, and validate it against a canary - real production traffic, no regression allowed - before it ships. The result had to be based on measured outcomes, not the model grading its own homework.

The talk walks through that case end to end, and then the more interesting part: the same antipattern showed up independently in seven other services in a single session, which is why it's worth building a shared catalog of these patterns instead of rediscovering them one service at a time - and why that catalog could eventually catch this stuff in coding agents before it ever ships.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 6px; margin: 1.5rem 0;">
  <iframe src="https://www.youtube.com/embed/CgsWxRUY5Eo" title="AI Agents for Performance: Ship Faster, Pay Less - Rajat Shah, Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

Happy to chat if you're working on anything similar.

---
layout: post
title: "Talk at Internet Day SF 2026"
tags:
  - talks
  - ml
  - netflix
published: true
---

Last week I spoke at [Internet Day SF 2026](https://internetdaysf.org/), put on by the SF Bay Area ACM chapter. My talk was on how we route ML inference traffic at Netflix.

I tried to keep it accessible: start from "you open Netflix, a model picks what you see," and then peel back what it actually takes to make that work at around a million inference requests per second. The middle of the talk gets into why REST vs gRPC mattered more than I expected, and the last third compares the API gateway approach we started with against the sidecar + Envoy setup we ended up on, and why we switched.

Links:

- Slides: [shahrajat.com/internet-day](https://shahrajat.com/internet-day/#1)
- Recording (jumps to my segment): [youtu.be/FQZg5RAskgM?t=1503](https://youtu.be/FQZg5RAskgM?t=1503)

If you want the longer version of the same system, I co-authored a [Netflix Tech Blog post](https://netflixtechblog.com/state-of-routing-in-model-serving-16e22fe18741) on it earlier this year.

Thanks to the SF ACM folks for organizing — it was a fun crowd to present to.

---
layout: post
title: "Talk at Internet Day SF 2026"
tags:
  - talks
  - ml
  - netflix
published: true
---

I had the privilege of speaking at [Internet Day SF 2026](https://internetdaysf.org/), the annual invite-only event run jointly by the SF Bay Area chapters of the [Internet Society](https://sfbayisoc.org) (co-founder of the IETF, the body behind TCP/IP, HTTP, TLS, and DNS) and the [ACM](https://sfbayacm.org) (the society that awards the Turing Award). Speakers are selected by chapter leadership through a competitive process. Honored to have represented Netflix on this year's program.

My talk, "Routing ML Inference Traffic at Internet Scale," was on the routing layer of Netflix's ML serving platform — how, for each of roughly a million inference requests per second, we pick the right model version on the right cluster. I covered why gRPC (vs REST) shapes the architecture, and the trade-offs between a central API gateway and the sidecar + Envoy design we ended up on.

- Slides: [shahrajat.com/internet-day](https://shahrajat.com/internet-day/#1)
- Recording (jumps to my segment): [youtu.be/FQZg5RAskgM?t=1503](https://youtu.be/FQZg5RAskgM?t=1503)

Longer write-up of the same system on the [Netflix Tech Blog](https://netflixtechblog.com/state-of-routing-in-model-serving-16e22fe18741).

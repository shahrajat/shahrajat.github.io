---
layout: post
title: "Talk at Internet Day SF 2026"
tags:
  - talks
  - ml
  - netflix
published: true
---

I had the privilege of speaking at [Internet Day SF 2026](https://internetdaysf.org/). It's the annual invite-only event jointly run by the SF Bay Area chapters of the [Internet Society](https://sfbayisoc.org) (co-founder of the IETF, the body behind TCP/IP, HTTP, TLS, and DNS) and the [ACM](https://sfbayacm.org) (the society that awards the Turing Award). Speakers are selected by chapter leadership through a competitive process. Honored to have represented Netflix on this year's program.

My talk was titled "Routing ML Inference Traffic at Internet Scale". It walks through the routing layer of Netflix's ML serving platform, and how we pick the right model version on the right cluster for roughly a million inference requests per second. I also got into why gRPC (vs REST) shapes the whole architecture, and the trade-offs between a central API gateway and the sidecar plus Envoy design we ended up on.

- Slides: [shahrajat.com/internet-day](https://shahrajat.com/internet-day/#1)
- Recording (jumps to my segment): [youtu.be/FQZg5RAskgM?t=1503](https://youtu.be/FQZg5RAskgM?t=1503)

Longer write-up of the same system on the [Netflix Tech Blog](https://netflixtechblog.com/state-of-routing-in-model-serving-16e22fe18741).

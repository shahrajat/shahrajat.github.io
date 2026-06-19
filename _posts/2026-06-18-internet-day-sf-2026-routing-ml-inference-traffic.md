---
layout: post
title: "Talk at Internet Day SF 2026: Routing ML Inference Traffic at Internet Scale"
tags:
  - talks
  - ml
  - netflix
published: true
---

I gave a talk at [Internet Day SF 2026](https://internetdaysf.org/), hosted by the SF Bay Area ACM chapter, on how we route ML inference traffic at Netflix.

The talk walks through what happens behind the scenes every time someone opens Netflix — how a single request finds the right ML model, on the right cluster, at roughly a million inference requests per second. I cover why this turns out to be a hard problem (thousands of clusters, many model versions, constantly shifting topology), why protocol choice (REST vs gRPC) ended up shaping the whole architecture, and the trade-offs between routing through a central API gateway versus a service-mesh sidecar pattern with Envoy.

- Slides: [shahrajat.com/internet-day](https://shahrajat.com/internet-day/#1)
- Recording: [youtu.be/FQZg5RAskgM?t=1503](https://youtu.be/FQZg5RAskgM?t=1503)
- Conference: [internetdaysf.org](https://internetdaysf.org/)

If you want the deeper write-up of the same system, the Netflix Tech Blog post on the [State of Routing in Model Serving](https://netflixtechblog.com/state-of-routing-in-model-serving-16e22fe18741) is a good companion read.

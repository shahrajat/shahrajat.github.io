---
layout: post
title: "Talk at Internet Day SF 2026"
tags:
  - talks
  - ml
  - netflix
published: true
---

I had the privilege of speaking at [Internet Day SF 2026](https://internetdaysf.org/), the annual invite-only event run jointly by the SF Bay Area chapters of the [Internet Society](https://sfbayisoc.org) (co-founder of the IETF, the body behind TCP/IP, HTTP, TLS, and DNS) and the [ACM](https://sfbayacm.org) (the society that awards the Turing Award). Speakers are selected by chapter leadership through a competitive process, and the room each year is a mix of senior engineers, security researchers, and policy folks from across the industry. This year's lineup included talks from Project NANDA, Cisco-adjacent practitioners, and Internet Society leadership — I was honored to represent Netflix on the program.

My talk, "Routing ML Inference Traffic at Internet Scale," focused on the routing layer of Netflix's ML serving platform — the system that decides, for each of roughly a million inference requests per second, which model version on which compute cluster should handle it. I covered the specific problems that make ML routing harder than generic service routing: thousands of clusters each fronted by their own VIP, multiple model versions running concurrently for A/B tests and shadow traffic, and topology that changes constantly as researchers ship new models. From there I walked through why gRPC (vs REST) is the right protocol for this workload and how that constraint ruled out most off-the-shelf API gateways. The last third compared two routing patterns we've operated in production: a central gRPC API gateway in the request path, and a sidecar + Envoy design that resolves routing metadata out-of-band so request payloads go directly to the model cluster — including the latency, availability, and tenant-isolation trade-offs that drove us from the first to the second.

Links:

- Slides: [shahrajat.com/internet-day](https://shahrajat.com/internet-day/#1)
- Recording (jumps to my segment): [youtu.be/FQZg5RAskgM?t=1503](https://youtu.be/FQZg5RAskgM?t=1503)

If you want the longer version of the same system, I co-authored a [Netflix Tech Blog post](https://netflixtechblog.com/state-of-routing-in-model-serving-16e22fe18741) on it earlier this year.

Thanks to the ISOC SF and SF Bay ACM teams for putting this together — it was a sharp, generous crowd to present to.

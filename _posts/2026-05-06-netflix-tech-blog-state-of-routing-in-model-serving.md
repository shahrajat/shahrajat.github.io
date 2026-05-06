---
layout: post
title: "Co-authored a Netflix Tech Blog post: State of Routing in Model Serving"
subtitle: Sharing how Netflix routes 1M+ RPS of ML model serving traffic
tags:
  - ml
  - netflix
published: true
---

I co-authored a new post on the [Netflix Tech Blog](https://netflixtechblog.com/state-of-routing-in-model-serving-16e22fe18741) with [Nipun Kumar](https://www.linkedin.com/in/nipunk/) and [Peter Chng](https://www.linkedin.com/in/peterchng/). It is the first in a multi-part series about Netflix's centralized ML model serving platform, which today serves hundreds of model types and versions at over 1 million requests per second across personalization, commerce, fraud, and more.

In this post, we focus on a deceptively simple question that sits at the heart of any large-scale ML serving system:

> How do you route traffic to the right model instance, on the right cluster shard, for the right user and use case, while keeping a simple abstraction for both client services and model researchers?

A few highlights of what we cover:

- **The "Objective" abstraction** — a stable, domain-level contract (e.g., `ContinueWatchingRanking`) that decouples client services from concrete model ids, sharding, and experiment cells. Clients integrate once; researchers iterate freely.
- **Switchboard** — our custom routing service that handles context-aware routing, A/B experimentation, shadow mode, canaries, and instant rollbacks, replacing what off-the-shelf API gateways could not do for ML-specific lifecycles.
- **Switchboard Rules** — a JavaScript-based config UX for researchers to attach default models, A/B tests, and gradual traffic shifts to Objectives, decoupled from code deployments via a pub-sub config plane.
- **Evolving to Lightbulb** — why operating a routing service in the hot path eventually became a bottleneck (single point of failure, 10–20ms of added latency, weak tenant isolation), and how we re-architected with Envoy + a lightweight metadata service to keep the same developer experience while removing the routing service from the active request path.

If you're interested in ML platforms, model serving, traffic routing, or experimentation infrastructure at scale, [give it a read](https://netflixtechblog.com/state-of-routing-in-model-serving-16e22fe18741). More posts in the series — covering inference, feature fetching, and how they interact with this routing layer — are on the way.

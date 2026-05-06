---
layout: post
title: "New Netflix Tech Blog post: State of Routing in Model Serving"
tags:
  - ml
  - netflix
published: true
---

I recently co-authored a post on the [Netflix Tech Blog](https://netflixtechblog.com/state-of-routing-in-model-serving-16e22fe18741) about how we route traffic in our ML model serving platform at Netflix. It's the first in a series we're planning on the platform, which currently serves over 1 million requests per second across use cases like recommendations, fraud detection, and more.

The post walks through how we route a request to the right model, on the right cluster, for the right user and use case, without making client services worry about any of it. It covers the Objective abstraction we use as the contract between clients and the platform, the Switchboard routing service we built (and why off-the-shelf API gateways didn't fit), how researchers configure A/B tests and traffic shifts, and the limits we eventually hit running a routing service in the hot path. The latter half talks about Lightbulb, where we moved routing onto Envoy and kept a lightweight metadata service for model selection.

If any of this is your area, [check it out](https://netflixtechblog.com/state-of-routing-in-model-serving-16e22fe18741). Happy to chat about it.

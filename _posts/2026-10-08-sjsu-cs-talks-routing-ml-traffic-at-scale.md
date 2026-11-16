---
layout: post
title: "Nobody had skipped ML. Four had skipped networks. SJSU CS talk 2026"
tags:
  - talks
  - ml
  - ai
  - netflix
published: true
---

On October 8, Professor [Genya Ishigaki](https://www.sjsu.edu/people/genya.ishigaki/) invited me to speak in the CS Talks Series at San Jose State. I called it "Routing ML Traffic at Scale." Most of the talk was the same system we wrote up on the Netflix Tech Blog, [State of Routing in Model Serving](https://netflixtechblog.com/state-of-routing-in-model-serving-16e22fe18741), just walked through out loud.

The hardest part of the evening was parking. The official university garage is not easy to get around, the spots are very small, and a lot of them are compact. Talk was in the evening and there was a homecoming party going on, so the traffic getting in was worse than I had counted on. I was still happy to see a good chunk of students show up.

It was a mixed room, which I liked. First-year undergrads, masters students in their last year, other professors, and the head of the department was there too.

Before I started, I asked how many of them had not taken a machine learning class. Not a single hand. Then I asked how many had not taken a computer networks class, and at least four hands went up. Professor Ishigaki teaches computer networks, so he chuckled. It was funny, and it also said something. These students are taking the machine learning and AI courses before a fundamentals class like computer networks.

![Speaking at San Jose State, with students filling the room]({{ site.baseurl }}/assets/sjsu-cs-talk-2026.jpg)

The talk itself was an hour. Short version of the routing part, since the questions later were about it. Callers don't hardcode a cluster. They name a use case, Lightbulb turns that plus a bit of context into a routing key, and the payload goes straight to the model. The Envoy sidecar, the access-side proxy, routes on the header. Its route table was already pushed by the control plane. Lightbulb is the lookup before the call, not a hop the bytes go through.

The last 15 minutes of the hour I spent on coding agents. That was already top of mind for the students. I had a slide from a real session for this. The agent agrees it was wrong, fixes the record, and then later in the same session catches itself doing the same thing again. The line I circled got a real laugh: "I have a memory rule for precisely this and ignored it."

![The agent admits both claims were wrong]({{ site.baseurl }}/assets/sjsu-proof-1.png)

![It admits the earlier conclusion was wrong]({{ site.baseurl }}/assets/sjsu-proof-2.png)

![Second time in the same session]({{ site.baseurl }}/assets/sjsu-proof-quote-1.png)

![Circled: I have a memory rule for precisely this and ignored it]({{ site.baseurl }}/assets/sjsu-proof-quote-2-hl.png)

Someone has to push back, and the check has to sit outside the model. A test, a small diff, sometimes a canary. I brought this up more than once. It is a repetitive theme for me on purpose. Fundamentals are what let you tell the agent it is wrong: how the request moves, what the diff actually says, whether you measured it. Same reason the networks hands bothered me a little. You want the ML course, and you still need to know how two machines talk.

When the hour ended I didn't leave. There were a lot of questions, and I stayed another 30 to 45 minutes.

One student asked the failure case I was hoping someone would ask. If Lightbulb is down, which proxy still provides the routing rule to the service mesh? The mesh proxy isn't calling Lightbulb to find out. It already has the rules. A client with the last answer cached keeps sending the same key, and Envoy keeps forwarding it. What stalls is a cold client, or a route you changed and haven't published yet. That is a smaller mess than the old gateway, where one outage sat on all the ML traffic.

The other questions that ran long were about the agent workflow. Students already know an agent can one-shot a whole change, and they asked how I still understand the code when that is true.

What I told them is pretty ordinary. I start in plan mode and talk through the approach with the agent until the proposal makes sense to me, before anything is written. Brainstorming first, not a finished artifact that I then have to reverse. Once there is a diff, I read it line by line, including the boring lines. If I can't say why a line is there, I don't take it. The model will sound done either way.

Slides: [Routing ML Traffic at Scale](https://drive.google.com/file/d/1kmmAk8UOxzkQ9PlMCjHhjEUOGnYYQr7O/view).

---
title: "Making this blog"
description: "The behind the scenes look that no one asked for."
pubDate: "Oct 27 2024"
tags: ["astro.js", "typescript", "react"]
---

## Background

Creating a blog has been on my todo list for awhile, mostly because I suffer from grandiose delusions and think my opinion matters more than it actually does. If you're in a similar boat and aren't sure how to get started, then this article will hopefully provide you with some reasonable recommendations

## Exploring tech stacks

To be clear, there are a million tools you could use to make a blog. If you aren't a programmer, or just don't want to program in your free time, using tools like WordPress, SquareSpace, or Wix are tested and proven tools to get the job done so stop reading my malarkey and check out one of those. But if, like me, you have an unreasonable and unfounded need to create everything yourself then let's layout some options.

Almost any web tech can be used to make a blog, so if there is any tech you want to try out then consider this an excuse to give it a go. Here is what I considered and why.

### Option 1: Java & spring boot

My team at Amazon maintains a couple content heavy sites, which serve tens of thousands of customers daily without a hiccup (except for when I'm on call apparently 🫠). Although this likely would have been the easiest option for me, as I hinted at above I wanted the chance to try something new so ultimately decided against it.

### Option 2: Next.js

I'm unfortunately very react-pilled so reaching for Next.js for any website is a constant temptation. However, I can't stress enough that I wanted an excuse to try something new.

### Option 3: Go & HTMX

This is a stack I've been very interested in since techno-evangelists I blindly follow like [Web Dev Cody](https://www.youtube.com/watch?v=fhn-7dCNpp8&t=390s) and the [Primeagen](https://www.youtube.com/watch?v=x7v6SNIgJpE) have emphasized the joy of using this stack. This was the option I was going to purse until an interesting discovery pushed me in another direction...

### Discovering astro.js, the blog making beast 💪

Every year, the state of js publishes a survey representing the current state of javascript development (duh) and its surrounding ecosystem. Every year I read it and every year I mostly forget about it a few minutes after reading it. However, in the state of js 2023, under the [meta-frameworks section](https://2023.stateofjs.com/en-US/libraries/meta-frameworks/), I noticed a surprising trend: astro.js became more loved _AND_ more used. For someone outside of the tech world, that might not be weird but for any programmer, this is rather unusual and frankly defies the laws of programmer hype.

> There are only two kinds of languages: the ones people complain about and the ones nobody uses.
>
> -- <cite> Bjarne Stroustrup </cite>

Most programming languages and tools follow this basic cycle; a new shiny piece of tech comes out that solves all of our problems -> everyone claims it is the best piece of tech ever -> people buy into the hype and actually start using it -> people realize it isn't all sunshine and rainbows and has pros and cons just like everything else -> hype dies down -> something newer and shinier comes out -> hype shifts to the new thing. Additionally, it is worth noting that when something is brand new and "indie", it is only well known in the circles which surround it's niche so the people who know about it disproportionally love it compared to the larger programmer population. For example, when svelte was released, only web devs who sought out the newest frontend tech (🙋‍♂️) knew about it, and web devs who seek out new frontend tech will like disruptive frontend tech. This is confirmation bias 101. As svelte gained more use and adoption, people who wanted to keep working on react or angular learned about svelte and became vocal about not wanting to use it and thus svelte's "loved" rankings began to taper off. We saw the same trend with rust over the last few years and are seeing it with Next.js now. For the record, rust, svelte, and Next are all amazing pieces of tech and have their use cases but all of them have followed that basic principle that as they get more use, they get more lovers and haters so their overall popularity ratings drop.

However, astro is seemingly _more loved_ the more it is used. Granted, it isn't quite as popular as the technologies I mentioned above so maybe it just hasn't hit it's critical mass of users to lead towards it losing its shininess, but it was used and loved enough to get me to give it a go.

At a high level, astro is made to create content driven websites and uses SSR and a ground breaking [island architecture](https://docs.astro.build/en/concepts/islands/) to make extremely performant web sites. Dare I say, blazingly fast even. Since it is rendered server side, it is makes SEO a breeze. Astro is also arguably the only real meta-framework since it lets you use svelte, react, angular, vue and more to build astro sites. Fast, new, react, and SEO batteries included was all I needed to decide to use it for my blog and I don't regret it even a little bit. In fact, I've been trying to convince my coworkers to shift some of our sites over to astro.

If I've managed to sell you on astro, then [their interactive tutorial on how to build a blog](https://docs.astro.build/en/tutorial/0-introduction/) will teach you better than I could. And if I haven't, then that's because I'm shit at arguing so check out astro's article on ["Why Astro?"](https://docs.astro.build/en/concepts/why-astro/).

## Other tools used

I'm a web dev and web devs love using as many libraries as possible so let's talk about the other dependencies I couldn't build this site without.

- [react.js](https://react.dev/): used to create some of the more interactive components, although they could have been easily created in astro templates I just prefer using React once I have to start handling state and [astro's island architecture](https://docs.astro.build/en/concepts/islands/) reduces the overhead of bringing in a big library like React.
- [tailwind](https://tailwindcss.com/): Class name based styling. I still have mixed feelings about tailwind. My brain still works in vanilla CSS but I'm giving tailwind a chance mostly so I can write about it in some future blog post so feel free to skip this one.

Those are the major players though I also used [shadcn/ui](https://ui.shadcn.com/) and took visual inspiration from [neobrutalism-components](https://github.com/ekmas/neobrutalism-components). Feel free to skip these as well, but I would strongly recommend using Radix (the accessibility library shadcn/ui is built on) or something similar since it is unfortunately too easy to make an inaccessible website by mistake. This does not mean you can opt out of being up to date on your [WCAG standards](https://www.w3.org/WAI/standards-guidelines/wcag/) though!

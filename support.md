---
layout: page
title: Support
permalink: /support/
description: Help with the 13 Years Pager and Producer.
---

# Support

## What 13 Years is

13 Years is a cue light and pager system for live production. A producer runs the show from the 13 Years Producer on a Mac or iPad, and each role on the team gets a Pager on an iPhone, iPad, Apple TV or Mac showing cues, a countdown, notes and messages.

## What you need

The Pager does nothing on its own: it needs a **13 Years Producer** on your network. That is either the Producer app on a Mac or iPad, or a hosted (headless) Producer run by someone on your team. Without one the Pager shows "Waiting for Producer...".

## Getting started

1. Put the Pager device and the Producer on the **same network**. The Pager finds the Producer automatically over Bonjour.
2. Allow **Local Network** access when the Pager asks.
3. Choose your role from the role chooser at the top right.

If the Pager can not find the Producer, or the Producer is hosted elsewhere, enter its address yourself:

- On the **Waiting for Producer…** screen, type the address into the field (it reads **IP or hostname, optional :port**) and choose **Connect**.
- Or open **Settings** (the gear in the Pager's top bar; on Apple TV select it with the remote; on Mac also **13 Years ▸ Settings…**, ⌘,), go to the **Producer** section, enter the address in **IP / Host** and choose **Connect**.

Use `host` or `host:port`, for example `192.168.1.20` or `clock.example.com:13380`. The default port is 13380. Clear the field to go back to finding the Producer automatically.

## Troubleshooting

**"Waiting for Producer..."** The Pager has not heard from a Producer yet. Check that the Producer is running and on the same network, or type its address into the field on that screen.

**Local Network permission.** If you declined it, the Pager can not find the Producer. Turn it back on in the Settings app under Privacy & Security, Local Network (iPhone and iPad), or the equivalent system setting.

**Firewall.** The Producer must accept incoming connections on these ports:

- **13380 / TCP**: the Pager feed
- **13390 / TCP**: the optional Control API (off unless enabled in the Producer's Settings)

**Wi-Fi client isolation.** Some guest or venue networks stop devices from talking to each other. Use a network without client isolation, or enter the Producer's address manually on a network that allows it.

**Display dims, then a connection screen.** If nothing arrives from the Producer for 5 seconds, the last screen stays up dimmed with a reconnecting strip. After 20 seconds it is replaced by the animated logo and "Waiting for Producer..." until the connection returns.

## Downloads

- Pager beta: [TestFlight](https://testflight.apple.com/join/sbn2ecQQ)
- Producer for Mac and the Mac Pager (disk images): [GitHub Releases](https://github.com/TristonYoder/13years/releases)

## Source code

13 Years is open source under the AGPL-3.0-only: [github.com/TristonYoder/13years](https://github.com/TristonYoder/13years).

## Data

The Pager collects no data. See the [Privacy Policy]({{ '/privacy/' | relative_url }}).

## Contact

Email [triston@7andco.studio](mailto:triston@7andco.studio) with your device, OS version and app version. If you can, say which Producer you connect to. Never send passwords or tokens.

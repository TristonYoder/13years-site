---
layout: page
title: Privacy Policy
permalink: /privacy/
description: How 13 Years handles your data. The developer collects none.
---

# Privacy Policy

**13 Years** · published by 7 & Co LLC · Effective October 14, 2026

## The short version

The 13 Years Pager apps (iPhone, iPad, Apple TV and Mac) collect no data. There are no accounts, no analytics, no advertising and no tracking, and the developer runs no server that the apps talk to. The Pager connects only to a 13 Years Producer that your own network provides.

## What the Pager does with the network

A Pager shows cues, countdowns, notes and messages sent by a 13 Years Producer. To do that it connects directly to the Producer, either:

- by finding it automatically on your local network (Bonjour, service `_13years._tcp`), or
- at a host and port you enter yourself in Settings.

Cue and message data goes between your device and that Producer and nowhere else. The developer does not receive it and does not store it. The Producer can see the Pager's device name and IP address, as any network service sees a connecting device. This connection on the local network is not encrypted.

If the Producer you connect to is hosted by someone else, such as your church or venue, that operator's own policies apply to what they log. The developer does not receive that data.

## What is stored on your device

The Pager keeps a few settings in the app's standard preferences storage on your device: your role choice, display style, layout, haptic strength, whether the Mac window stays on top, and the Producer address if you entered one. Deleting the app removes them. Nothing is synced to a developer account or service.

## Permissions

- **Local Network.** Apple requires this permission so the Pager can find and talk to a Producer on your Wi-Fi or Ethernet network. You can change it later in the Settings app under Privacy & Security, Local Network (on iPhone and iPad) or the equivalent system setting on your other devices.

The Pager asks for no other permissions: no location, contacts, photos, camera, microphone or tracking.

## The Producer app and Planning Center (optional)

The 13 Years Producer (Mac and iPad) is a separate app, not part of the App Store Pager. It runs the plan and can optionally connect to your Planning Center account.

- If you sign in to Planning Center, authorization uses OAuth. The access tokens are stored in the Keychain on the Producer device. Plan data goes directly between your device and Planning Center. It does not pass through the developer.
- The Producer can serve an optional local Control API for tools such as Stream Deck or Bitfocus Companion. It is off by default, has no authentication, and should be enabled only on a network you trust.
- The Producer app (Mac and iPad) asks GitHub whether a newer release exists (`api.github.com`, the public releases list). The request carries no identifier from the app; GitHub sees your device's IP address under its own privacy policy. The Pager apps never make this request.

A Producer can also run on a server (headless). Whoever operates that server is responsible for it; the developer does not receive its data.

## Third parties

No third party receives data from the developer, because the developer collects none. Planning Center and GitHub, if you use those features in the Producer, receive requests from your device under their own policies.

## Children

13 Years is not directed to children, and the developer does not knowingly collect personal information from anyone.

## Your control

The developer holds no data about you, so there is nothing to access, export or delete on your behalf. You can clear the Producer address in Settings, delete the app to remove its settings, and revoke Local Network access in system settings.

## Changes

If this policy changes, the new version will be posted on this page with a new effective date.

## Contact

7 & Co LLC · [triston@7andco.studio](mailto:triston@7andco.studio)

# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
People who run and crew live productions: churches, theatre, events and conferences (kept venue-neutral). A producer or tech director runs the show from the Producer; hosts, band, tech and other roles read cues on a Pager, usually the phone or tablet already in their hand, sometimes a dedicated ESP32 pager or an Apple TV.

## Product Purpose
13 Years is a cue light and pager system. The Producer (Mac, iPad, or headless on a server) runs the plan and sends cues; every Pager shows STANDBY and GO in large color, a synced countdown, role-specific notes and messages from the producer. Success: everyone on the team knows what is next without a headset call.

## Positioning
Cue lights on hardware people already own, discovered automatically on the local network, optionally pulling the plan from Planning Center. No account, no analytics, no tracking, nothing sent to the developer. Open source (AGPL-3.0-only).

## Operating Context
- Producer: Mac and iPad. Pager: iPhone, iPad, Apple TV, Mac, ESP32 hardware. Hosted headless Producer for teams.
- Pagers find the Producer over Bonjour or by `host:port` (default port 13380).
- Distribution: Pager on TestFlight, heading to the App Store; Mac disk images on GitHub Releases.
- Publisher: 7 & Co LLC.

## Brand Commitments
- Mark: the "13" with a traffic-light column (red, amber, green dots) beside a flat-topped 3. Light and dark variants exist.
- Cue colors from the app palette: STANDBY amber `#F5B826`, GO green `#26C759`, off/ground `#141A26` / `#111114`, message yellow `#FFD60A`.
- App fonts: Inter for numbers (clocks, durations), SF for other text; Space Grotesk is bundled.
- Site must keep light and dark mode with a theme toggle.

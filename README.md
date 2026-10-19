# 13 Years site

Marketing and legal site for 13 Years, published by 7 & Co LLC at **13years.app**. Plain Jekyll (GitHub Pages), hand-written layout and CSS, no trackers.

- Site-wide values: `_config.yml`. Landing lists: `_data/*.yml`. Pages: `index.md`, `privacy.md`, `support.md`, `licenses.md`.
- App Store link: set `app_store.pager_url` in `_config.yml` once live; the TestFlight button then switches to it.
- DNS (Cloudflare): apex `13years.app` A/AAAA to the GitHub Pages addresses, `www` CNAME `tristonyoder.github.io`, both DNS-only. `13years.7co.dev` redirects here.
- Preview: Ruby 3 + `bundle install && bundle exec jekyll serve`.

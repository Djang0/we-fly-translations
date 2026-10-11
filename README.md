# We-Fly translations

Translations of [We-Fly](https://we-fly.cloud), the paragliding logbook and flight analytics app,
into **French, German, Dutch, Italian and Spanish**.

The app's code is private. This repository holds everything a pilot needs to improve
how We-Fly speaks their language. Amendments are very welcome.

## How to help

- **On Weblate** (no Git needed): pick your language and suggest a better wording.
- **On GitHub**: edit a file and open a pull request.

Please read the [glossary](glossary.yaml) and your language's [style guide](style/) first.
We want the app to sound like a pilot talking to a pilot, not like a manual.

## Layout

| Path | What |
|---|---|
| `source/en/` | English source, synced from the app at every release. **Read-only**: changes here are overwritten. |
| `messages/<lang>/<namespace>.json` | Interface strings ([ICU message format](https://next-intl.dev/docs/usage/messages): keep `{variables}` and `plural` blocks intact) |
| `docs/<lang>/<slug>.md` | Pilot documentation (keep the front matter keys, translate `title` and `description`) |
| `blog/<lang>/<date>.md` | Blog posts |
| `glossary.yaml` | Paragliding vocabulary per language |
| `style/<lang>.md` | Tone and typography per language |

## How it ships

The app pins a commit of this repository at every release. Your change goes live with the
next We-Fly release after it is merged. Strings first drafted by AI are reviewed here by pilots.

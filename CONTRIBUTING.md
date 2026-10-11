# Contributing

1. **Keep placeholders.** `{count}`, `{name}`, `<b>…</b>` and ICU blocks such as
   `{count, plural, one {# flight} other {# flights}}` must survive, with the same names.
   Translate only the words inside the plural branches.
   **Apostrophes:** in ICU, a straight apostrophe right before `{` or `<` starts an
   escaped literal and silently eats the placeholder or tag (`l'<link>` breaks).
   Use the typographic apostrophe `’` (French and Italian elisions especially).
2. **Never put numbers or units in a string.** They are formatted from the pilot's unit settings.
3. **Follow the glossary.** If you think a term is wrong for your community, change it in
   `glossary.yaml` in its own pull request, with a short explanation.
4. **Don't edit `source/en/`.** English fixes go through the app maintainers (open an issue).
5. **Markdown docs:** keep headings, links, image paths, code blocks and the front-matter keys.
   Translate the text, `title` and `description`. Internal links to `/doc/...` stay as they are;
   the app localises them.

A CI check validates JSON syntax, placeholder parity and ICU syntax on every pull request.

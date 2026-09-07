# Add Limner to your microwaves website

This is a portable copy of your current Limner prototype: capitalized “Limner,” the subtitle “Limner the Scriptorium's Cat,” teal styling, and no “Find a work. Make it yours.” headline. Nothing has been uploaded to your GitHub repository.

## What is in the folder?

| File | What it does |
| --- | --- |
| `limner/index.html` | The page structure, navigation, written content, source-art references, and commission form. |
| `limner/style.css` | The teal colors, Lato typography, spacing, and mobile layout. |
| `limner/app.js` | The seven commission ideas, buttons, dialogs, and downloadable commission brief. |

Keep all three files together. Limner's HTML points to the CSS and JavaScript in the same folder, so they do not replace your existing site's styles or scripts. No installation or build command is needed for this static page.

## First: look at it on your computer

Unzip the download and open the inner `limner` folder. Double-click its `index.html` to open it in your browser. The Lato font and the two scientific illustrations load from external websites, so they need an internet connection.

## Upload it on your limner branch

1. Open your microwaves repository on GitHub and select your `limner` branch.
2. Go to the publishing folder that already contains your homepage's `index.html`. This is often the repository's top level. If your site lives in a `docs` folder, go into `docs` first; do not change your Pages settings.
3. Choose **Add file → Upload files** and drag in the entire inner **limner** folder. Do not upload the ZIP, this guide, or the outer extraction folder.
4. Check that the new files are grouped under `limner/`. Do not place the three loose files beside your existing homepage: that could overwrite it.
5. Enter a commit message such as `Add Limner page` and save the upload to your `limner` branch, not directly to `main`.

GitHub documents folder uploads and saving them to a branch in its [file-upload guide](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).

You can pause here and ask me to help with the homepage link before merging.

## Next: a link from your homepage

When you are ready, put this link beside the other navigation links in your existing homepage's HTML:

```html
<a href="./limner/">Limner</a>
```

This example is for the homepage beside the `limner` folder. The dot means “start from this page's directory.” A link inside a nested blog page needs a different relative path, so do not paste this unchanged into every blog post.

## What still needs a later step

This remains a prototype. The form downloads a brief to the visitor's device; it does not send requests to you, accept payments, create accounts, or register artists. Publishing the files on GitHub Pages will not enable those features.

The original source and reuse links are preserved. Fonts and image files are linked rather than bundled. This export does not re-check the rights status of the suggested works or editions.

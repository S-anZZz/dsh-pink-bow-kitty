# Pink Bow Kitty

A soft pink bow-kitty theme for the [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) Web UI.

![Pink Bow Kitty wallpaper](assets/kitty-pattern.svg)

## What it does

- Repaints the whole Web UI in a soft pink palette, with separate light and dark variants.
- Puts a hand-drawn kitty-print wallpaper behind the shell, softened with a pink veil so text stays readable.
- Adds a bow-wearing kitty mascot under the composer and on the blank-session welcome screen.
- Ships a matching plugin icon plus English and Chinese display metadata.

## Install

This is a standard DSH bundle: `package.json` declares `dsh.bundle` and `dsh.client`, and `cordis.patch.yml` inserts the plugin row.

- From the DSH plugin market: open **Plugins → 插件市场 → Themes** and install **Pink Bow Kitty**.
- Or install this repository as a bundle through the DSH plugin manager.

The theme applies immediately after the client plugin loads. Disable or remove the bundle to restore the stock UI exactly.

## Compatibility

Built against the DSH Web client's `theme` token-override service and the documented UI slots (`shell.overlay`, `conversation.composer.dock`, `conversation.hero.brand.mark`). No DeepSeek Harness client package is imported.

## Artwork

All artwork in this repository is original vector art drawn for this plugin: the kitty faces, the repeating wallpaper, and the plugin icon. No third-party characters or images are bundled.

## License

MIT

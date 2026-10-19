window.__ModuleLoader__.load({
  id: 'dsh-pink-bow-kitty',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    // Soft pink palette layered over whichever built-in theme is active.
    const LIGHT = {
      '--dsw-alias-bg-base': '#fff1f6',
      '--dsw-alias-bg-layer-1': '#fff8fb',
      '--dsw-alias-bg-layer-2': '#ffe7f1',
      '--dsw-alias-bg-overlay': '#fffafd',
      '--dsw-alias-border-l1': '#ffd5e4',
      '--dsw-alias-border-l2': '#fbb4cf',
      '--dsw-alias-brand-primary': '#f24c8e',
      '--dsw-alias-label-primary': '#582238',
      '--dsw-alias-label-secondary': '#8f4f68',
      '--dsw-alias-state-error-primary': '#d93a6e',
      '--dsw-alias-state-idle-primary': '#cfa1b5',
      '--dsw-alias-state-success-primary': '#4f9e74',
      '--dsw-alias-state-warn-primary': '#d98a45',
      '--dsw-specific-sidebar-fill': '#ffe0ee',
    };

    const DARK = {
      '--dsw-alias-bg-base': '#25121c',
      '--dsw-alias-bg-layer-1': '#301824',
      '--dsw-alias-bg-layer-2': '#3a1e2c',
      '--dsw-alias-bg-overlay': '#412132',
      '--dsw-alias-border-l1': '#5a2e42',
      '--dsw-alias-border-l2': '#7c3f58',
      '--dsw-alias-brand-primary': '#ff9cc4',
      '--dsw-alias-label-primary': '#ffe9f3',
      '--dsw-alias-label-secondary': '#d6a4ba',
      '--dsw-alias-state-error-primary': '#ff7ba3',
      '--dsw-alias-state-idle-primary': '#9a6a7f',
      '--dsw-alias-state-success-primary': '#82c69d',
      '--dsw-alias-state-warn-primary': '#edb273',
      '--dsw-specific-sidebar-fill': '#2e1521',
    };

    const TOKENS = {};
    for (const name of Object.keys(LIGHT)) {
      TOKENS[name] = { light: LIGHT[name], dark: DARK[name] };
    }

    // Hand-drawn kitty-print wallpaper, embedded as SVG data URIs so the
    // wallpaper travels with the plugin. Dark mode swaps in a light-pink
    // line-art recolour of the same artwork.
    const PATTERN_LIGHT = 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDQiIGhlaWdodD0iNTA0IiB2aWV3Qm94PSIwIDAgNTA0IDUwNCI+CiAgPGRlZnM+CiAgICA8ZyBpZD0ia2l0dHkiPgogICAgICA8ZyBzdHJva2U9IiM0YTJmMzkiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICAgICAgICA8cGF0aCBkPSJNMjEgNDMgTDE2IDE1IEw0MyAzMCBaIiBmaWxsPSIjZmZmZmZmIi8+CiAgICAgICAgPHBhdGggZD0iTTc1IDQzIEw4MCAxNSBMNTMgMzAgWiIgZmlsbD0iI2ZmZmZmZiIvPgogICAgICA8L2c+CiAgICAgIDxwYXRoIGQ9Ik0yNCAzNyBMMjIgMjIgTDM2IDMwIFoiIGZpbGw9IiNmZmM0ZGEiLz4KICAgICAgPHBhdGggZD0iTTcyIDM3IEw3NCAyMiBMNjAgMzAgWiIgZmlsbD0iI2ZmYzRkYSIvPgogICAgICA8ZWxsaXBzZSBjeD0iNDgiIGN5PSI1NSIgcng9IjM1IiByeT0iMzAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzRhMmYzOSIgc3Ryb2tlLXdpZHRoPSIyLjQiLz4KICAgICAgPGVsbGlwc2UgY3g9IjM2IiBjeT0iNTUiIHJ4PSIzLjMiIHJ5PSI0LjkiIGZpbGw9IiMzYjI2MmUiLz4KICAgICAgPGVsbGlwc2UgY3g9IjYwIiBjeT0iNTUiIHJ4PSIzLjMiIHJ5PSI0LjkiIGZpbGw9IiMzYjI2MmUiLz4KICAgICAgPGVsbGlwc2UgY3g9IjQ4IiBjeT0iNjMiIHJ4PSIzLjUiIHJ5PSIyLjYiIGZpbGw9IiNmNmI3M2MiLz4KICAgICAgPGVsbGlwc2UgY3g9IjI3LjUiIGN5PSI2NCIgcng9IjUuMiIgcnk9IjMuNiIgZmlsbD0iI2ZmYzZkYiIvPgogICAgICA8ZWxsaXBzZSBjeD0iNjguNSIgY3k9IjY0IiByeD0iNS4yIiByeT0iMy42IiBmaWxsPSIjZmZjNmRiIi8+CiAgICAgIDxnIHN0cm9rZT0iIzRhMmYzOSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiPgogICAgICAgIDxwYXRoIGQ9Ik05IDUyIEwyNSA1NCIvPjxwYXRoIGQ9Ik04IDYwIEwyNSA2MCIvPjxwYXRoIGQ9Ik05IDY4IEwyNSA2NSIvPgogICAgICAgIDxwYXRoIGQ9Ik04NyA1MiBMNzEgNTQiLz48cGF0aCBkPSJNODggNjAgTDcxIDYwIi8+PHBhdGggZD0iTTg3IDY4IEw3MSA2NSIvPgogICAgICA8L2c+CiAgICAgIDxnIHN0cm9rZT0iI2IyM2Y2YiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICAgICAgICA8ZWxsaXBzZSBjeD0iMTciIGN5PSIxNSIgcng9IjEwLjUiIHJ5PSI3LjUiIGZpbGw9IiNmZjdkYjQiIHRyYW5zZm9ybT0icm90YXRlKC0yOCAxNyAxNSkiLz4KICAgICAgICA8ZWxsaXBzZSBjeD0iMzMiIGN5PSIxMyIgcng9IjEwLjUiIHJ5PSI3LjUiIGZpbGw9IiNmZjdkYjQiIHRyYW5zZm9ybT0icm90YXRlKDI4IDMzIDEzKSIvPgogICAgICAgIDxjaXJjbGUgY3g9IjI1IiBjeT0iMTUiIHI9IjQuOCIgZmlsbD0iI2ZmN2RiNCIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8cGF0dGVybiBpZD0idGlsZSIgd2lkdGg9IjUwNCIgaGVpZ2h0PSI1MDQiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgtNikiPgogICAgICA8dXNlIGhyZWY9IiNraXR0eSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODQgODQpIHJvdGF0ZSgtNikgdHJhbnNsYXRlKC00OCAtMzgpIi8+CiAgICAgIDx1c2UgaHJlZj0iI2tpdHR5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTIgODQpIHJvdGF0ZSg3KSB0cmFuc2xhdGUoLTQ4IC0zOCkiLz4KICAgICAgPHVzZSBocmVmPSIja2l0dHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQyMCA4NCkgcm90YXRlKC00KSB0cmFuc2xhdGUoLTQ4IC0zOCkiLz4KICAgICAgPHVzZSBocmVmPSIja2l0dHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg0IDI1Mikgcm90YXRlKDUpIHRyYW5zbGF0ZSgtNDggLTM4KSIvPgogICAgICA8dXNlIGhyZWY9IiNraXR0eSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUyIDI1Mikgcm90YXRlKC03KSB0cmFuc2xhdGUoLTQ4IC0zOCkiLz4KICAgICAgPHVzZSBocmVmPSIja2l0dHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQyMCAyNTIpIHJvdGF0ZSg2KSB0cmFuc2xhdGUoLTQ4IC0zOCkiLz4KICAgICAgPHVzZSBocmVmPSIja2l0dHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg0IDQyMCkgcm90YXRlKDcpIHRyYW5zbGF0ZSgtNDggLTM4KSIvPgogICAgICA8dXNlIGhyZWY9IiNraXR0eSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUyIDQyMCkgcm90YXRlKC01KSB0cmFuc2xhdGUoLTQ4IC0zOCkiLz4KICAgICAgPHVzZSBocmVmPSIja2l0dHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQyMCA0MjApIHJvdGF0ZSg0KSB0cmFuc2xhdGUoLTQ4IC0zOCkiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjUwNCIgaGVpZ2h0PSI1MDQiIGZpbGw9InVybCgjdGlsZSkiLz4KPC9zdmc+Cg==';
    const PATTERN_DARK = 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDQiIGhlaWdodD0iNTA0IiB2aWV3Qm94PSIwIDAgNTA0IDUwNCI+CiAgPGRlZnM+CiAgICA8ZyBpZD0ia2l0dHkiPgogICAgICA8ZyBzdHJva2U9IiNmNmNmZTAiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICAgICAgICA8cGF0aCBkPSJNMjEgNDMgTDE2IDE1IEw0MyAzMCBaIiBmaWxsPSJub25lIi8+CiAgICAgICAgPHBhdGggZD0iTTc1IDQzIEw4MCAxNSBMNTMgMzAgWiIgZmlsbD0ibm9uZSIvPgogICAgICA8L2c+CiAgICAgIDxwYXRoIGQ9Ik0yNCAzNyBMMjIgMjIgTDM2IDMwIFoiIGZpbGw9IiM4YTRhNjMiLz4KICAgICAgPHBhdGggZD0iTTcyIDM3IEw3NCAyMiBMNjAgMzAgWiIgZmlsbD0iIzhhNGE2MyIvPgogICAgICA8ZWxsaXBzZSBjeD0iNDgiIGN5PSI1NSIgcng9IjM1IiByeT0iMzAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Y2Y2ZlMCIgc3Ryb2tlLXdpZHRoPSIyLjQiLz4KICAgICAgPGVsbGlwc2UgY3g9IjM2IiBjeT0iNTUiIHJ4PSIzLjMiIHJ5PSI0LjkiIGZpbGw9IiNmZmU5ZjMiLz4KICAgICAgPGVsbGlwc2UgY3g9IjYwIiBjeT0iNTUiIHJ4PSIzLjMiIHJ5PSI0LjkiIGZpbGw9IiNmZmU5ZjMiLz4KICAgICAgPGVsbGlwc2UgY3g9IjQ4IiBjeT0iNjMiIHJ4PSIzLjUiIHJ5PSIyLjYiIGZpbGw9IiNmMGMwNzAiLz4KICAgICAgPGVsbGlwc2UgY3g9IjI3LjUiIGN5PSI2NCIgcng9IjUuMiIgcnk9IjMuNiIgZmlsbD0iIzhhNGE2MyIvPgogICAgICA8ZWxsaXBzZSBjeD0iNjguNSIgY3k9IjY0IiByeD0iNS4yIiByeT0iMy42IiBmaWxsPSIjOGE0YTYzIi8+CiAgICAgIDxnIHN0cm9rZT0iI2Y2Y2ZlMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiPgogICAgICAgIDxwYXRoIGQ9Ik05IDUyIEwyNSA1NCIvPjxwYXRoIGQ9Ik04IDYwIEwyNSA2MCIvPjxwYXRoIGQ9Ik05IDY4IEwyNSA2NSIvPgogICAgICAgIDxwYXRoIGQ9Ik04NyA1MiBMNzEgNTQiLz48cGF0aCBkPSJNODggNjAgTDcxIDYwIi8+PHBhdGggZD0iTTg3IDY4IEw3MSA2NSIvPgogICAgICA8L2c+CiAgICAgIDxnIHN0cm9rZT0iI2ZmZDBlMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICAgICAgICA8ZWxsaXBzZSBjeD0iMTciIGN5PSIxNSIgcng9IjEwLjUiIHJ5PSI3LjUiIGZpbGw9IiNmZjljYzQiIHRyYW5zZm9ybT0icm90YXRlKC0yOCAxNyAxNSkiLz4KICAgICAgICA8ZWxsaXBzZSBjeD0iMzMiIGN5PSIxMyIgcng9IjEwLjUiIHJ5PSI3LjUiIGZpbGw9IiNmZjljYzQiIHRyYW5zZm9ybT0icm90YXRlKDI4IDMzIDEzKSIvPgogICAgICAgIDxjaXJjbGUgY3g9IjI1IiBjeT0iMTUiIHI9IjQuOCIgZmlsbD0iI2ZmOWNjNCIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8cGF0dGVybiBpZD0idGlsZSIgd2lkdGg9IjUwNCIgaGVpZ2h0PSI1MDQiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgtNikiPgogICAgICA8dXNlIGhyZWY9IiNraXR0eSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODQgODQpIHJvdGF0ZSgtNikgdHJhbnNsYXRlKC00OCAtMzgpIi8+CiAgICAgIDx1c2UgaHJlZj0iI2tpdHR5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTIgODQpIHJvdGF0ZSg3KSB0cmFuc2xhdGUoLTQ4IC0zOCkiLz4KICAgICAgPHVzZSBocmVmPSIja2l0dHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQyMCA4NCkgcm90YXRlKC00KSB0cmFuc2xhdGUoLTQ4IC0zOCkiLz4KICAgICAgPHVzZSBocmVmPSIja2l0dHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg0IDI1Mikgcm90YXRlKDUpIHRyYW5zbGF0ZSgtNDggLTM4KSIvPgogICAgICA8dXNlIGhyZWY9IiNraXR0eSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUyIDI1Mikgcm90YXRlKC03KSB0cmFuc2xhdGUoLTQ4IC0zOCkiLz4KICAgICAgPHVzZSBocmVmPSIja2l0dHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQyMCAyNTIpIHJvdGF0ZSg2KSB0cmFuc2xhdGUoLTQ4IC0zOCkiLz4KICAgICAgPHVzZSBocmVmPSIja2l0dHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg0IDQyMCkgcm90YXRlKDcpIHRyYW5zbGF0ZSgtNDggLTM4KSIvPgogICAgICA8dXNlIGhyZWY9IiNraXR0eSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUyIDQyMCkgcm90YXRlKC01KSB0cmFuc2xhdGUoLTQ4IC0zOCkiLz4KICAgICAgPHVzZSBocmVmPSIja2l0dHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQyMCA0MjApIHJvdGF0ZSg0KSB0cmFuc2xhdGUoLTQ4IC0zOCkiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjUwNCIgaGVpZ2h0PSI1MDQiIGZpbGw9InVybCgjdGlsZSkiLz4KPC9zdmc+Cg==';

    const WALLPAPER_CSS = [
      'html{background-color:#ffe9f2}',
      'html:has(body[data-ds-dark-theme]){background-color:#2a1520}',
      'body{background-color:#ffe9f2 !important;background-image:linear-gradient(rgba(255,241,246,.82),rgba(255,241,246,.82)),url("data:image/svg+xml;base64,',
      PATTERN_LIGHT,
      '") !important;background-repeat:repeat,repeat !important;background-size:auto,430px auto !important;background-position:0 0,0 0 !important;background-attachment:fixed,fixed !important}',
      'body[data-ds-dark-theme]{background-color:#25121c !important;background-image:linear-gradient(rgba(37,18,28,.80),rgba(37,18,28,.80)),url("data:image/svg+xml;base64,',
      PATTERN_DARK,
      '") !important}',
    ].join('');

    /** Original bow-wearing kitty artwork; colors are artwork, not theme tokens. */
    function KittyFace(props) {
      const size = props && typeof props.size === 'number' && props.size > 0 ? props.size : 32;
      return h('svg', {
        viewBox: '0 0 96 96',
        width: size,
        height: size,
        role: 'presentation',
        focusable: 'false',
        'aria-hidden': 'true',
        style: { display: 'block', overflow: 'visible' },
      },
        h('g', { stroke: '#4a2f39', strokeWidth: 2.4, strokeLinejoin: 'round' },
          h('path', { d: 'M21 43 L16 15 L43 30 Z', fill: '#ffffff' }),
          h('path', { d: 'M75 43 L80 15 L53 30 Z', fill: '#ffffff' }),
        ),
        h('path', { d: 'M24 37 L22 22 L36 30 Z', fill: '#ffc4da' }),
        h('path', { d: 'M72 37 L74 22 L60 30 Z', fill: '#ffc4da' }),
        h('ellipse', { cx: 48, cy: 55, rx: 35, ry: 30, fill: '#ffffff', stroke: '#4a2f39', strokeWidth: 2.4 }),
        h('ellipse', { cx: 36, cy: 55, rx: 3.3, ry: 4.9, fill: '#3b262e' }),
        h('ellipse', { cx: 60, cy: 55, rx: 3.3, ry: 4.9, fill: '#3b262e' }),
        h('ellipse', { cx: 48, cy: 63, rx: 3.5, ry: 2.6, fill: '#f6b73c' }),
        h('ellipse', { cx: 27.5, cy: 64, rx: 5.2, ry: 3.6, fill: '#ffc6db' }),
        h('ellipse', { cx: 68.5, cy: 64, rx: 5.2, ry: 3.6, fill: '#ffc6db' }),
        h('g', { stroke: '#4a2f39', strokeWidth: 2, strokeLinecap: 'round', fill: 'none' },
          h('path', { d: 'M9 52 L25 54' }),
          h('path', { d: 'M8 60 L25 60' }),
          h('path', { d: 'M9 68 L25 65' }),
          h('path', { d: 'M87 52 L71 54' }),
          h('path', { d: 'M88 60 L71 60' }),
          h('path', { d: 'M87 68 L71 65' }),
        ),
        h('g', { stroke: '#b23f6b', strokeWidth: 2, strokeLinejoin: 'round' },
          h('ellipse', { cx: 17, cy: 15, rx: 10.5, ry: 7.5, fill: '#ff7db4', transform: 'rotate(-28 17 15)' }),
          h('ellipse', { cx: 33, cy: 13, rx: 10.5, ry: 7.5, fill: '#ff7db4', transform: 'rotate(28 33 13)' }),
          h('circle', { cx: 25, cy: 15, r: 4.8, fill: '#ff5b9b' }),
        ),
      );
    }

    function Heart(props) {
      const size = props && typeof props.size === 'number' ? props.size : 9;
      return h('svg', {
        viewBox: '0 0 24 24',
        width: size,
        height: size,
        className: props && props.className,
        focusable: 'false',
        'aria-hidden': 'true',
        style: { display: 'block' },
      }, h('path', {
        d: 'M12 21.3s-7.7-4.8-9.5-9.2C1 8.3 3 4.6 6.6 4.6c2.2 0 3.7 1.2 5.4 3.3 1.7-2.1 3.2-3.3 5.4-3.3 3.6 0 5.6 3.7 4.1 7.5-1.8 4.4-9.5 9.2-9.5 9.2z',
        fill: props && props.color ? props.color : '#ff86b8',
      }));
    }

    const MASCOT_CSS = [
      '.pbk-mascot{display:flex;align-items:center;justify-content:center;gap:6px;padding:3px 0 0;line-height:0;user-select:none;pointer-events:none;opacity:.92}',
      '.pbk-mascot-kitty{display:inline-flex;filter:drop-shadow(0 2px 3px rgba(203,63,116,.25));animation:pbk-bob 3.4s ease-in-out infinite}',
      '.pbk-mascot-heart{animation:pbk-float 3.1s ease-in-out infinite}',
      '.pbk-mascot-heart-b{animation-delay:-1.05s;margin-top:3px}',
      '.pbk-mascot-heart-c{animation-delay:-2.1s}',
      '@keyframes pbk-bob{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-2px) rotate(2deg)}}',
      '@keyframes pbk-float{0%,100%{transform:translateY(0);opacity:.55}50%{transform:translateY(-4px);opacity:1}}',
      '@media (prefers-reduced-motion:reduce){.pbk-mascot-kitty,.pbk-mascot-heart{animation:none}}',
    ].join('');

    /** Ambient kitty mascot below the composer card. */
    function ComposerMascot() {
      return h(React.Fragment, null,
        h('style', null, MASCOT_CSS),
        h('div', { className: 'pbk-mascot', 'aria-hidden': 'true' },
          h(Heart, { className: 'pbk-mascot-heart pbk-mascot-heart-a', size: 9, color: '#ff9fc5' }),
          h(Heart, { className: 'pbk-mascot-heart pbk-mascot-heart-b', size: 7, color: '#ffc2d9' }),
          h('span', { className: 'pbk-mascot-kitty' }, h(KittyFace, { size: 30 })),
          h(Heart, { className: 'pbk-mascot-heart pbk-mascot-heart-c', size: 8, color: '#ffb3d0' }),
        ),
      );
    }

    const HERO_CSS = [
      '.pbk-hero{display:inline-flex;align-items:center;justify-content:center;filter:drop-shadow(0 6px 16px rgba(203,63,116,.22));animation:pbk-hero-bob 4.2s ease-in-out infinite}',
      '.pbk-hero-face{animation:pbk-hero-tilt 5s ease-in-out infinite;transform-origin:50% 60%}',
      '@keyframes pbk-hero-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}',
      '@keyframes pbk-hero-tilt{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}',
      '@media (prefers-reduced-motion:reduce){.pbk-hero,.pbk-hero-face{animation:none}}',
    ].join('');

    /** Kitty-style brand mark shown before the blank-session headline. */
    function HeroKitty(props) {
      const size = props && typeof props.size === 'number' && props.size > 0 ? props.size : 64;
      const className = props && props.className ? 'pbk-hero ' + props.className : 'pbk-hero';
      return h(React.Fragment, null,
        h('style', null, HERO_CSS),
        h('span', { className, style: { width: size, height: size } },
          h('span', { className: 'pbk-hero-face' }, h(KittyFace, { size })),
        ),
      );
    }

    /** Kitty-print wallpaper stylesheet; renders no visible box. */
    function Wallpaper() {
      return h('style', null, WALLPAPER_CSS);
    }

    return {
      inject: ['theme', 'slots'],
      apply(ctx) {
        ctx.effect(() => ctx.theme.overrideTokens('dsh-pink-bow-kitty', TOKENS));
        ctx.slots.inject('shell.overlay', () => ctx.slots.register({
          name: 'shell.overlay',
          id: 'pink-bow-kitty-wallpaper',
          order: 0,
        }, Wallpaper));
        ctx.slots.inject('conversation.composer.dock', () => ctx.slots.register({
          name: 'conversation.composer.dock',
          id: 'pink-bow-kitty-mascot',
          order: 3,
        }, ComposerMascot));
        ctx.slots.inject('conversation.hero.brand.mark', () => ctx.slots.register({
          name: 'conversation.hero.brand.mark',
        }, HeroKitty));
      },
    };
  },
});

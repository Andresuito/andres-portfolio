# andresbr.com

Personal portfolio built with TanStack Start, React APIs on the Redact runtime, CSS, and Cloudflare Workers.

Redact is integrated through `@tanstack/redact/vite` after the Start and React plugins, with the default feature preset. Server dependencies are bundled with `ssr.noExternal` so their React imports also use Redact. Keep `react` and `react-dom` installed and use normal React imports in application code. See the [TanStack Start integration guide](https://github.com/TanStack/redact/blob/main/docs/start.md).

```sh
pnpm install
pnpm dev
```

Build with `pnpm build` and deploy with `pnpm deploy`.

## Code quality

Vite+ integrates Oxlint and Oxfmt, configured in `vite.config.ts`.

- `pnpm check`: check lint and formatting.
- `pnpm fix`: fix lint and formatting.
- `pnpm lint` / `pnpm lint:fix`: check / fix lint.
- `pnpm format` / `pnpm format:fix`: check / fix formatting.
- `pnpm typecheck`: check TypeScript.

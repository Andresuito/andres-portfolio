import { createServerFn } from "@tanstack/react-start";
import { getCookie, getRequest, setCookie } from "@tanstack/react-start/server";

export type Theme = "light" | "dark" | "bucket";

const storageKey = "_preferred-theme";

export const getThemeServerFn = createServerFn({
  method: "GET",
}).handler(async () => {
  return (getCookie(storageKey) || "light") as Theme;
});

export const setThemeServerFn = createServerFn({ method: "GET" }).handler(async () => {
  const request = getRequest();
  const url = new URL(request.url);
  const theme = url.searchParams.get("theme") as Theme;
  if (theme && ["light", "dark", "bucket"].includes(theme)) {
    setCookie(storageKey, theme);
  }
  return theme;
});

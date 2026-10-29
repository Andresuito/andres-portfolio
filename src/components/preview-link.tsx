import type { ComponentProps } from "react";

import previews from "@/lib/link-previews.json";

export function PreviewLink({
  href = "",
  className = "",
  children,
  ...props
}: ComponentProps<"a">) {
  const preview = previews[href.replace(/\/$/, "") as keyof typeof previews];

  return (
    <a {...props} href={href} className={`preview-link ${className}`}>
      {children}
      {preview && (
        <span className="link-preview" aria-hidden="true">
          <img src={preview} alt="" className="link-preview-image" loading="lazy" />
        </span>
      )}
    </a>
  );
}

import React from "react"
import { useTranslation } from "react-i18next"
import { demoPortalUrl } from "../config/demo"

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode
}

/** Demo CTAs → demos portal (language-aware). */
export function DemoPortalLink({ children, className, ...rest }: Props) {
  const { i18n } = useTranslation()
  return (
    <a
      href={demoPortalUrl(i18n.language)}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  )
}

import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog"
import { DEMO_PORTAL_BASE } from "../config/demo"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

function pageLang(raw?: string) {
  const code = String(raw || "fr").toLowerCase().split("-")[0]
  return code === "en" || code === "ar" ? code : "fr"
}

/** Demo CTAs open an email popup on this site. The portal is only the API. */
export function DemoPortalLink({ children, className, ...rest }: Props) {
  const { i18n, t } = useTranslation("hero")
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState("")
  const [ok, setOk] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setBusy(true)
    setMessage("")
    setOk(false)
    try {
      const res = await fetch(`${DEMO_PORTAL_BASE}/api/requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, lang: pageLang(i18n.language) }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        const code = data.error === "this email already has a demo" ? "active_demo" : (data.error || "generic")
        setMessage(t(`demoError.${code}`, { defaultValue: t("demoError.generic") }))
        return
      }
      setOk(true)
      setMessage(t("demoSent"))
    } catch {
      setMessage(t("demoError.generic"))
    } finally {
      setBusy(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <button type="button" className={className} onClick={() => setOpen(true)} {...rest}>
        {children}
      </button>
      <DialogContent className="bg-white text-[#323232] max-w-md rounded-[24px] p-6">
        <DialogTitle className="text-xl font-medium font-['Quicksand']">{t("demoTitle")}</DialogTitle>
        <p className="text-sm text-[#5a635c] font-['Quicksand']">{t("demoLead")}</p>
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
          <label className="text-sm font-medium font-['Quicksand']" htmlFor="demo-email">
            {t("demoEmailLabel")}
          </label>
          <input
            id="demo-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("demoEmailPlaceholder")}
            className="h-10 rounded-xl border border-[#deeaff] px-3 font-['Quicksand']"
          />
          <button
            type="submit"
            disabled={busy}
            className="h-10 rounded-full bg-[#3879F0] text-white font-medium font-['Quicksand'] disabled:opacity-60"
          >
            {busy ? t("demoSending") : t("demoSend")}
          </button>
          {message ? (
            <p className={`text-sm font-['Quicksand'] ${ok ? "text-[#1a7f4b]" : "text-red-600"}`}>{message}</p>
          ) : null}
        </form>
      </DialogContent>
    </Dialog>
  )
}

import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog"
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
        const code = (data.error === "email_has_active_demo" || data.error === "this email already has a demo") ? "active_demo" : (data.error || "generic")
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
      <DialogTrigger asChild>
        <button type="button" className={className} {...rest}>
          {children}
        </button>
      </DialogTrigger>
      <DialogContent className="bg-black border-gray-800 text-white max-w-md rounded-[28px] p-0 [&>button]:text-white">
        <div className="flex flex-col gap-4 bg-black p-6 text-white md:p-8">
          <DialogTitle className="text-center text-xl font-normal text-white [font-family:'Krona_One',Helvetica] md:text-2xl">
            {t("demoTitle")}
          </DialogTitle>
          <p className="text-center text-sm leading-6 text-[#dee9ff] [font-family:'Quicksand',Helvetica]">
            {t("demoLead")}
          </p>
          <p className="text-center text-sm leading-6 text-[#dee9ff] [font-family:'Quicksand',Helvetica]">
            {t("demoJunk")}
          </p>
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <label className="text-sm font-medium text-[#dee9ff] [font-family:'Quicksand',Helvetica]" htmlFor="demo-email">
              {t("demoEmailLabel")}
            </label>
            <input
              id="demo-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("demoEmailPlaceholder")}
              className="h-11 rounded-[15px] border border-[#828282] bg-white px-4 text-[#323232] [font-family:'Quicksand',Helvetica] placeholder:text-[#828282]"
            />
            <button
              type="submit"
              disabled={busy}
              className="h-11 rounded-[22px] bg-[#3879F0] font-medium text-[#dee9ff] [font-family:'Quicksand',Helvetica] hover:opacity-75 disabled:opacity-60"
            >
              {busy ? t("demoSending") : t("demoSend")}
            </button>
            {message ? (
              <p className={`text-center text-sm [font-family:'Quicksand',Helvetica] ${ok ? "text-[#b7f7cf]" : "text-red-400"}`}>
                {message}
              </p>
            ) : null}
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

import { SendIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface XFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactFormProps {
  onClose?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const { t } = useTranslation("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<XFormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: XFormData) => {
    // Check for validation errors before submitting
    if (Object.keys(errors).length > 0) {
      toast.error(t("form.messages.validationError"));
      return;
    }

    setIsSubmitting(true);

    // Show sending toast
    const sendingToast = toast.loading(t("form.messages.sending"));

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(
          Array.from(Object.entries({ "form-name": "contact", ...data })).map(
            ([k, v]) => [k, String(v)]
          )
        ).toString(),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      toast.dismiss(sendingToast);

      if (response.ok) {
        toast.success(t("form.messages.success"));
        reset();
        onClose?.();
      } else if (response.status >= 500) {
        toast.error(t("form.messages.serverError"));
      } else if (response.status >= 400) {
        toast.error(t("form.messages.validationError"));
      } else {
        toast.error(t("form.messages.error"));
      }
    } catch (error: any) {
      toast.dismiss(sendingToast);
      console.error("Error sending email:", error);

      if (error.name === "AbortError") {
        toast.error(t("form.messages.timeout"));
      } else if (
        error.message?.includes("fetch") ||
        error.message?.includes("network")
      ) {
        toast.error(t("form.messages.networkError"));
      } else {
        toast.error(t("form.messages.error"));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-start gap-8 md:gap-[50px] p-6 md:p-[50px] relative self-stretch w-full flex-[0_0_auto] bg-black">
      <div className="flex flex-col items-start gap-4 md:gap-[25px] relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Krona_One',Helvetica] font-normal text-white text-xl md:text-[34px] text-center tracking-[-1.5px] md:tracking-[-2.18px] leading-[24px] md:leading-[37.4px]">
          {t("title")}
        </h2>

        <div className="relative self-stretch font-mysticgrove-whisperingxs font-[number:var(--mysticgrove-whisperingxs-font-weight)] text-light-blue text-[length:var(--mysticgrove-whisperingxs-font-size)] text-center tracking-[var(--mysticgrove-whisperingxs-letter-spacing)] leading-[var(--mysticgrove-whisperingxs-line-height)] [font-style:var(--mysticgrove-whisperingxs-font-style)]">
          <span className="text-[#dee9ff] tracking-[var(--mysticgrove-whisperingxs-letter-spacing)] font-mysticgrove-whisperingxs [font-style:var(--mysticgrove-whisperingxs-font-style)] font-[number:var(--mysticgrove-whisperingxs-font-weight)] leading-[var(--mysticgrove-whisperingxs-line-height)] text-[length:var(--mysticgrove-whisperingxs-font-size)]">
            {t("subtitle.part1")}
          </span>

          <span className="text-[#3879f0] tracking-[var(--mysticgrove-whisperingxs-letter-spacing)] font-mysticgrove-whisperingxs [font-style:var(--mysticgrove-whisperingxs-font-style)] font-[number:var(--mysticgrove-whisperingxs-font-weight)] leading-[var(--mysticgrove-whisperingxs-line-height)] text-[length:var(--mysticgrove-whisperingxs-font-size)]">
            {t("subtitle.part2")}
          </span>

          <span className="text-[#dee9ff] tracking-[var(--mysticgrove-whisperingxs-letter-spacing)] font-mysticgrove-whisperingxs [font-style:var(--mysticgrove-whisperingxs-font-style)] font-[number:var(--mysticgrove-whisperingxs-font-weight)] leading-[var(--mysticgrove-whisperingxs-line-height)] text-[length:var(--mysticgrove-whisperingxs-font-size)]">
            {t("subtitle.part3")}
          </span>
        </div>
      </div>

      <form
        name="contact"
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="flex flex-col items-center justify-center gap-4 md:gap-[25px] relative self-stretch w-full flex-[0_0_auto]"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-[25px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start relative">
            <div className="flex flex-col items-start gap-3 px-4 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[15px] md:rounded-[20px] border border-solid border-[#828282]">
              <div className="relative self-stretch w-full h-px">
                <div className="inline-flex items-center px-1 py-0 relative -top-2.5 bg-white rounded-[15px] md:rounded-[20px]">
                  <label className="relative w-fit mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-medium text-grey text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                    {t("form.labels.fullName")}
                  </label>

                  <span className="relative w-fit opacity-80 font-paragraph-xsmall-meduim font-[number:var(--paragraph-xsmall-meduim-font-weight)] text-red text-[length:var(--paragraph-xsmall-meduim-font-size)] tracking-[var(--paragraph-xsmall-meduim-letter-spacing)] leading-[var(--paragraph-xsmall-meduim-line-height)] [font-style:var(--paragraph-xsmall-meduim-font-style)]">
                    *
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between flex-[0_0_auto] relative self-stretch w-full">
                <div className="flex mw-[228px] items-center gap-1 relative">
                  <Input
                    {...register("name", {
                      required: t("form.validation.nameRequired"),
                      minLength: {
                        value: 2,
                        message: t("form.validation.nameMinLength"),
                      },
                    })}
                    className={`flex-1 opacity-80 [font-family:'Quicksand',Helvetica] font-medium text-grey text-sm md:text-base tracking-[0] leading-5 md:leading-6 relative mt-[-1.00px] border-none bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0 ${
                      errors.name ? "text-red-500" : ""
                    }`}
                    placeholder={t("form.placeholders.fullName")}
                  />
                </div>

                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]" />
              </div>

              <img className="relative w-72 h-px mb-[-1.00px]" alt="Icons" />
            </div>
          </div>

          <div className="flex flex-col items-start relative rounded-[15px] md:rounded-[20px]">
            <div className="flex flex-col items-start gap-3 px-4 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[15px] md:rounded-[20px] border border-solid border-[#828282]">
              <div className="relative self-stretch w-full h-px">
                <div className="inline-flex items-center px-1 py-0 relative -top-2.5 bg-white rounded-[15px] md:rounded-[20px]">
                  <label className="relative w-fit mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-medium text-grey text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                    {t("form.labels.email")}
                  </label>

                  <span className="relative w-fit opacity-80 font-paragraph-xsmall-meduim font-[number:var(--paragraph-xsmall-meduim-font-weight)] text-red text-[length:var(--paragraph-xsmall-meduim-font-size)] tracking-[var(--paragraph-xsmall-meduim-letter-spacing)] leading-[var(--paragraph-xsmall-meduim-line-height)] [font-style:var(--paragraph-xsmall-meduim-font-style)]">
                    *
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between flex-[0_0_auto] relative self-stretch w-full">
                <div className="flex mw-[228px] items-center gap-1 relative">
                  <Input
                    {...register("email", {
                      required: t("form.validation.emailRequired"),
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: t("form.validation.emailInvalid"),
                      },
                    })}
                    className={`flex-1 opacity-80 [font-family:'Quicksand',Helvetica] font-medium text-grey text-sm md:text-base tracking-[0] leading-5 md:leading-6 relative mt-[-1.00px] border-none bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0 ${
                      errors.email ? "text-red-500" : ""
                    }`}
                    placeholder={t("form.placeholders.email")}
                    type="email"
                  />
                </div>

                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]" />
              </div>

              <img className="relative w-72 h-px mb-[-1.00px]" alt="Icons" />
            </div>
          </div>

          <div className="flex flex-col items-start relative rounded-[15px] md:rounded-[20px]">
            <div className="flex flex-col items-start gap-3 px-4 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[15px] md:rounded-[20px] border border-solid border-[#828282]">
              <div className="relative self-stretch w-full h-px">
                <div className="inline-flex items-center px-1 py-0 relative -top-2.5 bg-white rounded-[15px] md:rounded-[20px]">
                  <label className="relative w-fit mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-medium text-grey text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                    {t("form.labels.phone")}
                  </label>

                  <span className="relative w-fit opacity-80 font-paragraph-xsmall-meduim font-[number:var(--paragraph-xsmall-meduim-font-weight)] text-red text-[length:var(--paragraph-xsmall-meduim-font-size)] tracking-[var(--paragraph-xsmall-meduim-letter-spacing)] leading-[var(--paragraph-xsmall-meduim-line-height)] [font-style:var(--paragraph-xsmall-meduim-font-style)]">
                    *
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between flex-[0_0_auto] relative self-stretch w-full">
                <div className="flex w-[228px] items-center gap-1 relative">
                  <Input
                    {...register("phone", {
                      required: t("form.validation.phoneRequired"),
                      pattern: {
                        value: /^[+]?[0-9\s\-\(\)]{8,}$/,
                        message: t("form.validation.phoneInvalid"),
                      },
                    })}
                    className={`flex-1 opacity-80 [font-family:'Quicksand',Helvetica] font-medium text-grey text-sm md:text-base tracking-[0] leading-5 md:leading-6 relative mt-[-1.00px] border-none bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0 ${
                      errors.phone ? "text-red-500" : ""
                    }`}
                    placeholder={t("form.placeholders.phone")}
                    type="tel"
                  />
                </div>

                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]" />
              </div>

              <img className="relative w-72 h-px mb-[-1.00px]" alt="Icons" />
            </div>
          </div>
        </div>

        <div className="flex flex-col h-[120px] md:h-[143px] items-start relative self-stretch w-full rounded-[15px] md:rounded-[20px]">
          <div className="flex flex-col items-start gap-3 px-4 py-0 relative flex-1 self-stretch w-full grow bg-white rounded-[15px] md:rounded-[20px] border border-solid border-[#828282]">
            <div className="relative self-stretch w-full h-px">
              <div className="inline-flex items-center px-1 py-0 relative -top-2.5 bg-white rounded-[15px] md:rounded-[20px]">
                <label className="relative w-fit mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-medium text-grey text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                  {t("form.labels.message")}
                </label>

                <span className="relative w-fit opacity-80 font-paragraph-xsmall-heavy font-[number:var(--paragraph-xsmall-heavy-font-weight)] text-red text-[length:var(--paragraph-xsmall-heavy-font-size)] tracking-[var(--paragraph-xsmall-heavy-letter-spacing)] leading-[var(--paragraph-xsmall-heavy-line-height)] whitespace-nowrap [font-style:var(--paragraph-xsmall-heavy-font-style)]">
                  *
                </span>
              </div>
            </div>

            <div className="flex items-start justify-between relative flex-1 self-stretch w-full grow">
              <div className="flex mw-[228px] items-start gap-1 relative">
                <Textarea
                  {...register("message", {
                    required: t("form.validation.messageRequired"),
                    minLength: {
                      value: 10,
                      message: t("form.validation.messageMinLength"),
                    },
                  })}
                  className={`flex-1 opacity-80 [font-family:'Quicksand',Helvetica] font-medium text-grey text-sm md:text-base tracking-[0] leading-5 md:leading-6 relative mt-[-1.00px] border-none bg-transparent p-0 resize-none focus-visible:ring-0 focus-visible:ring-offset-0 ${
                    errors.message ? "text-red-500" : ""
                  }`}
                  placeholder={t("form.placeholders.message")}
                />
              </div>

              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]" />
            </div>

            <img
              className="h-3 mr-[-10.00px] relative self-stretch w-full"
              alt="Icons"
              src="/icons.svg"
            />
          </div>
        </div>

        {/* Error Messages */}
        {(errors.name || errors.email || errors.phone || errors.message) && (
          <div className="w-full text-center">
            {errors.name && (
              <p className="text-red-500 text-sm mb-1">{errors.name.message}</p>
            )}
            {errors.email && (
              <p className="text-red-500 text-sm mb-1">
                {errors.email.message}
              </p>
            )}
            {errors.phone && (
              <p className="text-red-500 text-sm mb-1">
                {errors.phone.message}
              </p>
            )}
            {errors.message && (
              <p className="text-red-500 text-sm mb-1">
                {errors.message.message}
              </p>
            )}
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 md:gap-2.5 px-4 md:px-5 py-2.5 relative flex-[0_0_auto] bg-blue rounded-[22px]  hover:opacity-75 h-auto hover:bg-blue/90 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <SendIcon className="relative w-5 h-5 md:w-6 md:h-6" />
          <span className="relative w-fit mt-[-1.00px] font-quicksand-easyread-semibold font-[number:var(--quicksand-easyread-semibold-font-weight)] text-light-blue text-[length:var(--quicksand-easyread-semibold-font-size)] tracking-[var(--quicksand-easyread-semibold-letter-spacing)] leading-[var(--quicksand-easyread-semibold-line-height)] whitespace-nowrap [font-style:var(--quicksand-easyread-semibold-font-style)]">
            {isSubmitting ? t("form.submit.sending") : t("form.submit.send")}
          </span>
        </Button>
      </form>
    </div>
  );
};

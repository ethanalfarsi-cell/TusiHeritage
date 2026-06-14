export const contactModalEventName = "xiangxifu:open-contact-modal";

export function openContactModal() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(contactModalEventName));
}

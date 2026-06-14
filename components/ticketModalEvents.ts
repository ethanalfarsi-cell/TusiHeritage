export const ticketModalEventName = "xiangxifu:open-ticket-modal";

export function openTicketModal() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(ticketModalEventName));
}

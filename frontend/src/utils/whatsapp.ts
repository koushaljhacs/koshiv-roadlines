/**
 * Returns a WhatsApp click-to-chat URL.
 * @param phone - Phone number in international format without '+' or spaces (e.g. '919876543210')
 * @param message - Pre-filled message text
 */
export function getWhatsAppUrl(phone: string, message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}
/**
 * Stripe Payment Links used by the donate page.
 *
 * This is the only place the Stripe URLs live; the donate page renders from
 * it. To change a link or a monthly amount, edit it here. The links themselves
 * are created and managed in the Stripe Dashboard (Payment Links). No Stripe
 * keys or SDK are used anywhere on the site.
 *
 * Per-link settings that live in Stripe, not here:
 *   - "After payment" redirect  -> https://joshuacord.org/thank-you/
 *   - "Designate your gift" dropdown (custom field) shown at checkout
 */

/** One-time gift. The donor chooses the amount on Stripe's checkout page. */
export const ONE_TIME_GIFT_URL = 'https://buy.stripe.com/4gM8wO3TFchgeCa2Qu1RC04';

/** Monthly "Freedom Partner" gifts, in the order they appear on the page. */
export const MONTHLY_GIFTS = [
  { amount: 10, url: 'https://buy.stripe.com/9B66oGduf810dy68aO1RC03' },
  { amount: 25, url: 'https://buy.stripe.com/00wfZg0Ht810gKigHk1RC02' },
  { amount: 50, url: 'https://buy.stripe.com/28E00i3TF4OO79Iezc1RC01' },
  { amount: 100, url: 'https://buy.stripe.com/9B65kCai3dlk8dMbn01RC00' },
] as const;

/**
 * ─────────────────────────────────────────────────────────────────────────
 *  RETURN TO THE RIVER — central configuration
 *
 *  KAJABI WIRING
 *  1. Replace CHECKOUT_BASE_URL with your Kajabi Enhanced Checkout offer URL
 *     (Offers → your retreat offer → "Checkout URL").
 *  2. Create a coupon named EARLY_BIRD_CODE in Kajabi (Marketing → Coupons).
 *     Every CTA below appends ?coupon=<code> so the discount is pre-applied
 *     when the visitor lands on checkout.
 *  3. In Kajabi, build this page from the "Blank" landing-page template with
 *     Site Header/Footer toggled OFF (Page Settings → Advanced) so the only
 *     actions on the page are the CTAs.
 *  4. Pipeline: this landing page → Enhanced Checkout → Thank-You page →
 *     "Welcome to the river" automation email.
 *  5. Checkout branding: under Site Settings → Checkout, match these tokens:
 *     background #0D2822 · accent/button #E7C07E · text #F4EDDC ·
 *     headings "Fraunces" · body "Karla".
 * ─────────────────────────────────────────────────────────────────────────
 */

export const CHECKOUT_BASE_URL =
  "https://your-site.mykajabi.com/offers/RETURN-TO-THE-RIVER/checkout";

export const EARLY_BIRD_CODE = "RIVERSIDE";

/** Builds an Enhanced Checkout link with the coupon pre-applied. */
export function checkoutHref(coupon: string = EARLY_BIRD_CODE): string {
  try {
    const url = new URL(CHECKOUT_BASE_URL);
    if (coupon) url.searchParams.set("coupon", coupon);
    return url.toString();
  } catch {
    return `${CHECKOUT_BASE_URL}?coupon=${coupon}`;
  }
}

export const RETREAT = {
  name: "Return to the River",
  dates: "May 18–22, 2026",
  location: "Willow Bend River Lodge · Blue Ridge Mountains, NC",
  priceEarly: 1497,
  priceRegular: 1897,
  planMonths: 3,
  planAmount: 549,
  spotsTotal: 18,
  spotsLeft: 6,
  earlyBirdDeadline: "March 1, 2026",
  email: "hello@returntotheriver.com",
  rating: 4.9,
  alumni: 312,
};

export const IMAGES = {
  hero: "https://images.pexels.com/photos/9782164/pexels-photo-9782164.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=1500",
  riverGreen:
    "https://images.pexels.com/photos/18332500/pexels-photo-18332500.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=1100",
  riverMist:
    "https://images.pexels.com/photos/29014027/pexels-photo-29014027.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=760&h=560",
  qigong:
    "https://images.pexels.com/photos/7538855/pexels-photo-7538855.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=1200",
  lodge:
    "https://images.pexels.com/photos/12513475/pexels-photo-12513475.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1100&h=720",
  facilitator:
    "https://images.pexels.com/photos/34315313/pexels-photo-34315313.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=1150",
  finalCta:
    "https://images.pexels.com/photos/9863466/pexels-photo-9863466.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1800&h=1000",
  strip1:
    "https://images.pexels.com/photos/28864746/pexels-photo-28864746.png?auto=compress&cs=tinysrgb&fit=crop&w=700&h=520",
  strip2:
    "https://images.pexels.com/photos/18077640/pexels-photo-18077640.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=700&h=520",
  strip3:
    "https://images.pexels.com/photos/7363303/pexels-photo-7363303.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=700&h=520",
  strip4:
    "https://images.pexels.com/photos/28494559/pexels-photo-28494559.png?auto=compress&cs=tinysrgb&fit=crop&w=700&h=520",
};

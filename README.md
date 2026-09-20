# Amazon Storefront Clone — 8x Engineering Assignment

A high-fidelity Amazon storefront frontend rebuild developed with Next.js (App Router), TypeScript, Tailwind CSS, and Zustand. This project replicates core Amazon micro-experiences, dynamic catalog browsing, persistent cart workflows, and includes strict automated agent capture compliance.

---

## 🚀 Key Features

* **Universal Amazon Navigation & Drawer:** Slide-in categorized "All" off-canvas drawer with backdrop blur, route-aware active indicators, and real-time cart badge counter.
* **Persistent Cart & State Management:** Zustand store with `localStorage` persistence managing cart items, quantity triggers, and clipped coupon discounts across pages.
* **Prime Video Theater Hub (`/prime-video`):** Dark theater palette, full-width cinematic hero backdrop, and zero-layout-shift `hover:scale-110` zoom cards revealing trailer metadata and actions.
* **Today's Deals (Goldbox) (`/goldbox`):** Prime Big Deal Days promotional banner, horizontal chip carousel, and real-time discount percentage range filter.
* **Coupons Storefront (`/deals`):** Department-specific sidebar filters with interactive "Clip Coupon" mechanics directly applying savings to checkout state.
* **Customer Service Center (`/customer-service`):** Authentic `#007185` teal palette, 11 primary service action tiles with custom vector iconography, and categorized topic library.
* **Registry & Gifting (`/registry`):** Inspiration quadrant with multi-step creation modals for Baby, Wedding, and Custom celebration registries.
* **Gift Card Shop (`/gift-cards`):** Denomination selector, balance checking/reload modal flows, and real-time card design customizer.
* **Sell on Amazon (`/sell`):** Seller incentive highlights, onboarding wizard, and an interactive margin estimator comparing Amazon FBA against merchant fulfillment.
* **Universal 4-Tier Footer:** Amazon-accurate global footer with smooth scroll-to-top handler and international directory links mounted across all routes.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **State Management:** [Zustand](https://github.com/pmndrs/zustand) (with `persist` middleware)
* **Icons:** [Lucide React](https://lucide.dev/)

---

## 📋 Agent Capture & Audit Compliance

In accordance with the 8x assignment instructions, every prompt-response interaction turn has been recorded verbatim without intermediate reasoning or command-line noise:

* **Setup Specification:** Documented in [`CAPTURE-TEST.md`](./CAPTURE-TEST.md) detailing model runtime, lifecycle hooks, and canary verification records.
* **Log Directory:** Turn-by-turn session files are located in [`.agent-logs/`](./.agent-logs/) and tracked within Git history.

---

## 💻 Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Bhumika955/Amazon-clone.git](https://github.com/Bhumika955/Amazon-clone.git)
   cd Amazon-clone
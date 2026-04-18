
Add a fourth card to the Offerings section for "One-on-One Sessions".

**Changes to `src/pages/Index.tsx`:**
- Add a 4th item to the offerings array with:
  - Icon: `User` (from lucide-react) — fits the personal/individual nature
  - Title: "One-on-One Sessions"
  - Description: Something like "Private guidance tailored to your journey — direct support to move from survival into presence."
- Update the grid from `md:grid-cols-3` to `md:grid-cols-2 lg:grid-cols-4` so 4 cards lay out cleanly across breakpoints.
- Add `User` to the lucide-react import.

No other sections are affected.

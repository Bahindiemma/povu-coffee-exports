import { ReviewData, FaqItem, BlogPost } from '@/types';

export const reviews: ReviewData[] = [
  {
    name: 'Johannes K.',
    role: 'Specialty Roaster',
    city: 'Hamburg, Germany',
    quote: 'The crema on this Robusta is unlike anything I have cupped from East Africa. Persistent, golden, and with a dark chocolate complexity that held through the entire shot. My customers noticed the difference immediately.',
    rating: 5,
  },
  {
    name: 'Amara V.',
    role: 'Green Bean Importer',
    city: 'Amsterdam, Netherlands',
    quote: 'What makes POVU different is not just the coffee — it is the documentation. I received a full farmer profile, lot number, and origin certificate with my 60kg sample. That level of traceability is rare even from the best African suppliers.',
    rating: 5,
  },
  {
    name: 'Sarah M.',
    role: 'Coffee Enthusiast',
    city: 'Nairobi, Kenya',
    quote: 'The Connoisseur Set arrived beautifully packaged with more origin information than I expected. The story behind this brand makes every cup feel like it means something. I subscribed the same week.',
    rating: 5,
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'What does POVU mean?',
    answer: 'POVU (POH-VOO) is the Swahili word for foam — specifically the golden crema that crowns a great espresso shot. It is the first signal of quality that any specialty coffee buyer looks for, and Uganda\'s wild-type Robusta from Kyegegwa delivers it consistently.',
  },
  {
    question: 'Where does POVU coffee come from?',
    answer: 'Every batch of POVU Robusta is sourced exclusively from Kyegegwa District in the Tooro Kingdom of western Uganda, and Mubende District. Every farmer in our supply chain is profiled by name, location, and lot — and paid above market rate directly by our founder.',
  },
  {
    question: 'How do I pay?',
    answer: 'We accept MTN Mobile Money, Airtel Money, Bank Transfer, and PayPal/international card. Payment details are sent via WhatsApp and email after order confirmation, which arrives within 2 hours.',
  },
  {
    question: 'How long does delivery take?',
    answer: 'Kampala delivery 1–2 days, free above UGX 100,000. International shipping 7–14 days (air) or 3–6 weeks (ocean). Export green beans ship via Entebbe Airport or Mombasa Port.',
  },
  {
    question: 'What is included with every order?',
    answer: 'Every POVU order includes a certificate of origin with source district, roast date, and lot reference. Bundle orders include additional items as described. Export orders include full traceability documentation.',
  },
  {
    question: 'Can I buy POVU for my café, hotel, or business?',
    answer: 'Yes. Contact hello@povu.coffee with your monthly volume requirement for tailored B2B pricing within 48 hours.',
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-kyegegwa-robusta-different',
    title: 'Why Kyegegwa Robusta Is Different',
    excerpt: 'Deep in western Uganda, wild-type Robusta grows in conditions that most commercial farms cannot replicate. Here is what makes it special.',
    category: 'Origin Education',
    date: '2026-03-15',
    readTime: '5 min read',
    content: `In the foothills of the Rwenzori Mountains, in a district called Kyegegwa within the ancient Tooro Kingdom, coffee grows differently. These are not the cloned, high-yield Robusta varieties planted across Southeast Asia. These are wild-type trees — genetically diverse, deeply rooted, and shaped by decades of natural selection.

The soil here is volcanic red laterite, rich in iron and organic matter. Altitude ranges from 1,100 to 1,300 metres — higher than most Robusta-growing regions, which typically sit below 800 metres. This elevation slows the cherry maturation, concentrating sugars and developing complexity that commercial Robusta rarely achieves.

The result is a cup profile that surprises even specialty buyers accustomed to dismissing Robusta: dark chocolate body, roasted cocoa, damp earth after rain, smoky cedar, and a crema density that Arabica simply cannot match. SCA cupping scores consistently land between 81 and 84 — firmly in Fine Robusta territory.

This is not commodity coffee. This is terroir-driven Robusta with a story that starts in the soil and ends in the foam on your espresso.`,
  },
  {
    slug: 'digital-farmer-profiling-explained',
    title: 'Digital Farmer Profiling: How POVU Traces Every Bean',
    excerpt: 'From GPS coordinates to cupping notes, every POVU lot is digitally linked to the farmer who grew it. Here is how the system works.',
    category: 'Farmer Stories',
    date: '2026-02-28',
    readTime: '4 min read',
    content: `Traceability in coffee is often a marketing claim. At POVU, it is a software system.

Every farmer in our supply chain is registered with a digital profile that includes their name, GPS coordinates of their farm, total acreage under coffee, number of trees, and historical yield data. When cherries are delivered to our collection point, each lot is tagged with the farmer's ID, weighed, moisture-tested, and graded on site.

This data flows into a central system built by COTE TECH (U) Ltd — the technology company founded by POVU's own founder, Emmanuel Bahindi. The same engineering discipline that built enterprise software now powers a coffee supply chain.

For buyers, this means every bag of POVU coffee can be traced back to a specific farmer, a specific harvest, and a specific grading record. The origin certificate included with every retail order is not a decorative insert — it is a data-backed document.

For farmers, it means visibility. They know what their coffee scored, what it sold for, and how it compares to previous harvests. Transparency flows in both directions.`,
  },
  {
    slug: 'perfect-espresso-povu-beans',
    title: 'Brewing the Perfect Espresso with POVU Beans',
    excerpt: 'Robusta espresso requires different parameters than Arabica. Here is our recommended recipe for the thickest povu crema.',
    category: 'Brewing Guides',
    date: '2026-02-10',
    readTime: '3 min read',
    content: `POVU Roasted Robusta Beans are engineered for espresso. The naturally higher caffeine content and lower oil levels produce a crema that is denser, more persistent, and more golden than any single-origin Arabica.

Here is our recommended espresso recipe:

Dose: 18g of POVU beans, ground fine (espresso setting). Ratio: 1:1.8 — aim for 32–34ml of liquid espresso. Time: 25–28 seconds extraction. Temperature: 92–94°C. Pressure: 9 bar standard.

The key difference with Robusta is the grind. You can go slightly coarser than you would with a comparable Arabica without losing body. The higher soluble solids in Robusta mean you extract flavour faster — going too fine risks bitterness.

Pre-infusion helps enormously. If your machine supports it, run 3–4 seconds of low-pressure pre-infusion before full extraction begins. This evens out the puck saturation and produces a more balanced shot.

The result: a 30ml shot with a crema layer that lasts 3–4 minutes in the cup. Dark chocolate and roasted cocoa dominate the palate, with a clean, slightly smoky finish. No sourness, no thin body — this is coffee that announces itself.`,
  },
];

export const tickerItems = [
  'Kyegegwa Wild-Type Robusta',
  'Pearl of Africa',
  'Ethically Sourced',
  'Fine Robusta Grade',
  'Digital Farmer Profiling',
  'Export via Mombasa & Entebbe',
  'Origin Certificate Included',
];

export const stats = [
  { value: '2', label: 'Source Districts' },
  { value: '60kg+', label: 'Export Green Beans Ready' },
  { value: '100%', label: 'Above-Market Farmer Pay' },
  { value: 'Sea+Air', label: 'Dual Export Routes' },
];

export const exportMarkets = [
  { country: 'Germany', focus: 'Specialty roasters, direct trade' },
  { country: 'Netherlands', focus: 'Green bean importers, blenders' },
  { country: 'Scandinavia', focus: 'Nordic roast specialty market' },
  { country: 'Uganda', focus: 'Domestic premium retail, HoReCa' },
  { country: 'Kenya', focus: 'Regional specialty, cross-border trade' },
];

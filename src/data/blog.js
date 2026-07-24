export const BLOG_POSTS = [
  {
    slug: "why-slow-websites-kill-sales",
    date: "2026-07-18",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    category: { en: "Performance", ar: "الأداء" },
    tags: {
      en: ["Speed", "Conversion", "Core Web Vitals", "SEO"],
      ar: ["سرعة", "تحويل", "Core Web Vitals", "SEO"],
    },
    en: {
      title: "Why slow websites kill sales — and how to fix it",
      excerpt:
        "Every extra second of load time costs trust and revenue. Here is what actually slows business sites down, and the practical fixes that move the needle.",
      sections: [
        {
          type: "p",
          text: "A beautiful website that loads slowly is still a bad website. Visitors decide in seconds whether to stay, and search engines reward pages that feel fast on real devices — not only on a developer laptop.",
        },
        {
          type: "p",
          text: "For most business sites we audit, the problem is not “bad hosting.” It is unoptimized images, heavy third-party scripts, unused CSS/JS, and layouts that shift while content loads.",
        },
        { type: "h2", text: "What slow really costs you" },
        {
          type: "ul",
          items: [
            "Higher bounce rates on mobile — users leave before the offer appears",
            "Lower ad ROI — you pay for clicks that never convert",
            "Weaker SEO — Core Web Vitals affect ranking and discoverability",
            "Lost trust — slow checkout feels unsafe even when it is secure",
          ],
        },
        { type: "h2", text: "Fixes that usually matter most" },
        {
          type: "ol",
          items: [
            "Compress and correctly size every image (WebP/AVIF, lazy loading below the fold)",
            "Defer non-critical scripts: chat widgets, analytics, and marketing pixels",
            "Ship less JavaScript — prefer server rendering and lean client components",
            "Reserve space for media and ads so the page does not jump while loading",
            "Cache aggressively with a CDN and set sensible browser cache headers",
          ],
        },
        { type: "h2", text: "How we approach it at Clean Code" },
        {
          type: "p",
          text: "We measure first (Lighthouse, field data when available), then cut the heaviest offenders. A fast homepage is not enough — product, pricing, and checkout pages need the same care because that is where money is made.",
        },
        {
          type: "p",
          text: "If your site feels heavy on mobile, that is usually the highest-ROI place to start. Speed is not a one-time polish — it is part of how a professional product ships.",
        },
      ],
    },
    ar: {
      title: "لماذا المواقع البطيئة تقتل المبيعات — وكيف تصلحها",
      excerpt:
        "كل ثانية إضافية في التحميل تكلّفك ثقة وإيرادات. هذا ما يبطئ مواقع الأعمال فعلاً، والإصلاحات العملية التي تصنع فرقاً.",
      sections: [
        {
          type: "p",
          text: "الموقع الجميل البطيء ما زال موقعاً سيئاً. الزائر يقرر في ثوانٍ إن كان سيبقى، ومحركات البحث تكافئ الصفحات السريعة على الأجهزة الحقيقية — وليس فقط على جهاز المطوّر.",
        },
        {
          type: "p",
          text: "في أغلب المواقع التي نراجعها، المشكلة ليست «الاستضافة السيئة». المشكلة صور غير محسّنة، سكربتات طرف ثالث ثقيلة، CSS/JS غير مستخدم، وتخطيطات تقفز أثناء التحميل.",
        },
        { type: "h2", text: "ماذا يكلّفك البطء حقاً" },
        {
          type: "ul",
          items: [
            "ارتفاع معدل الارتداد على الجوال — يغادر المستخدم قبل ظهور العرض",
            "عائد أقل للإعلانات — تدفع مقابل نقرات لا تتحول",
            "SEO أضعف — Core Web Vitals تؤثر على الترتيب والاكتشاف",
            "فقدان الثقة — الدفع البطيء يبدو غير آمناً حتى لو كان آمناً",
          ],
        },
        { type: "h2", text: "إصلاحات عادة ما تصنع أكبر فرق" },
        {
          type: "ol",
          items: [
            "اضغط الصور وحجّمها بشكل صحيح (WebP/AVIF وتحميل كسول لما تحت الشاشة)",
            "أخّر السكربتات غير الحرجة: الدردشة والتحليلات وبكسلات التسويق",
            "قلّل جافاسكربت — فضّل العرض من السيرفر والمكونات الخفيفة",
            "احجز مساحة للصور والإعلانات حتى لا تقفز الصفحة أثناء التحميل",
            "استخدم CDN وكاش المتصفح بذكاء",
          ],
        },
        { type: "h2", text: "كيف نتعامل معها في Clean Code" },
        {
          type: "p",
          text: "نقيس أولاً (Lighthouse وبيانات ميدانية عند توفرها)، ثم نقص أثقل الأسباب. الصفحة الرئيسية السريعة لا تكفي — صفحات المنتج والتسعير والدفع تحتاج نفس العناية لأنها مكان تحقيق الإيراد.",
        },
        {
          type: "p",
          text: "إذا كان موقعك ثقيلاً على الجوال، فغالباً هنا أعلى عائد للتحسين. السرعة ليست لمسة نهائية — هي جزء من طريقة شحن منتج احترافي.",
        },
      ],
    },
  },
  {
    slug: "payment-integrations-that-dont-break",
    date: "2026-07-08",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80",
    category: { en: "Integrations", ar: "تكاملات" },
    tags: {
      en: ["Payments", "Stripe", "PayPal", "Checkout"],
      ar: ["مدفوعات", "Stripe", "PayPal", "الدفع"],
    },
    en: {
      title: "Payment integrations that don’t break under real traffic",
      excerpt:
        "Connecting Stripe or PayPal is easy in a demo. Building a checkout people trust — with failures handled cleanly — is the real work.",
      sections: [
        {
          type: "p",
          text: "Payment flows sit at the most stressful moment in your product. If something fails silently, customers blame your brand — not the gateway. A solid integration is less about the API docs and more about edge cases.",
        },
        { type: "h2", text: "What “done” should mean" },
        {
          type: "ul",
          items: [
            "Clear success, pending, and failed states on every payment attempt",
            "Idempotent webhooks so the same event never creates duplicate orders",
            "Secure handling of secrets — never in frontend code or public repos",
            "Receipts, order records, and support-friendly error messages",
            "Test mode that mirrors production paths before go-live",
          ],
        },
        { type: "h2", text: "Common mistakes we see" },
        {
          type: "ol",
          items: [
            "Trusting only the frontend redirect and ignoring webhook confirmation",
            "No retry strategy when a webhook arrives late or out of order",
            "Mixing sandbox and live keys during launch week",
            "Hiding error details so support cannot diagnose failed payments",
          ],
        },
        { type: "h2", text: "A practical launch checklist" },
        {
          type: "p",
          text: "Before you open payments to customers: run successful and failed card tests, cancel mid-flow, refresh on the success page, and simulate a delayed webhook. If those paths feel calm, your checkout is ready.",
        },
        {
          type: "p",
          text: "At Clean Code we treat payments as product infrastructure — not a plugin you drop in and forget. The goal is simple: the customer pays once, your system records once, and support always knows what happened.",
        },
      ],
    },
    ar: {
      title: "تكاملات دفع لا تنهار تحت ضغط حقيقي",
      excerpt:
        "ربط Stripe أو PayPal سهل في العرض التجريبي. بناء صفحة دفع يثق بها الناس — مع معالجة نظيفة للأخطاء — هو العمل الحقيقي.",
      sections: [
        {
          type: "p",
          text: "تدفقات الدفع تقع في أكثر لحظة توتراً في منتجك. إذا فشل شيء بصمت، العميل يلوم علامتك — لا بوابة الدفع. التكامل القوي أقل اعتماداً على وثائق الـ API وأكثر على الحالات الحدّية.",
        },
        { type: "h2", text: "ماذا يعني «انتهى» حقاً" },
        {
          type: "ul",
          items: [
            "حالات واضحة للنجاح والانتظار والفشل في كل محاولة دفع",
            "webhooks غير قابلة للتكرار حتى لا يُنشأ طلب مكرر من نفس الحدث",
            "إدارة آمنة للأسرار — أبداً في الفرونت إند أو المستودعات العامة",
            "إيصالات وسجلات طلبات ورسائل أخطاء تساعد الدعم",
            "وضع اختبار يطابق مسارات الإنتاج قبل الإطلاق",
          ],
        },
        { type: "h2", text: "أخطاء شائعة نراها" },
        {
          type: "ol",
          items: [
            "الاعتماد فقط على إعادة التوجيه من الفرونت وتجاهل تأكيد الـ webhook",
            "غياب استراتيجية إعادة المحاولة عند تأخر أو اختلال ترتيب الأحداث",
            "خلط مفاتيح التجربة والإنتاج في أسبوع الإطلاق",
            "إخفاء تفاصيل الخطأ حتى لا يستطيع الدعم تشخيص فشل الدفع",
          ],
        },
        { type: "h2", text: "قائمة إطلاق عملية" },
        {
          type: "p",
          text: "قبل فتح الدفع للعملاء: اختبر بطاقة ناجحة وفاشلة، ألغِ في منتصف التدفق، حدّث صفحة النجاح، وحاكِ webhook متأخراً. إذا بدت هذه المسارات هادئة، فصفحة الدفع جاهزة.",
        },
        {
          type: "p",
          text: "في Clean Code نتعامل مع المدفوعات كبنية تحتية للمنتج — لا كإضافة تُركب وتُنسى. الهدف بسيط: العميل يدفع مرة، النظام يسجّل مرة، والدعم دائماً يعرف ماذا حدث.",
        },
      ],
    },
  },
  {
    slug: "design-systems-for-growing-products",
    date: "2026-06-22",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&q=80",
    category: { en: "Design", ar: "تصميم" },
    tags: {
      en: ["Design System", "UI", "Components", "Brand"],
      ar: ["نظام تصميم", "واجهات", "مكونات", "هوية"],
    },
    en: {
      title: "Design systems that keep growing products consistent",
      excerpt:
        "A design system is not a Figma dump of buttons. It is the shared language that lets product, design, and engineering move fast without visual chaos.",
      sections: [
        {
          type: "p",
          text: "When a product grows, screens multiply. Without a system, every new page invents its own spacing, colors, and button styles. Users feel the inconsistency even when they cannot name it — and your team ships slower every month.",
        },
        { type: "h2", text: "Start with decisions, not decoration" },
        {
          type: "p",
          text: "A useful system documents the rules behind the UI: typography scale, spacing rhythm, color roles (text, surface, accent, danger), and interaction states. Pretty components without rules still produce messy pages.",
        },
        {
          type: "ul",
          items: [
            "One primary action style per screen — avoid competing CTAs",
            "Reusable form patterns for inputs, errors, and helper text",
            "Shared cards, tables, and empty states for dashboards",
            "Motion used for hierarchy, not noise",
          ],
        },
        { type: "h2", text: "Make it real in code" },
        {
          type: "p",
          text: "The system only works when design tokens and React components stay in sync. Tokens for color and spacing, then a small library of components that teams actually prefer to reuse instead of rebuilding.",
        },
        {
          type: "ol",
          items: [
            "Define tokens (color, type, space, radius)",
            "Build core components (button, input, modal, card)",
            "Document do/don’t examples for common screens",
            "Review new UI against the system before merge",
          ],
        },
        { type: "h2", text: "The payoff" },
        {
          type: "p",
          text: "Teams with a living design system ship features with less debate and fewer visual regressions. Customers get a product that feels intentional on every page — which is exactly what a professional brand should feel like.",
        },
      ],
    },
    ar: {
      title: "أنظمة تصميم تحافظ على تناسق المنتجات النامية",
      excerpt:
        "نظام التصميم ليس مجلد أزرار في Figma. هو اللغة المشتركة التي تجعل المنتج والتصميم والهندسة يتحركون بسرعة دون فوضى بصرية.",
      sections: [
        {
          type: "p",
          text: "عندما ينمو المنتج تتكاثر الشاشات. بدون نظام، كل صفحة جديدة تخترع مسافاتها وألوانها وأزرارها. المستخدم يشعر بعدم التناسق حتى لو لم يسمّه — وفريقك يطلق أبطأ كل شهر.",
        },
        { type: "h2", text: "ابدأ بالقرارات لا بالزينة" },
        {
          type: "p",
          text: "النظام المفيد يوثّق قواعد الواجهة: مقياس الخطوط، إيقاع المسافات، أدوار الألوان (نص، سطح، تمييز، خطر)، وحالات التفاعل. المكونات الجميلة بلا قواعد ما زالت تنتج صفحات فوضوية.",
        },
        {
          type: "ul",
          items: [
            "أسلوب واحد للإجراء الرئيسي في كل شاشة — تجنّب أزرار متنافسة",
            "أنماط نماذج قابلة لإعادة الاستخدام للحقول والأخطاء والنصوص المساعدة",
            "بطاقات وجداول وحالات فارغة مشتركة للوحات التحكم",
            "حركة تدعم التسلسل البصري لا الضوضاء",
          ],
        },
        { type: "h2", text: "اجعله حقيقياً في الكود" },
        {
          type: "p",
          text: "النظام يعمل فقط عندما تبقى رموز التصميم ومكونات React متزامنة. رموز للألوان والمسافات، ثم مكتبة صغيرة من المكونات يفضّل الفريق إعادة استخدامها بدل إعادة بنائها.",
        },
        {
          type: "ol",
          items: [
            "عرّف الرموز (لون، خط، مسافة، انحناء)",
            "ابنِ المكونات الأساسية (زر، إدخال، نافذة، بطاقة)",
            "وثّق أمثلة افعل/لا تفعل للشاشات الشائعة",
            "راجع الواجهة الجديدة مقابل النظام قبل الدمج",
          ],
        },
        { type: "h2", text: "العائد" },
        {
          type: "p",
          text: "الفرق ذات نظام تصميم حيّ تطلق ميزات بنقاش أقل وأخطاء بصرية أقل. العملاء يحصلون على منتج يبدو مقصوداً في كل صفحة — وهذا بالضبط شعور العلامة الاحترافية.",
        },
      ],
    },
  },
  {
    slug: "from-idea-to-mvp-without-wasting-months",
    date: "2026-06-05",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80",
    category: { en: "Product", ar: "منتج" },
    tags: {
      en: ["MVP", "Strategy", "Startup", "Delivery"],
      ar: ["MVP", "استراتيجية", "شركات ناشئة", "تسليم"],
    },
    en: {
      title: "From idea to MVP without wasting months",
      excerpt:
        "Most delayed launches are not engineering problems. They are scope problems. Here is how we cut an idea down to a first version users can actually try.",
      sections: [
        {
          type: "p",
          text: "An MVP is not a half-broken product. It is the smallest complete experience that proves one valuable promise. If users can complete the main job and feel the benefit, you have an MVP. Everything else can wait.",
        },
        { type: "h2", text: "Define the one job" },
        {
          type: "p",
          text: "Write one sentence: “For [user], this product helps them [outcome] when [situation].” If you cannot finish that sentence clearly, you are not ready to build — you are still exploring.",
        },
        {
          type: "ul",
          items: [
            "Pick one primary user, not five personas",
            "Choose one success metric for the first release",
            "List features as must / should / later — and protect the must list",
            "Design the happy path end-to-end before adding side doors",
          ],
        },
        { type: "h2", text: "Build in thin slices" },
        {
          type: "ol",
          items: [
            "Map the core flow (signup → main action → result)",
            "Ship a usable vertical slice early for feedback",
            "Add polish only where it affects trust (payments, data safety, clarity)",
            "Schedule “nice to have” work after real usage data",
          ],
        },
        { type: "h2", text: "What we refuse to cut" },
        {
          type: "p",
          text: "Speed does not mean shipping careless UX or insecure auth. We keep quality high on the paths that carry trust: onboarding clarity, empty states, error messages, and anything involving money or personal data.",
        },
        {
          type: "p",
          text: "Clean Code helps founders and businesses turn vague ideas into a focused first release — then iterate with evidence instead of opinions.",
        },
      ],
    },
    ar: {
      title: "من الفكرة إلى الـ MVP دون إضاعة أشهر",
      excerpt:
        "معظم الإطلاقات المتأخرة ليست مشاكل هندسة. هي مشاكل نطاق. هكذا نقلّص الفكرة إلى أول نسخة يمكن للمستخدمين تجربتها فعلاً.",
      sections: [
        {
          type: "p",
          text: "الـ MVP ليس منتجاً مكسوراً إلى النصف. هو أصغر تجربة مكتملة تثبت وعداً واحداً ذا قيمة. إذا أنهى المستخدم المهمة الرئيسية وشعر بالفائدة، لديك MVP. كل شيء آخر يمكنه الانتظار.",
        },
        { type: "h2", text: "حدّد المهمة الواحدة" },
        {
          type: "p",
          text: "اكتب جملة واحدة: «لـ[المستخدم]، هذا المنتج يساعده على [النتيجة] عندما [الموقف].» إذا لم تستطع إكمال الجملة بوضوح، فأنت لست جاهزاً للبناء — ما زلت تستكشف.",
        },
        {
          type: "ul",
          items: [
            "اختر مستخدماً رئيسياً واحداً لا خمس شخصيات",
            "حدّد مقياس نجاح واحد للإصدار الأول",
            "صنّف الميزات إلى يجب / ينبغي / لاحقاً — واحمِ قائمة يجب",
            "صمّم المسار السعيد من البداية للنهاية قبل إضافة أبواب جانبية",
          ],
        },
        { type: "h2", text: "ابنِ بشرائح رفيعة" },
        {
          type: "ol",
          items: [
            "ارسم التدفق الأساسي (تسجيل → الإجراء الرئيسي → النتيجة)",
            "أطلق شريحة عمودية قابلة للاستخدام مبكراً للحصول على ملاحظات",
            "أضف التلميع فقط حيث يؤثر على الثقة (الدفع، أمان البيانات، الوضوح)",
            "أجّل «اللطيف امتلاكه» إلى ما بعد بيانات استخدام حقيقية",
          ],
        },
        { type: "h2", text: "ما نرفض تقليصه" },
        {
          type: "p",
          text: "السرعة لا تعني شحن تجربة مستخدم مهملة أو مصادقة غير آمنة. نحافظ على جودة عالية في المسارات التي تحمل الثقة: وضوح التسجيل، الحالات الفارغة، رسائل الخطأ، وأي شيء يتعلق بالمال أو البيانات الشخصية.",
        },
        {
          type: "p",
          text: "Clean Code تساعد المؤسسين والشركات على تحويل الأفكار الغامضة إلى إصدار أول مركّز — ثم التكرار بالأدلة لا بالآراء.",
        },
      ],
    },
  },
  {
    slug: "seo-foundations-for-business-websites",
    date: "2026-05-20",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    category: { en: "SEO", ar: "تحسين محركات البحث" },
    tags: {
      en: ["SEO", "Content", "Technical SEO", "Marketing"],
      ar: ["SEO", "محتوى", "SEO تقني", "تسويق"],
    },
    en: {
      title: "SEO foundations every business website needs",
      excerpt:
        "SEO is not magic keywords. It is clear pages, solid technical basics, and content that answers what your customers actually search for.",
      sections: [
        {
          type: "p",
          text: "Many companies buy ads while their website quietly blocks organic growth: missing titles, weak internal links, slow pages, and service pages that say everything and nothing. Good SEO starts with a site search engines and humans can both understand.",
        },
        { type: "h2", text: "Technical basics that still matter" },
        {
          type: "ul",
          items: [
            "Unique title and meta description for every important page",
            "Clean URLs and a logical heading structure (one H1, clear H2s)",
            "Mobile-friendly layout and strong Core Web Vitals",
            "XML sitemap, robots.txt, and canonical tags when needed",
            "Fast hosting/CDN and HTTPS everywhere",
          ],
        },
        { type: "h2", text: "Content that ranks and converts" },
        {
          type: "p",
          text: "Write for intent. A service page should explain who it is for, what you deliver, proof you can do it, and the next step. Blog posts should answer real questions with depth — not thin filler for keyword density.",
        },
        {
          type: "ol",
          items: [
            "Map keywords to pages (one primary intent per URL)",
            "Improve top service pages before publishing ten thin posts",
            "Add internal links from blog content to conversion pages",
            "Refresh winners every few months with clearer examples and FAQs",
          ],
        },
        { type: "h2", text: "Measure what matters" },
        {
          type: "p",
          text: "Track impressions, clicks, ranking for money pages, and conversions from organic traffic. Rankings without leads are vanity. At Clean Code we build sites that are ready for SEO from day one — structure, speed, and content architecture included.",
        },
      ],
    },
    ar: {
      title: "أساسيات SEO يحتاجها كل موقع أعمال",
      excerpt:
        "SEO ليس كلمات سحرية. هو صفحات واضحة، أساسيات تقنية سليمة، ومحتوى يجيب عما يبحث عنه عملاؤك فعلاً.",
      sections: [
        {
          type: "p",
          text: "كثير من الشركات تشتري إعلانات بينما موقعها يعطل النمو العضوي بصمت: عناوين ناقصة، روابط داخلية ضعيفة، صفحات بطيئة، وصفحات خدمات تقول كل شيء ولا شيء. SEO الجيد يبدأ بموقع يفهمه محرك البحث والإنسان معاً.",
        },
        { type: "h2", text: "أساسيات تقنية ما زالت مهمة" },
        {
          type: "ul",
          items: [
            "عنوان ووصف فريدان لكل صفحة مهمة",
            "روابط نظيفة وهيكل عناوين منطقي (H1 واحد وH2 واضحة)",
            "تخطيط مناسب للجوال وCore Web Vitals قوية",
            "خريطة موقع XML وrobots.txt وcanonical عند الحاجة",
            "استضافة/CDN سريعة وHTTPS في كل مكان",
          ],
        },
        { type: "h2", text: "محتوى يرتب ويحوّل" },
        {
          type: "p",
          text: "اكتب للنية. صفحة الخدمة يجب أن توضح لمن هي، ماذا تقدّم، دليلاً على قدرتك، والخطوة التالية. مقالات المدونة يجب أن تجيب عن أسئلة حقيقية بعمق — لا حشو رقيق لكثافة الكلمات.",
        },
        {
          type: "ol",
          items: [
            "اربط الكلمات المفتاحية بالصفحات (نية رئيسية واحدة لكل رابط)",
            "حسّن أهم صفحات الخدمات قبل نشر عشر مقالات ضعيفة",
            "أضف روابط داخلية من المدونة إلى صفحات التحويل",
            "حدّث الصفحات الناجحة كل بضعة أشهر بأمثلة وأسئلة شائعة أوضح",
          ],
        },
        { type: "h2", text: "قِس ما يهم" },
        {
          type: "p",
          text: "تابع الظهور والنقرات وترتيب صفحات المال والتحويلات من الزيارات العضوية. الترتيب بلا عملاء محتملين مجرد غرور. في Clean Code نبني مواقع جاهزة لـ SEO من اليوم الأول — الهيكل والسرعة ومعمارية المحتوى ضمنها.",
        },
      ],
    },
  },
  {
    slug: "software-programming-company-egypt",
    date: "2026-07-22",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    category: { en: "Local SEO", ar: "سيو محلي" },
    tags: {
      en: ["Egypt", "Software Company", "Programming", "Web Development"],
      ar: ["مصر", "شركة برمجة", "تطوير مواقع", "شركة سوفت وير"],
    },
    en: {
      title: "Software & programming company in Egypt — Clean Code",
      excerpt:
        "Looking for a software, programming, or web development company in Egypt? Clean Code builds websites and web apps for businesses across all 27 governorates.",
      sections: [
        {
          type: "p",
          text: "If you searched for a software company in Egypt, a programming company in Egypt, or a web development agency near you, you are in the right place. Clean Code is an Egyptian digital team that designs and builds professional websites, web applications, integrations, and digital products for companies of every size.",
        },
        {
          type: "p",
          text: "We work with founders, shops, clinics, real-estate brands, startups, and growing businesses that need a modern online presence — fast, secure, and ready for customers on mobile.",
        },
        { type: "h2", text: "What we build for Egyptian businesses" },
        {
          type: "ul",
          items: [
            "Company websites and landing pages that convert visitors into leads",
            "Web apps and dashboards for operations, bookings, and sales",
            "E-commerce stores with payment and shipping integrations",
            "API integrations: payments, maps, analytics, CRM, and automation",
            "Support and maintenance so your product stays reliable after launch",
          ],
        },
        { type: "h2", text: "We serve clients across Egypt’s 27 governorates" },
        {
          type: "p",
          text: "Whether your business is in Cairo or a smaller city, you can work with Clean Code remotely or on a clear project plan. We support teams and owners in every Egyptian governorate:",
        },
        {
          type: "ul",
          items: [
            "Cairo, Giza, Qalyubia (Greater Cairo)",
            "Alexandria, Beheira, Matrouh",
            "Dakahlia, Damietta, Sharqia, Gharbia, Menoufia, Kafr El Sheikh",
            "Port Said, Ismailia, Suez",
            "Fayoum, Beni Suef, Minya, Assiut, Sohag, Qena, Luxor, Aswan",
            "Red Sea, New Valley, North Sinai, South Sinai",
          ],
        },
        { type: "h2", text: "Cities and business hubs we often work with" },
        {
          type: "p",
          text: "Many clients come from Cairo, New Cairo, Nasr City, Maadi, 6th of October, Sheikh Zayed, Giza, Alexandria, Mansoura, Tanta, Zagazig, Port Said, Ismailia, Suez, Hurghada, Sharm El Sheikh, Luxor, and Aswan — plus growing cities across Upper Egypt and the Delta.",
        },
        { type: "h2", text: "Why Egyptian companies choose Clean Code" },
        {
          type: "ol",
          items: [
            "Clear communication in Arabic and English",
            "Modern stack: Next.js, React, Node.js, and reliable cloud hosting",
            "SEO-ready structure so customers can find you on Google",
            "Transparent delivery: scope, timeline, and measurable outcomes",
            "Local understanding of Egyptian market needs and payment tools",
          ],
        },
        { type: "h2", text: "Ready to start?" },
        {
          type: "p",
          text: "If you need a programming company in Egypt, a software house for your startup, or a web development partner for your brand, contact Clean Code today. Tell us your city, your goal, and we will propose the right first version.",
        },
      ],
    },
    ar: {
      title: "شركة برمجة وسوفت وير في مصر — Clean Code",
      excerpt:
        "بتدور على شركة برمجة أو سوفت وير أو تطوير مواقع في مصر؟ Clean Code بتبني مواقع وتطبيقات ويب للشركات في كل محافظات مصر الـ 27.",
      sections: [
        {
          type: "p",
          text: "لو بحثت عن شركة برمجة في مصر، أو شركة سوفت وير، أو شركة تطوير مواقع وتطبيقات قريبة منك — أنت في المكان الصحيح. Clean Code فريق مصري متخصص في تصميم وبناء مواقع احترافية وتطبيقات ويب وتكاملات ومنتجات رقمية للشركات بمختلف أحجامها.",
        },
        {
          type: "p",
          text: "نشتغل مع أصحاب الأعمال والعيادات والعقارات والمتاجر والشركات الناشئة وأي نشاط محتاج تواجد قوي أونلاين — سريع، آمن، وجاهز لعملاء الموبايل.",
        },
        { type: "h2", text: "إيه اللي بنبنيه للشركات المصرية" },
        {
          type: "ul",
          items: [
            "مواقع شركات وصفحات هبوط تحوّل الزائر لعميل محتمل",
            "تطبيقات ويب ولوحات تحكم للعمليات والحجز والمبيعات",
            "متاجر إلكترونية مع تكامل الدفع والشحن",
            "تكاملات API: مدفوعات، خرائط، تحليلات، CRM، وأتمتة",
            "دعم وصيانة بعد الإطلاق عشان المنتج يفضل مستقر",
          ],
        },
        { type: "h2", text: "بنخدم عملاء في كل محافظات مصر الـ 27" },
        {
          type: "p",
          text: "سواء شغلك في القاهرة أو مدينة أصغر، تقدر تشتغل مع Clean Code أونلاين أو بخطة مشروع واضحة. بنخدم أصحاب الأعمال في كل المحافظات:",
        },
        {
          type: "ul",
          items: [
            "القاهرة والجيزة والقليوبية (القاهرة الكبرى)",
            "الإسكندرية والبحيرة ومطروح",
            "الدقهلية ودمياط والشرقية والغربية والمنوفية وكفر الشيخ",
            "بورسعيد والإسماعيلية والسويس",
            "الفيوم وبني سويف والمنيا وأسيوط وسوهاج وقنا والأقصر وأسوان",
            "البحر الأحمر والوادي الجديد وشمال سيناء وجنوب سيناء",
          ],
        },
        { type: "h2", text: "مدن ومراكز أعمال بنشتغل معاها كتير" },
        {
          type: "p",
          text: "كتير من عملائنا من القاهرة، القاهرة الجديدة، مدينة نصر، المعادي، 6 أكتوبر، الشيخ زايد، الجيزة، الإسكندرية، المنصورة، طنطا، الزقازيق، بورسعيد، الإسماعيلية، السويس، الغردقة، شرم الشيخ، الأقصر، وأسوان — وكمان مدن نامية في الصعيد والدلتا.",
        },
        { type: "h2", text: "ليه الشركات المصرية تختار Clean Code" },
        {
          type: "ol",
          items: [
            "تواصل واضح بالعربي والإنجليزي",
            "تقنيات حديثة: Next.js وReact وNode.js واستضافة موثوقة",
            "هيكل جاهز لـ SEO عشان عملاءك يلاقوك على جوجل",
            "تسليم شفاف: نطاق العمل والجدول والنتائج",
            "فهم محلي لاحتياجات السوق المصري وأدوات الدفع",
          ],
        },
        { type: "h2", text: "جاهز تبدأ؟" },
        {
          type: "p",
          text: "لو محتاج شركة برمجة في مصر، أو بيت سوفت وير لمشروعك، أو شريك تطوير مواقع لعلامتك التجارية — تواصل مع Clean Code دلوقتي. قولنا مدينتك وهدفك، وهنقترح أول نسخة مناسبة لمشروعك.",
        },
      ],
    },
  },
  {
    slug: "web-development-company-cairo-giza",
    date: "2026-07-20",
    image:
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1200&q=80",
    category: { en: "Cairo", ar: "القاهرة" },
    tags: {
      en: ["Cairo", "Giza", "New Cairo", "Web Agency"],
      ar: ["القاهرة", "الجيزة", "القاهرة الجديدة", "وكالة ويب"],
    },
    en: {
      title: "Web development company in Cairo & Giza",
      excerpt:
        "Clean Code helps brands in Cairo, Giza, New Cairo, 6th of October, and Sheikh Zayed launch fast websites and web apps that win customers.",
      sections: [
        {
          type: "p",
          text: "Greater Cairo is competitive. Your website has a few seconds to prove you are professional. Clean Code is a web development company serving Cairo and Giza businesses that need polished digital products — not templates that look like everyone else.",
        },
        { type: "h2", text: "Areas we commonly serve" },
        {
          type: "ul",
          items: [
            "Cairo, Downtown, Nasr City, Heliopolis, Maadi, Zamalek",
            "New Cairo, Fifth Settlement, Rehab, Madinaty",
            "Giza, Dokki, Mohandessin, Haram",
            "6th of October, Sheikh Zayed, and nearby business districts",
            "Qalyubia cities connected to Greater Cairo operations",
          ],
        },
        { type: "h2", text: "Popular projects in Cairo" },
        {
          type: "ol",
          items: [
            "Service company websites with WhatsApp lead capture",
            "Clinic and education booking systems",
            "Real-estate listing platforms",
            "E-commerce with local payment methods",
            "Internal dashboards for sales and operations teams",
          ],
        },
        { type: "h2", text: "Built for Google and mobile users" },
        {
          type: "p",
          text: "When people search “web development company in Cairo”, “programming company in Giza”, or “software company New Cairo”, they expect speed, clarity, and proof. We optimize structure, performance, and content so your brand can rank and convert.",
        },
        {
          type: "p",
          text: "Tell us your industry and location in Greater Cairo — we will map a practical launch plan.",
        },
      ],
    },
    ar: {
      title: "شركة تطوير مواقع في القاهرة والجيزة",
      excerpt:
        "Clean Code بتساعد العلامات في القاهرة والجيزة والقاهرة الجديدة و6 أكتوبر والشيخ زايد تطلق مواقع وتطبيقات ويب سريعة تكسب عملاء.",
      sections: [
        {
          type: "p",
          text: "القاهرة الكبرى سوق تنافسي. موقعك عنده ثوانٍ يثبت إنك احترافي. Clean Code شركة تطوير مواقع تخدم أعمال القاهرة والجيزة اللي محتاجة منتج رقمي مصقول — مش قالب شبه الكل.",
        },
        { type: "h2", text: "مناطق بنخدمها كتير" },
        {
          type: "ul",
          items: [
            "القاهرة، وسط البلد، مدينة نصر، مصر الجديدة، المعادي، الزمالك",
            "القاهرة الجديدة، التجمع الخامس، الرحاب، مدينتي",
            "الجيزة، الدقي، المهندسين، الهرم",
            "6 أكتوبر والشيخ زايد والمناطق التجارية القريبة",
            "مدن القليوبية المرتبطة بعمليات القاهرة الكبرى",
          ],
        },
        { type: "h2", text: "مشاريع شائعة في القاهرة" },
        {
          type: "ol",
          items: [
            "مواقع شركات خدمات مع تحويلات واتساب",
            "أنظمة حجز للعيادات والتعليم",
            "منصات عقارات وإعلانات",
            "تجارة إلكترونية مع وسائل دفع محلية",
            "لوحات تحكم داخلية لفرق المبيعات والعمليات",
          ],
        },
        { type: "h2", text: "متوافق مع جوجل وعملاء الموبايل" },
        {
          type: "p",
          text: "لما الناس تدور على «شركة تطوير مواقع في القاهرة» أو «شركة برمجة في الجيزة» أو «شركة سوفت وير القاهرة الجديدة»، بيتوقعوا سرعة ووضوح وإثبات. بنحسّن الهيكل والأداء والمحتوى عشان علامتك تترتب وتتحوّل لعملاء.",
        },
        {
          type: "p",
          text: "قولنا مجالك وموقعك في القاهرة الكبرى — وهنرسم خطة إطلاق عملية.",
        },
      ],
    },
  },
  {
    slug: "software-company-alexandria-delta-egypt",
    date: "2026-07-14",
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&q=80",
    category: { en: "Alexandria", ar: "الإسكندرية" },
    tags: {
      en: ["Alexandria", "Delta", "Mansoura", "Software"],
      ar: ["الإسكندرية", "الدلتا", "المنصورة", "سوفت وير"],
    },
    en: {
      title: "Software company for Alexandria & the Delta",
      excerpt:
        "From Alexandria to Mansoura, Tanta, and Zagazig — Clean Code builds software and websites for Delta businesses that want to grow online.",
      sections: [
        {
          type: "p",
          text: "Northern Egypt is full of strong local brands that deserve better than outdated websites. Clean Code partners with companies in Alexandria and the Delta to ship modern software, e-commerce, and marketing sites.",
        },
        { type: "h2", text: "Governorates & cities we cover" },
        {
          type: "ul",
          items: [
            "Alexandria and nearby coastal business areas",
            "Beheira and Matrouh",
            "Dakahlia — Mansoura and surrounding cities",
            "Gharbia — Tanta and industrial zones",
            "Sharqia — Zagazig and growing commercial centers",
            "Menoufia, Kafr El Sheikh, and Damietta",
          ],
        },
        { type: "h2", text: "What Delta companies usually need" },
        {
          type: "ol",
          items: [
            "A trustworthy website that presents products and services clearly",
            "Online ordering or booking flows",
            "Integration with WhatsApp for sales follow-up",
            "Bilingual pages for Arabic-first audiences and English partners",
            "SEO content that ranks for city + service searches",
          ],
        },
        { type: "h2", text: "Search visibility that matches your city" },
        {
          type: "p",
          text: "People search phrases like “software company in Alexandria”, “programming company Mansoura”, and “web development Tanta”. We help you show up with useful pages, fast performance, and clear calls to action.",
        },
        {
          type: "p",
          text: "If your company is in the Delta and you want a serious digital partner, Clean Code is ready to build with you.",
        },
      ],
    },
    ar: {
      title: "شركة سوفت وير للإسكندرية والدلتا",
      excerpt:
        "من الإسكندرية للمنصورة وطنطا والزقازيق — Clean Code بتبني سوفت وير ومواقع لأعمال الدلتا اللي عايزة تكبر أونلاين.",
      sections: [
        {
          type: "p",
          text: "شمال مصر مليان علامات محلية قوية تستحق أفضل من مواقع قديمة. Clean Code بتتشارك مع شركات الإسكندرية والدلتا لشحن سوفت وير حديث وتجارة إلكترونية ومواقع تسويق.",
        },
        { type: "h2", text: "المحافظات والمدن اللي بنغطيها" },
        {
          type: "ul",
          items: [
            "الإسكندرية والمناطق التجارية الساحلية القريبة",
            "البحيرة ومطروح",
            "الدقهلية — المنصورة والمدن المحيطة",
            "الغربية — طنطا والمناطق الصناعية",
            "الشرقية — الزقازيق والمراكز التجارية النامية",
            "المنوفية وكفر الشيخ ودمياط",
          ],
        },
        { type: "h2", text: "إيه اللي شركات الدلتا بتحتاجه عادة" },
        {
          type: "ol",
          items: [
            "موقع موثوق يعرض المنتجات والخدمات بوضوح",
            "تدفقات طلب أو حجز أونلاين",
            "تكامل واتساب لمتابعة المبيعات",
            "صفحات ثنائية اللغة لجمهور عربي وشركاء إنجليز",
            "محتوى SEO يترتب على بحث المدينة + الخدمة",
          ],
        },
        { type: "h2", text: "ظهور في البحث يناسب مدينتك" },
        {
          type: "p",
          text: "الناس بتدور على عبارات زي «شركة سوفت وير في الإسكندرية» و«شركة برمجة المنصورة» و«تطوير مواقع طنطا». بنساعدك تظهر بصفحات مفيدة وأداء سريع وأزرار تواصل واضحة.",
        },
        {
          type: "p",
          text: "لو شركتك في الدلتا وعايز شريك رقمي جاد — Clean Code جاهزة تبني معاك.",
        },
      ],
    },
  },
  {
    slug: "programming-company-upper-egypt-canal-cities",
    date: "2026-07-02",
    image:
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1200&q=80",
    category: { en: "Upper Egypt", ar: "الصعيد" },
    tags: {
      en: ["Upper Egypt", "Luxor", "Aswan", "Canal"],
      ar: ["الصعيد", "الأقصر", "أسوان", "القناة"],
    },
    en: {
      title: "Programming company for Upper Egypt & Canal cities",
      excerpt:
        "Clean Code supports businesses in Assiut, Sohag, Qena, Luxor, Aswan, and Canal cities with websites, apps, and software built for growth.",
      sections: [
        {
          type: "p",
          text: "Digital growth is not only a Cairo story. Businesses across Upper Egypt and the Suez Canal region need reliable programming partners who understand local operations and can deliver remote-first projects with clear milestones.",
        },
        { type: "h2", text: "Where we help most" },
        {
          type: "ul",
          items: [
            "Upper Egypt: Minya, Assiut, Sohag, Qena, Luxor, Aswan, Beni Suef, Fayoum",
            "Canal cities: Port Said, Ismailia, Suez",
            "Red Sea tourism hubs: Hurghada and coastal businesses",
            "New Valley and Sinai governorates for growing local brands",
          ],
        },
        { type: "h2", text: "Solutions that fit local markets" },
        {
          type: "ol",
          items: [
            "Tourism and hospitality websites with booking CTAs",
            "Trade and wholesale catalogs with inquiry forms",
            "Clinic, school, and service-business platforms",
            "Inventory and operations tools for growing teams",
            "Multilingual pages for visitors and partners",
          ],
        },
        { type: "h2", text: "Rank for your city on Google" },
        {
          type: "p",
          text: "Searches like “programming company in Luxor”, “software company Aswan”, “web development Port Said”, or “شركة برمجة أسيوط” need local relevance. We create pages and content that connect your offer to the cities you serve.",
        },
        {
          type: "p",
          text: "Clean Code is your programming company for Upper Egypt and Canal cities — modern tech, Arabic/English communication, and delivery you can track.",
        },
      ],
    },
    ar: {
      title: "شركة برمجة للصعيد ومدن القناة",
      excerpt:
        "Clean Code بتدعم أعمال أسيوط وسوهاج وقنا والأقصر وأسوان ومدن القناة بمواقع وتطبيقات وسوفت وير مبنية للنمو.",
      sections: [
        {
          type: "p",
          text: "النمو الرقمي مش قصة القاهرة بس. أعمال الصعيد ومدن قناة السويس محتاجة شريك برمجة موثوق يفهم التشغيل المحلي ويقدر يسلّم مشاريع عن بُعد بمراحل واضحة.",
        },
        { type: "h2", text: "فين بنساعد أكتر" },
        {
          type: "ul",
          items: [
            "الصعيد: المنيا، أسيوط، سوهاج، قنا، الأقصر، أسوان، بني سويف، الفيوم",
            "مدن القناة: بورسعيد، الإسماعيلية، السويس",
            "مراكز السياحة بالبحر الأحمر: الغردقة والأعمال الساحلية",
            "الوادي الجديد ومحافظات سيناء للعلامات المحلية النامية",
          ],
        },
        { type: "h2", text: "حلول تناسب الأسواق المحلية" },
        {
          type: "ol",
          items: [
            "مواقع سياحة وضيافة مع أزرار حجز",
            "كتالوجات تجارة جملة مع نماذج استفسار",
            "منصات عيادات ومدارس وأعمال خدمية",
            "أدوات مخزون وعمليات للفرق النامية",
            "صفحات متعددة اللغة للزوار والشركاء",
          ],
        },
        { type: "h2", text: "اترتب على جوجل باسم مدينتك" },
        {
          type: "p",
          text: "عمليات البحث زي «شركة برمجة في الأقصر» و«شركة سوفت وير أسوان» و«تطوير مواقع بورسعيد» أو «شركة برمجة أسيوط» محتاجة صلة محلية. بنعمل صفحات ومحتوى يربط عرضك بالمدن اللي بتخدمها.",
        },
        {
          type: "p",
          text: "Clean Code هي شركة البرمجة بتاعتك للصعيد ومدن القناة — تقنية حديثة، تواصل عربي/إنجليزي، وتسليم تقدر تتابعه.",
        },
      ],
    },
  },
  {
    slug: "how-to-choose-software-company-in-egypt",
    date: "2026-06-28",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    category: { en: "Guide", ar: "دليل" },
    tags: {
      en: ["Buying Guide", "Egypt Tech", "Agency", "Checklist"],
      ar: ["دليل اختيار", "تكنولوجيا مصر", "وكالة", "قائمة تحقق"],
    },
    en: {
      title: "How to choose a software company in Egypt",
      excerpt:
        "A practical checklist for Egyptian businesses comparing programming companies, software houses, and web agencies — before you sign.",
      sections: [
        {
          type: "p",
          text: "Choosing a software company in Egypt can feel noisy: many offers, unclear scope, and demos that hide maintenance reality. Use this checklist to pick a partner that can actually deliver.",
        },
        { type: "h2", text: "Ask these questions first" },
        {
          type: "ul",
          items: [
            "Who will build the project — and who supports it after launch?",
            "Can they show similar work (websites, apps, integrations)?",
            "Is the proposal split into milestones with clear outputs?",
            "Do they plan SEO, mobile performance, and analytics from day one?",
            "Can they communicate in Arabic and English when needed?",
          ],
        },
        { type: "h2", text: "Red flags" },
        {
          type: "ol",
          items: [
            "No written scope or acceptance criteria",
            "Unrealistically cheap timelines for complex products",
            "No plan for hosting, backups, or security basics",
            "Payment integrations treated as “we will add later somehow”",
            "You cannot reach a real technical owner",
          ],
        },
        { type: "h2", text: "What good looks like" },
        {
          type: "p",
          text: "A strong programming company in Egypt clarifies your goal, proposes a first release you can use, and keeps quality high on trust paths: speed, forms, payments, and support. That is how Clean Code works with clients from Cairo to Upper Egypt.",
        },
        {
          type: "p",
          text: "If you are comparing software houses right now, contact us with your city and project idea — we will tell you honestly what should ship first.",
        },
      ],
    },
    ar: {
      title: "إزاي تختار شركة سوفت وير في مصر",
      excerpt:
        "قائمة عملية للشركات المصرية اللي بتقارن بين شركات البرمجة وبيوت السوفت وير ووكالات الويب — قبل ما توقّع.",
      sections: [
        {
          type: "p",
          text: "اختيار شركة سوفت وير في مصر ممكن يكون مزدحم: عروض كتير، نطاق غير واضح، وديموهات بتاخفي واقع الصيانة. استخدم القائمة دي عشان تختار شريك يقدر يسلّم فعلاً.",
        },
        { type: "h2", text: "اسأل الأسئلة دي الأول" },
        {
          type: "ul",
          items: [
            "مين هيبني المشروع — ومين هيدعمه بعد الإطلاق؟",
            "يقدروا يورّوا شغل مشابه (مواقع، تطبيقات، تكاملات)؟",
            "العرض مقسّم لمراحل بمخرجات واضحة؟",
            "فيه خطة لـ SEO وأداء الموبايل والتحليلات من اليوم الأول؟",
            "يقدروا يتواصلوا بالعربي والإنجليزي لما تحتاج؟",
          ],
        },
        { type: "h2", text: "علامات خطر" },
        {
          type: "ol",
          items: [
            "مفيش نطاق مكتوب أو معايير قبول",
            "مواعيد رخيصة وغير واقعية لمنتجات معقدة",
            "مفيش خطة للاستضافة والنسخ الاحتياطي وأساسيات الأمان",
            "تكاملات الدفع متعاملة كـ «هنضيفها بعدين بطريقة ما»",
            "مش قادر توصل لمسؤول تقني حقيقي",
          ],
        },
        { type: "h2", text: "شكل الشغل الكويس" },
        {
          type: "p",
          text: "شركة البرمجة القوية في مصر بتوضّح هدفك، وتقترح أول إصدار تقدر تستخدمه، وتحافظ على جودة عالية في مسارات الثقة: السرعة، النماذج، الدفع، والدعم. دي طريقة Clean Code مع العملاء من القاهرة للصعيد.",
        },
        {
          type: "p",
          text: "لو بتقارن بيوت سوفت وير دلوقتي، تواصل معانا بمدينتك وفكرة مشروعك — وهنقولك بصراحة إيه اللي المفروض يتطلق الأول.",
        },
      ],
    },
  },
];

export function getAllPosts() {
  return BLOG_POSTS;
}

export function getPostBySlug(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug) ?? null;
}

export function getLatestPosts(excludeSlug, limit = 5) {
  return BLOG_POSTS.filter((post) => post.slug !== excludeSlug).slice(0, limit);
}

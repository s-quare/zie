export const projects = [
    {
        id: "01",
        slug: "glow-up-beauty-services",
        featured: true,
        title: "Glow Up (GU)",
        subtitle: "Beauty Services On-Demand Booking Platform",
        client: "Glow Up",
        role: "Associate / Product Support",
        timeline: "",
        platforms: ['web', 'android', 'ios'],

        // Media assets
        images: {
            primary: "/images/glowup1.jpg",
            secondary: "/images/glowup2.jpg",
        },

        // Tier 1: Home Page Teaser Card
        teaser: {
            category: "PRODUCT SUPPORT & TEAM COORDINATION",
            headline: "Supporting sprint follow-up, cross-team communication, and issue escalation for a beauty-services booking platform in Saudi Arabia.",
            metrics: [
                { label: "Market", value: "Saudi Arabia" },
                { label: "Core Scope", value: "Sprint Follow-up & Escalation" },
            ],
            tags: ["Product Support", "Sprint Coordination", "Remote Team", "Escalation"],
        },

        // Tier 2: /projects Listing Page Metadata
        listing: {
            shortDescription: "Followed up with engineering during weekly sprints, maintained communication between the Lead PM and team, and escalated delays and blockers to keep delivery on track.",
            badge: "Live Product",
            deliverables: ["Sprint Follow-up", "Team Communication", "Issue Escalation"],
        },

        // Tier 3: /projects/[slug] Deep-Dive Case Study
        caseStudy: {
            executiveSummary: "Glow Up (GU) is a beauty-services platform connecting customers in Saudi Arabia with skilled beauty professionals who provide services at home, including makeup, hairstyling, spa and massage services, nail services, and beauty-related models. Users can select a service, choose an expert, book an appointment, view ratings and previous work, and pay online. I worked alongside the Lead Product Manager, supporting the team through coordination, sprint follow-up, communication, and issue escalation.",

            challenge: "Keeping a remote development team on track during weekly sprints and ensuring nothing fell through the cracks between task allocation and execution.",

            keyResponsibilities: [
                {
                    title: "Sprint Follow-Up",
                    description: "Followed up with the engineering and development team during weekly sprints to ensure assigned tasks were being worked on.",
                },
                {
                    title: "Cross-Team Communication",
                    description: "Maintained communication between the Lead PM and team members regarding progress, tasks, and issues.",
                },
                {
                    title: "Delay & Blocker Escalation",
                    description: "Escalated development delays and blockers to the Lead PM to keep the product on schedule.",
                },
                {
                    title: "Product & Design Involvement",
                    description: "Participated in product meetings, stayed involved in the product/design process, and provided feedback where relevant.",
                },
            ],

            resultsAndImpact: [
                "Glow Up progressed to a live product.",
                "Identified a communication gap where developers had not seen a task allocated to them on Jira, and escalated it to the Lead PM for resolution.",
                "Gained early practical exposure to working within a remote product team.",
            ],

            toolsUsed: ["WhatsApp", "Slack", "Google Meet", "Figma", "Jira"],
        },
    },


    {
        id: "02",
        slug: "service-dey-marketplace",
        featured: true,
        title: "Service Dey",
        subtitle: "Two-Sided Marketplace for Skilled Workers & Artisans",
        client: "Peakpath Innovation",
        role: "Associate Product Manager → Product/Sprint Lead",
        timeline: "Jun 2025 – Present",
        platforms: ["iOS", "Android"],

        // Media assets
        images: {
            primary: "/images/servicedey1.jpg",
            secondary: "/images/servicedey2.jpg",
        },

        // Tier 1: Home Page Teaser Card
        teaser: {
            category: "PRODUCT OPS, QA & USER RESEARCH",
            headline: "Leading sprint coordination, mobile QA, beta testing, and customer support for a two-sided services marketplace from early stage to live launch.",
            metrics: [
                { label: "Role Growth", value: "Associate PM → Sprint Lead" },
                { label: "Core Scope", value: "QA, Sprints & Support" },
            ],
            tags: ["Sprint Leadership", "APK QA", "Beta Testing", "Customer Support"],
        },

        // Tier 2: /projects Listing Page Metadata
        listing: {
            shortDescription: "Grew from Associate PM into a sprint lead role, owning QA, beta testing, customer support, design/brand oversight, and cross-functional coordination for a live marketplace.",
            badge: "Live Product",
            deliverables: ["Sprint Leadership", "Manual QA & Bug Documentation", "Beta Testing Program", "Customer Support"],
        },

        // Tier 3: /projects/[slug] Deep-Dive Case Study
        caseStudy: {
            executiveSummary: "Service Dey is a two-sided digital marketplace connecting skilled workers and artisans with customers who need services such as appliance repairs, vehicle services, wardrobes, makeup, and hairstyling. Service providers manage their business through the platform, including payments, balances, sales tracking, and withdrawals, with funds held in escrow until the customer confirms job completion. I joined as an Associate Product Manager supporting the Lead PM, and my involvement grew to include sprint coordination, design and brand oversight, testing, customer support, user research, recruitment support, and cross-functional coordination.",

            challenge: "As a lean startup with limited QA resources, the product needed someone to own sprint delivery, catch quality issues before launch, run beta testing without a dedicated research team, and keep the brand and user experience consistent across mobile and web.",

            keyResponsibilities: [
                {
                    title: "Sprint & Product Management",
                    description: "Coordinated weekly sprint activities, facilitated sprint refinement and meetings, worked with engineering, web, and mobile teams to ensure tasks were assigned and progressed, and followed up on implementation timelines and expected APK deliveries.",
                },
                {
                    title: "Quality Assurance & Testing",
                    description: "Conducted extensive manual testing of APK builds on Android devices, assessing functionality, navigation, UX, copy, layout, and usability from onboarding through the core user journey. Identified issues including a subscription pricing error (₦250/month shown instead of ₦2,500/month) and broken links in policy sections, documenting them for the Jira backlog.",
                },
                {
                    title: "Beta Testing & User Research",
                    description: "Personally helped recruit beta testers, shared the product, and collected feedback based on real usage — including escalating a screen-size issue where onboarding elements were not fully visible on certain devices.",
                },
                {
                    title: "Customer Support",
                    description: "Handled customer questions and complaints post-launch, particularly around verification issues, and distinguished between product problems and demand/marketing problems when service providers complained about low bookings.",
                },
                {
                    title: "Design & Brand Oversight",
                    description: "Worked with the graphic design team to ensure graphics were delivered on schedule, colours aligned with the brand, and messaging reflected the intended brand voice.",
                },
                {
                    title: "Field & User Engagement",
                    description: "Participated in field activities including street sign-ups and street interviews to engage users directly.",
                },
            ],

            resultsAndImpact: [
                "Service Dey became a live product and reached fewer than 1,000 users within its first year.",
                "Caught and escalated a critical subscription pricing error before it caused significant revenue impact.",
                "Built a beta-testing and feedback pipeline that fed directly into the Jira backlog for ongoing sprints.",
            ],

            toolsUsed: ["Jira", "Figma", "WhatsApp", "Slack"],
        },
    },




    {
        id: "03",
        slug: "paydayplus-payroll-advances",
        featured: false,
        title: "PaydayPlus",
        subtitle: "B2B Payroll & Employee Earned-Wage Access Platform",
        client: "PaydayPlus",
        role: "Associate Product Support",
        timeline: "",
        platforms: [],

        // Media assets
        images: {
            primary: "/images/paydayplus1.webp",
            secondary: "/images/paydayplus2.jpg",
        },

        // Tier 1: Home Page Teaser Card
        teaser: {
            category: "PRODUCT IDEATION & DEV COORDINATION",
            headline: "Supporting product ideation and daily development coordination for a B2B payroll platform exploring earned-wage access for employees.",
            metrics: [
                { label: "Product Stage", value: "In Development" },
                { label: "Core Scope", value: "Ideation & Stand-up Coordination" },
            ],
            tags: ["Product Ideation", "Fintech", "Daily Stand-ups", "Dependency Tracking"],
        },

        // Tier 2: /projects Listing Page Metadata
        listing: {
            shortDescription: "Supported early-stage product thinking, led daily stand-ups with developers, tracked progress and dependencies, and contributed a key feature idea for employee earned-wage access.",
            badge: "In Development",
            deliverables: ["Stand-up Coordination", "Feature Ideation", "Dependency Tracking"],
        },

        // Tier 3: /projects/[slug] Deep-Dive Case Study
        caseStudy: {
            executiveSummary: "PaydayPlus is a B2B financial product being developed to make it easier for businesses to pay their employees, while also exploring employee access to advances or loans based on earnings already accumulated. As the product is still in the building stage, my involvement has focused on supporting the Lead PM, product ideation, delivery coordination, and early-stage product thinking.",

            challenge: "Helping the product team think through how the loan/advance functionality could create real value for employees while remaining commercially viable for the business, and keeping backend and frontend development coordinated during daily stand-ups.",

            keyResponsibilities: [
                {
                    title: "Product Ideation & Planning Support",
                    description: "Supported the Lead PM in product planning and ideation, and participated in discussions around how the product could become more useful, scalable, and commercially viable.",
                },
                {
                    title: "Daily Stand-Up Leadership",
                    description: "Led daily stand-up meetings with developers, followed up on development progress, and recorded developer updates.",
                },
                {
                    title: "Dependency Identification & Escalation",
                    description: "Helped identify and communicate development dependencies, reporting progress to the Lead PM when necessary, including recurring coordination challenges around a web developer's availability.",
                },
                {
                    title: "Feature Contribution: Earned-Wage Advances",
                    description: "Proposed allowing employees to access an advance based on the period they had already worked, an idea now being considered/implemented as part of the product's development.",
                },
            ],

            resultsAndImpact: [
                "Contributed a feature concept (earned-wage advances) that is being considered for implementation.",
                "Kept backend and frontend development visible and coordinated through consistent stand-up tracking and follow-up.",
                "Identified a use case for small businesses (10–20 employees) to pre-fund and schedule payroll through the platform, reducing manual payment errors.",
            ],

            toolsUsed: ["Stand-up/Dev Tracking Tools", "Slack"],
        },
    },


    {
        id: "04",
        slug: "safepulse-discreet-safety-app",
        featured: false,
        title: "SafePulse",
        subtitle: "Discreet Safety Application for Abuse Prevention",
        client: "SafePulse",
        role: "Product Management / Research / Testing / Cross-functional Coordination",
        timeline: "",
        platforms: [],

        // Media assets
        images: {
            primary: "/images/safepulse1.jpg",
            secondary: "/images/safepulse2.jpg",
        },

        // Tier 1: Home Page Teaser Card
        teaser: {
            category: "USER RESEARCH & DISGUISE UX DESIGN",
            headline: "Leading research, feature design, and testing for a safety app that disguises itself to help vulnerable people discreetly seek help.",
            metrics: [
                { label: "Focus Area", value: "Safety & Discreet UX" },
                { label: "Core Scope", value: "Research, Design Review & Pitching" },
            ],
            tags: ["User Research", "Design Review", "Investor Pitching", "Social Impact"],
        },

        // Tier 2: /projects Listing Page Metadata
        listing: {
            shortDescription: "Led user research, shaped a disguise-mechanism feature, reviewed designs, tested core safety functionality, and represented the product in investor pitches.",
            badge: "In Development",
            deliverables: ["User Research", "Disguise Feature Design", "Design Reviews", "Investor Pitch"],
        },

        // Tier 3: /projects/[slug] Deep-Dive Case Study
        caseStudy: {
            executiveSummary: "SafePulse is a safety-focused application designed to help vulnerable people seek help discreetly and reduce the impact of abuse, particularly within African communities. The application disguises itself as an ordinary app on a user's phone and includes a discreet mechanism for triggering a tracker or call for help. Working within a team of two Product Managers and a Scrum Master, I contributed to product research, feature discussions, design reviews, testing, investor pitching, and team coordination.",

            challenge: "Designing a disguise mechanism convincing enough to protect users from an abuser noticing a safety-related app, while validating the concept through user research and defending its commercial viability to investors.",

            keyResponsibilities: [
                {
                    title: "User Research",
                    description: "Conducted individual product research, developed interview questions, shared questionnaires with potential users, collected and analysed responses, and combined findings with the team's own research to prioritise realistic improvements.",
                },
                {
                    title: "Disguise Feature Development",
                    description: "Explored disguise options for discreet help-seeking, considering domestic abuse scenarios, and helped narrow the concept to around five choices including a weather app, calculator, and period-tracking app.",
                },
                {
                    title: "Design Review",
                    description: "Reviewed product designs for text alignment, colour consistency, spacing, screen density, and navigation clarity, and helped developers understand how screens were expected to look, using tools including Claude, Google Studio AI, and Stitch.",
                },
                {
                    title: "Feature Testing",
                    description: "Tested key features including the calculator disguise, the Pulse help-trigger button, response speed of help requests, and whether the intended user journey worked as expected.",
                },
                {
                    title: "Investor Pitching",
                    description: "Participated in investor pitches, challenging the assumption that abuse only affects women and defending the product's long-term commercial viability despite its social-impact focus.",
                },
                {
                    title: "Cross-Functional Coordination",
                    description: "Coordinated across teams during pitch-deck preparation, directly addressing team members who were under-contributing to keep the deliverable on track.",
                },
            ],

            resultsAndImpact: [
                "Shaped a disguise-mechanism concept (five app-disguise options) that became core to the product's safety approach.",
                "Delivered a completed investor pitch despite uneven team participation, by directly addressing contribution gaps.",
                "Broadened the product's positioning by pushing back on the assumption that abuse only affects one demographic.",
            ],

            toolsUsed: ["Claude", "Google Studio AI", "Stitch", "Figma"],
        },
    },


    {
        id: "05",
        slug: "cornerpulse-digital-banking",
        featured: false,
        title: "CornerPulse",
        subtitle: "Pan-African Digital Banking & Cross-Border Payments Platform",
        client: "CornerPulse",
        role: "Product Overseer / Product Management",
        timeline: "",
        platforms: [],

        // Media assets
        images: {
            primary: "/images/cornerpulse1.jpg",
            secondary: "/images/cornerpulse2.jpg",
        },

        // Tier 1: Home Page Teaser Card
        teaser: {
            category: "PRODUCT OVERSIGHT & AGENCY ACCOUNTABILITY",
            headline: "Taking over stalled product oversight for a fintech app, driving an outsourced development agency toward consistent, accountable delivery.",
            metrics: [
                { label: "Delivery Turnaround", value: "3 APKs in ~3 Months" },
                { label: "Core Scope", value: "Agency Oversight & QA" },
            ],
            tags: ["Product Oversight", "Fintech", "Agency Management", "Identity Verification"],
        },

        // Tier 2: /projects Listing Page Metadata
        listing: {
            shortDescription: "Took over oversight of a stalled outsourced build, pushed the development agency toward accountable delivery, and drove onboarding, UX, and fraud-prevention improvements.",
            badge: "In Development",
            deliverables: ["Agency Oversight", "Onboarding Redesign Direction", "APK QA", "Identity Verification Strategy"],
        },

        // Tier 3: /projects/[slug] Deep-Dive Case Study
        caseStudy: {
            executiveSummary: "CornerPulse is a fintech product aiming to compete in the Nigerian digital banking space, enabling users to bank digitally, send money across African countries, receive funds in local currency, buy and sell gift cards, convert currencies, and access funds while travelling via a CornerPulse card. The product is outsourced to an external development agency. I became responsible for overseeing the development process, challenging implementation decisions, testing builds, identifying gaps, and pushing the agency toward delivery.",

            challenge: "The development agency had reportedly gone approximately two years without delivering a single functional APK, and had presented several requirements as technically impossible without being challenged.",

            keyResponsibilities: [
                {
                    title: "Taking Over Product Oversight",
                    description: "Requested and tested an APK upon joining, engaged directly with the agency's lead developer/CEO, and researched comparable products and technologies to test claims that certain requirements were not possible.",
                },
                {
                    title: "Onboarding Intervention",
                    description: "Pushed for a redesigned onboarding experience that clearly introduced the CornerPulse brand and purpose, with clearer messaging and more intentional first-time user experience.",
                },
                {
                    title: "Product & UX Oversight",
                    description: "Pushed the agency on text alignment, colour consistency, spacing, account creation, login/sign-up simplicity, account upgrade functionality, live facial verification, currency conversion, and core transaction functionality.",
                },
                {
                    title: "Identity Verification & Fraud Prevention",
                    description: "Considered fraud risk for a financial product and pushed for live facial verification against submitted ID documents, challenging the team to research appropriate identity-verification APIs rather than accepting technical limitations.",
                },
                {
                    title: "APK Testing & QA",
                    description: "Personally tested every new APK screen by screen, documenting issues, whether requested changes were implemented, and unresolved errors, to give the agency specific, actionable feedback.",
                },
            ],

            resultsAndImpact: [
                "Drove the agency to deliver multiple APK builds, including three within approximately three months, after roughly two years of no functional delivery.",
                "Increased development accountability and made progress visible and trackable.",
                "Advanced the identity-verification strategy by pushing the team to research compatible NIN verification APIs instead of accepting the requirement as unworkable.",
            ],

            toolsUsed: ["APK QA Tools", "Identity Verification APIs (research)"],
        },
    },






];
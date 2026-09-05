export const projects = [
    {
        id: "01",
        slug: "servicedey-product-operations",
        featured: true, // Used for Home Teaser filter
        title: "Servicedey",
        subtitle: "Digital Services & On-Demand Booking Platform",
        client: "Peakpath Innovation",
        role: "Associate Product Manager",
        timeline: "Jun 2025 – Present",
        platforms: ["iOS", "Android"],

        // Media assets
        images: {
            primary: "/images/servicedey-hero.webp",
            secondary: "/images/servicedey-hero.webp",
        },

        // Tier 1: Home Page Teaser Card
        teaser: {
            category: "LIVE PRODUCT OPS & QA",
            headline: "Managing end-to-end product operations, mobile release QA, and user activation for a multi-platform digital service marketplace.",
            metrics: [
                { label: "Target Environments", value: "APK / Staging / iOS" },
                { label: "Primary Objective", value: "User Activation & QA" },
            ],
            tags: ["Product Operations", "APK Testing", "User Onboarding", "Cross-Functional"],
        },

        // Tier 2: /projects Listing Page Metadata
        listing: {
            shortDescription: "Overseeing live platform operations across iOS and Android, driving cross-functional alignment, and testing multi-environment builds to safeguard quality.",
            badge: "Active Operations",
            deliverables: ["Multi-Env Build QA", "Activation Funnel Optimization", "User Feedback Systems"],
        },

        // Tier 3: /projects/[slug] Deep-Dive Case Study
        caseStudy: {
            executiveSummary: "Servicedey is a live digital services platform bridging service providers and users across iOS and Android builds. As Associate Product Manager at Peakpath Innovation, I manage daily product operations, coordinate development milestones between engineering and design, and conduct rigorous QA across staging, APK, production, and iOS environments.",

            challenge: "With ongoing platform enhancements and new release cycles, maintaining seamless quality across both mobile operating systems while reducing onboarding drop-offs required structured testing routines and proactive customer activation channels.",

            keyResponsibilities: [
                {
                    title: "Multi-Environment Quality Assurance",
                    description: "Executed comprehensive manual testing across APK, staging, production, and native iOS builds to identify bugs before public deployment.",
                },
                {
                    title: "User Onboarding & Activation Optimization",
                    description: "Monitored user signup drop-offs and spearheaded engagement workflows targeting incomplete registrations to improve platform activation rates.",
                },
                {
                    title: "Cross-Functional Milestone Coordination",
                    description: "Aligned engineering, UI/UX design, and business teams to maintain sprint momentum and enforce feature timelines.",
                },
                {
                    title: "User Feedback Loop Implementation",
                    description: "Analyzed customer feedback data and field research to formulate usability improvement recommendations for product backlogs.",
                },
            ],

            resultsAndImpact: [
                "Enhanced build quality and release stability across both iOS and Android environments.",
                "Increased onboarding completion rates through targeted follow-up workflows for uncompleted registrations.",
                "Created an organized feedback pipeline directly translating user friction points into sprint priorities.",
            ],

            toolsUsed: ["Jira", "Trello", "Confluence", "APK QA Tools", "Google Analytics", "Google Workspace"],
        },
    },


    {
        id: "02",
        slug: "deotechnological-product-internship",
        featured: true, // Included in Home Teaser / Featured section
        title: "Deotechnological Usability & Product Strategy",
        subtitle: "Customer Insights, Usability Audits & Backlog Refinement",
        client: "Deotechnological",
        role: "Product Manager Intern",
        timeline: "Jul 2024 – May 2025",
        platforms: ["Web", "Mobile Web"],

        // Media assets
        images: {
            primary: "/images/deotech-hero.webp",
            secondary: "/images/deotech-analytics.webp",
        },

        // Tier 1: Home Page Teaser Card
        teaser: {
            category: "USER RESEARCH & FEATURE STRATEGY",
            headline: "Translating raw customer feedback into prioritized product requirements and usability enhancements for digital features.",
            metrics: [
                { label: "Core Scope", value: "Usability & Backlog" },
                { label: "Key Deliverable", value: "PRD & Insights" },
            ],
            tags: ["Usability Audits", "Feature Prioritization", "Customer Feedback", "Business Analysis"],
        },

        // Tier 2: /projects Listing Page Metadata
        listing: {
            shortDescription: "Evaluated customer feedback, conducted usability assessments, and partnered with engineering to refine feature backlogs and UX flows.",
            badge: "Completed Internship",
            deliverables: ["Usability Assessments", "Feature Requirements", "Customer Feedback Analysis"],
        },

        // Tier 3: /projects/[slug] Deep-Dive Case Study
        caseStudy: {
            executiveSummary: "During my Product Manager Internship at Deotechnological, I focused on identifying product friction, evaluating user behavior, and translating complex business requirements into actionable backlog items. Working alongside development teams, I helped optimize product usability and guide decision-making through structured customer feedback analysis.",

            challenge: "Ensuring newly proposed features aligned with actual user needs and business priorities while eliminating usability bottlenecks before pushing developments to active engineering sprints.",

            keyResponsibilities: [
                {
                    title: "Customer Feedback & Usability Analysis",
                    description: "Analyzed qualitative and quantitative customer feedback to uncover user pain points and evaluate software usability across key workflows.",
                },
                {
                    title: "Translating Business Requirements into Product Improvements",
                    description: "Assisted in breaking down high-level business goals into concise product recommendations and functional user stories for development teams.",
                },
                {
                    title: "Engineering Collaboration & Backlog Grooming",
                    description: "Worked closely with software developers to prioritize feature requests based on effort, impact, and user satisfaction metrics.",
                },
                {
                    title: "Data-Driven Decision Support",
                    description: "Prepared structured product insights and presentation decks to assist leadership in evaluating release direction and UX enhancements.",
                },
            ],

            resultsAndImpact: [
                "Identified critical user experience bottlenecks, leading to actionable feature refinements.",
                "Streamlined developer handoffs by providing clear feature requirements sourced from validated user feedback.",
                "Established structured feedback reporting formats for internal product reviews.",
            ],

            toolsUsed: ["Jira", "Confluence", "Miro", "Figma", "Google Sheets", "PowerPoint"],
        },
    },




    {
        id: "03",
        slug: "rankreform-agency-digital-strategy",
        featured: true, // Included in Home Teaser / Featured section
        title: "Rankreform Digital Strategy & Engagement",
        subtitle: "Audience Growth, Content Optimization & Analytics",
        client: "Rankreform Agency",
        role: "Associate Social Media Manager",
        timeline: "May 2025 – Aug 2025",
        platforms: ["Web", "Social Platforms"],

        // Media assets
        images: {
            primary: "/images/rankreform-hero.webp",
            secondary: "/images/rankreform-analytics.webp",
        },

        // Tier 1: Home Page Teaser Card
        teaser: {
            category: "DIGITAL ENGAGEMENT & ANALYTICS",
            headline: "Executing data-led content strategies and evaluating engagement metrics to strengthen brand visibility and client growth.",
            metrics: [
                { label: "Focus Area", value: "Engagement & Growth" },
                { label: "Key Deliverable", value: "Campaign Analytics" },
            ],
            tags: ["Digital Strategy", "Metrics Analysis", "Brand Engagement", "Client Communications"],
        },

        // Tier 2: /projects Listing Page Metadata
        listing: {
            shortDescription: "Managed digital campaigns, tracked audience interaction metrics, and optimized communication channels to elevate brand presence.",
            badge: "Completed Role",
            deliverables: ["Content Strategy", "Performance Analytics", "Client Relationship Management"],
        },

        // Tier 3: /projects/[slug] Deep-Dive Case Study
        caseStudy: {
            executiveSummary: "At Rankreform Agency, I led digital content strategy and audience engagement initiatives across client accounts. By monitoring engagement performance metrics, I turned raw interaction data into actionable strategy adjustments that expanded brand reach and strengthened client relationships[cite: 1].",

            challenge: "Optimizing multi-channel content performance while establishing clear metrics to measure audience engagement and campaign ROI across diverse client campaigns[cite: 1].",

            keyResponsibilities: [
                {
                    title: "Digital Content Strategy Development",
                    description: "Designed targeted digital campaigns and strategy frameworks tailored to client brand goals and audience behaviors[cite: 1].",
                },
                {
                    title: "Performance Metrics & Analytics Tracking",
                    description: "Monitored and analyzed interaction metrics, conversion trends, and engagement data to evaluate campaign health[cite: 1].",
                },
                {
                    title: "Client Communications & Relationship Management",
                    description: "Handled primary client updates, presented campaign performance summaries, and aligned content deliverables with stakeholder needs[cite: 1].",
                },
                {
                    title: "Brand Awareness & Audience Interaction",
                    description: "Created structured digital content schedules that boosted active community engagement and expanded online visibility[cite: 1].",
                },
            ],

            resultsAndImpact: [
                "Increased client brand visibility and active audience engagement through targeted campaigns[cite: 1].",
                "Streamlined campaign evaluation using data-backed reporting metrics[cite: 1].",
                "Enhanced client satisfaction through transparent performance reporting and communication channels[cite: 1].",
            ],

            toolsUsed: ["Google Analytics", "Data Dashboards", "Google Sheets", "Canva", "Slack"],
        },
    },


    {
        id: "04",
        slug: "tayari-live-media-coordination",
        featured: false,
        title: "Tayari.live Media & Project Coordination",
        subtitle: "Remote Cross-Border Coordination & Digital Media Production",
        client: "Tayari.live (Kenya)",
        role: "Video Editor Intern",
        timeline: "Oct 2024 – Dec 2024",
        platforms: ["Web", "Video Platforms"],

        // Media assets
        images: {
            primary: "/images/tayari-hero.webp",
            secondary: "/images/tayari-media-flow.webp",
        },

        // Tier 1: Home Page Teaser Card
        teaser: {
            category: "REMOTE OPS & MEDIA PRODUCTION",
            headline: "Coordinating cross-border digital media workflows and remote stakeholder alignment across distributed teams.",
            metrics: [
                { label: "Team Structure", value: "Distributed / Remote" },
                { label: "Core Competency", value: "Media Ops & Coordination" },
            ],
            tags: ["Remote Coordination", "Media Production", "Stakeholder Alignment", "Distributed Ops"],
        },

        // Tier 2: /projects Listing Page Metadata
        listing: {
            shortDescription: "Managed digital media workflows and collaborated with international remote stakeholders in a fast-paced environment.",
            badge: "Completed Remote Internship",
            deliverables: ["Digital Media Assets", "Cross-Border Coordination", "Remote Workflow Management"],
        },

        // Tier 3: /projects/[slug] Deep-Dive Case Study
        caseStudy: {
            executiveSummary: "At Tayari.live, a Kenyan digital platform, I managed remote visual media production and digital asset workflows[cite: 1]. Operating across distributed locations required high organizational rigor, clear asynchronous communication, and seamless project coordination[cite: 1].",

            challenge: "Delivering high-volume, polished digital media assets while keeping international stakeholders synchronized across multiple time zones[cite: 1].",

            keyResponsibilities: [
                {
                    title: "Digital Media Asset Production",
                    description: "Edited and produced high-quality digital video content formatted for multi-channel distribution[cite: 1].",
                },
                {
                    title: "Cross-Border Remote Collaboration",
                    description: "Communicated with international remote teams and stakeholders to review deliverables and refine media specs[cite: 1].",
                },
                {
                    title: "Workflow Organization & Asset Management",
                    description: "Maintained clear asset repositories and production timelines to ensure fast turnarounds without compromising media quality[cite: 1].",
                },
            ],

            resultsAndImpact: [
                "Delivered consistent, high-impact digital video assets under tight publishing schedules[cite: 1].",
                "Demonstrated strong remote project execution and asynchronous team coordination[cite: 1].",
            ],

            toolsUsed: ["Video Editing Software", "Slack", "Google Workspace", "Asana", "Zoom"],
        },
    },


    {
        id: "05",
        slug: "servicedey-user-onboarding-activation",
        featured: false,
        title: "Servicedey Customer Onboarding & Activation",
        subtitle: "User Retention, Incomplete Registration Recovery & Lifecycle Engagement",
        client: "Peakpath Innovation",
        role: "Associate Product Manager",
        timeline: "Jun 2025 – Present",
        platforms: ["iOS", "Android", "Web Admin"],

        // Media assets
        images: {
            primary: "/images/onboarding-hero.webp",
            secondary: "/images/onboarding-funnel.webp",
        },

        // Tier 1: Home Page Teaser Card
        teaser: {
            category: "USER RETENTION & RETARGETING",
            headline: "Optimizing the user onboarding lifecycle by re-engaging drop-off users and streamlining registration completion paths.",
            metrics: [
                { label: "Focus Area", value: "Activation Funnel" },
                { label: "Target Metric", value: "Conversion Rate" },
            ],
            tags: ["User Onboarding", "Activation Strategy", "Customer Engagement", "Funnel QA"],
        },

        // Tier 2: /projects Listing Page Metadata
        listing: {
            shortDescription: "Designed targeted re-engagement strategies to convert partial user signups into active, fully registered platform accounts.",
            badge: "Ongoing Initiative",
            deliverables: ["Drop-off Analysis", "Activation Workflows", "Customer Onboarding Ops"],
        },

        // Tier 3: /projects/[slug] Deep-Dive Case Study
        caseStudy: {
            executiveSummary: "Driving user growth requires minimizing drop-off at initial signup[cite: 1]. At Peakpath Innovation, I led targeted customer onboarding initiatives designed to engage users who left their profile setup or registration incomplete on Servicedey, converting dormant signups into active platform participants[cite: 1].",

            challenge: "Identifying key drop-off stages in the registration pipeline and establishing effective, empathetic outreach workflows to guide users through verification and profile completion[cite: 1].",

            keyResponsibilities: [
                {
                    title: "Registration Funnel Analysis",
                    description: "Monitored user signup logs to isolate steps where users abandoned registration before completing their profile[cite: 1].",
                },
                {
                    title: "Targeted Outreach & Re-Engagement Strategy",
                    description: "Executed proactive customer engagement workflows to reach users with uncompleted signups and guide them through registration hurdles[cite: 1].",
                },
                {
                    title: "Onboarding Flow Feedback Loop",
                    description: "Gathered direct feedback from onboarded users to inform engineering and UX design teams on necessary friction reductions in the sign-up process[cite: 1].",
                },
            ],

            resultsAndImpact: [
                "Increased successful profile completions and overall active user conversion on the Servicedey platform[cite: 1].",
                "Reduced onboarding churn by addressing user pain points directly during signup[cite: 1].",
                "Established standard operational practices for ongoing customer re-engagement[cite: 1].",
            ],

            toolsUsed: ["Jira", "Google Analytics", "Google Sheets", "Customer Support Tools", "Slack"],
        },
    },






];
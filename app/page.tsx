import { SiteHeader } from "@/components/site-header";
import { HeroBanner } from "@/components/hero-banner";
import {
  ServiceSplitSection,
  type ServiceSplitSectionProps,
} from "@/components/service-split-section";
import { FeaturedProgramSection } from "@/components/featured-program-section";
import { TransformationHubSection } from "@/components/transformation-hub-section";
import { ConsultantTrainingSection } from "@/components/consultant-training-section";
import { CalloutBanner } from "@/components/callout-banner";
import { TestimonialsSection } from "@/components/testimonials-section";
import { SiteFooter } from "@/components/site-footer";

const primaryNav = [
  "About",
  "What We Do",
  "Jobs",
  "Projects",
  "TG Academy",
  "Strategic Partnership",
  "Pricing",
  "Book a Consultation",
];

const services: ServiceSplitSectionProps[] = [
  {
    title: "Learning Management System",
    description:
      "Our learning management system helps organisations centralise learning delivery, track progress, and scale development experiences across teams. It gives decision-makers visibility, gives learners structure, and turns training into something measurable instead of vague corporate theatre.",
    bullets: [
      "Centralised course delivery and learner records",
      "Role-based pathways for onboarding and compliance",
      "Instructor-led, virtual, and self-paced support",
      "Practical analytics for progress, completion, and impact",
    ],
    image: "/tobams/lms-team.png",
    imageAlt:
      "TOBAMS team members collaborating during a learning management system discussion",
    ctaLabel: "Learn More",
    imageLeft: true,
    accent: "tinted",
    imageShape: "circle",
  },
  {
    title: "Corporate Trainings",
    description:
      "We design and facilitate practical corporate training programmes that sharpen performance where it actually matters: communication, leadership, service delivery, stakeholder confidence, and execution. The work is tailored, direct, and built for real organisations rather than generic workshop fluff.",
    bullets: [
      "Leadership and management capability building",
      "Communication and presentation training",
      "Team effectiveness and workplace performance",
      "Client service and stakeholder management sessions",
    ],
    image: "/tobams/corporate-training.png",
    imageAlt:
      "Corporate training session with a presenter and team in a boardroom",
    ctaLabel: "Book a Consultation",
  },
  {
    title: "Personalised Individual Training",
    description:
      "For professionals who need focused support, our personalised individual training creates a tighter, more relevant learning experience. It is built around specific growth goals, not generic content dumps, so the result is sharper confidence, stronger communication, and visible development.",
    bullets: [
      "One-on-one capability development",
      "Targeted communication and executive presence support",
      "Career growth and performance coaching",
      "Action plans tailored to the learner’s actual goals",
    ],
    image: "/tobams/individual-training.png",
    imageAlt:
      "Individual training session with facilitator and participant engaged in discussion",
    ctaLabel: "Read More",
    imageLeft: true,
  },
  {
    title: "Capacity Development",
    description:
      "We help organisations strengthen systems, skills, and strategic discipline for long-term results. Instead of stopping at theory, we align training with institutional growth, transformation goals, and operational follow-through so capability improvement sticks.",
    bullets: [
      "Institutional and programme capability strengthening",
      "Strategic planning and alignment support",
      "Change readiness and resilience building",
      "Performance improvement across teams and functions",
    ],
    image: "/tobams/capacity-development.png",
    imageAlt:
      "Capacity development workshop with participants collaborating around a table",
    ctaLabel: "Learn More",
  },
];

export default function Home() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader navItems={primaryNav} />
      <main>
        <HeroBanner />
        {services.map((service) => (
          <ServiceSplitSection key={service.title} {...service} />
        ))}
        <FeaturedProgramSection />
        <TransformationHubSection />
        <ConsultantTrainingSection />
        <CalloutBanner />
        <TestimonialsSection />
      </main>
      <SiteFooter />
    </div>
  );
}

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
  "Home",
  "About Us",
  "Services",
  "Projects",
  "T & D Area",
  "Contact",
];

const services: ServiceSplitSectionProps[] = [
  {
    title: "Learning Management System",
    description:
      "Our learning management system helps organisations centralise learning delivery, track progress, and scale development experiences across departments. From onboarding to leadership growth, it gives teams a structured way to build capability without sacrificing visibility.",
    bullets: [
      "Custom onboarding and compliance paths",
      "Instructor-led and self-paced course support",
      "Progress tracking, reporting, and learner analytics",
      "Branded portals for enterprise learning experiences",
    ],
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
    imageAlt:
      "Two business professionals smiling during a corporate training conversation",
    ctaLabel: "Learn More",
    imageLeft: true,
    accent: "tinted",
    imageShape: "circle",
  },
  {
    title: "Corporate Trainings",
    description:
      "We design and facilitate practical training sessions that strengthen workplace performance. Every engagement is tailored to the context of the organisation, helping teams build confidence, clarity, and measurable capability where it matters most.",
    bullets: [
      "Leadership development programmes",
      "Communication and presentation mastery",
      "Sales, service, and stakeholder management",
      "Team effectiveness and behavioural capability",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    imageAlt:
      "Corporate trainer presenting to professionals in a boardroom meeting",
    ctaLabel: "Book a Consultation",
  },
  {
    title: "Personalised Individual Training",
    description:
      "For professionals who need focused development, our personalised training offers one-on-one or small-group support built around specific goals. The result is a highly relevant learning experience with direct, actionable impact.",
    bullets: [
      "Executive presence and confidence building",
      "Business writing and communication refinement",
      "Career growth and personal development coaching",
      "Tailored capability mapping and action planning",
    ],
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    imageAlt:
      "Hands-on workshop session with participants seated around a training table",
    ctaLabel: "Read More",
    imageLeft: true,
  },
  {
    title: "Capacity Development",
    description:
      "We help organisations strengthen the systems, skills, and strategic mindset needed for long-term performance. Our approach goes beyond short-term workshops by aligning training with growth, transformation, and sustainable execution.",
    bullets: [
      "Institutional capability strengthening",
      "Programme and team performance improvement",
      "Leadership alignment and strategic planning",
      "Change readiness and operational resilience",
    ],
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
    imageAlt:
      "Facilitator presenting ideas to a seated group during a capacity development workshop",
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

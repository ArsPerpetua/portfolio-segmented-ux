import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import ProofBarSection from "./components/sections/ProofBarSection";
import ValuePropositionSection from "./components/sections/ValuePropositionSection";
import TechStackSection from "./components/sections/TechStackSection";
import ArchitectureSection from "./components/sections/ArchitectureSection";
import FeaturedProjectsSection from "./components/sections/FeaturedProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import SiteShell from "./components/shared/SiteShell";
import SegmentSwitcher from "./components/shared/SegmentSwitcher";
import { useProfile } from "./hooks/useProfile";
import { useSegments } from "./hooks/useSegments";
import { useProjects } from "./hooks/useProjects";
import { trackSegmentClick } from "./services/portfolioApi";
import type { PortfolioSegment } from "./types/portfolio";
import { useSkills } from "./hooks/useSkills";
import CredentialsSection from "./components/sections/CredentialsSection";
import { useCredentials } from "./hooks/useCredentials";
import ExperienceSection from "./components/sections/ExperienceSection";
import { useExperiences } from "./hooks/useExperiences";
import AllProjectsSection from "./components/sections/AllProjectsSection";
import { useAllProjects } from "./hooks/useAllProjects";
import ApiStatusBanner from "./components/shared/ApiStatusBanner";
import ScrollProgress from "./components/shared/ScrollProgress";
import TechMarqueeSection from "./components/sections/TechMarqueeSection";
import RevealOnScroll from "./components/shared/RevealOnScroll";
import AboutSection from "./components/sections/AboutSection";


export default function App() {
  const [activeSegment, setActiveSegment] =
    useState<PortfolioSegment>("enterprise");

  const {
    profile,
    isLoading: isProfileLoading,
    error: profileError,
  } = useProfile();

  const {
    segments,
    isLoading: isSegmentsLoading,
    error: segmentsError,
  } = useSegments();

  const {
    projects,
    isLoading: isProjectsLoading,
    error: projectsError,
  } = useProjects(activeSegment);

  const {
    skills,
    isLoading: isSkillsLoading,
    error: skillsError,
  } = useSkills();

  const {
    education,
    achievements,
    isLoading: isCredentialsLoading,
    error: credentialsError,
  } = useCredentials();

  const {
    experiences,
    isLoading: isExperiencesLoading,
    error: experiencesError,
  } = useExperiences();

  const {
    projects: allProjects,
    isLoading: isAllProjectsLoading,
    error: allProjectsError,
  } = useAllProjects();

  function handleSegmentChange(
    segment: PortfolioSegment,
    source: "hero_segment_control" | "floating_segment_switcher",
  ) {
    setActiveSegment(segment);

    trackSegmentClick(segment, source).catch((error) => {
      console.error("Failed to track segment click:", error);
    });
  }

  return (
    <SiteShell>
      <ScrollProgress />

      <ApiStatusBanner
        errors={[
          profileError,
          segmentsError,
          projectsError,
          skillsError,
          credentialsError,
          experiencesError,
          allProjectsError,
        ]}
      />

      <Navbar activeSegment={activeSegment} profile={profile} />

      <HeroSection
        activeSegment={activeSegment}
        onSegmentChange={handleSegmentChange}
        profile={profile}
        segments={segments}
        isProfileLoading={isProfileLoading}
        isSegmentsLoading={isSegmentsLoading}
      />

      <ProofBarSection
        profile={profile}
        projects={allProjects}
        achievements={achievements}
      />

      <TechMarqueeSection />

      <RevealOnScroll>
        <AboutSection profile={profile} />
      </RevealOnScroll>

      <RevealOnScroll delay="short">
        <CredentialsSection
          education={education}
          achievements={achievements}
          isLoading={isCredentialsLoading}
        />
      </RevealOnScroll>

      <RevealOnScroll delay="short">
        <ExperienceSection
          experiences={experiences}
          isLoading={isExperiencesLoading}
        />
      </RevealOnScroll>

      <RevealOnScroll>
        <ValuePropositionSection activeSegment={activeSegment} />
      </RevealOnScroll>

      <RevealOnScroll delay="short">
        <TechStackSection
          activeSegment={activeSegment}
          skills={skills}
          isLoading={isSkillsLoading}
        />
      </RevealOnScroll>

      <RevealOnScroll>
        <ArchitectureSection />
      </RevealOnScroll>

      <RevealOnScroll delay="short">
        <FeaturedProjectsSection
          activeSegment={activeSegment}
          projects={projects}
          isLoading={isProjectsLoading}
        />
      </RevealOnScroll>

      <RevealOnScroll>
        <AllProjectsSection
          projects={allProjects}
          isLoading={isAllProjectsLoading}
        />
      </RevealOnScroll>

      <RevealOnScroll delay="short">
        <ContactSection activeSegment={activeSegment} profile={profile} />
      </RevealOnScroll>

      <SegmentSwitcher
        activeSegment={activeSegment}
        onSegmentChange={handleSegmentChange}
      />
    </SiteShell>
  );
}
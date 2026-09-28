import { GlassCard } from "@/components/GlassCard/GlassCard";
import { HowItWorksCard } from "@/components/HowItWorksCard/HowItWorksCard";
import { ProfileCard } from "@/components/ProfileCard/ProfileCard";
import { QuoteCard } from "@/components/QuoteCard/QuoteCard";
import { StatCard } from "@/components/StatCard/StatCard";
import { GITHUB_USERNAME, getGithubProfile } from "@/lib/github";

export default async function Home() {
  const profile = await getGithubProfile(GITHUB_USERNAME);

  return (
    <>
      <GlassCard>
        <HowItWorksCard />
      </GlassCard>

      <GlassCard>
        <ProfileCard profile={profile} />
      </GlassCard>

      <GlassCard>
        <StatCard />
      </GlassCard>

      <GlassCard>
        <QuoteCard />
      </GlassCard>
    </>
  );
}

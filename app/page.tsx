import { AboutCard } from "@/components/AboutCard/AboutCard";
import { GlassCard } from "@/components/GlassCard/GlassCard";
import { ProfileCard } from "@/components/ProfileCard/ProfileCard";
import { GITHUB_USERNAME, getGithubProfile } from "@/lib/github";

export default async function Home() {
  const profile = await getGithubProfile(GITHUB_USERNAME);

  return (
    <>
      <GlassCard>
        <ProfileCard profile={profile} />
      </GlassCard>

      <GlassCard>
        <AboutCard profile={profile} />
      </GlassCard>
    </>
  );
}

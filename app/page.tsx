import { GlassCard } from "@/components/GlassCard/GlassCard";
import { ProfileCard } from "@/components/ProfileCard/ProfileCard";
import { getGithubProfile } from "@/lib/github";

const USERNAME = "RNDev666";

export default async function Home() {
  const profile = await getGithubProfile(USERNAME);

  return (
    <GlassCard>
      <ProfileCard profile={profile} />
    </GlassCard>
  );
}

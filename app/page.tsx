import { GlassCard } from "@/components/GlassCard/GlassCard";
import { ProfileCard, type GithubProfile } from "@/components/ProfileCard/ProfileCard";

const profile: GithubProfile = {
  name: "Abdughafur",
  handle: "Abdughafur",
  avatarUrl: "https://avatars.githubusercontent.com/u/215494004?v=4",
  profileUrl: "https://github.com/Abdughafur/",
  repos: 10,
  followers: 2,
};

export default function Home() {
  return (
    <GlassCard>
      <ProfileCard profile={profile} />
    </GlassCard>
  );
}

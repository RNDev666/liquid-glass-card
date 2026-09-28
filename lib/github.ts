/** The profile the demo card displays. */
export const GITHUB_USERNAME = "RNDev666";

export type GithubProfile = {
  name: string;
  handle: string;
  avatarUrl: string;
  profileUrl: string;
  repos: number;
  followers: number;
  bio: string | null;
  location: string | null;
  joinedAt: string;
};

/** Subset of https://docs.github.com/rest/users/users#get-a-user we rely on. */
type GithubUserResponse = {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  bio: string | null;
  location: string | null;
  created_at: string;
};

/**
 * Fetches a public GitHub profile. The site is a static export, so this runs
 * once per build and the numbers are as fresh as the last deploy.
 */
export async function getGithubProfile(username: string): Promise<GithubProfile> {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: { Accept: "application/vnd.github+json" },
  });

  if (!response.ok) {
    throw new Error(
      `GitHub profile "${username}" could not be loaded (${response.status} ${response.statusText})`,
    );
  }

  const user: GithubUserResponse = await response.json();

  return {
    name: user.name ?? user.login,
    handle: user.login,
    avatarUrl: user.avatar_url,
    profileUrl: user.html_url,
    repos: user.public_repos,
    followers: user.followers,
    bio: user.bio,
    location: user.location,
    joinedAt: user.created_at,
  };
}

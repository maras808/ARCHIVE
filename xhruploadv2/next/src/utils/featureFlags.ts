type FeatureFlagsType = {
  redirectFromRoot: boolean;
};

export const featureFlags: FeatureFlagsType = {
  redirectFromRoot: false,
} as const;

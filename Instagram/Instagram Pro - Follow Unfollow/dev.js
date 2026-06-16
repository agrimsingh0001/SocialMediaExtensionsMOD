// Private/owned development-only settings for local unpacked builds.
// This file is loaded before the app bundle. Set devMode to false to disable.
// dailyLimit values:
//   null/undefined = use the extension's normal free/reviewed limit
//   0              = block immediately
//   positive number= override daily follow/unfollow limit
//   -1             = unlimited for local development testing
window.INSTAGRAM_PRO_DEV_CONFIG = {
  // Build gate for this private dev build. Keep false in production copies.
  BUILD_DEV_LIMIT_OVERRIDE_ENABLED: true,
  // Runtime switch you can toggle locally.
  devMode: true,
  // Default private-dev behavior: do not stop at the normal 6/day free limit.
  dailyLimit: -1
};

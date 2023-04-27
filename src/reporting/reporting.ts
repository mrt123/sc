const IGNORED_USERS = ["WhyUKillMe", "tester"];

export const reportUserEvent = (
  userName: string | null,
  eventName: string,
  eventOptions: {}
) => {
  if (!IGNORED_USERS.includes(userName as string)) {
    window.gtag("event", eventName, eventOptions);
  }
};

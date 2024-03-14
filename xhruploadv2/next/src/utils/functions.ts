export const wait = async (time?: number) => {
  await new Promise((resolve) => setTimeout(resolve, time ? time : 2500));
};

export async function apiDelay(milliseconds: number) {
  return new Promise(resolver => setTimeout(resolver, milliseconds));
}
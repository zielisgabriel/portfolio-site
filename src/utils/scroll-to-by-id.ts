

export function scrollToById(id: string, action?: () => void) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
  action;
}
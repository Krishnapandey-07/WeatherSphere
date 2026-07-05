export function getBackgroundClass(condition = "") {
  const text = condition.toLowerCase();

  if (text.includes("rain")) return "rainy";

  if (text.includes("snow")) return "snowy";

  if (text.includes("cloud")) return "cloudy";

  if (
    text.includes("sun") ||
    text.includes("clear")
  )
    return "sunny";

  return "default-bg";
}
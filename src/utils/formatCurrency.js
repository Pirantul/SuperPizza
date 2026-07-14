export function formatCurrency(value, { prefix = "€", suffix = "" } = {}) {
  const amount = Number(value).toFixed(2);
  return `${prefix}${amount}${suffix}`;
}

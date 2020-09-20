/**
 * Format price
 *
 * @param {number} price
 * @param {string} currency
 * @return {*}  {string}
 */
function formatPrice(price: number, currency: string): string {
  // @ts-ignore
  return new Intl.NumberFormat('es', { currency, style: 'currency' }).format(
    price,
  );
}

export { formatPrice };

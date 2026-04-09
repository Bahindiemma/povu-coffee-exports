/**
 * Strip HTML tags and trim whitespace from user input.
 */
export function sanitize(input: string): string {
  return input
    .replace(/<[^>]*>/g, '')    // Remove HTML tags
    .replace(/&lt;/g, '<')      // Decode common entities for re-stripping
    .replace(/&gt;/g, '>')
    .replace(/<[^>]*>/g, '')    // Re-strip after decode
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .trim();
}

/**
 * Sanitize all string values in an object (shallow).
 */
export function sanitizeObject<T extends Record<string, unknown>>(obj: T): T {
  const result = { ...obj };
  for (const key in result) {
    if (typeof result[key] === 'string') {
      (result as Record<string, unknown>)[key] = sanitize(result[key] as string);
    }
  }
  return result;
}

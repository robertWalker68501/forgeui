export function getRichTextPlainText(
  html: string,
): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function hasRichTextImage(
  html: string,
): boolean {
  return /<img\b[^>]*>/i.test(html);
}

export function hasRichTextContent(
  html: string,
): boolean {
  return (
    getRichTextPlainText(html).length > 0 ||
    hasRichTextImage(html)
  );
}

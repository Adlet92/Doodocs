import sanitizeHtml from 'sanitize-html';

export function formatFileName(fileName: string): string {
  const fileNameWithoutExtension = fileName.slice(0, fileName.lastIndexOf('.'));
  const capitalizedFileName = fileNameWithoutExtension.charAt(0).toUpperCase() + fileNameWithoutExtension.slice(1);
  return capitalizedFileName;
}
export const sanitizeHtmlContent = (htmlContent: string) => {
  return sanitizeHtml(htmlContent, {
    allowedTags: sanitizeHtml.defaults.allowedTags,
    allowedAttributes: {},
    textFilter: function (text) {
      return text;
    },
  });
};


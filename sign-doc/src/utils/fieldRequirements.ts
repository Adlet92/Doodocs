export function ff(fileName: string): string {
  const fileNameWithoutExtension = fileName.slice(0, fileName.lastIndexOf('.'));
  const capitalizedFileName = fileNameWithoutExtension.charAt(0).toUpperCase() + fileNameWithoutExtension.slice(1);
  return capitalizedFileName;
}

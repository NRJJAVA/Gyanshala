export const formatId = (text: string): string => {
  return text.toLowerCase().replace(/\s+/g, '-');
};
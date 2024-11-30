export default function splitfunction(input: string): string[] {
  const charectors: string[] = [];
  const regex = /[\s\S]/gu;

  let match;

  while ((match = regex.exec(input)) !== null) {
    charectors.push(match[0])
  }
  return charectors;
}
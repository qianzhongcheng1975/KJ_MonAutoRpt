import { MAX_SUMMARY_CHARS } from '../shared/constants';

export function trimToMaxSummary(text: string): string {
  return text.slice(0, MAX_SUMMARY_CHARS);
}

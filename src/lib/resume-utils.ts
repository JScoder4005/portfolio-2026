import { resumeExperience, resumeEducation } from "./resume-data";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export function formatMonthYear(date: Date): string {
  return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

export function formatDateRange(start: Date, end: Date | null): string {
  return `${formatMonthYear(start)} - ${end ? formatMonthYear(end) : "Present"}`;
}

/** Total experience across all roles, in whole years (fractional dropped), counting overlapping ranges once. */
export function getTotalExperienceYears(now: Date = new Date()): number {
  const ranges = resumeExperience.map((e) => ({
    start: e.startDate.getTime(),
    end: (e.endDate ?? now).getTime(),
  }));
  ranges.sort((a, b) => a.start - b.start);

  let totalMs = 0;
  let cursorStart = -Infinity;
  let cursorEnd = -Infinity;
  for (const r of ranges) {
    if (r.start > cursorEnd) {
      if (cursorEnd > -Infinity) totalMs += cursorEnd - cursorStart;
      cursorStart = r.start;
      cursorEnd = r.end;
    } else {
      cursorEnd = Math.max(cursorEnd, r.end);
    }
  }
  if (cursorEnd > -Infinity) totalMs += cursorEnd - cursorStart;

  const years = totalMs / (1000 * 60 * 60 * 24 * 365.25);
  return Math.round(years * 10) / 10;
}

export function getTotalExperienceLabel(now: Date = new Date()): string {
  return `${getTotalExperienceYears(now)}+`;
}

export function getProjectCount(): number {
  return resumeExperience.reduce((sum, e) => sum + e.projects.length, 0);
}

export function getEducationDateRange(edu: (typeof resumeEducation)[number]): string {
  return `${formatMonthYear(edu.startDate)} - ${formatMonthYear(edu.endDate)}`;
}

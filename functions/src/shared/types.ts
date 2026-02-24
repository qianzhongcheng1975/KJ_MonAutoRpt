export type ReportStatus = 'draft' | 'generated' | 'sent' | 'failed';

export type ModuleKey =
  | 'work_performance'
  | 'highlights'
  | 'problem_analysis'
  | 'future_plan';

export interface SummaryField {
  moduleKey: ModuleKey;
  fieldKey: string;
  fieldLabel: string;
}

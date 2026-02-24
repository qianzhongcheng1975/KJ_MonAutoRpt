import type { SummaryField } from './types';

export const SUMMARY_FIELD_MAP: SummaryField[] = [
  { moduleKey: 'work_performance', fieldKey: 'achievements', fieldLabel: '本月业绩' },
  { moduleKey: 'work_performance', fieldKey: 'completed_work', fieldLabel: '完成工作' },
  { moduleKey: 'work_performance', fieldKey: 'current_progress', fieldLabel: '任务进展' },
  { moduleKey: 'work_performance', fieldKey: 'plan_execution', fieldLabel: '实施状况' },
  { moduleKey: 'highlights', fieldKey: 'optimized_processes', fieldLabel: '流程优化' },
  { moduleKey: 'highlights', fieldKey: 'expanded_channels', fieldLabel: '渠道拓展' },
  { moduleKey: 'highlights', fieldKey: 'cost_savings', fieldLabel: '成本控制' },
  { moduleKey: 'highlights', fieldKey: 'efficiency_improvements', fieldLabel: '效率提升' },
  { moduleKey: 'problem_analysis', fieldKey: 'challenges', fieldLabel: '面临挑战' },
  { moduleKey: 'problem_analysis', fieldKey: 'root_causes', fieldLabel: '问题分析' },
  { moduleKey: 'problem_analysis', fieldKey: 'improvement_suggestions', fieldLabel: '改进建议' },
  { moduleKey: 'future_plan', fieldKey: 'next_steps', fieldLabel: '下一步安排' },
  { moduleKey: 'future_plan', fieldKey: 'required_resources', fieldLabel: '所需资源' },
  { moduleKey: 'future_plan', fieldKey: 'evaluation_metrics', fieldLabel: '指标评价' },
];

export const MAX_SUMMARY_CHARS = 100;

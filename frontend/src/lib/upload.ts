export const materialCategoryOptions = ['学习', '销售', '运营', '产品', '研发', '战略'] as const;
export const contentTypeOptions = ['聊天', '图片', '会议', '视频'] as const;
export const moduleKeyOptions = ['work_performance', 'highlights', 'problem_analysis', 'future_plan'] as const;

export interface UploadFormState {
  reportMonth: string;
  materialCategory: string;
  contentType: string;
  moduleKey: string;
  fileName: string;
}

export interface UploadValidationResult {
  isValid: boolean;
  errors: string[];
}

export function validateUploadForm(form: UploadFormState): UploadValidationResult {
  const errors: string[] = [];

  if (!form.reportMonth) errors.push('请选择报告月份');
  if (!form.materialCategory) errors.push('请选择资料分类');
  if (!form.contentType) errors.push('请选择内容类型');
  if (!form.moduleKey) errors.push('请选择关联模块');
  if (!form.fileName) errors.push('请选择上传文件');

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export function createMockUploadPayload(form: UploadFormState) {
  return {
    uid: 'mock-user',
    reportMonth: form.reportMonth,
    fileUrl: `/uploads/mock-user/${form.reportMonth}/mock-upload/${form.fileName}`,
    fileType: 'doc',
    tags: {
      materialCategory: form.materialCategory,
      contentType: form.contentType,
      moduleKey: form.moduleKey,
    },
    createdAt: new Date().toISOString(),
  };
}

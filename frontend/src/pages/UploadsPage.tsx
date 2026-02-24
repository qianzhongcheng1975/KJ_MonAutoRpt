import { useMemo, useState } from 'react';
import {
  contentTypeOptions,
  createMockUploadPayload,
  materialCategoryOptions,
  moduleKeyOptions,
  validateUploadForm,
} from '../lib/upload';

export function UploadsPage() {
  const currentMonth = useMemo(() => new Date().toISOString().slice(0, 7), []);
  const [reportMonth, setReportMonth] = useState(currentMonth);
  const [materialCategory, setMaterialCategory] = useState('');
  const [contentType, setContentType] = useState('');
  const [moduleKey, setModuleKey] = useState('');
  const [fileName, setFileName] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [submittedPayload, setSubmittedPayload] = useState<object | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validation = validateUploadForm({
      reportMonth,
      materialCategory,
      contentType,
      moduleKey,
      fileName,
    });

    if (!validation.isValid) {
      setErrors(validation.errors);
      setSubmittedPayload(null);
      return;
    }

    setErrors([]);
    setSubmittedPayload(
      createMockUploadPayload({
        reportMonth,
        materialCategory,
        contentType,
        moduleKey,
        fileName,
      }),
    );
  };

  return (
    <section>
      <h2>上传素材</h2>
      <p>必填：报告月份、资料分类、内容类型、关联模块、上传文件。</p>

      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12, maxWidth: 520 }}>
        <label>
          报告月份
          <input type="month" value={reportMonth} onChange={(e) => setReportMonth(e.target.value)} />
        </label>

        <label>
          资料分类
          <select value={materialCategory} onChange={(e) => setMaterialCategory(e.target.value)}>
            <option value="">请选择</option>
            {materialCategoryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label>
          内容类型
          <select value={contentType} onChange={(e) => setContentType(e.target.value)}>
            <option value="">请选择</option>
            {contentTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label>
          关联模块
          <select value={moduleKey} onChange={(e) => setModuleKey(e.target.value)}>
            <option value="">请选择</option>
            {moduleKeyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label>
          上传文件
          <input
            type="file"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? '')}
            aria-label="上传文件"
          />
        </label>

        <button type="submit">校验并生成上传元数据（Mock）</button>
      </form>

      {errors.length > 0 && (
        <div style={{ marginTop: 16, color: '#b00020' }}>
          <strong>校验失败：</strong>
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {submittedPayload && (
        <div style={{ marginTop: 16 }}>
          <strong>模拟 uploads 文档：</strong>
          <pre>{JSON.stringify(submittedPayload, null, 2)}</pre>
        </div>
      )}
    </section>
  );
}

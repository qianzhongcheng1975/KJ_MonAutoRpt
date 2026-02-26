import { useParams } from 'react-router-dom';

export function ReportPage() {
  const { month } = useParams();

  return (
    <section>
      <h2>报告详情</h2>
      <p>当前月份：{month}</p>
      <p>TODO: 报告预览、编辑、发送状态。</p>
    </section>
  );
}

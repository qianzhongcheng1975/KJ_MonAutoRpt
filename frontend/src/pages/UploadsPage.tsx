const requiredTags = ['资料分类', '内容类型', '关联模块'];

export function UploadsPage() {
  return (
    <section>
      <h2>上传素材</h2>
      <p>必须填写标签：{requiredTags.join('、')}</p>
      <p>TODO: 接入 Storage 上传 + uploads 文档创建。</p>
    </section>
  );
}

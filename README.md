# KJ_MonAutoRpt

月报自动化系统（React + Firebase）项目骨架。

## 目录
- `frontend/`: React + TypeScript 前端
- `functions/`: Firebase Cloud Functions（TypeScript）
- `docs/`: 需求、计划与技术草案

## 快速开始

### 1) 环境变量
复制 `.env.example` 填充 Firebase 与邮件服务配置。

### 2) 前端
```bash
cd frontend
npm install
npm run dev
```

前端生产构建：
```bash
cd frontend
npm run build
```

### 3) Functions
```bash
cd functions
npm install
npm run build
```

## 部署（Firebase Hosting + Functions）

```bash
# 先构建前端
cd frontend && npm install && npm run build

# 回到仓库根目录部署
cd ..
firebase deploy
```

> Hosting 已配置 SPA rewrite（任意路由回落到 `index.html`），`/uploads` 等前端路由刷新不会再出现 404。

## 当前状态
- 已完成 Sprint 1 的工程骨架：前端路由页面、Functions 触发器占位、规则文件与常量映射。
- 下一步建议：落地上传页与 `onUploadCreated` 闭环。

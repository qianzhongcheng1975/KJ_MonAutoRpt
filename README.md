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

## 常见问题排查

### 本机没有 `frontend` 目录

请按下面顺序检查：

1. **确认你在仓库根目录**
   ```bash
   pwd
   ls
   ```
   正常应看到：`frontend`、`functions`、`docs`。

2. **确认当前分支和最新提交**
   ```bash
   git branch --show-current
   git pull
   git log --oneline -n 5
   ```

3. **如果是新机器，重新克隆后再进入目录**
   ```bash
   git clone <你的仓库地址> KJ_MonAutoRpt
   cd KJ_MonAutoRpt
   ls
   ```

4. **如果你只下载了部分文件（ZIP/子目录）**
   请改用完整 `git clone`，确保仓库根目录完整拉取。

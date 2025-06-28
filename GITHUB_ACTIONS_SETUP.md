# GitHub Actions npm Publishing Setup

Theo hướng dẫn chính thức từ [GitHub Docs](https://docs.github.com/en/actions/how-tos/use-cases-and-examples/publishing-packages/publishing-nodejs-packages).

## ✅ Đã hoàn thành

1. **Workflow được tạo**: `npm-publish-standalone.yml`
2. **Package config đúng**: Scoped package `@akitectio/aki-ui`
3. **Build thành công**: Local test passed
4. **Dry-run thành công**: Package ready to publish

## 🚀 Cần thực hiện

### Bước 1: Tạo NPM Token

1. Truy cập [npmjs.com tokens](https://www.npmjs.com/settings/tokens)
2. Click **"Generate New Token"**
3. Chọn **"Classic Token"**
4. Chọn **"Automation"** (cho phép publish từ CI/CD)
5. Copy token

### Bước 2: Thêm Secret vào GitHub

1. Truy cập [GitHub Repository Secrets](https://github.com/akitectio/aki-ui/settings/secrets/actions)
2. Click **"New repository secret"**
3. Name: `NPM_TOKEN`
4. Secret: paste token từ bước 1
5. Click **"Add secret"**

### Bước 3: Test Workflow

#### Cách 1: Manual Trigger

```bash
# Mở GitHub Actions
open https://github.com/akitectio/aki-ui/actions

# Chọn workflow "Publish Package to npm"
# Click "Run workflow"
# Chọn version increment (patch/minor/major)
# Click "Run workflow"
```

#### Cách 2: Release Trigger

```bash
# Tạo release mới trên GitHub
open https://github.com/akitectio/aki-ui/releases/new

# Workflow sẽ tự động chạy khi publish release
```

## 📋 Workflow Features

✅ **GitHub Docs Compliant**: Sử dụng `setup-node` với `registry-url`  
✅ **Provenance**: Sử dụng `--provenance` flag cho security  
✅ **Scoped Package**: Tự động `--access public` cho `@akitectio/aki-ui`  
✅ **Version Management**: Auto increment với manual dispatch  
✅ **README Swap**: Sử dụng `NPM_README.md` cho npm

## 🔧 Workflow Triggers

- **Release**: Tự động publish khi create release
- **Manual**: Dispatch với version increment options
- **No auto-push**: Chỉ trigger khi cần thiết

## 📝 Commands Workflow Sử Dụng

```yaml
# Setup Node với npm registry
- uses: actions/setup-node@v4
  with:
    node-version: "20.x"
    registry-url: "https://registry.npmjs.org"

# Publish theo GitHub Docs
- run: npm publish --provenance --access public
  env:
    NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## ⚡ Quick Start

```bash
# 1. Thêm NPM_TOKEN secret vào GitHub
# 2. Commit và push code
git add .
git commit -m "feat: add GitHub Docs compliant npm publish workflow"
git push

# 3. Test workflow
# Vào GitHub Actions > "Publish Package to npm" > "Run workflow"
```

## 🛡️ Security

- ✅ Sử dụng `--provenance` cho supply chain security
- ✅ `NODE_AUTH_TOKEN` chỉ expose trong publish step
- ✅ `permissions: contents: read, id-token: write`
- ✅ Scoped package với `--access public`

## 📊 Expected Results

Sau khi setup đúng:

- ✅ Package `@akitectio/aki-ui` publish lên npm
- ✅ Provenance statement được tạo
- ✅ Version tags được tạo (nếu manual dispatch)
- ✅ No authentication errors

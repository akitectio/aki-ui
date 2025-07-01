# GitHub Pages Deployment với Google Analytics

## Thiết lập GitHub Secrets

Để GitHub Actions có thể deploy website với Google Analytics, bạn cần thiết lập secrets sau:

### 1. **Truy cập GitHub Repository Settings**

```
Repository → Settings → Secrets and variables → Actions → New repository secret
```

### 2. **Thêm Google Analytics Secret**

```
Name: NEXT_PUBLIC_GA_ID
Value: G-SCVKWYC8YX
```

### 3. **Kích hoạt GitHub Pages**

```
Repository → Settings → Pages
Source: GitHub Actions
```

## Workflow hiện tại

File `.github/workflows/deploy-website.yml` đã được cập nhật để:

✅ Sử dụng Google Analytics tracking ID từ GitHub Secrets  
✅ Set production environment variables  
✅ Deploy lên custom domain `aki-ui.akitect.io`  
✅ Copy LLMs files và tạo CNAME file

## Test deployment

1. **Push code lên main branch:**

   ```bash
   git add .
   git commit -m "Add Google Analytics to GitHub Pages"
   git push origin main
   ```

2. **Hoặc trigger manual:**

   ```
   Repository → Actions → Deploy Website to GitHub Pages → Run workflow
   ```

3. **Kiểm tra deployment:**
   - Actions tab để xem build logs
   - https://aki-ui.akitect.io để test website
   - Browser DevTools → Network tab để verify gtag requests

## Environment Variables trong build

```yaml
env:
  NODE_ENV: production
  NEXT_PUBLIC_GA_ID: ${{ secrets.NEXT_PUBLIC_GA_ID }}
  NEXT_PUBLIC_SITE_URL: https://aki-ui.akitect.io
```

## Debugging

### Nếu GA không hoạt động:

1. Check GitHub Secrets đã được set chưa
2. Verify build logs trong Actions tab
3. Test trong browser console: `window.gtag`
4. Check Network tab cho requests tới google-analytics.com

### Build errors:

1. Check Node.js version (hiện tại: 20.x)
2. Verify npm scripts: `website:build`
3. Check dependencies trong package.json

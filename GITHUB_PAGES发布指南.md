# GitHub Pages 发布指南

这份网页是纯前端项目，可以直接用 GitHub Pages 免费发布。

## 1. 需要上传的文件

把 `volunteer-diagnosis` 文件夹里的所有内容上传到 GitHub 仓库：

```text
index.html
style.css
app.js
README.md
GITHUB_PAGES发布指南.md
.nojekyll
vendor/xlsx.full.min.js
```

`vendor/xlsx.full.min.js` 是 Excel 解析和导出用的本地库。已经放到项目里了，所以网页上线后不再依赖外部 CDN。

## 2. 新建 GitHub 仓库

1. 打开 GitHub
2. 点击右上角 `+`
3. 选择 `New repository`
4. 仓库名可以填：

```text
volunteer-diagnosis
```

5. 选择 `Public`
6. 点击 `Create repository`

## 3. 上传文件

如果你不想用命令行，可以直接网页上传：

1. 进入刚创建的仓库
2. 点击 `uploading an existing file`
3. 把 `volunteer-diagnosis` 文件夹里的文件拖进去
4. 注意 `vendor` 文件夹也要一起上传
5. 点击 `Commit changes`

## 4. 开启 GitHub Pages

1. 进入仓库
2. 点击 `Settings`
3. 左侧找到 `Pages`
4. `Source` 选择 `Deploy from a branch`
5. `Branch` 选择 `main`
6. 文件夹选择 `/ root`
7. 点击 `Save`

## 5. 获取访问链接

等待几十秒到几分钟，GitHub 会生成一个网址，格式通常是：

```text
https://你的用户名.github.io/volunteer-diagnosis/
```

以后别人打开这个网址，就能访问这个志愿诊断网页。

## 6. 更新网页

以后如果你改了 `index.html`、`style.css` 或 `app.js`：

1. 回到 GitHub 仓库
2. 重新上传覆盖文件
3. 点击 `Commit changes`
4. 等 GitHub Pages 自动刷新

一般 1-3 分钟后线上页面会更新。

## 7. 当前版本提醒

这个网页目前是原型版：

- 数据和规则写在 `app.js` 里
- 不保存用户数据
- 不需要服务器
- 不需要数据库
- 上传的 Excel 只在用户浏览器里处理

这对早期验证很友好，也比较安全。


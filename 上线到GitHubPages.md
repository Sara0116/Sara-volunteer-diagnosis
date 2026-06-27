# 如何把网页上线到 GitHub Pages

这份项目是纯前端网页，可以免费放到 GitHub Pages 上。上线后别人可以通过一个网址访问。

## 1. 需要准备

- 一个 GitHub 账号
- 浏览器
- 当前这个文件夹：

```text
volunteer-diagnosis
```

目前不需要安装 Node.js、Python、数据库或服务器。

## 2. 在 GitHub 新建仓库

1. 打开 GitHub
2. 点击右上角 `+`
3. 选择 `New repository`
4. 仓库名建议填：

```text
volunteer-diagnosis
```

5. 选择 `Public`
6. 点击 `Create repository`

## 3. 上传文件

进入新仓库后：

1. 点击 `uploading an existing file`
2. 把 `volunteer-diagnosis` 文件夹里的所有内容拖进去

需要上传这些内容：

```text
index.html
style.css
app.js
README.md
.nojekyll
vendor/xlsx.full.min.js
```

注意：`vendor` 文件夹也要一起上传，否则 Excel 上传和导出功能不能用。

3. 页面底部点击 `Commit changes`

## 4. 开启 GitHub Pages

1. 进入仓库的 `Settings`
2. 左侧找到 `Pages`
3. Source 选择 `Deploy from a branch`
4. Branch 选择 `main`
5. Folder 选择 `/root`
6. 点击 `Save`

## 5. 获取访问网址

等待几十秒到几分钟，GitHub 会显示一个网址：

```text
https://你的用户名.github.io/volunteer-diagnosis/
```

打开这个网址，就能访问网页。

## 6. 更新网页

以后如果你修改了本地文件，需要重新上传对应文件到 GitHub。

最简单方式：

1. 打开仓库
2. 点击对应文件
3. 点铅笔图标编辑，或重新上传文件
4. 点击 `Commit changes`
5. 等 GitHub Pages 自动更新

## 7. 当前版本说明

这个版本已经把 Excel 库放到了本地：

```text
vendor/xlsx.full.min.js
```

所以网页上线后不再依赖 CDN。

## 8. 常见问题

### 页面打开是 404

通常是 GitHub Pages 还没部署完，等 1-3 分钟再刷新。

### 页面能打开，但样式没有了

确认 `style.css` 和 `index.html` 在同一层目录。

### Excel 功能不能用

确认上传了：

```text
vendor/xlsx.full.min.js
```

### 想用自己的域名

可以后续再绑定域名。第一版先用 GitHub 免费网址即可。


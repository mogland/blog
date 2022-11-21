---
title: Core has been updated to v1.7.0-alpha.0 [Pre-release]
date: 2022-08-16
author: Wibus
avatar: https://github.com/wibus-wee.png
twitter: '@wibus_wee'
---

Long time no see! It has been a month since we announced that **Core is officially available**, during which we have made a lot of optimizations, repairs, and **feature updates**, let me list some **more important changes** for you:

好久不见！距离我们宣布 **Core 正式可用**已经有一个月了，这期间我们做出了不少的优化、修补，以及**功能更新**，让我来给你慢慢列举一**些较为重要的更改：**

---

## 🚨 Breaking Changes

- **备份模块**:
  - 支持使用 `JSON` 恢复部分服务数据- by **Wibus**
- **主题模块**:
  - EJS 模板引擎解析器支持 - by **Wibus** [<samp>(b0e57)</samp>](https://github.com/mogland/core/commit/b0e57c9)
  - 支持从 GitHub 或 自定义地址下载主题 - by **Wibus** [<samp>(2622d)</samp>](https://github.com/mogland/core/commit/2622d66)

### *最为重要的 Feature -- 主题模块*

这个模块曾经出现于 Core v0.x 版本中，但重构后的版本都并没有怎么提及此功能，今天归来纯属希望可以**更加方便地来编写前端主题**。

目前模块已**初步成型**，相关模块接口已经公开，但是依然存在**有且已知的问题：**

- **传递数据**似乎**不足**，或对开发对应页面并**不适用**
- **反向代理**后，样式等文件**无法正常获取**
- 对**辅助函数支持**不足（因为有很多函数支持都**仅适用于 Express 平台**）现在仅支持 `moment` 方法

:::tip

相关数据字段**尚未完全确定**，具体情况等待**第一个 Demo 发版后**再作商讨

:::

## 🐞 Bug Fixes

- **评论模块:**
  - 模型 与 Dto 的属性不匹配 - by **wibus-wee** [(f1e7d)](https://github.com/mogland/core/commit/f1e7daf)
  - 从暴露的全部字段检索垃圾评论 - by **wibus-wee** [(e139e)](https://github.com/mogland/core/commit/e139e78)

## 🏎 Performance

- **聚合模块**：
  - 对查找最新文章的服务返回 新增 `text` 字段 - by **wibus-wee** [(24e2d)](https://github.com/mogland/core/commit/24e2de5)

##### **_GitHub Release Page：https://github.com/mogland/core/releases_**
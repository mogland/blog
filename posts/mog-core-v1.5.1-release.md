---
title: Mog Core v1.5.1 Released.
author: Wibus
avatar: https://github.com/wibus-wee.png
twitter: '@wibus_wee'
date: 2022-08-03
---

We have published a new core after 1 year of groping and nearly 1 month of zero reconstruction, a new starting point.

经过1年的摸索与将近1个月的从零重构，我们出版了新的 core，新的起点。


---

**感谢 [@MYXXTS](https://github.com/MYXXTS) [@origami-tech](https://github.com/origami-tech) [@Truimo](https://github.com/Truimo) 等大佬的鼎力相助**

## 新特性

- 新的**数据库**驱动 **MongoDB**：MongoDB 是一个 NoSQL 数据库，它提供了一种非常简单的方式来存储和查询数据，而且它的性能非常高。
- 新的缓存机制 **Redis**：Redis 是一个高性能的内存数据库，作为一个缓存，它可以提供高速的查询和存储，目前 Mog Core 使用于配置获取中
- 新的**插件系统**，插件系统是一个非常特别的框架，它可以让你在空间中添加新的功能，比如 WebHook, Macros, 可以让你的空间更加灵活，更加强大。
  ::: warning
  新的**插件系统**尚未稳定，仅完成了基本的插件注册，激活，应用插件
  :::
- 全新的**文章备份模块**：文章备份可以让你将文章备份到本地，以备以后使用，同时支持导入/迁移
  ::: warning
  改进后的**文章备份**，将遵循以下逻辑：

  - 单篇文章直接输出
  - 多篇文章打包输出
  :::
- 改进后的**数据库备份模块**：将全部 Mog 数据保存至本地，数据比文章备份模块更加全面
- 在**文章或页面**中自动记录**图片相关元数据**：比如图片的宽高、图片的类型、图片的 URL 等等，但也需要前端支持，这样可以让你的文章更加美观
- 提供了更多的文章管理选项：比如文章的标签，文章的分类，文章的显示/隐藏，文章的发布时间，等等
- 支持**标签或分类合并**：将多个分类或标签中的文章合并如一个分类或标签
- 使用了**装饰器**来**验证密钥**以使用**高阶操作**
- 全新的**跨平台 Cookie** 解析装饰器：支持多种浏览器，比如 Chrome、Firefox、Safari、IE、Edge 等等
---
title: Mog Stage v2 第二阶段
date: 2022-11-02
author: Wibus
avatar: https://github.com/wibus-wee.png
twitter: '@wibus_wee'
---

我们在过去的日子对许多地方进行了真正的完全改造。

---

## 重构基础服务

第一阶段，我们居多是进行路径规划，后续阶段，我们会加紧进行基础服务的重构，在完成所有基础服务的时候我们将会发布一次 Alpha 文档。我们目前已完成重构的基础服务有：

- 数据库模块 （[mogland/core#309](https://github.com/mogland/core/pull/309)）
- 授权模块 （ [mogland/core#309](https://github.com/mogland/core/pull/309) ）
- 配置模块 （ [mogland/core#336](https://github.com/mogland/core/pull/336) ）
- 用户服务模块 （ [mogland/core#348](https://github.com/mogland/core/pull/348) ）
- 文库模块 （ [mogland/core#363](https://github.com/mogland/core/pull/363) ）
- 数据聚合模块 （ [mogland/core#396](https://github.com/mogland/core/pull/396) ）

余下的服务模块我们将会在下一阶段继续加紧重构，在此之前，我们需要对某些模块撰写 RFC。

## [Docs] 文档内容重写

我们对文档内容进行重写，以便于更好的阅读体验。我们加入了一些新的内容，比如：**简介、快速开始、主要功能、对比、关于**等等，对很多进阶的内容进行了分离，分类到「进阶安装」的分类，并且我们在顶部加入了「Ecosystem」你可以从此处快速到达某一项目的仓库。

我们完善了常见问题、版本发布、贡献者契约行为准则，这些更新都需要感谢来自 Vue.js 和 Vitest 的文档，我们文档都是基于他们的文档结构。

我们将会在下一阶段对文档内容进行进一步的补充，目前我们已经完成了一部分的重写工作。

## [Docs] 新的文档首页

我们对文档首页进行了重写，实际上这是来自 [CodeEdit.app](//CodeEdit.app) 的 Fork，我们对其进行了一些修改，在某些核心内容中加上了描述图片。

## [Core] 新的 README

我们对 README 进行了重写，README 的结构参考自 [CodeEdit](https://github.com/CodeEditApp/CodeEdit)，我们对其进行了一些修改，并且使用了英文作为默认 README 语言，目前支持的语言有：简体中文（机翻）、英文。我们仅对项目的描述做出了改进，其他内容保持不变。

## [Docs] 新文档主题？

我们在后续考虑对文档主题进行了重写，在样式上我们将参考 Apple Documentation，此仓库目前仍在 Private 阶段。它将由两名开发者完成，我们将会在完成后公开。

但不可避免的是，在某些代码我们需要撰写 Hard Code，我们会尽量避免这种情况，但是在某些情况下，我们使用 Hard Code 也会加上注释，以便于后续的维护和用户的自定义修改。

## [FAQ] 距离 v2.0 还有多远？

> 很接近，但也很遥远

我们已经在全力开发，但是我们还需要一些时间来完成，我们将会在 2022 春节前完成 v2.0 的开发，但是我们不会在这个时间点发布，我们将会在 2022 春节后发布 v2.0，我们将会在发布前进行一些测试，以确保 v2.0 的稳定性。

我们目前遇到的困难包括且不限于：*人手不足、架构考虑、规划不足* 

**我们真的很希望有更多的人能够加入我们。**
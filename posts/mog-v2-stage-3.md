---
title: Mog v2 -- Stage 3 (2023.1.19)
date: 2023-01-19
author: Wibus
avatar: https://github.com/wibus-wee.png
twitter: '@wibus_wee'
---

V2.0 is coming soon, and we have made a lot of progress in the past time.

V2.0 即将到来，我们在过去的时间里取得了很大的进展。

---

## [Core] All the services are rewritten successfully

If you have been following our [development progress](https://mog.js.org/about/roadmap.html), you will find that we have rewritten all the services. At this point, the core part of Mog v2 has been basically completed, and we are now doing some pre-release testing and some functional supplements and optimizations in some modules.

The following modules have been added:

-  Category / Tag + Post / Page service module ( PR in [mogland/core#363](https://github.com/mogland/core/pull/363) )
-  ~~Basic comment module ( PR in [mogland/core#404](https://github.com/mogland/core/pull/404), removed in [mogland/core#558](https://github.com/mogland/core/pull/558))~~
-  Comment service module (PR in [mogland/core#558](https://github.com/mogland/core/pull/558) )
-  Data aggregation module ( PR in [mogland/core#396](https://github.com/mogland/core/pull/396) )
-  Friend link service module ( PR in [mogland/core#565](https://github.com/mogland/core/pull/565))
-  ~~Basic friend link module ( PR in [mogland/core#511](https://github.com/mogland/core/pull/511), removed in [mogland/core#565](https://github.com/mogland/core/pull/565))~~
-  Notification module (PR in [mogland/core#568](https://github.com/mogland/core/pull/568))

You may be confused that we removed the basic modules in the following PRs. The current design structure is not very friendly to the support of basic built-in modules, which will greatly increase the complexity of coding, and we may redesign this part of the content in subsequent versions, which depends on whether users need basic modules.


Thanks to the Mog team members who have contributed to this part of the code, and we will continue to improve the code quality and stability of the core module.

## [Console] New Console UI is ready!

With the new core, there must be a new Console UI. In the past time, we have done a lot of refactoring on the Console UI, and it is basically completed now.

We still use React as the development framework of the Console UI, and the design style of the Console UI is basically consistent with the original Console UI, but we have optimized the design of the Console UI to make it more concise.

![](https://user-images.githubusercontent.com/62133302/212527878-cb415e34-50d4-4522-a257-70965d9a558e.png)


## [Docs] New docs homepage

We rewrote the docs homepage again, which is actually a Fork from [Vuejs](//Vuejs.org), we made some modifications and added some sections.

You can see the new homepage here: https://mog.js.org/

## What's next?

We need to iterate all the v1 ecosystem to v2, which is still a long and difficult process, and we will continue to work hard in the coming time.

In addition, we need to rewrite all the comment modules, and the current comment data design can already support the use in different sites.

---

## [核心] 所有的服务都已成功重写

如果你有关注我们的[开发进度](https://mog.js.org/about/roadmap.html)，你能发现我们已经将所有的服务都重写完成了。至此，Mog v2 的核心部分已经基本完成，目前我们正在进行一些发布前的测试以及部分模块中的功能补充与优化。

此次新增的模块有：

-  分类 / 标签 + 文章 / 页面的服务模块 ( PR in [mogland/core#363](https://github.com/mogland/core/pull/363) )
-  ~~基本评论模块 ( PR in [mogland/core#404](https://github.com/mogland/core/pull/404), 于 [mogland/core#558](https://github.com/mogland/core/pull/558) 已移除)~~
-  评论服务模块 (PR in [mogland/core#558](https://github.com/mogland/core/pull/558) )
-  数据聚合模块 ( PR in [mogland/core#396](https://github.com/mogland/core/pull/396) )
-  友链服务模块 ( PR in [mogland/core#565](https://github.com/mogland/core/pull/565))
-  ~~基本友链模块 ( PR in [mogland/core#511](https://github.com/mogland/core/pull/511)，于 [mogland/core#565](https://github.com/mogland/core/pull/565) 已移除)~~
-  通知模块 (PR in [mogland/core#568](https://github.com/mogland/core/pull/568))


可能你会感到疑惑，我们在后续的 PR 中移除了基本模块。目前的设计结构暂时对基础内置模块的支持并不是很友好，将会极大提高其编码时的复杂度，我们可能会在后续的版本中重新设计这部分的内容，这取决于用户是否需要基本模块。

非常感谢 Mog 团队成员对这部分代码的贡献，我们将继续提高核心模块的代码质量与稳定性。

## [Console] 新的控制台 UI 已就绪！

全新的 core，肯定要有全新的控制台 UI，我们在过去的时间里，对控制台 UI 进行了大量的重构，目前已经基本完成了。

我们依然使用了 React 作为控制台 UI 的开发框架，以及在设计上依然保持了与原来的控制台 UI 的风格基本一致，但是我们对控制台 UI 的设计进行了部分的优化，使得控制台 UI 更加的简洁。

![](https://user-images.githubusercontent.com/62133302/212527878-cb415e34-50d4-4522-a257-70965d9a558e.png)


## [文档] 新文档首页

我们又一次重写了文档首页，实际上是从 [Vuejs](//Vuejs.org) Fork 的，我们对其中的一些内容做了一些修改，并且在添加了一些章节。

你可以在这里看到新的首页：https://mog.js.org/


## 接下来我们要做的

我们需要将 v1 生态全部迭代至 v2，这依然是一个很长且困难的过程，我们将会在接下来的时间里继续努力。

此外，我们需要重写全部评论模块，目前的评论数据设计已经可以支持在不同的站点中使用了～

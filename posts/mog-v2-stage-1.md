---
title: Mog v2 -- Stage 1 (2022.09.24)
date: 2022-09-24
author: Wibus
avatar: https://github.com/wibus-wee.png
twitter: '@wibus_wee'
---

Hi, we've been away for a while, and even changed the name of the organization ( `NEXT` -> `Mog` ) during this time. Let's talk about what happened here~

Hi, 我们离开了比较久的时间，期间甚至将组织换了一个名字（ `NEXT` -> `Mog` ）我们在这里仔细说说发生了什么吧～
---


## The name of the new version

The new version of the name is composed of two words: **Module + Blog = Mog**, which is related to our v2 version. We use **microservice architecture** in v2, and we are still exploring different services. We believe that we can find a better solution when we publish it.

## Why suddenly want to refactor

The 1.x version was updated hastily, resulting in many problems, such as:

- API RESTFul **specification**
- DTO and Model **do not match**, resulting in output problems
- Interface method **writing confusion**
- Comment **not standard**
- It is difficult to continue to stack functions on top, and the original architecture will lead to **function bloated**

In order to develop for a long time, we released the last v1.7.0 and immediately started the v2 refactoring.

## What new features or advantages does this update have?

1. Version 2.x will **integrate the background**, no need to deploy extra, and should not deploy extra, which will increase more unexpected maintenance costs
2. Version 2.x uses **microservice architecture**, **extensibility** compared to single service is much higher, and an exception of a microservice will not cause other microservices to be abnormal at the same time, **enhance stability**
3. **Comment module, mail module, link module, rendering module** will be independent as a single service
4. We rewrote the document, using Vitepress again, and wrote the relevant documents according to many excellent open source projects
5. The comment module will consider compatibility with other blog systems, and provide a separate console
6. The mail module will be embedded in the communication module, and the communication module will be responsible for all communication-related functions
7. The link module we will consider making it a standalone link page, and supporting theme customization
8. The rendering module will provide a Tiny markdown Server, promoting more custom syntax rendering processing

## What are the problems with this update?

1. There will be more interface incompatibilities from 1.x to 2.x, so the entire ecology outside the core needs to be rewritten
2. Because 2.x uses microservice architecture, the document deployment needs to be rewritten, and it is recommended to start all over again.
3. The production time of this version will increase greatly, and it may take until the next holiday to complete it basically.



## 名字的由来

从 NEXT 到 Mog 是一个比较惨痛的过程，已经有一部分人知道此项目了，他们通常称之为 _"nx"_，现在修改这个名字对宣传来说并不是一件好事，但为了以后的发展我们必须这样做。

新的名字由两个单词组成：**Module + Blog = Mog**，这和我们在 v2 版本的构思有关。我们在 v2 突破地采用了**微服务架构**，对于不同的服务分离，我们仍在探索当中，相信出版的时候可以寻找到一个较好的方案。

## 为什么突然要重构

1.x 版本由于更新仓促，导致了很多的问题，比如：

- API RESTFul **规范**
- DTO 与 Model **不匹配**，导致输出存在问题
- 接口方法**书写混乱**
- 注释**不规范**
- 很难继续向上堆积功能，原架构会导致**功能臃肿**

为了长久的发展，我们发布了最后的 v1.7.0，并立即开始了 v2 的重构

## 这次更新有什么新功能或者优势？

1. 2.x 版本将会**内置后台**，无需额外部署，也不应额外部署，这会增加更多的在意料之外的维护成本
2. 2.x 使用**微服务架构**，**扩展性**对比单一服务高了很多，且一个微服务的异常不会导致其它微服务同时异常，**增强稳定性**
3. **评论模块、邮件模块、友链模块、渲染模块**将会独立为一个单独服务
4. 我们对文档进行了重写，重新使用了 Vitepress，并且参照了许多优秀的开源项目编写相关文档
5. 评论模块将会考虑与其他博客系统相兼容，并且提供独立的控制台
6. 邮件模块将会寓于交流模块之内，交流模块将会负责一切与交流相关的功能
7. 友链模块我们会考虑将其可以作为一个独立的友链页面，并且支持主题定制
8. 渲染模块我们会提供一个 Tiny markdown Server，推动更多的自定义语法渲染处理

## 这次更新的问题是什么？

1. 1.x --> 2.x 预计会出现较多接口不兼容的情况，因此除核心外的生态需要全部重写
2. 由于 2.x 使用微服务架构，因此文档部署需要全部重写，建议全部重新开始.
3. 该版本的制作时间会大大增长，有可能需要到下一个假期才可基本完成.

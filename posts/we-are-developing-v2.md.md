---
title: Foreshow：We are developing Core v2
date: 2022-08-28
author: Wibus
avatar: https://github.com/wibus-wee.png
twitter: '@wibus_wee'
---

You may have seen a Draft PR on GitHub, [Core Pull Request #309](https://github.com/mogland/core/pull/309), which basically lists all the plans and modification notes.

相信你已经看见在 GitHub 上有一个 Draft PR, [Core Pull Request #309](https://github.com/mogland/core/pull/309)，里面已经基本列举了所有的计划以及修改注意事项.

---


## Why is there a special PR to change?

At the end of the day, it's still the change of architecture. The original core is only one program, and all the modules in it will eventually be imported into AppModule, which causes the following problems:

- If this project was originally written by only one person, then subsequent updates can only be made by that person
  - The directories are closely related to each other.
  - The interface calls between the systems are tightly coupled and difficult to maintain
- Any modification to the system must be redeployed or upgraded together
- When the system load increases, it is difficult to scale horizontally
- When a system has a problem, it will affect the entire system

Using microservice architecture has many advantages:

- A microservice that is only responsible for a very clear business is definitely easier to understand than a complex system
- When modifying a microservice, it is easier to analyze what impact this modification will have
- It is easier to update the core more frequently, and it is easy to release new features with very low integration cost
- It is suitable for dealing with system business growth, and the scalability is higher than that of a single service
- You can combine existing microservices to achieve functional reuse
- An exception in a microservice will not cause other microservices to be abnormal at the same time

Of course, there are also **disadvantages:**

- High complexity, the code logic will be more complex
- Need a well-designed monitoring system to monitor the running status of each microservice
- Communication delay may be affected

But I think the benefits outweigh the drawbacks, because using a microservice architecture can make our systems more flexible, more concise, easier to maintain, and easier to expand. For us, this will be a revolutionary update.

At this stage, we recommend that you do not use Mog until Core v2 is released. Internal interfaces are expected to undergo many changes, and other ecosystems need to make modifications to the upstream. I hope v2 can meet you soon!.

---

## 到底为什么要专门起一个 PR 来修改？

说到底还是架构的变化，原本的 core 是只有一个程序，里面的全部模块最后都会被导入进 AppModule，这样导致的问题将会是：

- 如果这个项目一开始就是只有一个人写的，那后续的更新也只能是那个人来更新
  - 目录与目录间紧密关联。
  - 系统间接口调用的方式耦合紧密导致难以维护
- 对系统的任何修改都必须整个系统一起重新部署或升级
- 在系统负载增加时，难以进行水平扩展
- 当系统中一处出现问题，会影响整个系统

使用微服务架构，优点有很多：

- 一个仅负责一项很明确业务的微服务，肯定比一个复杂的系统更容易理解
- 对一个微服务进行修改时，能够更容易分析到这个修改到底会产生什么影响
- 可以更频繁的去更新核心，通过很低的集成成本，快速的发布新的功能
- 适合应对系统业务增长，扩展性对比单一服务高了很多
- 可以通过组合已有的微服务以达到功能重用的目的
- 一个微服务的异常不会导致其它微服务同时异常

当然，**缺点也是有的：**

- 复杂度高，代码逻辑会更加复杂
- 需要一个设计良好的监控系统对各个微服务的运行状态进行监控
- 通信时延有可能会受到影响

但我认为利大于弊，因为利用微服务架构，可以让我们的系统更加灵活，更加简洁，更加容易维护，更加容易扩展。对我们来说，这将会是一次革命性的更新。

在目前阶段，我们将建议您不要使用 Mog，直至 Core v2 发布。内部接口预计会出现很多变革，其他生态也需要对上游作出修改。希望 v2 能很快与你们见面！。

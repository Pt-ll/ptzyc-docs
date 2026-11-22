# FAQ

## 出现“显示没有找到比赛配置”怎么办？

这是你提供的 `V0.1.6` 使用说明中的已知提示。先通过 Verdict 面板或命令 **`Verdict: 新建比赛`** 创建一个比赛；如果仍然异常，重启 VS Code，并检查工作区是否打开在包含 `.verdict/` 的目录。

## 需要安装独立的评测服务吗？

不需要。Verdict Judge 是 VS Code 扩展，使用本机已有的编译器、解释器和调试扩展。

## `testlib.h` 从哪里来？

查找顺序是：题目包的 `extra/`、工作区 `.verdict/testlib/`、设置 `verdict.testlibPath`。扩展本身不捆绑 `testlib.h`。

## 支持哪些判定？

传统评测支持 AC、WA、TLE、MLE、OLE、RE、CE；Special Judge 和交互题还会涉及 PC、UKE 等状态，具体以当前扩展版本为准。

## 完整命令和目录约定在哪里？

请阅读[完整使用说明](/projects/verdict-judge/usage)，其中包含工作区布局、出题流程、样例粘贴、子任务、榜单、题目包和设置说明。

# 安装

## VS Code 官方市场

在扩展面板搜索 `Verdict Judge`，扩展 ID 为 `YuChenZhong.verdict-judge`。

## Open VSX

适用于 VSCodium、Gitpod、Theia 等环境。在扩展面板搜索 `Verdict Judge`，或访问 [Open VSX 页面](https://open-vsx.org/extension/YuChenZhong/verdict-judge)。

## 手动安装 VSIX

```bash
code --install-extension <文件路径>.vsix
```

安装后通过命令面板运行 **`Verdict: 检查环境`**。扩展会探测本机编译器，并编译、运行一个小程序完成自检。

默认编译参数为 `-O2 -std=c++17`，可以在 `verdict.flags` 中调整。

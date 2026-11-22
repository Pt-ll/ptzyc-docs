# 安装 VS Code 代码片段

## 文件位置

| 系统 | 默认路径 |
| --- | --- |
| Windows | `%APPDATA%\\Code\\User\\snippets\\cpp.json` |
| macOS | `~/Library/Application Support/Code/User/snippets/cpp.json` |
| Linux | `~/.config/Code/User/snippets/cpp.json` |

## 安装步骤

1. 从本站下载 `cpp.json`，或复制某个模板的单项 JSON。
2. 通过命令面板执行 `Snippets: Configure User Snippets`，打开 `cpp.json`。
3. 先备份已有文件，再合并新的 JSON 配置，避免覆盖已有片段。
4. 打开 `.cpp` 文件，输入 `prefix`，从 IntelliSense 列表插入模板。

`prefix` 是触发词，`body` 是插入的代码行数组，`description` 用于在补全列表中说明用途。原始文件中的 `$0`、`$1` 等占位符会被 VS Code 识别；本站的“复制 C++”操作默认会清理这些占位符。

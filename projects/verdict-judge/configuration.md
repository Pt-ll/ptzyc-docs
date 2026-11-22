# 配置

扩展设置统一使用 `verdict.*` 前缀：

| 设置 | 默认值 | 说明 |
| --- | --- | --- |
| `verdict.compiler` | 自动探测 | 编译器完整路径，按 `g++`、`clang++`、`cl` 探测 |
| `verdict.flags` | `-O2 -std=c++17` | 编译参数 |
| `verdict.defaultTimeMs` | `1000` | 默认时间限制 |
| `verdict.defaultMemoryMb` | `256` | 默认内存限制 |
| `verdict.outputLimitKb` | `4096` | 默认输出上限 |
| `verdict.comparator` | `default` | 没有题目包时的比较方式 |
| `verdict.testlibPath` | 空 | `testlib.h` 所在目录或文件 |
| `verdict.autoDiff` | `true` | WA / PC 时自动打开 diff |
| `verdict.debugStopAtEntry` | `false` | 调试时先停在程序入口 |

题目、比赛和评测记录使用 JSON 保存于工作区 `.verdict/`。测试数据集中放在 `.verdict/data/<题目 id>/`，选手源码放在 `players/<选手>/<题目>.cpp` 等目录。

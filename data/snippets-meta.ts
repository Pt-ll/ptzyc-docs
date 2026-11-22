export type SnippetCategory = 'base' | 'graph' | 'math' | 'data-structures' | 'uncategorized'

export interface SnippetDependencies {
  headers?: string[]
  types?: string[]
  globals?: string[]
  snippets?: string[]
}

export interface SnippetMeta {
  title: string
  category: SnippetCategory
  description: string
  tags: string[]
  standard?: string
  complexity?: string
  dependencies?: SnippetDependencies
  usageNotes?: string
}

export const snippetsMeta: Record<string, SnippetMeta> = {
  cpp: { title: 'C++ Main Template', category: 'base', description: '基础 C++ 程序模板。', tags: ['main', 'io'], standard: 'C++17' },
  qpow: { title: 'Quick Power', category: 'math', description: '二进制快速幂。', tags: ['binary-exponentiation', 'modular-arithmetic'], standard: 'C++17', complexity: 'O(log n)', dependencies: { types: ['ll'], globals: ['mod'], snippets: ['cpp'] } },
  Calc: { title: 'Calculator', category: 'math', description: '阶乘、逆元和组合数预处理。', tags: ['combination', 'modular-arithmetic'], standard: 'C++17', dependencies: { types: ['ll'], globals: ['N', 'mod'], snippets: ['cpp'] } },
  Segtree: { title: 'Segment Tree', category: 'data-structures', description: '支持区间加法和区间查询的线段树。', tags: ['segment-tree', 'range-query'], standard: 'C++17', complexity: 'O(log n)', dependencies: { types: ['ll'], globals: ['N'], snippets: ['cpp'] } },
  dij: { title: 'Dijkstra', category: 'graph', description: '基于优先队列的单源最短路。', tags: ['shortest-path', 'heap'], standard: 'C++17', complexity: 'O((n+m)log n)', dependencies: { headers: ['queue', 'vector', 'functional'], types: ['ll', 'pll'], globals: ['N', 'n', 'inf', 'v'], snippets: ['cpp'] } },
  spfa: { title: 'SPFA', category: 'graph', description: '基于队列的单源最短路模板。', tags: ['shortest-path', 'queue'], standard: 'C++17', complexity: 'O(nm)（最坏）', dependencies: { headers: ['queue'], types: ['ll'], globals: ['N', 'n', 'inf', 'v'], snippets: ['cpp'] } },
  scc: { title: 'Strongly Connected Components', category: 'graph', description: '有向图强连通分量。', tags: ['scc', 'tarjan'], standard: 'C++17', complexity: 'O(n+m)', dependencies: { headers: ['vector'], types: ['ll'], globals: ['N', 'n', 'v'], snippets: ['cpp'] } },
  edcc: { title: 'Edge-Biconnected Components', category: 'graph', description: '无向图边双连通分量。', tags: ['edcc', 'bridge'], standard: 'C++17', complexity: 'O(n+m)', dependencies: { headers: ['vector'], types: ['ll'], globals: ['N', 'n', 'v'], snippets: ['cpp'] } },
  vdcc: { title: 'Vertex-Biconnected Components', category: 'graph', description: '无向图点双连通分量。', tags: ['vdcc', 'cut-vertex'], standard: 'C++17', complexity: 'O(n+m)', dependencies: { headers: ['vector'], types: ['ll'], globals: ['N', 'n', 'v'], snippets: ['cpp'] } },
  exgcd: { title: 'Extended GCD', category: 'math', description: '扩展欧几里得算法。', tags: ['gcd', 'number-theory'], standard: 'C++17', complexity: 'O(log n)', dependencies: { types: ['ll'], snippets: ['cpp'] } },
  crt: { title: 'Chinese Remainder Theorem', category: 'math', description: '互质模数的中国剩余定理。', tags: ['crt', 'number-theory'], standard: 'C++17', dependencies: { types: ['ll'], snippets: ['cpp'] } },
  excrt: { title: 'Extended CRT', category: 'math', description: '非互质模数的扩展中国剩余定理。', tags: ['excrt', 'number-theory'], standard: 'C++17', dependencies: { types: ['ll'], snippets: ['cpp'] } },
  gauss: { title: 'Gaussian Elimination', category: 'math', description: '高斯消元求解线性方程组。', tags: ['linear-algebra', 'equation'], standard: 'C++17', complexity: 'O(n³)', dependencies: { headers: ['cmath'], types: ['ll', 'ld'], globals: ['N', 'eps'], snippets: ['cpp'] } },
  Mat: { title: 'Matrix', category: 'math', description: '矩阵运算与矩阵快速幂。', tags: ['matrix', 'fast-power'], standard: 'C++17', complexity: 'O(n³log k)', dependencies: { types: ['ll'], globals: ['N', 'mod'], snippets: ['cpp'] } }
}

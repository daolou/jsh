# jsh

javascript string hash algorithm

## Usage

it can use in esm、cjs、umd.

### ESM

```js
import jsh from "jsh";
const sign = "hello word!";
jsh("ap", sign); // -870885323
jsh("bkdr", sign); // 1.559481765091785e+23
jsh("dek", sign); // 2090529829
jsh("djb", sign); // 894551926
jsh("elf", sign); // 18588753
jsh("js", sign); // 1584115779
jsh("pjw", sign); // 18588753
jsh("sdbm", sign); // 4725310089
```

### CJS

```js
const jsh = require("jsh");
const sign = "hello word!";
jsh("ap", sign); // -870885323
jsh("bkdr", sign); // 1.559481765091785e+23
jsh("dek", sign); // 2090529829
jsh("djb", sign); // 894551926
jsh("elf", sign); // 18588753
jsh("js", sign); // 1584115779
jsh("pjw", sign); // 18588753
jsh("sdbm", sign); // 4725310089
```

### UMD

```html
<!-- ... other HTML ... -->

<!-- load jsh。-->
<script src="://unpkg.com/jsh@latest/lib/index.umd.js" crossorigin></script>

<!-- use jsh。-->
<script>
  window.jsh("ap", sign); // -870885323
  window.jsh("bkdr", sign); // 1.559481765091785e+23
  window.jsh("dek", sign); // 2090529829
  window.jsh("djb", sign); // 894551926
  window.jsh("elf", sign); // 18588753
  window.jsh("js", sign); // 1584115779
  window.jsh("pjw", sign); // 18588753
  window.jsh("sdbm", sign); // 4725310089
</script>
```

## Maintainers

[[Kha'Zix]daolou](https://github.com/daolou)

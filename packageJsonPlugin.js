// packageJsonPlugin.js
import fs from 'fs';
import path from 'path';

export function packageJsonPlugin(options = {}) {
  const { distDir = 'dist' } = options;

  return {
    name: 'package-json-plugin',
    writeBundle() {
      // 1) 讀取根目錄的 package.json
      const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

      // 2) 根據需求刪除或改寫欄位
      //    例如刪除 devDependencies、scripts 等
      delete pkg.main;
      delete pkg.module;
      delete pkg.types;
      delete pkg.exports;
      delete pkg.devDependencies;
      delete pkg.scripts;
      delete pkg['lint-staged'];
      delete pkg.config;
      delete pkg.packageManager;

      // 3) 如果要指定新的 main/module/types
      //    （通常你會在 dist 內成為新的根）
      pkg.main = 'index.cjs';
      pkg.module = 'index.mjs';
      pkg.types = 'index.d.ts';

      // 4) 寫回 distDir 中
      const outPath = path.join(distDir, 'package.json');
      fs.writeFileSync(outPath, JSON.stringify(pkg, null, 2), 'utf-8');
      console.log(`\nPackage.json copied to: ${outPath}`);
    },
  };
}

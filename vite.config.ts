import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const mcpPlugin = require('./public/plugins/situ-design/situ-mcp-plugin.cjs')

// https://vite.dev/config/
  export default defineConfig(() => {
    const babelPlugin = require('./public/plugins/situ-design/situ-babel-plugin.cjs')

  return {
    plugins: [
      mcpPlugin(), // Situ MCP servers (HTTP on 7124, WebSockets on 7125 & 7126)
      (react as any)({
        babel: {
          plugins: [babelPlugin], // Situ Babel plugin for element tracking
        },
      }),
    ],
  }
})

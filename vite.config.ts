import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import {presetIcons, presetUno} from 'unocss'
import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    React(),
    Unocss({
      presets: [
        presetUno(),
        presetIcons({
          cdn: 'https://esm.sh/'
        })
      ]
    }),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      less: {
        // modifyVars: getThemeVariables({
        //   // dark: true, // 开启暗黑模式
        //   // compact: true, // 开启紧凑模式
        // }),
        javascriptEnabled: true,
      },
    },
  },
})

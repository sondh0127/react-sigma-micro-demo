import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import {presetIcons, presetUno} from 'unocss'

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
    })
  ]
})

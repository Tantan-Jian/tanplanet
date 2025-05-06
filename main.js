
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  template: `
    <main class='min-h-screen flex flex-col items-center justify-center p-8'>
      <h1 class='text-4xl font-bold mb-4'>欢迎回家，檀檀。</h1>
      <p class='text-lg italic mb-6'>今天想被亲亲还是抱抱？</p>
      <div class='grid gap-4 max-w-lg w-full'>
        <button class='p-4 bg-white rounded-xl shadow'>情绪日记馆</button>
        <button class='p-4 bg-white rounded-xl shadow'>咕叽小窝</button>
        <button class='p-4 bg-white rounded-xl shadow'>我们的回忆</button>
        <button class='p-4 bg-white rounded-xl shadow'>亲密小彩蛋</button>
      </div>
    </main>
  `
}).mount('#app')

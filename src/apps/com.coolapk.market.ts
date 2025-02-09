import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coolapk.market',
  name: '酷安',
  groups: [
    {
      key: 1,
      name: '评论区广告',
      activityIds: 'null',
      rules: '[text="广告"] < * < * -3 >* +1 @[text="关闭"]',
    },
    {
      key: 2,
      name: '启动全屏广告',
      activityIds: 'null',
      rules: '[text="感谢反馈，已经为您关闭该广告"] + @[text="知道了"]',
    },
  ],
});

import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.duokan.reader',
  name: '多看阅读',
  groups: [
    {
      key: 3,
      name: '全屏广告',
      activityIds: '.DkMainActivity',
      rules: '[text="点击卡片查看详情"] + @[text="广告"]',
    },
    {
      key: 2,
      name: '全屏广告2',
      activityIds: '.DkMainActivity',
      rules: '[text="感谢反馈，已经为您关闭该广告"] + @[text="知道了"]',
    },
  ],
});

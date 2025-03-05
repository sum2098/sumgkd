import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.systemAdSolution',
  name: '智能服务',
  groups: [
    {
      key: 1,
      name: '不希望看到',
      activityIds: 'null',
      rules: '@[text="不感兴趣"] + [text="减少这类内容"]',
    },
    {
      key: 2,
      name: '不感兴趣',
      activityIds: 'null',
      rules: '[text="不感兴趣"] +1 * > * > * > [text="不感兴趣"]',
    },
    {
      key: 3,
      name: '不希望看到',
      activityIds: 'com.xiaomi.ad.feedback.FeedbackReasonWindow',
      rules: '@[text="不感兴趣"] +2 [text="出现过于频繁"]',
    },
  ],
});

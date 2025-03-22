import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.tieba',
  name: '百度贴吧',
  groups: [
    {
      key: 1,
      name: '首页直播',
      activityIds: '.tblauncher.MainTabActivity',
      rules:
        '[text="直播中"] -1 * < [name="android.widget.LinearLayout"] -2 * < [name="android.widget.RelativeLayout"] -2 * > [name="android.view.View"] +3 [name="android.widget.LinearLayout"] > * +1 @[name="android.widget.ImageView"]',
    },
    {
      key: 2,
      name: '不感兴趣',
      activityIds: '.tblauncher.MainTabActivity',
      rules: '[text="选择不喜欢的理由"] +1 @[name="android.view.View"]',
    },
  ],
});

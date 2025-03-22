import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.tieba',
  name: '百度贴吧',
  groups: [
    {
      key: 1,
      name: '首页直播和广告',
      activityIds: '.tblauncher.MainTabActivity',
      rules: [
        '[text="直播中"] -1 * < [name="android.widget.LinearLayout"] -2 * < [name="android.widget.RelativeLayout"] -2 * > [name="android.view.View"] +3 [name="android.widget.LinearLayout"] > * +1 @[name="android.widget.ImageView"]',
        '[text="选择不喜欢的理由"] +1 @[name="android.view.View"]',
        '[text="立即查看"] -1 * < [name="android.widget.RelativeLayout"] -2 * < [name="android.widget.LinearLayout"] -1 [name="android.widget.RelativeLayout"] > [name="android.widget.LinearLayout"] > [name="android.widget.FrameLayout"] +2 * > * > @[name="android.widget.FrameLayout"]',
        '[text="功能"] -1 [text="隐私"] -1 [text="权限"] -3 * < [name="android.view.ViewGroup"] -1 [name="android.widget.RelativeLayout"] > [name="android.widget.RelativeLayout"] > [name="android.widget.TextView"] +1 @[name="android.widget.FrameLayout"]',
        '[text="功能"] -1 [text="隐私"] -1 [text="权限"] -3 * < [name="android.view.ViewGroup"] -1 [name="android.widget.RelativeLayout"] > * +2 @[name="android.widget.FrameLayout"]',
        '[text="功能"] -1 [text="隐私"] -1 [text="权限"] -3 * < [name="android.view.ViewGroup"] -1 [name="android.widget.RelativeLayout"] < * < * < [name="android.widget.FrameLayout"] -1 [name="android.widget.RelativeLayout"] > [name="android.widget.ImageView"] +3 @[name="android.widget.FrameLayout"]',
        '[name="android.view.ViewGroup"] -1 [name="android.view.ViewGroup"] < * < * < [name="android.widget.FrameLayout"] -2 * < [name="android.widget.LinearLayout"] -1 [name="android.widget.RelativeLayout"] > * > * +2 * > * > @[name="android.widget.FrameLayout"]',
        '[text="选择不喜欢理由"] +1 @[name="android.view.View"]',
      ],
    },
    {
      key: 2,
      name: '评论区广告',
      activityIds: '.pb.pb.main.PbActivity',
      rules: [
        '[text="功能"] -1 [text="隐私"] -1 [text="权限"] -3 * < [name="android.view.ViewGroup"] -1 [name="android.widget.RelativeLayout"] > [name="android.widget.RelativeLayout"] > [name="android.widget.TextView"] +1 @[name="android.widget.FrameLayout"]',
        '[text="功能"] -1 [text="隐私"] -1 [text="权限"] -3 * < [name="android.view.ViewGroup"] -1 [name="android.widget.RelativeLayout"] > * +2 @[name="android.widget.FrameLayout"]',
        '[text="功能"] -1 [text="隐私"] -1 [text="权限"] -3 * < [name="android.view.ViewGroup"] -1 [name="android.widget.RelativeLayout"] < * < * < [name="android.widget.FrameLayout"] -1 [name="android.widget.RelativeLayout"] > [name="android.widget.ImageView"] +3 @[name="android.widget.FrameLayout"]',
        '[name="android.view.ViewGroup"] -1 [name="android.view.ViewGroup"] < * < * < [name="android.widget.FrameLayout"] -2 * < [name="android.widget.LinearLayout"] -1 [name="android.widget.RelativeLayout"] > * > * +2 * > * > @[name="android.widget.FrameLayout"]',
        '[text="选择不喜欢理由"] +1 @[name="android.view.View"]',
      ],
    },
  ],
});

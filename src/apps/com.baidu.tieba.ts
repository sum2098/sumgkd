import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.tieba',
  name: '百度贴吧',
  groups: [
    {
      key: 1,
      name: '首页直播',
      activityIds: 'null',
      rules: '[text="直播中"] < * < * -2 > * +3 > * +1 @[vid="obfuscated"]',
    },
    {
      key: 2,
      name: '评论区顶部广告',
      activityIds: 'null',
      rules: '[text="分享"] < * < * < * < * +1 > * > * +1 > * +3 > * +1 > * > * @[vid="obfuscated"]',
    },
    {
      key: 3,
      name:'评论区内广告',
      activityIds: 'null',
      rules: '[text="广告"] < * < * < * < * < * < * < * -1 > * +3 @[vid="obfuscated"]',
    },
  ],
});

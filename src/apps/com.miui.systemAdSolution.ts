import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.systemAdSolution',
  name: '智能服务',
  groups: [
    {
      key: 5,
      name: '不希望看到',
      activityIds: 'null',
      rules: '{
        @[text="不感兴趣"] + [text="减少这类内容"],
      @[text="不感兴趣"] + [text="重复出现"],
    }',
    },
  ],
});

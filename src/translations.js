export const Translations = [
  {
    id: 'zh-CN',
    name: 'Simplified Chinese - 简体中文',
    translation: {
      title: 'WiFi 连接卡',
      'desc.use':
        '打印一张带有 WiFi 详细信息的登录卡片，把它贴到餐馆门口、家里客厅...',
      'desc.privacy':
        '您的 WiFi 信息永远不会发送到服务端。本网站不使用追踪、分析或指纹识别。',
      'desc.source': '源码',
      'wifi.login': '连接 WiFi',
      'wifi.name': '网络名称',
      'wifi.name.hiddenSSID': '隐藏 SSID',
      'wifi.name.placeholder': 'WiFi 网络名称',
      'wifi.password': '密码',
      'wifi.password.placeholder': '密码',
      'wifi.password.hide': '隐藏密码',
      'wifi.password.encryption': '加密',
      'wifi.password.encryption.none': '无',
      'wifi.tip': '将手机摄像头对准二维码即可自动连接',
      'wifi.alert.name': '网络名称不能为空',
      'wifi.alert.password.length.5':
        '密码必须至少为 5 个字符，或将加密更改为“无”',
      'wifi.alert.password.length.8':
        '密码必须至少为 8 个字符，或将加密更改为“无”',
      'button.rotate': '翻转卡片',
      'button.print': '打印',
      select: '选择语言',
    },
  },
].sort((a, b) => {
  return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
});

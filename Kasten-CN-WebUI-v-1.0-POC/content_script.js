{
  "manifest_version": 2,
  "name": "Công Cụ Đặt Hàng 1688express",
  "description": "Tiện ích giúp bạn đặt hàng từ 1688express.vn trực tiếp.",
  "version": "1.0",
  "permissions": [
    "activeTab",
    "storage",
    "tabs"
  ],
  "browser_action": {
    "default_popup": "popup.html",
    "default_icon": "icon.png"
  },
  "background": {
    "scripts": ["background.js"],
    "persistent": false
  },
  "content_scripts": [
    {
      "matches": ["https://1688express.vn/*"],
      "js": ["content.js"]
    }
  ]
}


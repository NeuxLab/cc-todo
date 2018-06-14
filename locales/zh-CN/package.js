module.exports = {
  description: '待办事项插件',
  actionProviders: [
    {
      name: "添加到Todo",
      description: "将这段文字转换成一个Todo项"
    }
  ],
  itemTypes: {
    "neux": {
      "todo": {
        "_meta": {
          "localizedName": "待办"
        }
      }
    }
  },
}

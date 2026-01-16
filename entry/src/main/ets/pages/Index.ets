import { common, Want } from '@kit.AbilityKit';
import power from '@ohos.power'
@Entry
@Component
struct Index {
  // 模拟的桌面应用数据（稍后我们替换为真实的系统应用列表）
  @State appList: Array<string> = ['相机', '相册', '设置', '文件管理', '浏览器', '计算器'];
  // 模拟的Dock栏数据
  @State dockList: Array<string> = ['智慧语音', '搜索', '多屏协同'];

  build() {
    // 根容器，层叠布局，模拟桌面壁纸和上层元素
    Stack() {
      // 1. 桌面壁纸
      Image($r('app.media.background')) // 暂时用图标代替，你可以换成一张好看的风景图
        .width('100%')
        .height('100%')
        .objectFit(ImageFit.Cover)
        .opacity(0.1) // 调淡一点，像壁纸

      // 2. 桌面主体内容
      Column() {
        // --- 上半部分：桌面图标区域 (Grid) ---
        Grid() {
          ForEach(this.appList, (item: string) => {
            GridItem() {
              Column({ space: 10 }) {
                // 图标
                Image($r('app.media.startIcon'))
                  .width(60)
                  .height(60)
                  .borderRadius(10)
                // 文字
                Text(item)
                  .fontSize(14)
                  .fontColor(Color.White)
                  .fontWeight(FontWeight.Medium)
              }
              .width(100)
              .height(100)
              .justifyContent(FlexAlign.Center)
              .onClick(() => {
                // 点击图标的逻辑，稍后实现启动应用
                console.info('Clicked: ' + item);
              })
            }
          })
        }
        .columnsTemplate('1fr 1fr 1fr 1fr 1fr 1fr') // 设为6列，模拟PC宽屏布局
        .rowsGap(20)
        .columnsGap(20)
        .width('90%')
        .height('85%') // 占据大部分屏幕
        .margin({ top: 20 })

        // --- 下半部分：PC风格 Dock 栏 / 任务栏 ---
        Row() {
          // 左侧：开始菜单按钮
          Image($r('app.media.startIcon')) // 以后换成 Win/鸿蒙 logo
            .width(40)
            .height(40)
            .margin({ left: 20, right: 20 })
            .onClick(() => {
              // 弹出开始菜单逻辑
            })

          // 中间：常用应用 Dock
          List({ space: 15 }) {
            ForEach(this.dockList, (item: string) => {
              ListItem() {
                Column() {
                  Image($r('app.media.startIcon'))
                    .width(45)
                    .height(45)
                    .borderRadius(8)
                    .backgroundColor('rgba(255,255,255,0.2)') // 半透明背景
                }
                .padding(5)
              }
            })
          }
          .listDirection(Axis.Horizontal)
          .height('100%')
          .layoutWeight(1) // 占满中间空间

          // 右侧：状态栏（时间、WiFi等）
          Row({ space: 10 }) {
            Text('14:30')
              .fontColor(Color.White)
            Text('2026/01/16')
              .fontColor(Color.White)
          }
          .margin({ right: 20 })
        }
        .width('100%')
        .height('10%') // 底部 Dock 高度
        .backgroundColor('rgba(0,0,0,0.6)') // 毛玻璃黑色背景
        .alignItems(VerticalAlign.Center)
      }
      .width('100%')
      .height('100%')
    }
    .width('100%')
    .height('100%')
    .backgroundColor(Color.Black)
  }
}
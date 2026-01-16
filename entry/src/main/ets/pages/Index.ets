import { common, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { AppModel, AppInfo } from '../model/AppModel';

@Entry
@Component
struct Index {
  @State appList: Array<AppInfo> = [];
  @State dockList: Array<string> = ['智慧语音', '搜索', '多屏协同'];

  aboutToAppear() {
    this.initData();
  }

  async initData() {
    console.info('Launcher: 开始获取应用列表...');
    try {
      // 1. 尝试获取真实数据
      let list = await AppModel.getAppList();

      // 2. 【关键逻辑】如果是预览器（list为空），则加载模拟数据让界面好看点
      if (list.length === 0) {
        console.warn('Launcher: 未获取到真实数据(可能是预览器环境)，加载模拟数据...');
        this.appList = this.getMockData();
      } else {
        console.info(`Launcher: 获取成功，共找到 ${list.length} 个应用`);
        this.appList = list;
      }
    } catch (err) {
      // 出错了也加载模拟数据
      this.appList = this.getMockData();
    }
  }

  // 【新增】模拟数据生成器，只为了预览好看
  getMockData(): Array<AppInfo> {
    let mock: Array<AppInfo> = [];
    for (let i = 0; i < 12; i++) {
      mock.push({
        name: `测试应用 ${i + 1}`,
        bundleName: `com.test.app${i}`,
        abilityName: 'MainAbility',
        icon: $r('app.media.startIcon') // 确保你有这个图标
      });
    }
    return mock;
  }

  launchApp(bundleName: string, abilityName: string) {
    // 预览器里点击会报错，这是正常的，真机上不会
    let context = getContext(this) as common.UIAbilityContext;
    let want: Want = { bundleName: bundleName, abilityName: abilityName };
    context.startAbility(want).catch((err: BusinessError) => {
      console.error(`Launcher: 启动失败 ${err.code}`);
    });
  }

  build() {
    Stack() {
      // 壁纸
      Image($r('app.media.background'))
        .width('100%')
        .height('100%')
        .objectFit(ImageFit.Cover)
        .opacity(1.0)

      Column() {
        // 图标区域
        Grid() {
          ForEach(this.appList, (item: AppInfo) => {
            GridItem() {
              Column({ space: 8 }) {
                Image(item.icon)
                  .width(55)
                  .height(55)
                  .borderRadius(10)
                  .alt($r('app.media.startIcon')) // 图标加载失败时的占位图

                Text(item.name)
                  .fontSize(12)
                  .fontColor(Color.White)
                  .maxLines(1)
                  .textOverflow({ overflow: TextOverflow.Ellipsis })
                  .textAlign(TextAlign.Center)
                  .width('100%')
                  .shadow({ radius: 5, color: Color.Black, offsetY: 1 })
              }
              .width(90)
              .height(90)
              .justifyContent(FlexAlign.Center)
              .onClick(() => {
                this.launchApp(item.bundleName, item.abilityName);
              })
            }
          })
        }
        .columnsTemplate('1fr 1fr 1fr 1fr 1fr 1fr')
        .rowsGap(15)
        .columnsGap(15)
        .width('95%')
        .height('85%')
        .margin({ top: 30 })

        // 底部任务栏
        Row() {
          Image($r('app.media.startIcon'))
            .width(36).height(36).margin({ left: 15, right: 15 })
          Divider().vertical(true).height(20).color('rgba(255,255,255,0.4)').margin({ right: 10 })
          List({ space: 10 }) {
            ForEach(this.dockList, (item: string) => {
              ListItem() {
                Column() {
                  Image($r('app.media.startIcon'))
                    .width(40).height(40).borderRadius(8).backgroundColor('rgba(255,255,255,0.15)')
                }
                .padding(4)
              }
            })
          }
          .listDirection(Axis.Horizontal).height('100%').layoutWeight(1)
          Row({ space: 10 }) {
            Text('100%').fontColor(Color.White).fontSize(12)
            Text('16:20').fontColor(Color.White).fontSize(12)
          }
          .margin({ right: 20 })
        }
        .width('100%')
        .height(56)
        .backgroundColor('rgba(20, 20, 20, 0.85)')
        .backdropBlur(20)
        .alignItems(VerticalAlign.Center)
      }
    }
    .width('100%')
    .height('100%')
    .backgroundColor(Color.Black)
  }
}
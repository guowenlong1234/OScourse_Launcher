if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    appList?: Array<AppInfo>;
    dockList?: Array<string>;
}
import type common from "@ohos:app.ability.common";
import type Want from "@ohos:app.ability.Want";
import type { BusinessError } from "@ohos:base";
import { AppModel } from "@normalized:N&&&entry/src/main/ets/model/AppModel&";
import type { AppInfo } from "@normalized:N&&&entry/src/main/ets/model/AppModel&";
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__appList = new ObservedPropertyObjectPU([], this, "appList");
        this.__dockList = new ObservedPropertyObjectPU(['智慧语音', '搜索', '多屏协同'], this, "dockList");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
        if (params.appList !== undefined) {
            this.appList = params.appList;
        }
        if (params.dockList !== undefined) {
            this.dockList = params.dockList;
        }
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__appList.purgeDependencyOnElmtId(rmElmtId);
        this.__dockList.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__appList.aboutToBeDeleted();
        this.__dockList.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __appList: ObservedPropertyObjectPU<Array<AppInfo>>;
    get appList() {
        return this.__appList.get();
    }
    set appList(newValue: Array<AppInfo>) {
        this.__appList.set(newValue);
    }
    private __dockList: ObservedPropertyObjectPU<Array<string>>;
    get dockList() {
        return this.__dockList.get();
    }
    set dockList(newValue: Array<string>) {
        this.__dockList.set(newValue);
    }
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
            }
            else {
                console.info(`Launcher: 获取成功，共找到 ${list.length} 个应用`);
                this.appList = list;
            }
        }
        catch (err) {
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
                icon: { "id": 16777225, "type": 20000, params: [], "bundleName": "com.example.oscourse_launcher", "moduleName": "entry" } // 确保你有这个图标
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
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.debugLine("entry/src/main/ets/pages/Index.ets(59:5)", "entry");
            Stack.width('100%');
            Stack.height('100%');
            Stack.backgroundColor(Color.Black);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 壁纸
            Image.create({ "id": 16777216, "type": 20000, params: [], "bundleName": "com.example.oscourse_launcher", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/Index.ets(61:7)", "entry");
            // 壁纸
            Image.width('100%');
            // 壁纸
            Image.height('100%');
            // 壁纸
            Image.objectFit(ImageFit.Cover);
            // 壁纸
            Image.opacity(1.0);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(67:7)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 图标区域
            Grid.create();
            Grid.debugLine("entry/src/main/ets/pages/Index.ets(69:9)", "entry");
            // 图标区域
            Grid.columnsTemplate('1fr 1fr 1fr 1fr 1fr 1fr');
            // 图标区域
            Grid.rowsGap(15);
            // 图标区域
            Grid.columnsGap(15);
            // 图标区域
            Grid.width('95%');
            // 图标区域
            Grid.height('85%');
            // 图标区域
            Grid.margin({ top: 30 });
        }, Grid);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        GridItem.create(() => { }, false);
                        GridItem.debugLine("entry/src/main/ets/pages/Index.ets(71:13)", "entry");
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation2(itemCreation2, GridItem);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create({ space: 8 });
                            Column.debugLine("entry/src/main/ets/pages/Index.ets(72:15)", "entry");
                            Column.width(90);
                            Column.height(90);
                            Column.justifyContent(FlexAlign.Center);
                            Column.onClick(() => {
                                this.launchApp(item.bundleName, item.abilityName);
                            });
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Image.create(item.icon);
                            Image.debugLine("entry/src/main/ets/pages/Index.ets(73:17)", "entry");
                            Image.width(55);
                            Image.height(55);
                            Image.borderRadius(10);
                            Image.alt({ "id": 16777225, "type": 20000, params: [], "bundleName": "com.example.oscourse_launcher", "moduleName": "entry" });
                        }, Image);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item.name);
                            Text.debugLine("entry/src/main/ets/pages/Index.ets(79:17)", "entry");
                            Text.fontSize(12);
                            Text.fontColor(Color.White);
                            Text.maxLines(1);
                            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                            Text.textAlign(TextAlign.Center);
                            Text.width('100%');
                            Text.shadow({ radius: 5, color: Color.Black, offsetY: 1 });
                        }, Text);
                        Text.pop();
                        Column.pop();
                        GridItem.pop();
                    };
                    observedDeepRender();
                }
            };
            this.forEachUpdateFunction(elmtId, this.appList, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        // 图标区域
        Grid.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 底部任务栏
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(105:9)", "entry");
            // 底部任务栏
            Row.width('100%');
            // 底部任务栏
            Row.height(56);
            // 底部任务栏
            Row.backgroundColor('rgba(20, 20, 20, 0.85)');
            // 底部任务栏
            Row.backdropBlur(20);
            // 底部任务栏
            Row.alignItems(VerticalAlign.Center);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777225, "type": 20000, params: [], "bundleName": "com.example.oscourse_launcher", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/Index.ets(106:11)", "entry");
            Image.width(36);
            Image.height(36);
            Image.margin({ left: 15, right: 15 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.debugLine("entry/src/main/ets/pages/Index.ets(108:11)", "entry");
            Divider.vertical(true);
            Divider.height(20);
            Divider.color('rgba(255,255,255,0.4)');
            Divider.margin({ right: 10 });
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ space: 10 });
            List.debugLine("entry/src/main/ets/pages/Index.ets(109:11)", "entry");
            List.listDirection(Axis.Horizontal);
            List.height('100%');
            List.layoutWeight(1);
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, true);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(deepRenderFunction, true);
                        ListItem.debugLine("entry/src/main/ets/pages/Index.ets(111:15)", "entry");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                            Column.debugLine("entry/src/main/ets/pages/Index.ets(112:17)", "entry");
                            Column.padding(4);
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Image.create({ "id": 16777225, "type": 20000, params: [], "bundleName": "com.example.oscourse_launcher", "moduleName": "entry" });
                            Image.debugLine("entry/src/main/ets/pages/Index.ets(113:19)", "entry");
                            Image.width(40);
                            Image.height(40);
                            Image.borderRadius(8);
                            Image.backgroundColor('rgba(255,255,255,0.15)');
                        }, Image);
                        Column.pop();
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.dockList, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        List.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 10 });
            Row.debugLine("entry/src/main/ets/pages/Index.ets(121:11)", "entry");
            Row.margin({ right: 20 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('100%');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(122:13)", "entry");
            Text.fontColor(Color.White);
            Text.fontSize(12);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('16:20');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(123:13)", "entry");
            Text.fontColor(Color.White);
            Text.fontSize(12);
        }, Text);
        Text.pop();
        Row.pop();
        // 底部任务栏
        Row.pop();
        Column.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.example.oscourse_launcher", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false", moduleType: "followWithHap" });

if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    appList?: Array<string>;
    dockList?: Array<string>;
}
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__appList = new ObservedPropertyObjectPU(['相机', '相册', '设置', '文件管理', '浏览器', '计算器'], this, "appList");
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
    // 模拟的桌面应用数据（稍后我们替换为真实的系统应用列表）
    private __appList: ObservedPropertyObjectPU<Array<string>>;
    get appList() {
        return this.__appList.get();
    }
    set appList(newValue: Array<string>) {
        this.__appList.set(newValue);
    }
    // 模拟的Dock栏数据
    private __dockList: ObservedPropertyObjectPU<Array<string>>;
    get dockList() {
        return this.__dockList.get();
    }
    set dockList(newValue: Array<string>) {
        this.__dockList.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 根容器，层叠布局，模拟桌面壁纸和上层元素
            Stack.create();
            Stack.debugLine("entry/src/main/ets/pages/Index.ets(13:5)", "entry");
            // 根容器，层叠布局，模拟桌面壁纸和上层元素
            Stack.width('100%');
            // 根容器，层叠布局，模拟桌面壁纸和上层元素
            Stack.height('100%');
            // 根容器，层叠布局，模拟桌面壁纸和上层元素
            Stack.backgroundColor(Color.Black);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 1. 桌面壁纸
            Image.create({ "id": 16777216, "type": 20000, params: [], "bundleName": "com.example.oscourse_launcher", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/Index.ets(15:7)", "entry");
            // 1. 桌面壁纸
            Image.width('100%');
            // 1. 桌面壁纸
            Image.height('100%');
            // 1. 桌面壁纸
            Image.objectFit(ImageFit.Cover);
            // 1. 桌面壁纸
            Image.opacity(0.1);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 2. 桌面主体内容
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(22:7)", "entry");
            // 2. 桌面主体内容
            Column.width('100%');
            // 2. 桌面主体内容
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // --- 上半部分：桌面图标区域 (Grid) ---
            Grid.create();
            Grid.debugLine("entry/src/main/ets/pages/Index.ets(24:9)", "entry");
            // --- 上半部分：桌面图标区域 (Grid) ---
            Grid.columnsTemplate('1fr 1fr 1fr 1fr 1fr 1fr');
            // --- 上半部分：桌面图标区域 (Grid) ---
            Grid.rowsGap(20);
            // --- 上半部分：桌面图标区域 (Grid) ---
            Grid.columnsGap(20);
            // --- 上半部分：桌面图标区域 (Grid) ---
            Grid.width('90%');
            // --- 上半部分：桌面图标区域 (Grid) ---
            Grid.height('85%');
            // --- 上半部分：桌面图标区域 (Grid) ---
            Grid.margin({ top: 20 });
        }, Grid);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        GridItem.create(() => { }, false);
                        GridItem.debugLine("entry/src/main/ets/pages/Index.ets(26:13)", "entry");
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation2(itemCreation2, GridItem);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create({ space: 10 });
                            Column.debugLine("entry/src/main/ets/pages/Index.ets(27:15)", "entry");
                            Column.width(100);
                            Column.height(100);
                            Column.justifyContent(FlexAlign.Center);
                            Column.onClick(() => {
                                // 点击图标的逻辑，稍后实现启动应用
                                console.info('Clicked: ' + item);
                            });
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            // 图标
                            Image.create({ "id": 16777225, "type": 20000, params: [], "bundleName": "com.example.oscourse_launcher", "moduleName": "entry" });
                            Image.debugLine("entry/src/main/ets/pages/Index.ets(29:17)", "entry");
                            // 图标
                            Image.width(60);
                            // 图标
                            Image.height(60);
                            // 图标
                            Image.borderRadius(10);
                        }, Image);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            // 文字
                            Text.create(item);
                            Text.debugLine("entry/src/main/ets/pages/Index.ets(34:17)", "entry");
                            // 文字
                            Text.fontSize(14);
                            // 文字
                            Text.fontColor(Color.White);
                            // 文字
                            Text.fontWeight(FontWeight.Medium);
                        }, Text);
                        // 文字
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
        // --- 上半部分：桌面图标区域 (Grid) ---
        Grid.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // --- 下半部分：PC风格 Dock 栏 / 任务栏 ---
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(57:9)", "entry");
            // --- 下半部分：PC风格 Dock 栏 / 任务栏 ---
            Row.width('100%');
            // --- 下半部分：PC风格 Dock 栏 / 任务栏 ---
            Row.height('10%');
            // --- 下半部分：PC风格 Dock 栏 / 任务栏 ---
            Row.backgroundColor('rgba(0,0,0,0.6)');
            // --- 下半部分：PC风格 Dock 栏 / 任务栏 ---
            Row.alignItems(VerticalAlign.Center);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 左侧：开始菜单按钮
            Image.create({ "id": 16777225, "type": 20000, params: [], "bundleName": "com.example.oscourse_launcher", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/Index.ets(59:11)", "entry");
            // 左侧：开始菜单按钮
            Image.width(40);
            // 左侧：开始菜单按钮
            Image.height(40);
            // 左侧：开始菜单按钮
            Image.margin({ left: 20, right: 20 });
            // 左侧：开始菜单按钮
            Image.onClick(() => {
                // 弹出开始菜单逻辑
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 中间：常用应用 Dock
            List.create({ space: 15 });
            List.debugLine("entry/src/main/ets/pages/Index.ets(68:11)", "entry");
            // 中间：常用应用 Dock
            List.listDirection(Axis.Horizontal);
            // 中间：常用应用 Dock
            List.height('100%');
            // 中间：常用应用 Dock
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
                        ListItem.debugLine("entry/src/main/ets/pages/Index.ets(70:15)", "entry");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                            Column.debugLine("entry/src/main/ets/pages/Index.ets(71:17)", "entry");
                            Column.padding(5);
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Image.create({ "id": 16777225, "type": 20000, params: [], "bundleName": "com.example.oscourse_launcher", "moduleName": "entry" });
                            Image.debugLine("entry/src/main/ets/pages/Index.ets(72:19)", "entry");
                            Image.width(45);
                            Image.height(45);
                            Image.borderRadius(8);
                            Image.backgroundColor('rgba(255,255,255,0.2)');
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
        // 中间：常用应用 Dock
        List.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 右侧：状态栏（时间、WiFi等）
            Row.create({ space: 10 });
            Row.debugLine("entry/src/main/ets/pages/Index.ets(87:11)", "entry");
            // 右侧：状态栏（时间、WiFi等）
            Row.margin({ right: 20 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('14:30');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(88:13)", "entry");
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('2026/01/16');
            Text.debugLine("entry/src/main/ets/pages/Index.ets(90:13)", "entry");
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        // 右侧：状态栏（时间、WiFi等）
        Row.pop();
        // --- 下半部分：PC风格 Dock 栏 / 任务栏 ---
        Row.pop();
        // 2. 桌面主体内容
        Column.pop();
        // 根容器，层叠布局，模拟桌面壁纸和上层元素
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

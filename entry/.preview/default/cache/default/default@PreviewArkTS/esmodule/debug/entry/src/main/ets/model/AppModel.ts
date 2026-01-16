import launcherBundleManager from "@ohos:bundle.launcherBundleManager";
export interface AppInfo {
    name: string;
    bundleName: string;
    abilityName: string;
    icon: string | Resource;
}
export class AppModel {
    static async getAppList(): Promise<AppInfo[]> {
        let appList: AppInfo[] = [];
        try {
            let launcherAbilityInfos = await launcherBundleManager.getAllLauncherAbilityInfo(100);
            for (let info of launcherAbilityInfos) {
                let elementName = info.elementName;
                if (elementName.bundleName.includes('OScourseLauncher')) {
                    continue;
                }
                appList.push({
                    name: elementName.bundleName,
                    bundleName: elementName.bundleName,
                    abilityName: elementName.abilityName,
                    icon: (info.applicationInfo && info.applicationInfo.iconResource) ? { "id": -1, "type": -1, params: [info.applicationInfo.iconResource.moduleName, info.applicationInfo.iconResource.type, info.applicationInfo.iconResource.id], "bundleName": "com.example.oscourse_launcher", "moduleName": "entry" } :
                        ""
                });
            }
        }
        catch (err) {
            console.error(`Launcher Info Error: ${JSON.stringify(err)}`);
        }
        return appList;
    }
}

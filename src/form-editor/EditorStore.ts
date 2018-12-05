import { action } from "mobx";

export class EditorStore {
  /**
   * 添加控件 至 中间区域
   */
  @action
  public addToContainer = (widgetObj) => {
    console.log(widgetObj)
  };
}

import { action, observable } from "mobx";

export class EditorStore {
  /**
   * 添加控件 至 中间区域
   */
  @action
  public addToContainer = (widgetObj) => {
    this.form.push(widgetObj.widget)
  };

  @observable
  public form =observable([]);

  @action
  public setForm=(form)=>{
    this.form=form
  }

  @action
  public moveRow=(dragIndex,hoverIndex)=>{
    const dragData=this.form[dragIndex];
    this.form.splice(dragIndex,1);
    this.form.splice(hoverIndex,0,dragData)
  }
}

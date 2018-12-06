import * as React from "react";
import { EditorStore } from "../EditorStore";
import { Widget } from "./Widget";
import { observer } from "mobx-react";
import * as style from "./Widget.module.css";

@observer
export class WidgetList extends React.Component<{ store: EditorStore }> {
  public render() {
    const { store } = this.props;
    return (
      <div className={style.widgetWrap}>
        <Widget
          widget={{
            id: "输入框",
            title: "123",
            type: "input",
            uiSchema: {
              id:undefined,
              hidden:false,
              placeholder: "请输入"
            }
          }}
          store={store}
          addToContainer={store.addToContainer}
        />
        <Widget
          widget={{
            id: "选择框",
            title: "123",
            type: "select",
            uiSchema: {
              id:undefined,
              hidden:false,
              placeholder: "请输入"
            }
          }}
          store={store}
          addToContainer={store.addToContainer}
        />
      </div>
    );
  }
}

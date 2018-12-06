import * as React from "react";
import { EditorStore } from "../EditorStore";
import { Widget } from "./Widget";
import { observer } from "mobx-react";

@observer
export class WidgetList extends React.Component<{ store: EditorStore }> {
  public render() {
    const { store } = this.props;
    return (
      <div>
        <Widget
          widget={{ id: '输入框', title: "123",type:"input" }}
          store={store}
          addToContainer={store.addToContainer}
        />
        <Widget
          widget={{ id: '选择框', title: "123",type:"select" }}
          store={store}
          addToContainer={store.addToContainer}
        />
      </div>
    );
  }
}

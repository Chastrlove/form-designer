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
          widget={{ id: 1, title: "123" }}
          store={store}
          addToContainer={store.addToContainer}
        />
      </div>
    );
  }
}

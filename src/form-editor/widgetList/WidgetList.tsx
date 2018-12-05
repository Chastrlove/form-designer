import * as React from "react";
import { EditorStore } from "../EditorStore";
import {Widget} from "./Widget";

export class WidgetList extends React.Component<{store:EditorStore}> {
  public render() {
    const {store} =this.props;
    return (
      <div>
        <Widget addToContainer={store.addToContainer} />
      </div>
    );
  }
}

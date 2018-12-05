import { DragDropContextProvider } from "react-dnd";
import * as React from "react";
import HTML5Backend from "react-dnd-html5-backend";
import { observer } from "mobx-react";
import * as style from "./Editor.module.css";
import Container from "./container/Container";
import { EditorStore } from "./EditorStore";
import { WidgetList } from "./widgetList/WidgetList";


@observer
export class Editor extends React.Component<any> {
  store = new EditorStore();

  render() {
    return (
      <div className={style.editor}>
        <DragDropContextProvider backend={HTML5Backend}>
          <WidgetList store={this.store} />
          <Container store={this.store} />
        </DragDropContextProvider>
      </div>
    );
  }
}

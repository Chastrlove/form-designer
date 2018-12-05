import * as React from "react";
import { observer } from "mobx-react";
import * as style from "./Widget.module.css";

import { DragSource } from "react-dnd";

const ItemTypes = {
  BOX: "box"
};

const boxSource = {
  beginDrag(props) {
    return {
      widget: props.widget,
      store: props.store
    };
  },

  endDrag(props, monitor) {
    console.log("endDrag", `endDrag`);

    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    console.log(item);

    if (item && item.store) {
      // item.store.leftModule.setDragEventFlag();
    }

    console.log("dropResult:", dropResult);

    if (dropResult && dropResult.canDrop && dropResult.isOver) {
      props.addToContainer({
        widget: item.widget,
        ...dropResult
      });
    }
  }
};

@DragSource(ItemTypes.BOX, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))

@observer
export class Widget extends React.Component<any> {
  render() {
    const { isDragging, connectDragSource } = this.props;

    return (
      connectDragSource &&
      connectDragSource(<div className={style.widget}>input</div>, {
        dropEffect: "move"
      })
    );
  }
}


import * as React from "react";
import { observer } from "mobx-react";
import * as style from "./Widget.module.css";

import { DragSource } from "react-dnd";

const ItemTypes = {
  BOX: "row"
};

const boxSource = {
  beginDrag(props) {
    return {
      widget: props.widget,
      type:'outWidget',
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

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
    const { isDragging, connectDragSource, widget } = this.props;

    return (
      connectDragSource &&
      connectDragSource(<div className={style.widget}>{widget.type}</div>, {
        dropEffect: "move"
      })
    );
  }
}

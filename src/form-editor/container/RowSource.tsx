import * as React from "react";
import { observer } from "mobx-react";
import { DragSource, DropTarget } from "react-dnd";
import * as style from "./RowSource.module.css";

function dragDirection(
  dragIndex,
  hoverIndex,
  initialClientOffset,
  clientOffset,
  sourceClientOffset
) {
  const hoverMiddleY = (initialClientOffset.y - sourceClientOffset.y) / 2;
  const hoverClientY = clientOffset.y - sourceClientOffset.y;
  if (dragIndex < hoverIndex && hoverClientY > hoverMiddleY) {
    return "downward";
  }
  if (dragIndex > hoverIndex && hoverClientY < hoverMiddleY) {
    return "upward";
  }
}

const rowSource = {
  beginDrag(props) {
    return {
      index: props.rowIndex
    };
  }
};

const rowTarget = {
  drop(props, monitor) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.rowIndex;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Time to actually perform the action
    props.moveRow(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
};

@DropTarget("row", rowTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  sourceClientOffset: monitor.getSourceClientOffset()
}))
@DragSource("row", rowSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  dragRow: monitor.getItem(),
  clientOffset: monitor.getClientOffset(),
  initialClientOffset: monitor.getInitialClientOffset()
}))
@observer
export class RowSource extends React.Component<any> {
  public render() {
    const {
      connectDragSource,
      connectDropTarget,
      content,
      dragRow,
      clientOffset,
      sourceClientOffset,
      isOver,
      initialClientOffset,
      ...restProps
    } = this.props;

    let className = restProps.className || '' ;
    if (isOver && initialClientOffset) {
      const direction = dragDirection(
        dragRow.index,
        restProps.rowIndex,
        initialClientOffset,
        clientOffset,
        sourceClientOffset
      );
      if (direction === "downward") {
        className = style['drop-over-downward'];
      }
      if (direction === "upward") {
        className = style['drop-over-upward'];
      }
    }

    return connectDragSource(
      connectDropTarget(
        <div className={style.row + ' ' + className}>{content.id}</div>
      )
    );
  }
}

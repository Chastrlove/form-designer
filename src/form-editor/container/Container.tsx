import * as React from "react";
import * as style from "./Container.module.css";
import { observer } from "mobx-react";
import { DropTarget } from "react-dnd";
import { boxTarget } from "../dragEvent/DragEvent";

const ItemTypes = {
  BOX: "box"
};

@DropTarget(ItemTypes.BOX, boxTarget(), (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))
@observer
class Container extends React.Component<any> {
  render() {
    const { connectDropTarget } = this.props;
    return (
      connectDropTarget &&
      connectDropTarget(<div className={style.container} />)
    );
  }
}

export default Container;

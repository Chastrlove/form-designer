import * as React from "react";
import * as style from "./Container.module.css";
import { observer } from "mobx-react";
import { DropTarget } from "react-dnd";
import { boxTarget } from "../dragEvent/DragEvent";
import * as _ from "lodash";
import { RowSource } from "./RowSource";

const ItemTypes = {
  BOX: "row"
};

@DropTarget(ItemTypes.BOX, boxTarget(), (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))
@observer
class Container extends React.Component<any> {
  render() {
    const { connectDropTarget, store } = this.props;
    const { form } = store;
    return (
      connectDropTarget &&
      connectDropTarget(
        <div className={style.container}>
          {_.map(form, (item,index) => {
            return <RowSource rowIndex={index} content={item} store={store}/>;
          })}
        </div>
      )
    );
  }
}

export default Container;

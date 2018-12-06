import * as React from "react";
import * as style from "./Container.module.css";
import { observer } from "mobx-react";
import { DropTarget } from "react-dnd";
import { boxTarget } from "../dragEvent/DragEvent";
import * as _ from "lodash";
import { RowSource } from "./RowSource";

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
    const { connectDropTarget, store } = this.props;
    const { form,moveRow } = store;
    return (
      connectDropTarget &&
      connectDropTarget(
        <div className={style.container}>
          {_.map(form, (item,index) => {
            return <RowSource rowIndex={index} content={item} moveRow={moveRow}/>;
          })}
        </div>
      )
    );
  }
}

export default Container;

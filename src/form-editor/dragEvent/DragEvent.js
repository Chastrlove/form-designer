export const boxTarget = (target) => {
  return {
    drop(props, monitor, component) {
      if (!component) {
        return;
      }
      const { canDrop, isOver } = component.props;

      const { id = "root_$_", index = 0 } = props;

      return { canDrop, isOver, cuParentPath: id, index };
    },
  };
};
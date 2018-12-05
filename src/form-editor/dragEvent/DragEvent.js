export const boxTarget = (target) => {
  return {
    drop(props, monitor, component) {
      if (!component) {
        return;
      }
      console.log("jinru")

      if (props) {
        console.log(props);

      }
    },
  };
};
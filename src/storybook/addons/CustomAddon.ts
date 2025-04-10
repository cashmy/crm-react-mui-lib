// import { addons, types } from "@storybook/addons";
// import TextOrSelectControl from "../src/storybook/controls/TextOrSelectControl";

// addons.register("custom-controls", () => {
//   addons.add("text-or-select-control", {
//     title: "Text or Select Control",
//     type: types.CONTROL,
//     match: ({ argType }) => argType.control?.type === "text-or-select",
//     render: ({ argType, value, onChange }) => {
//       const options = argType.options || [];
//       return (
//         <TextOrSelectControl
//           value={value}
//           onChange={onChange}
//           options={options}
//         />
//       );
//     },
//   });
// });

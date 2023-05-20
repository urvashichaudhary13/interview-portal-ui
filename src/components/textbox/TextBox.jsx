export const TextBox = (props) => {
    const { text } = props
  return (
    <textarea
      //   value={text}
      //   onChange={handleChange}
      style={{
        width: "155%",
        height: "150px",
        padding: "10px",
        fontSize: "16px",
        border: "1px solid",
        borderRadius: "4px",
        resize: "vertical",
      }}
    />
  );
};

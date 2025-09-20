import DividerInnerImg from "@/assets/images/divider-inner.png";

const DividerInner = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={DividerInnerImg} alt="divider inner" />
    </div>
  );
};

export default DividerInner;

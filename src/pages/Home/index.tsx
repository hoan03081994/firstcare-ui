import { Tabs } from "antd";
import PersonalInfo from "@/components/PersonalInfo";
import FilterForm from "@/components/FilterForm";
import ProfileInfo from "@/components/ProfileInfo";

const items = [
  {
    key: "1",
    label: "Top",
    children: "Content 1",
  },
  {
    key: "2",
    label: "基本情報",
    children: (
      <>
        <FilterForm />
        <ProfileInfo />
        <PersonalInfo />
      </>
    ),
  },
  {
    key: "3",
    label: "被保険者証",
    children: "被保険者証",
  },
  {
    key: "4",
    label: "住所地特例",
    children: "住所地特例",
  },
  {
    key: "5",
    label: "医療保険",
    children: "医療保険",
  },
  {
    key: "6",
    label: "公費",
    children: "公費",
  },
  {
    key: "7",
    label: "負担額試算",
    children: "負担額試算",
  },
  {
    key: "8",
    label: "認定調査票",
    children: "認定調査票",
  },
  {
    key: "9",
    label: "注意事項",
    children: "注意事項",
  },
  {
    key: "10",
    label: "一覧表示",
    children: "一覧表示",
  },
];

const Home = () => {
  const onChange = () => {};
  return (
    <>
      <Tabs defaultActiveKey="2" items={items} onChange={onChange} />
    </>
  );
};

export default Home;

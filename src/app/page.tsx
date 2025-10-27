import { Header } from "@/components/Header";
import { Landing } from "@/components/sections/Landing";
import { ShowcaseMenu } from "@/components/sections/ShowcaseMenu";
import { FindUs } from "@/components/sections/FindUs";
export default function Home() {
  return (
    <div className="">
     <Header></Header>
      <Landing></Landing>
      <ShowcaseMenu></ShowcaseMenu>
      <FindUs></FindUs>
    </div>
  );
}

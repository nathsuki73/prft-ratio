import { Header } from "@/components/Header";
import { Landing } from "@/components/sections/Landing";
import { ShowcaseMenu } from "@/components/sections/ShowcaseMenu";
export default function Home() {
  return (
    <div className="">
     <Header></Header>
      <Landing></Landing>
      <ShowcaseMenu></ShowcaseMenu>
    </div>
  );
}

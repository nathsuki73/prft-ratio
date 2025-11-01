import { Landing } from "@/components/sections/Landing";
import { ShowcaseMenu } from "@/components/sections/ShowcaseMenu";
import { FindUs } from "@/components/sections/FindUs";
import { Contact }  from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="">
      <Landing></Landing>
      <ShowcaseMenu></ShowcaseMenu>
      <FindUs></FindUs>
      <Contact></Contact>
    </div>
  );
}

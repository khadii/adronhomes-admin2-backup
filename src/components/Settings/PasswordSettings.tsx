import Header from "../../general/Header";
import Cardone from "./Cardone";

export default function PasswordSettings() {
  return (
    <div className="pb-[52px]">
      <Header
        title="Settings"
        subtitle="Manage account password"
        showSearchAndButton={false}
      />
      <div className="lg:pl-[38px] lg:pr-[68px] pl-[15px] pr-[15px]">
        <Cardone />
      </div>
    </div>
  );
}

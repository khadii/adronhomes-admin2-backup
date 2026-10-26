import { useNavigate } from "react-router-dom";
import { FaBuilding, FaStore } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import Header from "../../general/Header";
import { MatrixCard, MatrixCardGreen } from "../../components/firstcard";

const sections = [
  {
    title: "Estate Communities",
    description: "Manage estate communities, residents, security codes, utility payments and maintenance.",
    path: "/daff/estates",
    icon: FaBuilding,
  },
  {
    title: "Gifting",
    description: "Create and manage gift items connected to property and promotional activity.",
    path: "/daff/gifts",
    icon: FaStore,
  },
  {
    title: "Pickup Vendors",
    description: "Manage pickup vendors and assigned promotional gift requests.",
    path: "/daff/promotions/vendors",
    icon: FaStore,
  },
  {
    title: "Promotions",
    description: "Create promotions, review promo details and manage promotion requests.",
    path: "/daff/promotions",
    icon: MdLocalOffer,
  },
];

export default function DaffDashboard() {
  const navigate = useNavigate();

  return (
    <div className="pb-[52px]">
      <Header
        title="DAFF"
        subtitle="Estate, gifting, pickup and promotions administration"
        showSearchAndButton={false}
      />

      <div className="grid md:grid-cols-4 gap-[20px] lg:pl-[38px] lg:pr-[68px] pl-[15px] pr-[15px] mb-[30px]">
        <MatrixCardGreen title="Estate" value={1} change="Communities" />
        <MatrixCard title="Gifting" value={1} change="Gift management" />
        <MatrixCard title="Pickup" value={1} change="Vendor access" />
        <MatrixCard title="Promotions" value={1} change="Promo operations" />
      </div>

      <div className="grid lg:grid-cols-2 gap-5 lg:pl-[38px] lg:pr-[68px] pl-[15px] pr-[15px]">
        {sections.map((section) => {
          const Icon = section.icon;

          return (
            <button
              key={section.path}
              onClick={() => navigate(section.path)}
              className="bg-white border border-[#E5E5E5] rounded-[8px] p-5 text-left hover:border-[#79B833] hover:shadow-sm transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-[8px] bg-[#79B833]/10 flex items-center justify-center text-[#79B833]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-[350] text-lg text-dark">{section.title}</h2>
                  <p className="font-[325] text-sm text-[#767676] mt-2 leading-6">
                    {section.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

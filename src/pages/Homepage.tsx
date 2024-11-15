import landingImage from "../assets/landing.png";
import appDownload from "../assets/appDownload.png";
import Footer from "@/components/Footer";
export default function Homepage() {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a take away today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img
          src={landingImage}
          alt="landing"
        />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the MthizEats App for faster ordering and personalised
            recommendations
          </span>
          <img
            src={appDownload}
            alt="appDownload"
          />
        </div>
      </div>
    </div>
  );
}

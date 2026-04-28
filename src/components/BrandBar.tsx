import gusto from "../assets/gusto-logo1.png";
import dropbox from "../assets/dropbox.png";
import asana from "../assets/Asana_logo_new 1.png";
import slack from "../assets/slack.png";

export default function BrandBar() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full max-w-[1920px] h-[169px] flex items-center justify-center gap-40 px-10 rounded-4xl border border-white/30 bg-white">
        <img src={gusto} alt="Gusto" className="h-8 object-contain" />
        <img src={dropbox} alt="Dropbox" className="h-14 object-contain" />
        <img src={asana} alt="Asana" className="h-8 object-contain" />
        <img src={slack} alt="Slack" className="h-14 object-contain" />
      </div>
    </div>
  );
}
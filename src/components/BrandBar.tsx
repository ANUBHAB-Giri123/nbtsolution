

import gusto from "../assets/gusto-logo1.png";
import dropbox from "../assets/dropbox.png";
import asana from "../assets/Asana_logo_new 1.png";
import slack from "../assets/slack.png";

export default function BrandBar() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-6xl flex flex-wrap items-center justify-center gap-6 md:gap-10 py-6 md:py-8 rounded-2xl md:rounded-3xl border border-white/30 bg-white/80 backdrop-blur-md shadow-lg">

        <img src={gusto} alt="Gusto" className="h-6 md:h-8 object-contain" />
        <img src={dropbox} alt="Dropbox" className="h-8 md:h-12 object-contain" />
        <img src={asana} alt="Asana" className="h-6 md:h-8 object-contain" />
        <img src={slack} alt="Slack" className="h-8 md:h-12 object-contain" />

      </div>
    </div>
  );
}
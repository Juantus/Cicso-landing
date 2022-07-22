import Image from "react-bootstrap/Image";
import "./bannerPrincipal.css";

function BannerPrincipal() {
  return (
    <div className="containerBannerPrincipal">
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0J2ggn2h1NPd34LEmECdyzpB-oL4oXXr_I1SS1wPDkodSQ0a6O0y2VRPDxieYz4rxvA&usqp=CAU"
        className="imgBannerPricipal"
        alt="Banner principal de logo de CICSo"
      />
    </div>
  );
}

export default BannerPrincipal;

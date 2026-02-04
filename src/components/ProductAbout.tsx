import Vector4 from "../assets/images/brewImg.jpg";
import bottomTree from "../assets/images/bottomTree.png";
import brewvideo from "../assets/video/brewVideo.mp4";

interface ProductAboutProps {
  description: string;
  image?: string;
}

const ProductAbout = ({ description = "", image }: ProductAboutProps) => {
  const displayImage = image || Vector4;


  return (
    <section className="relative    max-w-[1280px]  mx-auto  rounded-lg overflow-hidden bg-[#f1e4b0] py-16 md:py-24">

      {/* BACKGROUND TREE */}
      <div className="absolute inset-0 ">
        <img
          src={bottomTree}
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* ================= TOP CONTENT ================= */}
      <div className="container   relative mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* TEXT */}
          <div className=" h-full">
            <h2
              className="mb-6"
              style={{
                fontFamily: "'gotham2', serif",
                fontWeight: 500,
                fontSize: "38px",
                lineHeight: "100%",
                color: "#9a7523",
              }}
            >
              About Product
            </h2>

            <div className="space-y-12">
              {description.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  style={{
                    fontFamily: "'gotham-light', sans-serif",
                    fontWeight: 300,
                    fontSize: "15px",
                    lineHeight: "23px",
                    color: "#000000",
                  }}
                >
                  Made from the best tea leaves cultivated in Assam, India, the flavours of Sublime’s English Breakfast Tea is one of the finest Black Teas available online. The bold flavours of this black tea, with hints of malty and mildly sweet overtones are perfect for your mornings. Filled with antioxidants, Sublime’s special English Breakfast Tea exhibits extraordinary anti-obesity properties that can result in weight loss without any apparent side effects. Buy English Breakfast Tea from Sublime and enjoy it with a dash of milk; or a slice of lime!
                  Ingredients : Assam black tea
                  Vacuum-packed and sealed in an attractive tin caddie, this pack of tea has no added sweeteners or preservatives and can be stored in a cool and dry place for up to 18 months. The pack is also dairy-free, and vegan-friendly.
                </p>
              ))}
            </div>

            <div className="mt-12"> 
              <p className="text-sm font-gotham"> <span className="text-lg font-gotham">Name & Address of Packer</span>: Sublime | Prestige Falcon Towers, 9th Floor, 19, Brunton Road, Bengaluru-560025</p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative overflow-hidden border rounded-lg w-full">
            <img
              src={displayImage}
              alt="Product"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = Vector4;
              }}
            />
          </div>
        </div>
      </div>

      {/* ================= FULL WIDTH VIDEO (SAME SECTION) ================= */}
      <div className="relative px-12 rounded-lg container w-screen left-1/2 -translate-x-1/2 mt-20">
        <div className="w-full px-12  h-[420px] md:h-[540px] overflow-hidden">

          {/* VIDEO */}
          <video
            src={brewvideo}
            className="w-[90%] mx-auto h-full object-cover border rounded-lg"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* OPTIONAL OVERLAY (looks premium) */}
          {/* <div className="absolute inset-0 bg-black/10 pointer-events-none" /> */}
        </div>
      </div>

    </section>
  );
};

export default ProductAbout;

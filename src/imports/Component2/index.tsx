import svgPaths from "./svg-6e1et1mmyt";
import imgImage1 from "./dbdee0f2309cac6408de59ba3d77502698a7be1b.png";
import imgPremiumPhoto1665203598344F5129341013F1 from "./1cfefd8f0acfb77cb88d5a6382bc36c1d7f80bfe.png";
import img746B3D2DA32C47D790Dc64Dc57D32B011 from "./f61e95b32e992ccbeeb665551752926ac4f715e6.png";
type ComponentProps = {
  className?: string;
  property1?: "Desktop - 1" | "Desktop - 10" | "Desktop - 11" | "Desktop - 9";
};

export default function Component({ className, property1 = "Desktop - 1" }: ComponentProps) {
  const isDesktop10 = property1 === "Desktop - 10";
  const isDesktop10OrDesktop11 = ["Desktop - 10", "Desktop - 11"].includes(property1);
  const isDesktop11 = property1 === "Desktop - 11";
  const isDesktop9 = property1 === "Desktop - 9";
  const isDesktop9OrDesktop10OrDesktop11 = ["Desktop - 9", "Desktop - 10", "Desktop - 11"].includes(property1);
  return (
    <button className={className || "bg-white block h-[800px] overflow-clip relative w-[1440px]"}>
      <div className={`absolute contents ${isDesktop11 ? "left-[-6.42px] top-[-16.99px]" : isDesktop10 ? "left-[-7.79px] top-[-16.99px]" : isDesktop9 ? "-translate-x-1/2 left-[calc(50%+0.04px)] top-[-16.99px]" : "-translate-x-1/2 left-[calc(50%+6.47px)] top-[-17px]"}`} data-name="BG">
        <div className={`-translate-x-1/2 absolute h-[838.379px] w-[1452.933px] ${isDesktop9OrDesktop10OrDesktop11 ? "left-[calc(50%+0.04px)] top-[-16.99px]" : "left-[calc(50%+6.47px)] top-[-17px]"}`} data-name="image 1">
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 overflow-hidden">
              <img alt="" className="absolute h-[100.19%] left-0 max-w-none top-[-0.19%] w-full" src={imgImage1} />
            </div>
            <div className="absolute bg-gradient-to-t from-[rgba(0,2,4,0.51)] inset-0 to-[94.883%] to-[rgba(0,2,4,0.51)] via-[51.604%] via-[rgba(204,175,72,0)]" />
          </div>
        </div>
        {isDesktop10 && (
          <div className="absolute h-[812.917px] left-[-7.79px] top-[0.69px] w-[1455.101px]" data-name="premium_photo-1665203598344-f5129341013f 1">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" className="absolute h-[99.95%] left-[0.01%] max-w-none top-[0.03%] w-[99.97%]" src={imgPremiumPhoto1665203598344F5129341013F1} />
              </div>
              <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
            </div>
          </div>
        )}
        {isDesktop11 && (
          <div className="absolute h-[807.116px] left-[3.76px] top-[-2.58px] w-[1456.634px]" data-name="746b3d2d-a32c-47d7-90dc-64dc57d32b01 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[99.83%] left-[0.01%] max-w-none top-[0.08%] w-[99.96%]" src={img746B3D2DA32C47D790Dc64Dc57D32B011} />
            </div>
          </div>
        )}
      </div>
      <div className={`absolute h-[800.3px] top-[-0.01px] ${isDesktop11 ? "left-[-367.01px] w-[3074.733px]" : isDesktop10 ? "left-[-927.01px] w-[3074.733px]" : isDesktop9 ? "left-[-1634.73px] w-[3074.734px]" : "left-[-2417.76px] w-[3857.76px]"}`} data-name="Exclude">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox={isDesktop9OrDesktop10OrDesktop11 ? "0 0 3074.73 800.3" : "0 0 32 32"}>
          <path d={isDesktop10OrDesktop11 ? svgPaths.p30995a80 : isDesktop9 ? svgPaths.p213e39c0 : svgPaths.p8020100} fill="var(--fill-0, #750558)" id="Exclude" opacity={property1 === "Desktop - 1" ? "0" : undefined} />
        </svg>
      </div>
      <div className={`-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[88px] items-center left-[calc(50%+0.2px)] top-[calc(50%-346px)] ${isDesktop9OrDesktop10OrDesktop11 ? "bg-[rgba(0,0,0,0.1)] pl-[16px] pr-[8px] py-[8px] rounded-[99px]" : ""}`}>
        <div className="content-stretch flex gap-[48px] items-center relative shrink-0">
          <div className="content-stretch flex items-center relative shrink-0">
            <div className="h-[39.602px] overflow-clip relative shrink-0 w-[165.394px]" data-name="Asset 12 1">
              <div className="absolute contents inset-0" data-name="Layer 2">
                <div className="absolute contents inset-0" data-name="Group">
                  <div className="absolute contents inset-[24.81%_3.79%_16.42%_22.47%]" data-name="Group">
                    <div className="absolute inset-[24.81%_3.79%_16.42%_51.4%]" data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74.1274 23.2742">
                        <g id="Group">
                          <path d={svgPaths.p1832d100} fill="var(--fill-0, white)" id="Vector" />
                          <path d={svgPaths.p8b3ccf2} fill="var(--fill-0, white)" id="Vector_2" />
                          <path d={svgPaths.p5a09d00} fill="var(--fill-0, white)" id="Vector_3" />
                          <path d={svgPaths.pf095f00} fill="var(--fill-0, white)" id="Vector_4" />
                          <path d={svgPaths.p10c6a780} fill="var(--fill-0, white)" id="Vector_5" />
                        </g>
                      </svg>
                    </div>
                    <div className="absolute inset-[24.81%_50.62%_30.81%_22.47%]" data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.5108 17.5755">
                        <g id="Group">
                          <path d={svgPaths.p295ea700} fill="var(--fill-0, white)" id="Vector" />
                          <path d={svgPaths.p2d00f80} fill="var(--fill-0, white)" id="Vector_2" />
                          <path d={svgPaths.p1bc91f00} fill="var(--fill-0, white)" id="Vector_3" />
                          <path d={svgPaths.p1e4e7b80} fill="var(--fill-0, white)" id="Vector_4" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute contents inset-[16.41%_81.55%_22.41%_3.79%]" data-name="Layer 2-2">
                    <div className="absolute inset-[16.41%_81.55%_22.41%_3.79%]" data-name="Group">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.2531 24.2281">
                        <g id="Group">
                          <path d={svgPaths.p2fd33900} fill="var(--fill-0, white)" id="Vector" />
                          <path d={svgPaths.p1bd05b80} fill="var(--fill-0, white)" id="Vector_2" />
                          <path d={svgPaths.p2aae1d40} fill="var(--fill-0, white)" id="Vector_3" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <g id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
            <p className={`[word-break:break-word] font-["Plus_Jakarta_Sans:SemiBold",sans-serif] font-semibold leading-[25.302px] relative shrink-0 text-left text-white whitespace-nowrap ${isDesktop9OrDesktop10OrDesktop11 ? "text-[19.801px]" : "text-[16.8px]"}`}>Personal</p>
          </div>
          <div className="[word-break:break-word] content-stretch flex font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[24px] items-center leading-[27.842px] relative shrink-0 text-[16px] text-left text-white">
            <p className="relative shrink-0 w-[93px]">Business</p>
            <p className="relative shrink-0 w-[96px]">About Us</p>
            <p className="relative shrink-0 w-[49px]">Blog</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex items-center px-[16px] py-[6px] relative rounded-[999px] shrink-0">
          <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[27.842px] relative shrink-0 text-[#36052a] text-[16px] text-left whitespace-nowrap">Download App</p>
        </div>
      </div>
      <p className={`[word-break:break-word] absolute font-["GC_North_Sans_Demo:Bold",sans-serif] leading-[73.316px] left-[52px] not-italic text-[59.986px] text-left text-white uppercase w-[796px] ${isDesktop9OrDesktop10OrDesktop11 ? "opacity-0 top-[123.51px]" : "top-[614px]"}`}>One financial home for life across borders.</p>
      {isDesktop9OrDesktop10OrDesktop11 && (
        <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold gap-[2px] items-center left-1/2 text-center text-white top-[340px] uppercase w-[226px]" data-name="Text">
          <p className={`leading-[84.538px] relative shrink-0 text-[69.168px] ${isDesktop10OrDesktop11 ? "whitespace-nowrap" : "w-full"}`}>{isDesktop11 ? "€ 2000" : isDesktop10 ? "₱ 1500" : isDesktop9 ? "$ 800" : ""}</p>
          <p className={`leading-[31.301px] relative shrink-0 text-[25.61px] whitespace-pre-wrap ${isDesktop10OrDesktop11 ? "min-w-full w-[min-content]" : "w-full"}`}>{isDesktop11 ? "Sent for  STUDY" : isDesktop10 ? "Sent to  Home" : isDesktop9 ? "Sent to  family" : ""}</p>
        </div>
      )}
    </button>
  );
}
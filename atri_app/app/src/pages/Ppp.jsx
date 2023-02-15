import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex3 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image as Image3 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox3 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useFlex264Cb, useFlex265Cb, useFlex271Cb, useFlex266Cb, useFlex267Cb, useFlex268Cb, useFlex269Cb, useFlex270Cb, useFlex274Cb, useFlex275Cb, useFlex276Cb, useFlex284Cb, useFlex283Cb, useFlex281Cb, useFlex282Cb, useImage102Cb, useTextBox243Cb, useImage103Cb, useImage104Cb, useImage105Cb, useImage106Cb, useImage107Cb, useTextBox245Cb, useTextBox246Cb, useTextBox248Cb, useTextBox249Cb, useTextBox250Cb, useTextBox251Cb, useTextBox252Cb, useTextBox253Cb, useTextBox254Cb, useTextBox255Cb, useTextBox256Cb, useTextBox257Cb, useTextBox258Cb, useTextBox259Cb, useTextBox260Cb, useTextBox261Cb, useTextBox263Cb, useImage112Cb, useImage113Cb, useImage114Cb, useImage115Cb } from "../page-cbs/ppp";
import "../page-css/ppp.css";
import "../custom/ppp";

export default function Ppp() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex264Props = useStore((state)=>state["ppp"]["Flex264"]);
const Flex264IoProps = useIoStore((state)=>state["ppp"]["Flex264"]);
const Flex264Cb = useFlex264Cb()
const Flex265Props = useStore((state)=>state["ppp"]["Flex265"]);
const Flex265IoProps = useIoStore((state)=>state["ppp"]["Flex265"]);
const Flex265Cb = useFlex265Cb()
const Flex271Props = useStore((state)=>state["ppp"]["Flex271"]);
const Flex271IoProps = useIoStore((state)=>state["ppp"]["Flex271"]);
const Flex271Cb = useFlex271Cb()
const Flex266Props = useStore((state)=>state["ppp"]["Flex266"]);
const Flex266IoProps = useIoStore((state)=>state["ppp"]["Flex266"]);
const Flex266Cb = useFlex266Cb()
const Flex267Props = useStore((state)=>state["ppp"]["Flex267"]);
const Flex267IoProps = useIoStore((state)=>state["ppp"]["Flex267"]);
const Flex267Cb = useFlex267Cb()
const Flex268Props = useStore((state)=>state["ppp"]["Flex268"]);
const Flex268IoProps = useIoStore((state)=>state["ppp"]["Flex268"]);
const Flex268Cb = useFlex268Cb()
const Flex269Props = useStore((state)=>state["ppp"]["Flex269"]);
const Flex269IoProps = useIoStore((state)=>state["ppp"]["Flex269"]);
const Flex269Cb = useFlex269Cb()
const Flex270Props = useStore((state)=>state["ppp"]["Flex270"]);
const Flex270IoProps = useIoStore((state)=>state["ppp"]["Flex270"]);
const Flex270Cb = useFlex270Cb()
const Flex274Props = useStore((state)=>state["ppp"]["Flex274"]);
const Flex274IoProps = useIoStore((state)=>state["ppp"]["Flex274"]);
const Flex274Cb = useFlex274Cb()
const Flex275Props = useStore((state)=>state["ppp"]["Flex275"]);
const Flex275IoProps = useIoStore((state)=>state["ppp"]["Flex275"]);
const Flex275Cb = useFlex275Cb()
const Flex276Props = useStore((state)=>state["ppp"]["Flex276"]);
const Flex276IoProps = useIoStore((state)=>state["ppp"]["Flex276"]);
const Flex276Cb = useFlex276Cb()
const Flex284Props = useStore((state)=>state["ppp"]["Flex284"]);
const Flex284IoProps = useIoStore((state)=>state["ppp"]["Flex284"]);
const Flex284Cb = useFlex284Cb()
const Flex283Props = useStore((state)=>state["ppp"]["Flex283"]);
const Flex283IoProps = useIoStore((state)=>state["ppp"]["Flex283"]);
const Flex283Cb = useFlex283Cb()
const Flex281Props = useStore((state)=>state["ppp"]["Flex281"]);
const Flex281IoProps = useIoStore((state)=>state["ppp"]["Flex281"]);
const Flex281Cb = useFlex281Cb()
const Flex282Props = useStore((state)=>state["ppp"]["Flex282"]);
const Flex282IoProps = useIoStore((state)=>state["ppp"]["Flex282"]);
const Flex282Cb = useFlex282Cb()
const Image102Props = useStore((state)=>state["ppp"]["Image102"]);
const Image102IoProps = useIoStore((state)=>state["ppp"]["Image102"]);
const Image102Cb = useImage102Cb()
const TextBox243Props = useStore((state)=>state["ppp"]["TextBox243"]);
const TextBox243IoProps = useIoStore((state)=>state["ppp"]["TextBox243"]);
const TextBox243Cb = useTextBox243Cb()
const Image103Props = useStore((state)=>state["ppp"]["Image103"]);
const Image103IoProps = useIoStore((state)=>state["ppp"]["Image103"]);
const Image103Cb = useImage103Cb()
const Image104Props = useStore((state)=>state["ppp"]["Image104"]);
const Image104IoProps = useIoStore((state)=>state["ppp"]["Image104"]);
const Image104Cb = useImage104Cb()
const Image105Props = useStore((state)=>state["ppp"]["Image105"]);
const Image105IoProps = useIoStore((state)=>state["ppp"]["Image105"]);
const Image105Cb = useImage105Cb()
const Image106Props = useStore((state)=>state["ppp"]["Image106"]);
const Image106IoProps = useIoStore((state)=>state["ppp"]["Image106"]);
const Image106Cb = useImage106Cb()
const Image107Props = useStore((state)=>state["ppp"]["Image107"]);
const Image107IoProps = useIoStore((state)=>state["ppp"]["Image107"]);
const Image107Cb = useImage107Cb()
const TextBox245Props = useStore((state)=>state["ppp"]["TextBox245"]);
const TextBox245IoProps = useIoStore((state)=>state["ppp"]["TextBox245"]);
const TextBox245Cb = useTextBox245Cb()
const TextBox246Props = useStore((state)=>state["ppp"]["TextBox246"]);
const TextBox246IoProps = useIoStore((state)=>state["ppp"]["TextBox246"]);
const TextBox246Cb = useTextBox246Cb()
const TextBox248Props = useStore((state)=>state["ppp"]["TextBox248"]);
const TextBox248IoProps = useIoStore((state)=>state["ppp"]["TextBox248"]);
const TextBox248Cb = useTextBox248Cb()
const TextBox249Props = useStore((state)=>state["ppp"]["TextBox249"]);
const TextBox249IoProps = useIoStore((state)=>state["ppp"]["TextBox249"]);
const TextBox249Cb = useTextBox249Cb()
const TextBox250Props = useStore((state)=>state["ppp"]["TextBox250"]);
const TextBox250IoProps = useIoStore((state)=>state["ppp"]["TextBox250"]);
const TextBox250Cb = useTextBox250Cb()
const TextBox251Props = useStore((state)=>state["ppp"]["TextBox251"]);
const TextBox251IoProps = useIoStore((state)=>state["ppp"]["TextBox251"]);
const TextBox251Cb = useTextBox251Cb()
const TextBox252Props = useStore((state)=>state["ppp"]["TextBox252"]);
const TextBox252IoProps = useIoStore((state)=>state["ppp"]["TextBox252"]);
const TextBox252Cb = useTextBox252Cb()
const TextBox253Props = useStore((state)=>state["ppp"]["TextBox253"]);
const TextBox253IoProps = useIoStore((state)=>state["ppp"]["TextBox253"]);
const TextBox253Cb = useTextBox253Cb()
const TextBox254Props = useStore((state)=>state["ppp"]["TextBox254"]);
const TextBox254IoProps = useIoStore((state)=>state["ppp"]["TextBox254"]);
const TextBox254Cb = useTextBox254Cb()
const TextBox255Props = useStore((state)=>state["ppp"]["TextBox255"]);
const TextBox255IoProps = useIoStore((state)=>state["ppp"]["TextBox255"]);
const TextBox255Cb = useTextBox255Cb()
const TextBox256Props = useStore((state)=>state["ppp"]["TextBox256"]);
const TextBox256IoProps = useIoStore((state)=>state["ppp"]["TextBox256"]);
const TextBox256Cb = useTextBox256Cb()
const TextBox257Props = useStore((state)=>state["ppp"]["TextBox257"]);
const TextBox257IoProps = useIoStore((state)=>state["ppp"]["TextBox257"]);
const TextBox257Cb = useTextBox257Cb()
const TextBox258Props = useStore((state)=>state["ppp"]["TextBox258"]);
const TextBox258IoProps = useIoStore((state)=>state["ppp"]["TextBox258"]);
const TextBox258Cb = useTextBox258Cb()
const TextBox259Props = useStore((state)=>state["ppp"]["TextBox259"]);
const TextBox259IoProps = useIoStore((state)=>state["ppp"]["TextBox259"]);
const TextBox259Cb = useTextBox259Cb()
const TextBox260Props = useStore((state)=>state["ppp"]["TextBox260"]);
const TextBox260IoProps = useIoStore((state)=>state["ppp"]["TextBox260"]);
const TextBox260Cb = useTextBox260Cb()
const TextBox261Props = useStore((state)=>state["ppp"]["TextBox261"]);
const TextBox261IoProps = useIoStore((state)=>state["ppp"]["TextBox261"]);
const TextBox261Cb = useTextBox261Cb()
const TextBox263Props = useStore((state)=>state["ppp"]["TextBox263"]);
const TextBox263IoProps = useIoStore((state)=>state["ppp"]["TextBox263"]);
const TextBox263Cb = useTextBox263Cb()
const Image112Props = useStore((state)=>state["ppp"]["Image112"]);
const Image112IoProps = useIoStore((state)=>state["ppp"]["Image112"]);
const Image112Cb = useImage112Cb()
const Image113Props = useStore((state)=>state["ppp"]["Image113"]);
const Image113IoProps = useIoStore((state)=>state["ppp"]["Image113"]);
const Image113Cb = useImage113Cb()
const Image114Props = useStore((state)=>state["ppp"]["Image114"]);
const Image114IoProps = useIoStore((state)=>state["ppp"]["Image114"]);
const Image114Cb = useImage114Cb()
const Image115Props = useStore((state)=>state["ppp"]["Image115"]);
const Image115IoProps = useIoStore((state)=>state["ppp"]["Image115"]);
const Image115Cb = useImage115Cb()

  return (<>
  <Flex3 className="p-ppp Flex264 bpt" {...Flex264Props} {...Flex264Cb} {...Flex264IoProps}>
<Flex3 className="p-ppp Flex265 bpt" {...Flex265Props} {...Flex265Cb} {...Flex265IoProps}>
<Image3 className="p-ppp Image102 bpt" {...Image102Props} {...Image102Cb} {...Image102IoProps}/>
<TextBox3 className="p-ppp TextBox243 bpt" {...TextBox243Props} {...TextBox243Cb} {...TextBox243IoProps}/>
<Flex3 className="p-ppp Flex271 bpt" {...Flex271Props} {...Flex271Cb} {...Flex271IoProps}>
<Flex3 className="p-ppp Flex266 bpt" {...Flex266Props} {...Flex266Cb} {...Flex266IoProps}>
<Image3 className="p-ppp Image103 bpt" {...Image103Props} {...Image103Cb} {...Image103IoProps}/>
</Flex3>
<Flex3 className="p-ppp Flex267 bpt" {...Flex267Props} {...Flex267Cb} {...Flex267IoProps}>
<Image3 className="p-ppp Image104 bpt" {...Image104Props} {...Image104Cb} {...Image104IoProps}/>
</Flex3>
<Flex3 className="p-ppp Flex268 bpt" {...Flex268Props} {...Flex268Cb} {...Flex268IoProps}>
<Image3 className="p-ppp Image105 bpt" {...Image105Props} {...Image105Cb} {...Image105IoProps}/>
</Flex3>
<Flex3 className="p-ppp Flex269 bpt" {...Flex269Props} {...Flex269Cb} {...Flex269IoProps}>
<Image3 className="p-ppp Image106 bpt" {...Image106Props} {...Image106Cb} {...Image106IoProps}/>
</Flex3>
<Flex3 className="p-ppp Flex270 bpt" {...Flex270Props} {...Flex270Cb} {...Flex270IoProps}>
<Image3 className="p-ppp Image107 bpt" {...Image107Props} {...Image107Cb} {...Image107IoProps}/>
</Flex3>
</Flex3>
</Flex3>
<Flex3 className="p-ppp Flex274 bpt" {...Flex274Props} {...Flex274Cb} {...Flex274IoProps}>
<Flex3 className="p-ppp Flex275 bpt" {...Flex275Props} {...Flex275Cb} {...Flex275IoProps}>
<TextBox3 className="p-ppp TextBox245 bpt" {...TextBox245Props} {...TextBox245Cb} {...TextBox245IoProps}/>
<TextBox3 className="p-ppp TextBox253 bpt" {...TextBox253Props} {...TextBox253Cb} {...TextBox253IoProps}/>
<TextBox3 className="p-ppp TextBox250 bpt" {...TextBox250Props} {...TextBox250Cb} {...TextBox250IoProps}/>
<TextBox3 className="p-ppp TextBox251 bpt" {...TextBox251Props} {...TextBox251Cb} {...TextBox251IoProps}/>
<TextBox3 className="p-ppp TextBox252 bpt" {...TextBox252Props} {...TextBox252Cb} {...TextBox252IoProps}/>
<TextBox3 className="p-ppp TextBox246 bpt" {...TextBox246Props} {...TextBox246Cb} {...TextBox246IoProps}/>
<TextBox3 className="p-ppp TextBox248 bpt" {...TextBox248Props} {...TextBox248Cb} {...TextBox248IoProps}/>
<TextBox3 className="p-ppp TextBox249 bpt" {...TextBox249Props} {...TextBox249Cb} {...TextBox249IoProps}/>
</Flex3>
<Flex3 className="p-ppp Flex276 bpt" {...Flex276Props} {...Flex276Cb} {...Flex276IoProps}>
<TextBox3 className="p-ppp TextBox261 bpt" {...TextBox261Props} {...TextBox261Cb} {...TextBox261IoProps}/>
<TextBox3 className="p-ppp TextBox254 bpt" {...TextBox254Props} {...TextBox254Cb} {...TextBox254IoProps}/>
<TextBox3 className="p-ppp TextBox257 bpt" {...TextBox257Props} {...TextBox257Cb} {...TextBox257IoProps}/>
<TextBox3 className="p-ppp TextBox256 bpt" {...TextBox256Props} {...TextBox256Cb} {...TextBox256IoProps}/>
<TextBox3 className="p-ppp TextBox255 bpt" {...TextBox255Props} {...TextBox255Cb} {...TextBox255IoProps}/>
<TextBox3 className="p-ppp TextBox260 bpt" {...TextBox260Props} {...TextBox260Cb} {...TextBox260IoProps}/>
<TextBox3 className="p-ppp TextBox259 bpt" {...TextBox259Props} {...TextBox259Cb} {...TextBox259IoProps}/>
<TextBox3 className="p-ppp TextBox258 bpt" {...TextBox258Props} {...TextBox258Cb} {...TextBox258IoProps}/>
</Flex3>
</Flex3>
<Flex3 className="p-ppp Flex284 bpt" {...Flex284Props} {...Flex284Cb} {...Flex284IoProps}>
<Flex3 className="p-ppp Flex283 bpt" {...Flex283Props} {...Flex283Cb} {...Flex283IoProps}>
<TextBox3 className="p-ppp TextBox263 bpt" {...TextBox263Props} {...TextBox263Cb} {...TextBox263IoProps}/>
<Flex3 className="p-ppp Flex281 bpt" {...Flex281Props} {...Flex281Cb} {...Flex281IoProps}>
<Image3 className="p-ppp Image112 bpt" {...Image112Props} {...Image112Cb} {...Image112IoProps}/>
<Image3 className="p-ppp Image113 bpt" {...Image113Props} {...Image113Cb} {...Image113IoProps}/>
</Flex3>
<Flex3 className="p-ppp Flex282 bpt" {...Flex282Props} {...Flex282Cb} {...Flex282IoProps}>
<Image3 className="p-ppp Image115 bpt" {...Image115Props} {...Image115Cb} {...Image115IoProps}/>
<Image3 className="p-ppp Image114 bpt" {...Image114Props} {...Image114Cb} {...Image114IoProps}/>
</Flex3>
</Flex3>
</Flex3>
</Flex3>
  </>);
}

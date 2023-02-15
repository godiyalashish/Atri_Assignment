import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex258Cb, useFlex259Cb, useFlex260Cb, useFlex261Cb, useFlex262Cb, useFlex263Cb, useTextBox242Cb, useButton34Cb, useImage95Cb, useImage97Cb, useImage98Cb, useImage99Cb, useImage100Cb, useImage101Cb } from "../page-cbs/landing";
import "../page-css/landing.css";
import "../custom/landing";

export default function Landing() {
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

  const Flex258Props = useStore((state)=>state["landing"]["Flex258"]);
const Flex258IoProps = useIoStore((state)=>state["landing"]["Flex258"]);
const Flex258Cb = useFlex258Cb()
const Flex259Props = useStore((state)=>state["landing"]["Flex259"]);
const Flex259IoProps = useIoStore((state)=>state["landing"]["Flex259"]);
const Flex259Cb = useFlex259Cb()
const Flex260Props = useStore((state)=>state["landing"]["Flex260"]);
const Flex260IoProps = useIoStore((state)=>state["landing"]["Flex260"]);
const Flex260Cb = useFlex260Cb()
const Flex261Props = useStore((state)=>state["landing"]["Flex261"]);
const Flex261IoProps = useIoStore((state)=>state["landing"]["Flex261"]);
const Flex261Cb = useFlex261Cb()
const Flex262Props = useStore((state)=>state["landing"]["Flex262"]);
const Flex262IoProps = useIoStore((state)=>state["landing"]["Flex262"]);
const Flex262Cb = useFlex262Cb()
const Flex263Props = useStore((state)=>state["landing"]["Flex263"]);
const Flex263IoProps = useIoStore((state)=>state["landing"]["Flex263"]);
const Flex263Cb = useFlex263Cb()
const TextBox242Props = useStore((state)=>state["landing"]["TextBox242"]);
const TextBox242IoProps = useIoStore((state)=>state["landing"]["TextBox242"]);
const TextBox242Cb = useTextBox242Cb()
const Button34Props = useStore((state)=>state["landing"]["Button34"]);
const Button34IoProps = useIoStore((state)=>state["landing"]["Button34"]);
const Button34Cb = useButton34Cb()
const Image95Props = useStore((state)=>state["landing"]["Image95"]);
const Image95IoProps = useIoStore((state)=>state["landing"]["Image95"]);
const Image95Cb = useImage95Cb()
const Image97Props = useStore((state)=>state["landing"]["Image97"]);
const Image97IoProps = useIoStore((state)=>state["landing"]["Image97"]);
const Image97Cb = useImage97Cb()
const Image98Props = useStore((state)=>state["landing"]["Image98"]);
const Image98IoProps = useIoStore((state)=>state["landing"]["Image98"]);
const Image98Cb = useImage98Cb()
const Image99Props = useStore((state)=>state["landing"]["Image99"]);
const Image99IoProps = useIoStore((state)=>state["landing"]["Image99"]);
const Image99Cb = useImage99Cb()
const Image100Props = useStore((state)=>state["landing"]["Image100"]);
const Image100IoProps = useIoStore((state)=>state["landing"]["Image100"]);
const Image100Cb = useImage100Cb()
const Image101Props = useStore((state)=>state["landing"]["Image101"]);
const Image101IoProps = useIoStore((state)=>state["landing"]["Image101"]);
const Image101Cb = useImage101Cb()

  return (<>
  <Flex1 className="p-landing Flex258 bpt" {...Flex258Props} {...Flex258Cb} {...Flex258IoProps}>
<Flex1 className="p-landing Flex259 bpt" {...Flex259Props} {...Flex259Cb} {...Flex259IoProps}>
<TextBox1 className="p-landing TextBox242 bpt" {...TextBox242Props} {...TextBox242Cb} {...TextBox242IoProps}/>
<Button1 className="p-landing Button34 bpt" {...Button34Props} {...Button34Cb} {...Button34IoProps}/>
</Flex1>
<Flex1 className="p-landing Flex260 bpt" {...Flex260Props} {...Flex260Cb} {...Flex260IoProps}>
<Image1 className="p-landing Image95 bpt" {...Image95Props} {...Image95Cb} {...Image95IoProps}/>
<Image1 className="p-landing Image97 bpt" {...Image97Props} {...Image97Cb} {...Image97IoProps}/>
<Flex1 className="p-landing Flex261 bpt" {...Flex261Props} {...Flex261Cb} {...Flex261IoProps}>
<Flex1 className="p-landing Flex262 bpt" {...Flex262Props} {...Flex262Cb} {...Flex262IoProps}>
<Image1 className="p-landing Image98 bpt" {...Image98Props} {...Image98Cb} {...Image98IoProps}/>
<Image1 className="p-landing Image99 bpt" {...Image99Props} {...Image99Cb} {...Image99IoProps}/>
</Flex1>
<Flex1 className="p-landing Flex263 bpt" {...Flex263Props} {...Flex263Cb} {...Flex263IoProps}>
<Image1 className="p-landing Image101 bpt" {...Image101Props} {...Image101Cb} {...Image101IoProps}/>
<Image1 className="p-landing Image100 bpt" {...Image100Props} {...Image100Cb} {...Image100IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
  </>);
}

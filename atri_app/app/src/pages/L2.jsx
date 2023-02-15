import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button as Button2 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Input as Input1 } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useFlex224Cb, useFlex225Cb, useFlex238Cb, useFlex239Cb, useFlex240Cb, useFlex226Cb, useFlex237Cb, useFlex233Cb, useFlex234Cb, useFlex227Cb, useFlex228Cb, useFlex235Cb, useFlex229Cb, useFlex230Cb, useFlex236Cb, useFlex231Cb, useFlex232Cb, useTextBox225Cb, useTextBox226Cb, useTextBox227Cb, useImage89Cb, useImage90Cb, useTextBox228Cb, useImage91Cb, useTextBox229Cb, useButton32Cb, useTextBox224Cb, useInput21Cb, useTextBox218Cb, useInput15Cb, useInput16Cb, useTextBox219Cb, useTextBox220Cb, useInput17Cb, useInput18Cb, useTextBox221Cb, useTextBox222Cb, useInput19Cb, useInput20Cb, useTextBox223Cb } from "../page-cbs/l2";
import "../page-css/l2.css";
import "../custom/l2";

export default function L2() {
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

  const Flex224Props = useStore((state)=>state["l2"]["Flex224"]);
const Flex224IoProps = useIoStore((state)=>state["l2"]["Flex224"]);
const Flex224Cb = useFlex224Cb()
const Flex225Props = useStore((state)=>state["l2"]["Flex225"]);
const Flex225IoProps = useIoStore((state)=>state["l2"]["Flex225"]);
const Flex225Cb = useFlex225Cb()
const Flex238Props = useStore((state)=>state["l2"]["Flex238"]);
const Flex238IoProps = useIoStore((state)=>state["l2"]["Flex238"]);
const Flex238Cb = useFlex238Cb()
const Flex239Props = useStore((state)=>state["l2"]["Flex239"]);
const Flex239IoProps = useIoStore((state)=>state["l2"]["Flex239"]);
const Flex239Cb = useFlex239Cb()
const Flex240Props = useStore((state)=>state["l2"]["Flex240"]);
const Flex240IoProps = useIoStore((state)=>state["l2"]["Flex240"]);
const Flex240Cb = useFlex240Cb()
const Flex226Props = useStore((state)=>state["l2"]["Flex226"]);
const Flex226IoProps = useIoStore((state)=>state["l2"]["Flex226"]);
const Flex226Cb = useFlex226Cb()
const Flex237Props = useStore((state)=>state["l2"]["Flex237"]);
const Flex237IoProps = useIoStore((state)=>state["l2"]["Flex237"]);
const Flex237Cb = useFlex237Cb()
const Flex233Props = useStore((state)=>state["l2"]["Flex233"]);
const Flex233IoProps = useIoStore((state)=>state["l2"]["Flex233"]);
const Flex233Cb = useFlex233Cb()
const Flex234Props = useStore((state)=>state["l2"]["Flex234"]);
const Flex234IoProps = useIoStore((state)=>state["l2"]["Flex234"]);
const Flex234Cb = useFlex234Cb()
const Flex227Props = useStore((state)=>state["l2"]["Flex227"]);
const Flex227IoProps = useIoStore((state)=>state["l2"]["Flex227"]);
const Flex227Cb = useFlex227Cb()
const Flex228Props = useStore((state)=>state["l2"]["Flex228"]);
const Flex228IoProps = useIoStore((state)=>state["l2"]["Flex228"]);
const Flex228Cb = useFlex228Cb()
const Flex235Props = useStore((state)=>state["l2"]["Flex235"]);
const Flex235IoProps = useIoStore((state)=>state["l2"]["Flex235"]);
const Flex235Cb = useFlex235Cb()
const Flex229Props = useStore((state)=>state["l2"]["Flex229"]);
const Flex229IoProps = useIoStore((state)=>state["l2"]["Flex229"]);
const Flex229Cb = useFlex229Cb()
const Flex230Props = useStore((state)=>state["l2"]["Flex230"]);
const Flex230IoProps = useIoStore((state)=>state["l2"]["Flex230"]);
const Flex230Cb = useFlex230Cb()
const Flex236Props = useStore((state)=>state["l2"]["Flex236"]);
const Flex236IoProps = useIoStore((state)=>state["l2"]["Flex236"]);
const Flex236Cb = useFlex236Cb()
const Flex231Props = useStore((state)=>state["l2"]["Flex231"]);
const Flex231IoProps = useIoStore((state)=>state["l2"]["Flex231"]);
const Flex231Cb = useFlex231Cb()
const Flex232Props = useStore((state)=>state["l2"]["Flex232"]);
const Flex232IoProps = useIoStore((state)=>state["l2"]["Flex232"]);
const Flex232Cb = useFlex232Cb()
const TextBox225Props = useStore((state)=>state["l2"]["TextBox225"]);
const TextBox225IoProps = useIoStore((state)=>state["l2"]["TextBox225"]);
const TextBox225Cb = useTextBox225Cb()
const TextBox226Props = useStore((state)=>state["l2"]["TextBox226"]);
const TextBox226IoProps = useIoStore((state)=>state["l2"]["TextBox226"]);
const TextBox226Cb = useTextBox226Cb()
const TextBox227Props = useStore((state)=>state["l2"]["TextBox227"]);
const TextBox227IoProps = useIoStore((state)=>state["l2"]["TextBox227"]);
const TextBox227Cb = useTextBox227Cb()
const Image89Props = useStore((state)=>state["l2"]["Image89"]);
const Image89IoProps = useIoStore((state)=>state["l2"]["Image89"]);
const Image89Cb = useImage89Cb()
const Image90Props = useStore((state)=>state["l2"]["Image90"]);
const Image90IoProps = useIoStore((state)=>state["l2"]["Image90"]);
const Image90Cb = useImage90Cb()
const TextBox228Props = useStore((state)=>state["l2"]["TextBox228"]);
const TextBox228IoProps = useIoStore((state)=>state["l2"]["TextBox228"]);
const TextBox228Cb = useTextBox228Cb()
const Image91Props = useStore((state)=>state["l2"]["Image91"]);
const Image91IoProps = useIoStore((state)=>state["l2"]["Image91"]);
const Image91Cb = useImage91Cb()
const TextBox229Props = useStore((state)=>state["l2"]["TextBox229"]);
const TextBox229IoProps = useIoStore((state)=>state["l2"]["TextBox229"]);
const TextBox229Cb = useTextBox229Cb()
const Button32Props = useStore((state)=>state["l2"]["Button32"]);
const Button32IoProps = useIoStore((state)=>state["l2"]["Button32"]);
const Button32Cb = useButton32Cb()
const TextBox224Props = useStore((state)=>state["l2"]["TextBox224"]);
const TextBox224IoProps = useIoStore((state)=>state["l2"]["TextBox224"]);
const TextBox224Cb = useTextBox224Cb()
const Input21Props = useStore((state)=>state["l2"]["Input21"]);
const Input21IoProps = useIoStore((state)=>state["l2"]["Input21"]);
const Input21Cb = useInput21Cb()
const TextBox218Props = useStore((state)=>state["l2"]["TextBox218"]);
const TextBox218IoProps = useIoStore((state)=>state["l2"]["TextBox218"]);
const TextBox218Cb = useTextBox218Cb()
const Input15Props = useStore((state)=>state["l2"]["Input15"]);
const Input15IoProps = useIoStore((state)=>state["l2"]["Input15"]);
const Input15Cb = useInput15Cb()
const Input16Props = useStore((state)=>state["l2"]["Input16"]);
const Input16IoProps = useIoStore((state)=>state["l2"]["Input16"]);
const Input16Cb = useInput16Cb()
const TextBox219Props = useStore((state)=>state["l2"]["TextBox219"]);
const TextBox219IoProps = useIoStore((state)=>state["l2"]["TextBox219"]);
const TextBox219Cb = useTextBox219Cb()
const TextBox220Props = useStore((state)=>state["l2"]["TextBox220"]);
const TextBox220IoProps = useIoStore((state)=>state["l2"]["TextBox220"]);
const TextBox220Cb = useTextBox220Cb()
const Input17Props = useStore((state)=>state["l2"]["Input17"]);
const Input17IoProps = useIoStore((state)=>state["l2"]["Input17"]);
const Input17Cb = useInput17Cb()
const Input18Props = useStore((state)=>state["l2"]["Input18"]);
const Input18IoProps = useIoStore((state)=>state["l2"]["Input18"]);
const Input18Cb = useInput18Cb()
const TextBox221Props = useStore((state)=>state["l2"]["TextBox221"]);
const TextBox221IoProps = useIoStore((state)=>state["l2"]["TextBox221"]);
const TextBox221Cb = useTextBox221Cb()
const TextBox222Props = useStore((state)=>state["l2"]["TextBox222"]);
const TextBox222IoProps = useIoStore((state)=>state["l2"]["TextBox222"]);
const TextBox222Cb = useTextBox222Cb()
const Input19Props = useStore((state)=>state["l2"]["Input19"]);
const Input19IoProps = useIoStore((state)=>state["l2"]["Input19"]);
const Input19Cb = useInput19Cb()
const Input20Props = useStore((state)=>state["l2"]["Input20"]);
const Input20IoProps = useIoStore((state)=>state["l2"]["Input20"]);
const Input20Cb = useInput20Cb()
const TextBox223Props = useStore((state)=>state["l2"]["TextBox223"]);
const TextBox223IoProps = useIoStore((state)=>state["l2"]["TextBox223"]);
const TextBox223Cb = useTextBox223Cb()

  return (<>
  <Flex2 className="p-l2 Flex224 bpt" {...Flex224Props} {...Flex224Cb} {...Flex224IoProps}>
<Flex2 className="p-l2 Flex225 bpt" {...Flex225Props} {...Flex225Cb} {...Flex225IoProps}>
<TextBox2 className="p-l2 TextBox225 bpt" {...TextBox225Props} {...TextBox225Cb} {...TextBox225IoProps}/>
<TextBox2 className="p-l2 TextBox226 bpt" {...TextBox226Props} {...TextBox226Cb} {...TextBox226IoProps}/>
<Flex2 className="p-l2 Flex238 bpt" {...Flex238Props} {...Flex238Cb} {...Flex238IoProps}>
<Image2 className="p-l2 Image89 bpt" {...Image89Props} {...Image89Cb} {...Image89IoProps}/>
<TextBox2 className="p-l2 TextBox227 bpt" {...TextBox227Props} {...TextBox227Cb} {...TextBox227IoProps}/>
</Flex2>
<Flex2 className="p-l2 Flex239 bpt" {...Flex239Props} {...Flex239Cb} {...Flex239IoProps}>
<Image2 className="p-l2 Image90 bpt" {...Image90Props} {...Image90Cb} {...Image90IoProps}/>
<TextBox2 className="p-l2 TextBox228 bpt" {...TextBox228Props} {...TextBox228Cb} {...TextBox228IoProps}/>
</Flex2>
<Flex2 className="p-l2 Flex240 bpt" {...Flex240Props} {...Flex240Cb} {...Flex240IoProps}>
<Image2 className="p-l2 Image91 bpt" {...Image91Props} {...Image91Cb} {...Image91IoProps}/>
<TextBox2 className="p-l2 TextBox229 bpt" {...TextBox229Props} {...TextBox229Cb} {...TextBox229IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-l2 Flex226 bpt" {...Flex226Props} {...Flex226Cb} {...Flex226IoProps}>
<Flex2 className="p-l2 Flex237 bpt" {...Flex237Props} {...Flex237Cb} {...Flex237IoProps}>
<Flex2 className="p-l2 Flex234 bpt" {...Flex234Props} {...Flex234Cb} {...Flex234IoProps}>
<Flex2 className="p-l2 Flex227 bpt" {...Flex227Props} {...Flex227Cb} {...Flex227IoProps}>
<TextBox2 className="p-l2 TextBox218 bpt" {...TextBox218Props} {...TextBox218Cb} {...TextBox218IoProps}/>
<Input1 className="p-l2 Input15 bpt" {...Input15Props} {...Input15Cb} {...Input15IoProps}/>
</Flex2>
<Flex2 className="p-l2 Flex228 bpt" {...Flex228Props} {...Flex228Cb} {...Flex228IoProps}>
<TextBox2 className="p-l2 TextBox219 bpt" {...TextBox219Props} {...TextBox219Cb} {...TextBox219IoProps}/>
<Input1 className="p-l2 Input16 bpt" {...Input16Props} {...Input16Cb} {...Input16IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-l2 Flex235 bpt" {...Flex235Props} {...Flex235Cb} {...Flex235IoProps}>
<Flex2 className="p-l2 Flex229 bpt" {...Flex229Props} {...Flex229Cb} {...Flex229IoProps}>
<TextBox2 className="p-l2 TextBox220 bpt" {...TextBox220Props} {...TextBox220Cb} {...TextBox220IoProps}/>
<Input1 className="p-l2 Input17 bpt" {...Input17Props} {...Input17Cb} {...Input17IoProps}/>
</Flex2>
<Flex2 className="p-l2 Flex230 bpt" {...Flex230Props} {...Flex230Cb} {...Flex230IoProps}>
<TextBox2 className="p-l2 TextBox221 bpt" {...TextBox221Props} {...TextBox221Cb} {...TextBox221IoProps}/>
<Input1 className="p-l2 Input18 bpt" {...Input18Props} {...Input18Cb} {...Input18IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-l2 Flex236 bpt" {...Flex236Props} {...Flex236Cb} {...Flex236IoProps}>
<Flex2 className="p-l2 Flex232 bpt" {...Flex232Props} {...Flex232Cb} {...Flex232IoProps}>
<TextBox2 className="p-l2 TextBox223 bpt" {...TextBox223Props} {...TextBox223Cb} {...TextBox223IoProps}/>
<Input1 className="p-l2 Input20 bpt" {...Input20Props} {...Input20Cb} {...Input20IoProps}/>
</Flex2>
<Flex2 className="p-l2 Flex231 bpt" {...Flex231Props} {...Flex231Cb} {...Flex231IoProps}>
<TextBox2 className="p-l2 TextBox222 bpt" {...TextBox222Props} {...TextBox222Cb} {...TextBox222IoProps}/>
<Input1 className="p-l2 Input19 bpt" {...Input19Props} {...Input19Cb} {...Input19IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-l2 Flex233 bpt" {...Flex233Props} {...Flex233Cb} {...Flex233IoProps}>
<TextBox2 className="p-l2 TextBox224 bpt" {...TextBox224Props} {...TextBox224Cb} {...TextBox224IoProps}/>
<Input1 className="p-l2 Input21 bpt" {...Input21Props} {...Input21Cb} {...Input21IoProps}/>
</Flex2>
<Button2 className="p-l2 Button32 bpt" {...Button32Props} {...Button32Cb} {...Button32IoProps}/>
</Flex2>
</Flex2>
</Flex2>
  </>);
}

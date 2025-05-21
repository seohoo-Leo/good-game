
import { create } from "zustand";
import { DiWindows } from "react-icons/di";
import { FaPlaystation } from "react-icons/fa";
import { TbBrandXbox } from "react-icons/tb";
import { SiNintendoswitch } from "react-icons/si";
import { PiAppleLogoBold } from "react-icons/pi";
import { ImAndroid } from "react-icons/im";
import { IconType } from "react-icons";

type PlatformsIconMap = {
  [key: number]: IconType;
};

const platformsIconMap: PlatformsIconMap = {
  4: DiWindows,         // PC
  18: FaPlaystation,    // PlayStation
  187: FaPlaystation,    // PlayStation 5
  1: TbBrandXbox,       // Xbox
  186: TbBrandXbox,     // Xbox Series S/X
  7: SiNintendoswitch,  // Nintendo Switch
  3: PiAppleLogoBold,   // iOS
  21: ImAndroid,        // Android
};

interface PlatformsStore {
  platformId: number;
  setPlatformId: (id: number) => void;
  getPlatformIconComponent: (id: number) => IconType | undefined;
}

export const usePlatformsInfo = create<PlatformsStore>((set) => ({
  platformId: 0,
  setPlatformId: (id) => set({ platformId: id }),

  getPlatformIconComponent: (id) => platformsIconMap[id],
}));
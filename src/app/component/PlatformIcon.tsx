import { usePlatformsInfo } from "../../../store//usePlatformsInfo"

const PlatformIcon = ({ id }: { id: number }) => {
  const getPlatformIconComponent = usePlatformsInfo((state) => state.getPlatformIconComponent);
  const Icon = getPlatformIconComponent(id);

  return Icon ? <Icon size={24} className="text-black-700" /> : null;
};

export default PlatformIcon
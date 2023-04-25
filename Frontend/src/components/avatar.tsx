import { identicon } from "minidenticons";
import { useMemo } from "react";

type AvatarProps = {
  username: string;
  saturation?: number;
  lightness?: number;
  className?: string;
};

export const IdenticonImg = ({ className, username, saturation, lightness, ...props }: AvatarProps) => {
  const svgURI = useMemo(
    () => "data:image/svg+xml;utf8," + encodeURIComponent(identicon(username, saturation, lightness)),
    [username, saturation, lightness]
  );
  return <img className={className} src={svgURI} alt={username} {...props} />;
};

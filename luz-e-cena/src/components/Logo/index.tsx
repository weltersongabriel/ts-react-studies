import React from "react";

const Logo = ({ ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return <img {...props} />;
};

export default Logo;
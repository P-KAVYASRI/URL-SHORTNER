import * as React from 'react';

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className="bg-slate-900 text-white text-sm text-center py-2">
      Copyright &#169; URL SHORTNER | KAVYA SRI
    </div>
  );
};

export default Footer;
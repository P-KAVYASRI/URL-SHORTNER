import * as React from 'react';

export interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <div className="bg-slate-900">
      <div className="container mx-auto p-2">
        <nav className="py-5">
          <div className="text-base text-white font-semibold">
            URLShortner
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
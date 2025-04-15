import React from 'react';

type Props = {
    textLoad: string;
};

export function LoadingPage({textLoad}: Props) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-slate-800 opacity-75 z-50">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      <p className="mt-4 text-lg font-semibold text-white">{textLoad}</p>
    </div>
  );
}
